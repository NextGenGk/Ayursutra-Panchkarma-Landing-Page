import { Calendar, Clock, User, MapPin, Phone, Plus } from "lucide-react"

export default function AppointmentsPage() {
  const appointments = [
    {
      id: 1,
      patient: "John Doe",
      doctor: "Dr. Sarah Wilson",
      time: "10:00 AM",
      date: "2024-01-15",
      type: "Consultation",
      status: "Confirmed",
      location: "Room 101"
    },
    {
      id: 2,
      patient: "Jane Smith",
      doctor: "Dr. James Brown",
      time: "2:30 PM",
      date: "2024-01-15",
      type: "Follow-up",
      status: "Pending",
      location: "Room 203"
    },
    {
      id: 3,
      patient: "Mike Johnson",
      doctor: "Dr. Sarah Wilson",
      time: "4:00 PM",
      date: "2024-01-15",
      type: "Treatment",
      status: "In Progress",
      location: "Treatment Room A"
    },
    {
      id: 4,
      patient: "Emily Davis",
      doctor: "Dr. James Brown",
      time: "9:00 AM",
      date: "2024-01-16",
      type: "Consultation",
      status: "Scheduled",
      location: "Room 105"
    }
  ]

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