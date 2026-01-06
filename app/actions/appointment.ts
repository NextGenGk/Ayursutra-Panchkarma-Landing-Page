'use server'

import { createClient } from "@/lib/supabase/server"

export async function getAllAppointments() {
  const supabase = await createClient()

  if (!supabase) {
    return { success: false, error: 'Supabase credentials missing' }
  }
  
  try {
    const { data: appointments, error } = await supabase
      .from('appointments')
      .select('*')
      .order('scheduled_date', { ascending: true })
      .order('scheduled_time', { ascending: true })

    if (error) {
      console.error('Error fetching appointments:', error)
      return { success: false, error: error.message }
    }

    return { success: true, data: appointments }
  } catch (error) {
    console.error('Unexpected error:', error)
    return { success: false, error: 'An unexpected error occurred' }
  }
}
