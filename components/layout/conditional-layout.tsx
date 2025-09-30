"use client"

import { usePathname } from 'next/navigation'
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"

interface ConditionalLayoutProps {
  children: React.ReactNode
}

export function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname()
  const isDashboard = pathname?.startsWith('/dashboard')

  if (isDashboard) {
    // Dashboard pages - no navbar/footer, full height
    return <div className="min-h-screen">{children}</div>
  }

  // Regular pages - with navbar/footer
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