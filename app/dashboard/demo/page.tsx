"use client"

import { useState } from "react"
import { RoleSelector } from "@/components/dashboard/role-selector"

export default function DemoPage() {
  const [currentRole, setCurrentRole] = useState("admin")

  const roleDescriptions = {
    admin: {
      title: "Administrator Access",
      description: "Full system access with user management, system configuration, and monitoring capabilities.",
      features: ["User Management", "System Settings", "Security Controls", "Database Management", "All Reports"]
    },
    doctor: {
      title: "Doctor Portal",
      description: "Medical professional interface for patient care, appointments, and treatment management.",
      features: ["Patient Records", "Appointment Scheduling", "Prescription Management", "Treatment Plans", "Medical Reports"]
    },
    patient: {
      title: "Patient Portal", 
      description: "Personal health management interface for appointments, medications, and health tracking.",
      features: ["View Appointments", "Medical History", "Medication Tracking", "Health Reports", "Profile Management"]
    },
    monitoring: {
      title: "System Monitoring",
      description: "Real-time system health monitoring, performance metrics, and alert management.",
      features: ["System Health", "Performance Metrics", "Alert Management", "Infrastructure Overview", "Real-time Monitoring"]
    }
  }

  const currentRoleInfo = roleDescriptions[currentRole as keyof typeof roleDescriptions]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard Demo</h2>
        <p className="text-muted-foreground">
          Switch between different user roles to see how the dashboard adapts
        </p>
      </div>

      {/* Role Selector */}
      <RoleSelector currentRole={currentRole} onRoleChange={setCurrentRole} />

      {/* Role Information */}
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-2">{currentRoleInfo.title}</h3>
        <p className="text-muted-foreground mb-4">{currentRoleInfo.description}</p>
        
        <div className="space-y-3">
          <h4 className="font-medium">Available Features:</h4>
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            {currentRoleInfo.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 p-2 border rounded-md">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Instructions */}
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Navigation Guide</h3>
        <div className="space-y-3">
          <div className="p-3 border rounded-md">
            <p className="font-medium">Sidebar Navigation</p>
            <p className="text-sm text-muted-foreground">
              The sidebar menu items change based on your selected role. Each role has access to different sections of the dashboard.
            </p>
          </div>
          <div className="p-3 border rounded-md">
            <p className="font-medium">Role-Based Access</p>
            <p className="text-sm text-muted-foreground">
              Admin users see all sections, doctors see patient and medical management tools, patients see their personal health information, and monitoring users see system health data.
            </p>
          </div>
          <div className="p-3 border rounded-md">
            <p className="font-medium">Responsive Design</p>
            <p className="text-sm text-muted-foreground">
              The sidebar collapses on mobile devices and can be toggled using the hamburger menu or keyboard shortcut (Ctrl/Cmd + B).
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Quick Links for {currentRole.charAt(0).toUpperCase() + currentRole.slice(1)}</h3>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {currentRole === "admin" && (
            <>
              <a href="/dashboard/admin" className="p-3 border rounded-md hover:bg-accent transition-colors block">
                <p className="font-medium">Admin Panel</p>
                <p className="text-sm text-muted-foreground">Manage users and system settings</p>
              </a>
              <a href="/dashboard/monitoring" className="p-3 border rounded-md hover:bg-accent transition-colors block">
                <p className="font-medium">System Monitoring</p>
                <p className="text-sm text-muted-foreground">View system health and performance</p>
              </a>
            </>
          )}
          {(currentRole === "admin" || currentRole === "doctor") && (
            <a href="https://ayursutra-docter-portal.vercel.app/" className="p-3 border rounded-md hover:bg-accent transition-colors block">
              <p className="font-medium">Doctor Portal</p>
              <p className="text-sm text-muted-foreground">Manage patients and appointments</p>
            </a>
          )}
          {(currentRole === "admin" || currentRole === "doctor" || currentRole === "patient") && (
            <a href="https://ayursutra-patient-portal.vercel.app/" className="p-3 border rounded-md hover:bg-accent transition-colors block">
              <p className="font-medium">Patient Portal</p>
              <p className="text-sm text-muted-foreground">View health information and appointments</p>
            </a>
          )}
          {(currentRole === "admin" || currentRole === "monitoring") && (
            <a href="/dashboard/monitoring" className="p-3 border rounded-md hover:bg-accent transition-colors block">
              <p className="font-medium">Monitoring Dashboard</p>
              <p className="text-sm text-muted-foreground">Real-time system monitoring</p>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}