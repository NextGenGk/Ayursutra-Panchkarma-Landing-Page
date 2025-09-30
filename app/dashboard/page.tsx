import { Users, Stethoscope, Activity, Calendar, TrendingUp } from "lucide-react"
import { currentUser } from "@clerk/nextjs/server"
import { LineChart, BarChart, PieChart, ProgressRing } from "@/components/ui/chart"
import { SimpleBarChart, SimpleLineChart, SimplePieChart, SimpleProgressRing } from "@/components/ui/simple-charts"

export default async function DashboardPage() {
  const user = await currentUser()
  
  // Sample analytics data
  const monthlyPatients = [
    { name: 'Jan', value: 45 },
    { name: 'Feb', value: 52 },
    { name: 'Mar', value: 48 },
    { name: 'Apr', value: 61 },
    { name: 'May', value: 55 },
    { name: 'Jun', value: 67 }
  ]

  const treatmentTypes = [
    { name: 'Panchakarma', value: 35, color: '#3b82f6' },
    { name: 'Consultation', value: 28, color: '#10b981' },
    { name: 'Follow-up', value: 22, color: '#f59e0b' },
    { name: 'Therapy', value: 15, color: '#ef4444' }
  ]

  const departmentStats = [
    { name: 'Cardiology', value: 85 },
    { name: 'Neurology', value: 72 },
    { name: 'Orthopedics', value: 68 },
    { name: 'Dermatology', value: 91 }
  ]

  const stats = [
    {
      title: "Total Patients",
      value: "1,234",
      change: "+12%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Active Doctors",
      value: "56",
      change: "+3%",
      icon: Stethoscope,
      color: "text-green-600"
    },
    {
      title: "Appointments Today",
      value: "89",
      change: "+8%",
      icon: Calendar,
      color: "text-purple-600"
    },
    {
      title: "System Health",
      value: "98.5%",
      change: "+0.2%",
      icon: Activity,
      color: "text-emerald-600"
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">
          Welcome back, {user?.firstName || user?.emailAddresses[0]?.emailAddress || 'User'}!
        </h2>
        <p className="text-muted-foreground">
          Here&apos;s what&apos;s happening with your Panchkarma healthcare management system
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
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
              <p className="text-xs text-muted-foreground flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                {stat.change} from last month
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Recent Appointments</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-muted-foreground">Consultation - 10:00 AM</p>
              </div>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                Confirmed
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Jane Smith</p>
                <p className="text-sm text-muted-foreground">Follow-up - 2:30 PM</p>
              </div>
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                Pending
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Mike Johnson</p>
                <p className="text-sm text-muted-foreground">Treatment - 4:00 PM</p>
              </div>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                In Progress
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">System Alerts</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium">Server maintenance scheduled</p>
                <p className="text-xs text-muted-foreground">Tonight at 2:00 AM</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium">Low inventory alert</p>
                <p className="text-xs text-muted-foreground">Medical supplies running low</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium">Backup completed</p>
                <p className="text-xs text-muted-foreground">Daily backup successful</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <button className="w-full text-left p-3 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors">
              Schedule New Appointment
            </button>
            <button className="w-full text-left p-3 rounded-md border hover:bg-accent transition-colors text-foreground">
              Add New Patient
            </button>
            <button className="w-full text-left p-3 rounded-md border hover:bg-accent transition-colors text-foreground">
              Generate Report
            </button>
            <button className="w-full text-left p-3 rounded-md border hover:bg-accent transition-colors text-foreground">
              View Analytics
            </button>
          </div>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <LineChart 
            data={monthlyPatients} 
            title="Patient Growth (Last 6 Months)" 
            height={250}
          />
        </div>
        
        <div>
          <PieChart 
            data={treatmentTypes} 
            title="Treatment Distribution" 
            size={140}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <BarChart 
            data={departmentStats} 
            title="Department Performance (%)" 
            height={200}
          />
        </div>
        
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">System Health</h3>
          <div className="grid grid-cols-2 gap-4">
            <ProgressRing value={98} label="Server Uptime" color="#10b981" />
            <ProgressRing value={85} label="Database Health" color="#3b82f6" />
            <ProgressRing value={92} label="API Response" color="#f59e0b" />
            <ProgressRing value={88} label="User Satisfaction" color="#8b5cf6" />
          </div>
        </div>
      </div>

      {/* Fallback Simple Charts */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SimpleLineChart 
            data={monthlyPatients} 
            title="Patient Trends (Fallback)" 
          />
        </div>
        
        <div>
          <SimplePieChart 
            data={treatmentTypes} 
            title="Treatment Types (Fallback)" 
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <SimpleBarChart 
            data={departmentStats} 
            title="Department Stats (Fallback)" 
          />
        </div>
        
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Health Metrics (Fallback)</h3>
          <div className="grid grid-cols-2 gap-4">
            <SimpleProgressRing value={98} label="Server Uptime" color="#10b981" />
            <SimpleProgressRing value={85} label="Database Health" color="#3b82f6" />
            <SimpleProgressRing value={92} label="API Response" color="#f59e0b" />
            <SimpleProgressRing value={88} label="User Satisfaction" color="#8b5cf6" />
          </div>
        </div>
      </div>
    </div>
  )
}