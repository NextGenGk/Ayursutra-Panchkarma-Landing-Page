import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import Link from "next/link"
import { ArrowRight, Users, Stethoscope, UserCheck, Activity } from "lucide-react"

export default async function WelcomePage() {
  const user = await currentUser()
  
  if (!user) {
    redirect("/sign-in")
  }

  const features = [
    {
      icon: Users,
      title: "Admin Panel",
      description: "Manage users, system settings, and monitor platform health",
      href: "/dashboard/admin"
    },
    {
      icon: Stethoscope,
      title: "Doctor Portal",
      description: "Manage patients, appointments, and medical records",
      href: "/dashboard/doctor"
    },
    {
      icon: UserCheck,
      title: "Patient Portal",
      description: "Track health journey and manage personal care",
      href: "/dashboard/patient"
    },
    {
      icon: Activity,
      title: "System Monitoring",
      description: "Monitor system health, performance, and security alerts",
      href: "/dashboard/monitoring"
    }
  ]

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Welcome to AyurSutra, {user.firstName}!
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Your comprehensive Ayurvedic practice management platform is ready. 
            Choose your role to get started with the features designed for you.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Link
                key={feature.title}
                href={feature.href}
                className="group relative rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:border-primary/20"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-primary to-primary-light px-6 py-3 text-sm font-medium text-white shadow-sm hover:opacity-90 transition-opacity"
          >
            Go to Main Dashboard
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-card p-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Getting Started</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-xs font-medium">
                1
              </div>
              <div>
                <h3 className="font-medium text-foreground">Complete Your Profile</h3>
                <p className="text-sm text-muted-foreground">
                  Add your professional information and preferences to personalize your experience.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-xs font-medium">
                2
              </div>
              <div>
                <h3 className="font-medium text-foreground">Explore the Dashboard</h3>
                <p className="text-sm text-muted-foreground">
                  Familiarize yourself with the different sections and features available to you.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-xs font-medium">
                3
              </div>
              <div>
                <h3 className="font-medium text-foreground">Start Managing</h3>
                <p className="text-sm text-muted-foreground">
                  Begin adding patients, scheduling appointments, or monitoring system health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}