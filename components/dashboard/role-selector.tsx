"use client"


import { Users, Stethoscope, UserCheck, Activity } from "lucide-react"

const roles = [
  { id: "admin", name: "Admin", icon: Users, color: "text-blue-600" },
  { id: "doctor", name: "Doctor", icon: Stethoscope, color: "text-green-600" },
  { id: "patient", name: "Patient", icon: UserCheck, color: "text-purple-600" },
  { id: "monitoring", name: "Monitoring", icon: Activity, color: "text-orange-600" },
]

interface RoleSelectorProps {
  currentRole: string
  onRoleChange: (role: string) => void
}

export function RoleSelector({ currentRole, onRoleChange }: RoleSelectorProps) {
  return (
    <div className="flex items-center gap-2 p-2 border rounded-lg bg-card">
      <span className="text-sm font-medium mr-2">View as:</span>
      {roles.map((role) => {
        const Icon = role.icon
        return (
          <button
            key={role.id}
            onClick={() => onRoleChange(role.id)}
            className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
              currentRole === role.id
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-accent hover:text-accent-foreground'
            }`}
          >
            <Icon className={`h-4 w-4 ${currentRole === role.id ? 'text-primary-foreground' : role.color}`} />
            {role.name}
          </button>
        )
      })}
    </div>
  )
}