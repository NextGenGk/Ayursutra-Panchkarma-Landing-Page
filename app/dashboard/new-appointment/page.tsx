import { Calendar, Clock, User, Save, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NewAppointmentPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/appointments" className="p-2 hover:bg-accent rounded-md">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <h2 className="text-3xl font-bold tracking-tight">New Appointment</h2>
          <p className="text-muted-foreground">
            Schedule a new patient appointment
          </p>
        </div>
      </div>

      <div className="max-w-2xl">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <form className="space-y-6">
            {/* Patient Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <User className="h-5 w-5 text-blue-600" />
                Patient Information
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium">Patient Name</label>
                  <input 
                    type="text" 
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter patient name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Patient ID</label>
                  <input 
                    type="text" 
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter patient ID"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input 
                    type="email" 
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="patient@email.com"
                  />
                </div>
              </div>
            </div>

            {/* Appointment Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Calendar className="h-5 w-5 text-green-600" />
                Appointment Details
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium">Date</label>
                  <input 
                    type="date" 
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Time</label>
                  <input 
                    type="time" 
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Doctor</label>
                  <select className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select a doctor</option>
                    <option value="dr-wilson">Dr. Sarah Wilson</option>
                    <option value="dr-brown">Dr. James Brown</option>
                    <option value="dr-johnson">Dr. Michael Johnson</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Appointment Type</label>
                  <select className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select type</option>
                    <option value="consultation">Consultation</option>
                    <option value="follow-up">Follow-up</option>
                    <option value="treatment">Treatment</option>
                    <option value="emergency">Emergency</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Location</label>
                <select className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Select location</option>
                  <option value="room-101">Room 101</option>
                  <option value="room-203">Room 203</option>
                  <option value="room-105">Room 105</option>
                  <option value="treatment-a">Treatment Room A</option>
                </select>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Clock className="h-5 w-5 text-purple-600" />
                Additional Information
              </h3>
              <div>
                <label className="text-sm font-medium">Duration (minutes)</label>
                <select className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="30">30 minutes</option>
                  <option value="45">45 minutes</option>
                  <option value="60">1 hour</option>
                  <option value="90">1.5 hours</option>
                  <option value="120">2 hours</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Reason for Visit</label>
                <textarea 
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={3}
                  placeholder="Describe the reason for this appointment..."
                />
              </div>
              <div>
                <label className="text-sm font-medium">Special Instructions</label>
                <textarea 
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={2}
                  placeholder="Any special instructions or notes..."
                />
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex gap-3 pt-4">
              <button 
                type="submit"
                className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              >
                <Save className="h-4 w-4" />
                Schedule Appointment
              </button>
              <Link 
                href="/dashboard/appointments"
                className="px-6 py-2 border rounded-md hover:bg-accent transition-colors"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}