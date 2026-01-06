import { Calendar, Users, FileText, Clock, Stethoscope, Activity } from "lucide-react"
import { LineChart, BarChart, PieChart, ProgressRing } from "@/components/ui/chart"
import { SimpleBarChart, SimpleLineChart, SimplePieChart, SimpleProgressRing } from "@/components/ui/simple-charts"

export default function DoctorPage() {
  // Doctor analytics data
  const patientTrends = [
    { name: 'Mon', value: 12 },
    { name: 'Tue', value: 15 },
    { name: 'Wed', value: 8 },
    { name: 'Thu', value: 18 },
    { name: 'Fri', value: 14 },
    { name: 'Sat', value: 10 },
    { name: 'Sun', value: 6 }
  ]

  const treatmentSuccess = [
    { name: 'Successful', value: 78, color: '#10b981' },
    { name: 'In Progress', value: 15, color: '#f59e0b' },
    { name: 'Needs Review', value: 7, color: '#ef4444' }
  ]

  const consultationTypes = [
    { name: 'New Patient', value: 25 },
    { name: 'Follow-up', value: 35 },
    { name: 'Emergency', value: 8 },
    { name: 'Routine Check', value: 22 }
  ]

  const doctorStats = [
    {
      title: "Today's Appointments",
      value: "12",
      change: "+2",
      icon: Calendar,
      color: "text-blue-600"
    },
    {
      title: "Active Patients",
      value: "156",
      change: "+8",
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "Pending Reports",
      value: "5",
      change: "-3",
      icon: FileText,
      color: "text-orange-600"
    },
    {
      title: "Avg. Consultation",
      value: "25 min",
      change: "-2 min",
      icon: Clock,
      color: "text-purple-600"
    }
  ]

  const todayAppointments = [
    { time: "09:00", patient: "John Doe", type: "Consultation", status: "Completed", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=64&h=64&fit=crop&crop=faces" },
    { time: "09:30", patient: "Jane Smith", type: "Follow-up", status: "In Progress", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces" },
    { time: "10:00", patient: "Mike Johnson", type: "Treatment", status: "Scheduled", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop&crop=faces" },
    { time: "10:30", patient: "Sarah Wilson", type: "Consultation", status: "Scheduled", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&crop=faces" },
    { time: "11:00", patient: "David Brown", type: "Check-up", status: "Scheduled", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces" },
  ]

  const recentPatients = [
    { name: "Alice Cooper", lastVisit: "2024-01-15", condition: "Arthritis", status: "Stable", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=faces" },
    { name: "Bob Martin", lastVisit: "2024-01-14", condition: "Hypertension", status: "Improving", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=faces" },
    { name: "Carol Davis", lastVisit: "2024-01-13", condition: "Diabetes", status: "Monitoring", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=faces" },
    { name: "Daniel Lee", lastVisit: "2024-01-12", condition: "Back Pain", status: "Treatment", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=faces" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Doctor Portal</h2>
        <p className="text-muted-foreground">
          Manage your patients, appointments, and medical records
        </p>
      </div>

      {/* Doctor Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {doctorStats.map((stat) => (
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
                {stat.change} from yesterday
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Today's Schedule */}
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Today&apos;s Schedule</h3>
            <Calendar className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="space-y-3">
            {todayAppointments.map((appointment, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-mono font-medium">{appointment.time}</div>
                  <img 
                    src={appointment.image} 
                    alt={appointment.patient} 
                    className="h-8 w-8 rounded-full object-cover border border-border"
                  />
                  <div>
                    <p className="font-medium">{appointment.patient}</p>
                    <p className="text-sm text-muted-foreground">{appointment.type}</p>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded ${
                  appointment.status === 'Completed' 
                    ? 'bg-green-100 text-green-800'
                    : appointment.status === 'In Progress'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {appointment.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Patients */}
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Recent Patients</h3>
            <Users className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="space-y-3">
            {recentPatients.map((patient, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                <div className="flex items-center gap-3">
                  <img 
                    src={patient.image} 
                    alt={patient.name} 
                    className="h-8 w-8 rounded-full object-cover border border-border"
                  />
                  <div>
                  <p className="font-medium">{patient.name}</p>
                  <p className="text-sm text-muted-foreground">{patient.condition} • {patient.lastVisit}</p>
                </div>
              </div>
                <span className={`text-xs px-2 py-1 rounded ${
                  patient.status === 'Stable' 
                    ? 'bg-green-100 text-green-800'
                    : patient.status === 'Improving'
                    ? 'bg-blue-100 text-blue-800'
                    : patient.status === 'Monitoring'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-orange-100 text-orange-800'
                }`}>
                  {patient.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          <button className="p-4 text-left border rounded-md hover:bg-accent transition-colors text-foreground">
            <Calendar className="h-6 w-6 mb-2 text-blue-600" />
            <p className="font-medium text-foreground">Schedule Appointment</p>
            <p className="text-sm text-muted-foreground">Book new patient visit</p>
          </button>
          <button className="p-4 text-left border rounded-md hover:bg-accent transition-colors text-foreground">
            <Users className="h-6 w-6 mb-2 text-green-600" />
            <p className="font-medium text-foreground">Patient Records</p>
            <p className="text-sm text-muted-foreground">View and update records</p>
          </button>
          <button className="p-4 text-left border rounded-md hover:bg-accent transition-colors text-foreground">
            <FileText className="h-6 w-6 mb-2 text-orange-600" />
            <p className="font-medium text-foreground">Write Prescription</p>
            <p className="text-sm text-muted-foreground">Create new prescription</p>
          </button>
          <button className="p-4 text-left border rounded-md hover:bg-accent transition-colors text-foreground">
            <Stethoscope className="h-6 w-6 mb-2 text-purple-600" />
            <p className="font-medium text-foreground">Treatment Plans</p>
            <p className="text-sm text-muted-foreground">Manage treatment protocols</p>
          </button>
        </div>
      </div>

      {/* Treatment Summary */}
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Treatment Summary</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="text-center p-4 border rounded-md">
            <Activity className="h-8 w-8 mx-auto mb-2 text-blue-600" />
            <p className="text-2xl font-bold">89%</p>
            <p className="text-sm text-muted-foreground">Treatment Success Rate</p>
          </div>
          <div className="text-center p-4 border rounded-md">
            <Users className="h-8 w-8 mx-auto mb-2 text-green-600" />
            <p className="text-2xl font-bold">156</p>
            <p className="text-sm text-muted-foreground">Patients Under Care</p>
          </div>
          <div className="text-center p-4 border rounded-md">
            <Clock className="h-8 w-8 mx-auto mb-2 text-orange-600" />
            <p className="text-2xl font-bold">25</p>
            <p className="text-sm text-muted-foreground">Avg. Consultation (min)</p>
          </div>
        </div>
      </div>

      {/* Doctor Analytics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <LineChart 
            data={patientTrends} 
            title="Weekly Patient Appointments" 
            height={220}
          />
        </div>
        
        <div>
          <PieChart 
            data={treatmentSuccess} 
            title="Treatment Outcomes" 
            size={120}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <BarChart 
            data={consultationTypes} 
            title="Consultation Types (This Month)" 
            height={180}
          />
        </div>
        
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
          <div className="grid grid-cols-2 gap-4">
            <ProgressRing value={89} label="Patient Satisfaction" color="#10b981" />
            <ProgressRing value={94} label="Treatment Success" color="#3b82f6" />
            <ProgressRing value={76} label="On-time Rate" color="#f59e0b" />
            <ProgressRing value={82} label="Follow-up Rate" color="#8b5cf6" />
          </div>
        </div>
      </div>

      {/* Simple Charts Fallback */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SimpleLineChart 
            data={patientTrends} 
            title="Weekly Appointments (Simple)" 
          />
        </div>
        
        <div>
          <SimplePieChart 
            data={treatmentSuccess} 
            title="Treatment Results (Simple)" 
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <SimpleBarChart 
            data={consultationTypes} 
            title="Consultation Types (Simple)" 
          />
        </div>
        
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Simple Metrics</h3>
          <div className="grid grid-cols-2 gap-4">
            <SimpleProgressRing value={89} label="Patient Satisfaction" color="#10b981" />
            <SimpleProgressRing value={94} label="Treatment Success" color="#3b82f6" />
            <SimpleProgressRing value={76} label="On-time Rate" color="#f59e0b" />
            <SimpleProgressRing value={82} label="Follow-up Rate" color="#8b5cf6" />
          </div>
        </div>
      </div>
    </div>
  )
}