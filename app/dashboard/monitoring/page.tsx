import { Activity, Server, Database, Users, AlertTriangle } from "lucide-react"
import { LineChart, BarChart, PieChart, ProgressRing } from "@/components/ui/chart"

export default function MonitoringPage() {
  // Monitoring analytics data
  const systemPerformance = [
    { name: '00:00', value: 95 },
    { name: '04:00', value: 98 },
    { name: '08:00', value: 92 },
    { name: '12:00', value: 89 },
    { name: '16:00', value: 94 },
    { name: '20:00', value: 97 }
  ]

  const resourceUsage = [
    { name: 'Available', value: 65, color: '#10b981' },
    { name: 'In Use', value: 30, color: '#3b82f6' },
    { name: 'Reserved', value: 5, color: '#f59e0b' }
  ]

  const alertTypes = [
    { name: 'Critical', value: 2 },
    { name: 'Warning', value: 8 },
    { name: 'Info', value: 15 },
    { name: 'Resolved', value: 25 }
  ]

  const monitoringStats = [
    {
      title: "System Uptime",
      value: "99.8%",
      change: "+0.2%",
      icon: Server,
      color: "text-green-600"
    },
    {
      title: "Active Users",
      value: "1,247",
      change: "+12%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Database Health",
      value: "Optimal",
      change: "Stable",
      icon: Database,
      color: "text-green-600"
    },
    {
      title: "Response Time",
      value: "145ms",
      change: "-23ms",
      icon: Activity,
      color: "text-purple-600"
    }
  ]

  const systemAlerts = [
    { type: "warning", message: "High CPU usage on Server 2", time: "2 min ago", status: "Active" },
    { type: "info", message: "Database backup completed", time: "15 min ago", status: "Resolved" },
    { type: "critical", message: "Memory usage above 90%", time: "1 hour ago", status: "Investigating" },
    { type: "info", message: "System update available", time: "2 hours ago", status: "Pending" },
  ]

  const serverMetrics = [
    { name: "Server 1", cpu: 45, memory: 62, disk: 38 },
    { name: "Server 2", cpu: 78, memory: 85, disk: 52 },
    { name: "Server 3", cpu: 32, memory: 41, disk: 29 },
    { name: "Database", cpu: 56, memory: 73, disk: 67 },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">System Monitoring</h2>
        <p className="text-muted-foreground">
          Real-time system performance and health monitoring
        </p>
      </div>

      {/* Monitoring Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {monitoringStats.map((stat) => (
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
                {stat.change} from last hour
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* System Performance Charts */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-lg border bg-card p-6 shadow-sm">
          <LineChart 
            data={systemPerformance} 
            title="System Performance (Last 24 Hours)" 
            height={220}
          />
        </div>
        
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <PieChart 
            data={resourceUsage} 
            title="Resource Allocation" 
            size={120}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Alert Summary */}
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <BarChart 
            data={alertTypes} 
            title="Alert Summary (Last 7 Days)" 
            height={180}
          />
        </div>
        
        {/* System Health Metrics */}
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">System Health</h3>
          <div className="grid grid-cols-2 gap-4">
            <ProgressRing value={98} label="Server Uptime" color="#10b981" />
            <ProgressRing value={85} label="Database Health" color="#3b82f6" />
            <ProgressRing value={92} label="Network Status" color="#f59e0b" />
            <ProgressRing value={88} label="Security Score" color="#8b5cf6" />
          </div>
        </div>
      </div>

      {/* Recent Alerts */}
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Recent System Alerts</h3>
          <AlertTriangle className="h-5 w-5 text-muted-foreground" />
        </div>
        <div className="space-y-3">
          {systemAlerts.map((alert, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-md">
              <div className="flex items-center space-x-3">
                <div className={`w-2 h-2 rounded-full ${
                  alert.type === 'critical' 
                    ? 'bg-red-500' 
                    : alert.type === 'warning'
                    ? 'bg-yellow-500'
                    : 'bg-blue-500'
                }`}></div>
                <div>
                  <p className="font-medium">{alert.message}</p>
                  <p className="text-sm text-muted-foreground">{alert.time}</p>
                </div>
              </div>
              <span className={`text-xs px-2 py-1 rounded ${
                alert.status === 'Resolved' 
                  ? 'bg-green-100 text-green-800'
                  : alert.status === 'Active'
                  ? 'bg-red-100 text-red-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {alert.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Server Metrics */}
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Server Resource Usage</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {serverMetrics.map((server, index) => (
            <div key={index} className="p-4 border rounded-md">
              <h4 className="font-medium mb-3">{server.name}</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>CPU</span>
                    <span>{server.cpu}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${server.cpu}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Memory</span>
                    <span>{server.memory}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: `${server.memory}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Disk</span>
                    <span>{server.disk}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-orange-600 h-2 rounded-full" 
                      style={{ width: `${server.disk}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}