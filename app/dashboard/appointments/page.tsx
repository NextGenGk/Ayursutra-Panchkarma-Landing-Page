import { Calendar, Clock, User, MapPin, Phone, Plus } from "lucide-react"

import { getAllAppointments } from "@/app/actions/appointment"

export default async function AppointmentsPage() {
  const { data: dbAppointments } = await getAllAppointments()

  const demoAppointments = [
    {
      id: 1,
      patient: "John Doe",
      doctor: "Dr. Sarah Wilson",
      time: "10:00 AM",
      date: "2024-01-15",
      type: "Consultation",
      status: "Confirmed",
      location: "Room 101",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=64&h=64&fit=crop&crop=faces"
    },
    {
      id: 2,
      patient: "Jane Smith",
      doctor: "Dr. James Brown",
      time: "2:30 PM",
      date: "2024-01-15",
      type: "Follow-up",
      status: "Pending",
      location: "Room 203",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces"
    },
    {
      id: 3,
      patient: "Mike Johnson",
      doctor: "Dr. Sarah Wilson",
      time: "4:00 PM",
      date: "2024-01-15",
      type: "Treatment",
      status: "In Progress",
      location: "Treatment Room A",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop&crop=faces"
    },
    {
      id: 4,
      patient: "Emily Davis",
      doctor: "Dr. James Brown",
      time: "9:00 AM",
      date: "2024-01-16",
      type: "Consultation",
      status: "Scheduled",
      location: "Room 105",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=faces"
    }
  ]

  interface DBAppointment {
    aid: number;
    pid: string;
    did: string;
    scheduled_time: string;
    scheduled_date: string;
    mode: string;
    status: string;
  }

  const mappedRealAppointments = dbAppointments?.map((apt: DBAppointment) => ({
    id: apt.aid,
    patient: `Patient ${apt.pid?.slice(0, 4)}...`, // Placeholder until we have joins
    doctor: `Dr. ${apt.did?.slice(0, 4)}...`, // Placeholder until we have joins
    time: apt.scheduled_time?.slice(0, 5) || "00:00",
    date: apt.scheduled_date,
    type: apt.mode === 'online' ? 'Online Consultation' : 'In-Person Visit',
    status: apt.status.charAt(0).toUpperCase() + apt.status.slice(1),
    location: apt.mode === 'online' ? 'Video Call' : 'Clinic',
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=64&h=64&fit=crop&crop=faces" // Generic placeholder
  })) || []

  // Combine real appointments with demo appointments (prioritizing real ones)
  const appointments = [...mappedRealAppointments, ...demoAppointments]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-green-100 text-green-800'
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'In Progress':
        return 'bg-blue-100 text-blue-800'
      case 'Scheduled':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Appointments</h2>
          <p className="text-muted-foreground">
            Manage and schedule patient appointments
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
          <Plus className="h-4 w-4" />
          New Appointment
        </button>
      </div>

      {/* Appointment Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            <div>
              <p className="text-sm font-medium">Today&apos;s Appointments</p>
              <p className="text-2xl font-bold">12</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-green-600" />
            <div>
              <p className="text-sm font-medium">Pending</p>
              <p className="text-2xl font-bold">3</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-purple-600" />
            <div>
              <p className="text-sm font-medium">Confirmed</p>
              <p className="text-2xl font-bold">8</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-orange-600" />
            <div>
              <p className="text-sm font-medium">Completed</p>
              <p className="text-2xl font-bold">1</p>
            </div>
          </div>
        </div>
      </div>

      {/* Appointments List */}
      <div className="rounded-lg border bg-card shadow-sm">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">Upcoming Appointments</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center justify-center w-16 h-16 bg-primary/10 rounded-lg">
                    <span className="text-xs font-medium text-primary">
                      {appointment.date.split('-')[2]}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(appointment.date).toLocaleDateString('en-US', { month: 'short' })}
                    </span>
                  </div>
                  <img 
                    src={appointment.image} 
                    alt={appointment.patient} 
                    className="h-12 w-12 rounded-full object-cover border border-border"
                  />
                  <div>
                    <h4 className="font-semibold">{appointment.patient}</h4>
                    <p className="text-sm text-muted-foreground">with {appointment.doctor}</p>
                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {appointment.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {appointment.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium px-2 py-1 rounded bg-gray-100">
                    {appointment.type}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded ${getStatusColor(appointment.status)}`}>
                    {appointment.status}
                  </span>
                  <button className="p-2 hover:bg-accent rounded-md">
                    <Phone className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}