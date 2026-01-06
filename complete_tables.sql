// (Table No - 1) Translation Table    
============================================================================================

create table public.app_translations (
  translation_id uuid not null default extensions.uuid_generate_v4 (),
  key character varying(255) not null,
  language_code character varying(10) not null,
  translated_text text not null,
  created_at timestamp with time zone null default CURRENT_TIMESTAMP,
  updated_at timestamp with time zone null default CURRENT_TIMESTAMP,
  constraint app_translations_pkey primary key (translation_id),
  constraint app_translations_key_language_code_key unique (key, language_code)
) TABLESPACE pg_default;

============================================================================================

// (Table No - 2) Appointment Table
create table public.appointments (
  aid uuid not null default extensions.uuid_generate_v4 (),
  pid uuid not null,
  did uuid not null,
  mode character varying(20) not null,
  status character varying(20) not null default 'scheduled'::character varying,
  scheduled_date date not null,
  scheduled_time time without time zone not null,
  start_time timestamp with time zone null,
  end_time timestamp with time zone null,
  duration_minutes integer null,
  token_number integer null,
  queue_position integer null,
  estimated_wait_minutes integer null,
  meeting_link text null,
  meeting_id character varying(255) null,
  meeting_password character varying(100) null,
  chief_complaint text not null,
  symptoms text[] null,
  doctor_notes text null,
  cancellation_reason text null,
  cancelled_by uuid null,
  cancelled_at timestamp with time zone null,
  created_at timestamp with time zone null default CURRENT_TIMESTAMP,
  updated_at timestamp with time zone null default CURRENT_TIMESTAMP,
  constraint appointments_pkey primary key (aid),
  constraint appointment_mode_check check (
    (
      (
        ((mode)::text = 'offline'::text)
        and (
          (token_number is not null)
          or ((status)::text = 'cancelled'::text)
        )
      )
      or (
        ((mode)::text = 'online'::text)
        and (
          (meeting_link is not null)
          or (
            (status)::text = any (
              array[
                ('cancelled'::character varying)::text,
                ('scheduled'::character varying)::text,
                ('confirmed'::character varying)::text,
                ('rescheduled'::character varying)::text
              ]
            )
          )
        )
      )
      or (
        (mode)::text <> all (
          array[
            ('online'::character varying)::text,
            ('offline'::character varying)::text
          ]
        )
      )
    )
  ),
  constraint appointments_mode_check check (
    (
      (mode)::text = any (
        array[
          ('online'::character varying)::text,
          ('offline'::character varying)::text
        ]
      )
    )
  ),
  constraint appointments_status_check check (
    (
      (status)::text = any (
        array[
          ('scheduled'::character varying)::text,
          ('confirmed'::character varying)::text,
          ('rescheduled'::character varying)::text,
          ('in_progress'::character varying)::text,
          ('completed'::character varying)::text,
          ('cancelled'::character varying)::text
        ]
      )
    )
  )
) TABLESPACE pg_default;

create index IF not exists idx_appointments_pid on public.appointments using btree (pid) TABLESPACE pg_default;

create index IF not exists idx_appointments_did on public.appointments using btree (did) TABLESPACE pg_default;

create index IF not exists idx_appointments_date on public.appointments using btree (scheduled_date) TABLESPACE pg_default;

create index IF not exists idx_appointments_status on public.appointments using btree (status) TABLESPACE pg_default;

create index IF not exists idx_appointments_mode on public.appointments using btree (mode) TABLESPACE pg_default;

create trigger generate_token_number_trigger BEFORE INSERT on appointments for EACH row
execute FUNCTION generate_token_number ();

create trigger update_appointments_updated_at BEFORE
update on appointments for EACH row
execute FUNCTION update_updated_at_column ();

================================================================================================


// (Table No - 3) Docters Table

create table public.doctors (
  did uuid not null default extensions.uuid_generate_v4 (),
  uid uuid not null,
  specialization character varying(255) not null default 'General Medicine'::character varying,
  qualification text not null default 'MBBS'::text,
  registration_number character varying(100) null,
  years_of_experience integer null default 0,
  consultation_fee numeric(10, 2) null default 0,
  bio text null,
  clinic_name character varying(255) null,
  address_line1 character varying(255) null,
  address_line2 character varying(255) null,
  city character varying(100) null,
  state character varying(100) null,
  country character varying(100) null default 'India'::character varying,
  postal_code character varying(20) null,
  languages text[] null,
  is_verified boolean null default false,
  created_at timestamp with time zone null default CURRENT_TIMESTAMP,
  updated_at timestamp with time zone null default CURRENT_TIMESTAMP,
  treated_patient_uids uuid[] null default '{}'::uuid[],
  constraint doctors_pkey primary key (did),
  constraint doctors_registration_number_key unique (registration_number),
  constraint doctors_uid_key unique (uid),
  constraint doctors_uid_fkey foreign KEY (uid) references users (uid) on delete CASCADE,
  constraint fk_doctors_user foreign KEY (uid) references users (uid) on delete CASCADE deferrable initially DEFERRED
) TABLESPACE pg_default;

create index IF not exists idx_doctors_treated_patients on public.doctors using gin (treated_patient_uids) TABLESPACE pg_default;

create index IF not exists idx_doctors_uid on public.doctors using btree (uid) TABLESPACE pg_default;

create index IF not exists idx_doctors_specialization on public.doctors using btree (specialization) TABLESPACE pg_default;

create trigger update_doctors_updated_at BEFORE
update on doctors for EACH row
execute FUNCTION update_updated_at_column ();

================================================================================================

// (Table No - 5) Medication table

create table public.medication_adherence (
  adherence_id uuid not null default extensions.uuid_generate_v4 (),
  prescription_id uuid not null,
  pid uuid not null,
  medicine_name character varying(255) not null,
  scheduled_date date not null,
  scheduled_time time without time zone not null,
  taken_at timestamp with time zone null,
  is_taken boolean null default false,
  is_skipped boolean null default false,
  skip_reason text null,
  synced boolean null default false,
  device_timestamp timestamp with time zone null,
  created_at timestamp with time zone null default CURRENT_TIMESTAMP,
  updated_at timestamp with time zone null default CURRENT_TIMESTAMP,
  constraint medication_adherence_pkey primary key (adherence_id),
  constraint medication_adherence_prescription_id_medicine_name_schedule_key unique (
    prescription_id,
    medicine_name,
    scheduled_date,
    scheduled_time
  ),
  constraint medication_adherence_prescription_id_fkey foreign KEY (prescription_id) references prescriptions (prescription_id) on delete CASCADE
) TABLESPACE pg_default;

create index IF not exists idx_adherence_prescription on public.medication_adherence using btree (prescription_id) TABLESPACE pg_default;

create index IF not exists idx_adherence_pid on public.medication_adherence using btree (pid) TABLESPACE pg_default;

create index IF not exists idx_adherence_date on public.medication_adherence using btree (scheduled_date) TABLESPACE pg_default;

create index IF not exists idx_adherence_synced on public.medication_adherence using btree (synced) TABLESPACE pg_default;

==================================================================================================================

// (Table No - 6) Patient Table

create table public.patients (
  pid uuid not null default extensions.uuid_generate_v4 (),
  uid uuid not null,
  date_of_birth date null,
  gender character varying(20) null,
  blood_group character varying(5) null,
  allergies text[] null,
  current_medications text[] null,
  chronic_conditions text[] null,
  address_line1 character varying(255) null,
  address_line2 character varying(255) null,
  city character varying(100) null,
  state character varying(100) null,
  country character varying(100) null default 'India'::character varying,
  postal_code character varying(20) null,
  emergency_contact_name character varying(255) null,
  emergency_contact_phone character varying(20) null,
  created_at timestamp with time zone null default CURRENT_TIMESTAMP,
  updated_at timestamp with time zone null default CURRENT_TIMESTAMP,
  connected_doctor_uids uuid[] null default '{}'::uuid[],
  constraint patients_pkey primary key (pid),
  constraint patients_uid_key unique (uid),
  constraint fk_patients_user foreign KEY (uid) references users (uid) on delete CASCADE deferrable initially DEFERRED,
  constraint patients_gender_check check (
    (
      (gender)::text = any (
        array[
          ('male'::character varying)::text,
          ('female'::character varying)::text,
          ('other'::character varying)::text,
          ('prefer_not_to_say'::character varying)::text
        ]
      )
    )
  )
) TABLESPACE pg_default;

create index IF not exists idx_patients_connected_doctors on public.patients using gin (connected_doctor_uids) TABLESPACE pg_default;

create index IF not exists idx_patients_uid on public.patients using btree (uid) TABLESPACE pg_default;

create trigger update_patients_updated_at BEFORE
update on patients for EACH row
execute FUNCTION update_updated_at_column ();

================================================================================================

// (Table No - 7) Prescriptions Table

create table public.prescriptions (
  prescription_id uuid not null default extensions.uuid_generate_v4 (),
  aid uuid not null,
  pid uuid not null,
  did uuid not null,
  diagnosis text not null,
  symptoms text[] null,
  medicines jsonb not null,
  instructions text null,
  diet_advice text null,
  follow_up_date date null,
  follow_up_notes text null,
  ai_generated boolean null default false,
  ai_suggestions jsonb null,
  is_active boolean null default true,
  created_at timestamp with time zone null default CURRENT_TIMESTAMP,
  updated_at timestamp with time zone null default CURRENT_TIMESTAMP,
  constraint prescriptions_pkey primary key (prescription_id)
) TABLESPACE pg_default;

create index IF not exists idx_prescriptions_aid on public.prescriptions using btree (aid) TABLESPACE pg_default;

create index IF not exists idx_prescriptions_pid on public.prescriptions using btree (pid) TABLESPACE pg_default;

create index IF not exists idx_prescriptions_did on public.prescriptions using btree (did) TABLESPACE pg_default;

create index IF not exists idx_prescriptions_active on public.prescriptions using btree (is_active) TABLESPACE pg_default;

create trigger update_prescriptions_updated_at BEFORE
update on prescriptions for EACH row
execute FUNCTION update_updated_at_column ();

================================================================================================

// (Table No - 8) Receipts Table

create table public.receipts (
  receipt_id uuid not null default extensions.uuid_generate_v4 (),
  transaction_id uuid not null,
  receipt_number character varying(50) not null,
  receipt_date date not null default CURRENT_DATE,
  pid uuid not null,
  did uuid not null,
  patient_name character varying(255) not null,
  doctor_name character varying(255) not null,
  consultation_fee numeric(10, 2) not null,
  tax_amount numeric(10, 2) null default 0,
  discount_amount numeric(10, 2) null default 0,
  total_amount numeric(10, 2) not null,
  payment_method character varying(30) null,
  razorpay_payment_id character varying(255) null,
  generated_at timestamp with time zone null default CURRENT_TIMESTAMP,
  constraint receipts_pkey primary key (receipt_id),
  constraint receipts_receipt_number_key unique (receipt_number),
  constraint receipts_transaction_id_fkey foreign KEY (transaction_id) references finance_transactions (transaction_id) on delete CASCADE
) TABLESPACE pg_default;

create trigger generate_receipt_number_trigger BEFORE INSERT on receipts for EACH row
execute FUNCTION generate_receipt_number ();

================================================================================================

// (Table No - 9) Sync queue table

create table public.sync_queue (
  sync_id uuid not null default extensions.uuid_generate_v4 (),
  user_id uuid not null,
  entity_type character varying(50) not null,
  entity_id uuid not null,
  operation character varying(20) not null,
  data jsonb not null,
  status character varying(20) null default 'pending'::character varying,
  retry_count integer null default 0,
  error_message text null,
  device_timestamp timestamp with time zone not null,
  synced_at timestamp with time zone null,
  created_at timestamp with time zone null default CURRENT_TIMESTAMP,
  constraint sync_queue_pkey primary key (sync_id),
  constraint sync_queue_operation_check check (
    (
      (operation)::text = any (
        (
          array[
            'create'::character varying,
            'update'::character varying,
            'delete'::character varying
          ]
        )::text[]
      )
    )
  ),
  constraint sync_queue_status_check check (
    (
      (status)::text = any (
        (
          array[
            'pending'::character varying,
            'synced'::character varying,
            'failed'::character varying
          ]
        )::text[]
      )
    )
  )
) TABLESPACE pg_default;

create index IF not exists idx_sync_user on public.sync_queue using btree (user_id) TABLESPACE pg_default;

create index IF not exists idx_sync_status on public.sync_queue using btree (status) TABLESPACE pg_default;


================================================================================================


// (Table No - 10) Users table

create table public.users (
  uid uuid not null default extensions.uuid_generate_v4 (),
  email character varying(255) not null,
  phone character varying(20) null,
  password_hash text null,
  role character varying(20) not null,
  name character varying(255) not null,
  profile_image_url text null,
  is_verified boolean null default false,
  is_active boolean null default true,
  created_at timestamp with time zone null default CURRENT_TIMESTAMP,
  updated_at timestamp with time zone null default CURRENT_TIMESTAMP,
  last_login timestamp with time zone null,
  auth_id text null,
  constraint users_pkey primary key (uid),
  constraint users_auth_id_key unique (auth_id),
  constraint users_email_key unique (email),
  constraint users_phone_key unique (phone),
  constraint users_role_check check (
    (
      (role)::text = any (
        array[
          ('patient'::character varying)::text,
          ('doctor'::character varying)::text,
          ('admin'::character varying)::text
        ]
      )
    )
  )
) TABLESPACE pg_default;

create index IF not exists idx_users_auth_id on public.users using btree (auth_id) TABLESPACE pg_default;

create index IF not exists idx_users_email on public.users using btree (email) TABLESPACE pg_default;

create index IF not exists idx_users_phone on public.users using btree (phone) TABLESPACE pg_default;

create index IF not exists idx_users_role on public.users using btree (role) TABLESPACE pg_default;

create trigger sync_user_role_on_insert
after INSERT on users for EACH row
execute FUNCTION sync_user_role_tables ();

create trigger sync_user_role_on_update
after
update OF role on users for EACH row when (old.role::text is distinct from new.role::text)
execute FUNCTION sync_user_role_tables ();

create trigger trigger_auto_insert_user_role
after INSERT on users for EACH row
execute FUNCTION auto_insert_user_role ();

create trigger update_users_updated_at BEFORE
update on users for EACH row
execute FUNCTION update_updated_at_column ();