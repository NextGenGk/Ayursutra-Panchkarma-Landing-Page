import { FileText, Download, Calendar, TrendingUp, Users, Activity } from "lucide-react"

export default function ReportsPage() {
  const reports = [
    {
      id: 1,
      title: "Monthly Patient Report",
      description: "Comprehensive patient statistics and trends",
      type: "Patient Analytics",
      date: "2024-01-15",
      size: "2.4 MB",
      format: "PDF"
    },
    {
      id: 2,
      title: "Doctor Performance Report",
      description: "Doctor productivity and patient satisfaction metrics",
      type: "Performance",
      date: "2024-01-14",
      size: "1.8 MB",
      format: "Excel"
    },
    {
      id: 3,
      title: "Financial Summary",
      description: "Revenue, expenses, and financial health overview",
      type: "Financial",
      date: "2024-01-13",
      size: "3.2 MB",
      format: "PDF"
    },
    {
      id: 4,
      title: "System Usage Report",
      description: "Platform usage statistics and system performance",
      type: "System",
      date: "2024-01-12",
      size: "1.5 MB",
      format: "CSV"
    }
  ]

  const quickStats = [
    {
      title: "Total Reports Generated",
      value: "156",
      change: "+12%",
      icon: FileText,
      color: "text-blue-600"
    },
    {
      title: "Reports This Month",
      value: "24",
      change: "+8%",
      icon: Calendar,
      color: "text-green-600"
    },
    {
      title: "Average Report Size",
      value: "2.1 MB",
      change: "-5%",
      icon: TrendingUp,
      color: "text-purple-600"
    },
    {
      title: "Active Users",
      value: "89",
      change: "+15%",
      icon: Users,
      color: "text-orange-600"
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Reports</h2>
          <p className="text-muted-foreground">
            Generate and manage healthcare analytics reports
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
          <FileText className="h-4 w-4" />
          Generate Report
        </button>
      </div>

      {/* Report Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {quickStats.map((stat) => (
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

      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Reports */}
        <div className="rounded-lg border bg-card shadow-sm">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold">Recent Reports</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {reports.map((report) => (
                <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{report.title}</h4>
                      <p className="text-sm text-muted-foreground">{report.description}</p>
                      <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                        <span>{report.type}</span>
                        <span>•</span>
                        <span>{report.date}</span>
                        <span>•</span>
                        <span>{report.size}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                      {report.format}
                    </span>
                    <button className="p-2 hover:bg-accent rounded-md">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Report Templates */}
        <div className="rounded-lg border bg-card shadow-sm">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold">Report Templates</h3>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              <button className="w-full p-4 text-left border rounded-lg hover:bg-accent transition-colors">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Patient Analytics</p>
                    <p className="text-sm text-muted-foreground">Patient demographics and treatment outcomes</p>
                  </div>
                </div>
              </button>
              <button className="w-full p-4 text-left border rounded-lg hover:bg-accent transition-colors">
                <div className="flex items-center gap-3">
                  <Activity className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">System Performance</p>
                    <p className="text-sm text-muted-foreground">Platform usage and performance metrics</p>
                  </div>
                </div>
              </button>
              <button className="w-full p-4 text-left border rounded-lg hover:bg-accent transition-colors">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium">Financial Report</p>
                    <p className="text-sm text-muted-foreground">Revenue, costs, and financial analysis</p>
                  </div>
                </div>
              </button>
              <button className="w-full p-4 text-left border rounded-lg hover:bg-accent transition-colors">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-orange-600" />
                  <div>
                    <p className="font-medium">Appointment Summary</p>
                    <p className="text-sm text-muted-foreground">Appointment statistics and scheduling data</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}