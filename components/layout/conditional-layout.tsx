"use client"

import { usePathname } from 'next/navigation'
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"

interface ConditionalLayoutProps {
  children: React.ReactNode
}

export function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname()
  
  // Pages that should NOT have navbar/footer (full-screen auth/dashboard pages)
  const isFullScreenPage = pathname?.startsWith('/dashboard') || 
                          pathname?.startsWith('/sign-in') || 
                          pathname?.startsWith('/sign-up') ||
                          pathname === '/auth-callback'

  if (isFullScreenPage) {
    // Full-screen pages - no navbar/footer
    return <div className="min-h-screen">{children}</div>
  }

  // All other pages - with navbar/footer
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}