import { Calendar, FileText, Pill, Heart, Clock, User } from "lucide-react"
import { LineChart, BarChart, PieChart, ProgressRing } from "@/components/ui/chart"
import { SimpleBarChart, SimpleLineChart, SimplePieChart, SimpleProgressRing } from "@/components/ui/simple-charts"

export default function PatientPage() {
  // Patient analytics data
  const healthTrends = [
    { name: 'Week 1', value: 72 },
    { name: 'Week 2', value: 75 },
    { name: 'Week 3', value: 78 },
    { name: 'Week 4', value: 82 },
    { name: 'Week 5', value: 85 },
    { name: 'Week 6', value: 87 }
  ]

  const medicationAdherence = [
    { name: 'Taken', value: 85, color: '#10b981' },
    { name: 'Missed', value: 10, color: '#f59e0b' },
    { name: 'Late', value: 5, color: '#ef4444' }
  ]

  const appointmentHistory = [
    { name: 'Consultation', value: 8 },
    { name: 'Follow-up', value: 12 },
    { name: 'Treatment', value: 6 },
    { name: 'Check-up', value: 4 }
  ]

  const patientStats = [
    {
      title: "Next Appointment",
      value: "Jan 20",
      change: "In 3 days",
      icon: Calendar,
      color: "text-blue-600"
    },
    {
      title: "Active Medications",
      value: "4",
      change: "2 new",
      icon: Pill,
      color: "text-green-600"
    },
    {
      title: "Health Score",
      value: "85%",
      change: "+5%",
      icon: Heart,
      color: "text-red-600"
    },
    {
      title: "Last Visit",
      value: "Jan 10",
      change: "7 days ago",
      icon: Clock,
      color: "text-purple-600"
    }
  ]

  const upcomingAppointments = [
    { date: "Jan 20, 2024", time: "10:00 AM", doctor: "Dr. Sarah Wilson", type: "Follow-up", status: "Confirmed" },
    { date: "Jan 25, 2024", time: "2:30 PM", doctor: "Dr. James Brown", type: "Consultation", status: "Pending" },
    { date: "Feb 1, 2024", time: "11:00 AM", doctor: "Dr. Sarah Wilson", type: "Treatment", status: "Scheduled" },
  ]

  const medications = [
    { name: "Ashwagandha", dosage: "500mg", frequency: "Twice daily", status: "Active" },
    { name: "Triphala", dosage: "1 tablet", frequency: "Before bed", status: "Active" },
    { name: "Turmeric", dosage: "250mg", frequency: "With meals", status: "Active" },
    { name: "Brahmi", dosage: "300mg", frequency: "Morning", status: "Completed" },
  ]

  const recentReports = [
    { name: "Blood Test Results", date: "Jan 15, 2024", doctor: "Dr. Sarah Wilson", status: "Normal" },
    { name: "X-Ray Report", date: "Jan 10, 2024", doctor: "Dr. James Brown", status: "Review Required" },
    { name: "Consultation Notes", date: "Jan 5, 2024", doctor: "Dr. Sarah Wilson", status: "Available" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Patient Portal</h2>
        <p className="text-muted-foreground">
          Track your health journey and manage your care
        </p>
      </div>

      {/* Patient Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {patientStats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-lg border bg-card p-6 shadow-sm"
          >
            <div className="flex items-center justify-between space-y-0 pb-2">
              <h3 className="text-sm font-medium">{stat.title}</h3>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.change}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Upcoming Appointments */}
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Upcoming Appointments</h3>
            <button className="text-sm text-primary hover:underline">
              Book New
            </button>
          </div>
          <div className="space-y-3">
            {upcomingAppointments.map((appointment, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                <div>
                  <p className="font-medium">{appointment.date} at {appointment.time}</p>
                  <p className="text-sm text-muted-foreground">{appointment.doctor} • {appointment.type}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded ${
                  appointment.status === 'Confirmed' 
                    ? 'bg-green-100 text-green-800'
                    : appointment.status === 'Pending'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {appointment.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Current Medications */}
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Current Medications</h3>
            <Pill className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="space-y-3">
            {medications.map((medication, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                <div>
                  <p className="font-medium">{medication.name}</p>
                  <p className="text-sm text-muted-foreground">{medication.dosage} • {medication.frequency}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded ${
                  medication.status === 'Active' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {medication.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Recent Reports & Documents</h3>
          <FileText className="h-5 w-5 text-muted-foreground" />
        </div>
        <div className="space-y-3">
          {recentReports.map((report, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-md">
              <div>
                <p className="font-medium">{report.name}</p>
                <p className="text-sm text-muted-foreground">{report.doctor} • {report.date}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`text-xs px-2 py-1 rounded ${
                  report.status === 'Normal' 
                    ? 'bg-green-100 text-green-800'
                    : report.status === 'Review Required'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {report.status}
                </span>
                <button className="text-sm text-primary hover:underline">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Health Tracking */}
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Health Tracking</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="text-center p-4 border rounded-md">
            <Heart className="h-8 w-8 mx-auto mb-2 text-red-600" />
            <p className="text-2xl font-bold">72</p>
            <p className="text-sm text-muted-foreground">Heart Rate (bpm)</p>
            <p className="text-xs text-green-600">Normal</p>
          </div>
          <div className="text-center p-4 border rounded-md">
            <div className="h-8 w-8 mx-auto mb-2 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              BP
            </div>
            <p className="text-2xl font-bold">120/80</p>
            <p className="text-sm text-muted-foreground">Blood Pressure</p>
            <p className="text-xs text-green-600">Normal</p>
          </div>
          <div className="text-center p-4 border rounded-md">
            <div className="h-8 w-8 mx-auto mb-2 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              W
            </div>
            <p className="text-2xl font-bold">68</p>
            <p className="text-sm text-muted-foreground">Weight (kg)</p>
            <p className="text-xs text-blue-600">Stable</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          <button className="p-4 text-left border rounded-md hover:bg-accent transition-colors text-foreground">
            <Calendar className="h-6 w-6 mb-2 text-blue-600" />
            <p className="font-medium text-foreground">Book Appointment</p>
            <p className="text-sm text-muted-foreground">Schedule your next visit</p>
          </button>
          <button className="p-4 text-left border rounded-md hover:bg-accent transition-colors text-foreground">
            <FileText className="h-6 w-6 mb-2 text-green-600" />
            <p className="font-medium text-foreground">View Reports</p>
            <p className="text-sm text-muted-foreground">Access medical reports</p>
          </button>
          <button className="p-4 text-left border rounded-md hover:bg-accent transition-colors text-foreground">
            <Pill className="h-6 w-6 mb-2 text-orange-600" />
            <p className="font-medium text-foreground">Medication Reminder</p>
            <p className="text-sm text-muted-foreground">Set medication alerts</p>
          </button>
          <button className="p-4 text-left border rounded-md hover:bg-accent transition-colors text-foreground">
            <User className="h-6 w-6 mb-2 text-purple-600" />
            <p className="font-medium text-foreground">Update Profile</p>
            <p className="text-sm text-muted-foreground">Manage personal info</p>
          </button>
        </div>
      </div>

      {/* Patient Analytics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <LineChart 
            data={healthTrends} 
            title="Health Score Progress (Last 6 Weeks)" 
            height={220}
          />
        </div>
        
        <div>
          <PieChart 
            data={medicationAdherence} 
            title="Medication Adherence" 
            size={120}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <BarChart 
            data={appointmentHistory} 
            title="Appointment History (Last 6 Months)" 
            height={180}
          />
        </div>
        
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Health Metrics</h3>
          <div className="grid grid-cols-2 gap-4">
            <ProgressRing value={85} label="Overall Health" color="#10b981" />
            <ProgressRing value={92} label="Treatment Progress" color="#3b82f6" />
            <ProgressRing value={78} label="Medication Compliance" color="#f59e0b" />
            <ProgressRing value={88} label="Recovery Rate" color="#8b5cf6" />
          </div>
        </div>
      </div>

      {/* Simple Charts Fallback */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SimpleLineChart 
            data={healthTrends} 
            title="Health Progress (Simple)" 
          />
        </div>
        
        <div>
          <SimplePieChart 
            data={medicationAdherence} 
            title="Medication Status (Simple)" 
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <SimpleBarChart 
            data={appointmentHistory} 
            title="Appointment History (Simple)" 
          />
        </div>
        
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Simple Health Metrics</h3>
          <div className="grid grid-cols-2 gap-4">
            <SimpleProgressRing value={85} label="Overall Health" color="#10b981" />
            <SimpleProgressRing value={92} label="Treatment Progress" color="#3b82f6" />
            <SimpleProgressRing value={78} label="Medication Compliance" color="#f59e0b" />
            <SimpleProgressRing value={88} label="Recovery Rate" color="#8b5cf6" />
          </div>
        </div>
      </div>
    </div>
  )
}