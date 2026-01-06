"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import {
  Users,
  Stethoscope,
  UserCheck,
  Activity,
  Settings,
  Home,
  Calendar,
  FileText,
  Bell,
  ChevronUp,
  User2,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";

// Menu items for different user roles
const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
    roles: ["admin", "doctor", "patient", "monitoring"],
  },
  {
    title: "Admin Panel",
    url: "/dashboard/admin",
    icon: Users,
    roles: ["admin"],
  },
  {
    title: "Doctor Portal",
    url: "https://ayursutra-docter-portal.vercel.app/",
    icon: Stethoscope,
    roles: ["admin", "doctor"],
  },
  {
    title: "Patient Portal",
    url: "https://ayursutra-patient-portal.vercel.app/",
    icon: UserCheck,
    roles: ["admin", "doctor", "patient"],
  },
  {
    title: "Monitoring",
    url: "/dashboard/monitoring",
    icon: Activity,
    roles: ["admin", "doctor", "monitoring"],
  },
  {
    title: "Appointments",
    url: "/dashboard/appointments",
    icon: Calendar,
    roles: ["admin", "doctor", "patient"],
  },
  {
    title: "Reports",
    url: "/dashboard/reports",
    icon: FileText,
    roles: ["admin", "doctor", "monitoring"],
  },
  {
    title: "Notifications",
    url: "/dashboard/notifications",
    icon: Bell,
    roles: ["admin", "doctor", "patient", "monitoring"],
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
    roles: ["admin", "doctor", "patient", "monitoring"],
  },
];

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  userRole?: "admin" | "doctor" | "patient" | "monitoring";
}

export function AppSidebar({ userRole = "admin", ...props }: AppSidebarProps) {
  const pathname = usePathname();
  const { user } = useUser();

  // Filter menu items based on user role
  const filteredMenuItems = menuItems.filter((item) =>
    item.roles.includes(userRole)
  );

  return (
    <Sidebar variant="sidebar" collapsible="offcanvas" {...props}>
      <SidebarHeader className="p-4">
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {filteredMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    size="sm"
                  >
                    <Link href={item.url} className="flex items-center gap-1.5">
                      <item.icon className="h-3.5 w-3.5" />
                      <span className="text-sm">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild size="sm">
                  <Link
                    href="/dashboard/new-appointment"
                    className="flex items-center gap-1.5"
                  >
                    <Calendar className="h-3.5 w-3.5" />
                    <span className="text-sm">New Appointment</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {(userRole === "admin" || userRole === "doctor") && (
                <SidebarMenuItem>
                  <SidebarMenuButton asChild size="sm">
                    <Link
                      href="/dashboard/add-patient"
                      className="flex items-center gap-1.5"
                    >
                      <UserCheck className="h-3.5 w-3.5" />
                      <span className="text-sm">Add Patient</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="default" asChild>
              <Link href="/profile" className="flex items-center gap-1.5">
                <User2 className="h-4 w-4" />
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold text-xs">
                    {user?.firstName ||
                      user?.emailAddresses[0]?.emailAddress?.split("@")[0] ||
                      "User"}
                  </span>
                  <span className="truncate text-xs opacity-70">
                    {user?.emailAddresses[0]?.emailAddress ||
                      "user@panchkarma.com"}
                  </span>
                </div>
                <ChevronUp className="h-3 w-3" />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
