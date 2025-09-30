import { cookies } from "next/headers"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { auth, currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { UserButton } from "@clerk/nextjs"

export const metadata = {
  title: "Dashboard - Panchkarma Healthcare",
  description: "Healthcare management dashboard for Panchkarma system",
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = await auth()
  
  if (!userId) {
    redirect("/sign-in")
  }

  const user = await currentUser()
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <div className="min-h-screen flex flex-col w-full">
        {/* Dashboard Header */}
        <header className="sticky top-0 z-50 w-full h-14 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
          <div className="flex items-center justify-between gap-3 px-4 h-full max-w-full">
            <div className="flex items-center gap-3">
              <SidebarTrigger className="h-7 w-7 hover:bg-accent rounded-md transition-colors" />
              <div className="h-4 w-px bg-border/60" />
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-sm">
                  <span className="text-white text-xs font-bold">A</span>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-sm font-semibold text-foreground leading-none">AyurSutra</h1>
                  <span className="text-xs text-muted-foreground leading-none">Healthcare</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground bg-accent/50 px-3 py-1.5 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>System Online</span>
              </div>
              <div className="hidden sm:block text-xs text-muted-foreground">
                Welcome, {user?.firstName || user?.emailAddresses[0]?.emailAddress?.split('@')[0] || 'User'}
              </div>
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "h-7 w-7 rounded-lg shadow-sm border border-border/50"
                  }
                }}
              />
            </div>
          </div>
        </header>

        {/* Main Content with Sidebar */}
        <div className="flex flex-1 w-full">
          <AppSidebar />
          <SidebarInset className="flex-1 flex justify-center w-full">
            <main className="flex flex-col gap-4 p-4 lg:gap-6 lg:p-6 w-full">
              {children}
            </main>
          </SidebarInset>
        </div>


      </div>
    </SidebarProvider>
  )
}