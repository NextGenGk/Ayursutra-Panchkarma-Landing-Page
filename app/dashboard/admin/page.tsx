import { Users, UserPlus, Settings, Shield, Database, Activity } from "lucide-react"

export default function AdminPage() {
  const adminStats = [
    {
      title: "Total Users",
      value: "1,456",
      change: "+15%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "System Uptime",
      value: "99.9%",
      change: "+0.1%",
      icon: Activity,
      color: "text-green-600"
    },
    {
      title: "Database Size",
      value: "2.4 GB",
      change: "+5%",
      icon: Database,
      color: "text-purple-600"
    },
    {
      title: "Security Alerts",
      value: "3",
      change: "-2",
      icon: Shield,
      color: "text-red-600"
    }
  ]

  const recentUsers = [
    { name: "Dr. Sarah Wilson", role: "Doctor", status: "Active", joinDate: "2024-01-15", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&crop=faces" },
    { name: "John Patient", role: "Patient", status: "Active", joinDate: "2024-01-14", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=64&h=64&fit=crop&crop=faces" },
    { name: "Mike Monitor", role: "Monitoring", status: "Pending", joinDate: "2024-01-13", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop&crop=faces" },
    { name: "Dr. James Brown", role: "Doctor", status: "Active", joinDate: "2024-01-12", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=64&h=64&fit=crop&crop=faces" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Admin Panel</h2>
        <p className="text-muted-foreground">
          Manage users, system settings, and monitor platform health
        </p>
      </div>

      {/* Admin Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {adminStats.map((stat) => (
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
                {stat.change} from last month
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* User Management */}
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Recent Users</h3>
            <button className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
              <UserPlus className="h-4 w-4" />
              Add User
            </button>
          </div>
          <div className="space-y-3">
            {recentUsers.map((user, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                <div className="flex items-center gap-3">
                  <img 
                    src={user.image} 
                    alt={user.name} 
                    className="h-8 w-8 rounded-full object-cover border border-border"
                  />
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.role} • {user.joinDate}</p>
                  </div>
                </div>
                <span className={`text-xs px-2 py-1 rounded ${
                  user.status === 'Active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {user.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* System Settings */}
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">System Settings</h3>
            <Settings className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-md">
              <div>
                <p className="font-medium">Backup Schedule</p>
                <p className="text-sm text-muted-foreground">Daily at 2:00 AM</p>
              </div>
              <button className="text-sm text-primary hover:underline">
                Configure
              </button>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-md">
              <div>
                <p className="font-medium">Security Settings</p>
                <p className="text-sm text-muted-foreground">2FA enabled</p>
              </div>
              <button className="text-sm text-primary hover:underline">
                Manage
              </button>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-md">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-muted-foreground">Enabled for alerts</p>
              </div>
              <button className="text-sm text-primary hover:underline">
                Edit
              </button>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-md">
              <div>
                <p className="font-medium">Data Retention</p>
                <p className="text-sm text-muted-foreground">7 years</p>
              </div>
              <button className="text-sm text-primary hover:underline">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Admin Actions */}
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Admin Actions</h3>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          <button className="p-4 text-left border rounded-md hover:bg-accent transition-colors">
            <Users className="h-6 w-6 mb-2 text-blue-600" />
            <p className="font-medium">Manage Users</p>
            <p className="text-sm text-muted-foreground">Add, edit, or remove users</p>
          </button>
          <button className="p-4 text-left border rounded-md hover:bg-accent transition-colors">
            <Database className="h-6 w-6 mb-2 text-green-600" />
            <p className="font-medium">Database</p>
            <p className="text-sm text-muted-foreground">Backup and maintenance</p>
          </button>
          <button className="p-4 text-left border rounded-md hover:bg-accent transition-colors">
            <Shield className="h-6 w-6 mb-2 text-red-600" />
            <p className="font-medium">Security</p>
            <p className="text-sm text-muted-foreground">Security settings and logs</p>
          </button>
          <button className="p-4 text-left border rounded-md hover:bg-accent transition-colors">
            <Settings className="h-6 w-6 mb-2 text-purple-600" />
            <p className="font-medium">System Config</p>
            <p className="text-sm text-muted-foreground">Configure system settings</p>
          </button>
        </div>
      </div>
    </div>
  )
}