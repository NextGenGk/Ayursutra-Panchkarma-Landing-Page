import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join Waitlist - AyurSutra',
  description: 'Join the AyurSutra waitlist to get early access to our AI-powered Panchakarma patient management system.',
}

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              Join the <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">AyurSutra</span> Waitlist
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Be among the first to experience the future of Panchakarma patient management. 
              Get early access to our AI-powered platform that combines ancient wisdom with modern technology.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 rounded-lg bg-card border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Early Access</h3>
              <p className="text-muted-foreground text-sm">
                Be the first to try AyurSutra before the public launch
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Special Pricing</h3>
              <p className="text-muted-foreground text-sm">
                Exclusive introductory pricing for early adopters
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-2-2V10a2 2 0 012-2h2m2-4h6a2 2 0 012 2v6a2 2 0 01-2 2h-6l-4 4V8a2 2 0 012-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Direct Support</h3>
              <p className="text-muted-foreground text-sm">
                Priority support and direct feedback channel with our team
              </p>
            </div>
          </div>

          {/* Google Form Embed */}
          <div className="bg-card rounded-lg border p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Reserve Your Spot
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below to join our exclusive waitlist. We&apos;ll notify you as soon as access becomes available.
              </p>
            </div>

            {/* Embedded Google Form */}
            <div className="w-full">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLScaJqZUDR1F-sHXeBi6pjeZqXu_gzPxB-xjdgmKjVBTa1FFDQ/viewform?embedded=true" 
                width="100%" 
                height="800" 
                className="rounded-lg border-0"
              >
                Loading…
              </iframe>
            </div>

            {/* Fallback Link */}
            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground mb-4">
                Having trouble with the form above?
              </p>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScaJqZUDR1F-sHXeBi6pjeZqXu_gzPxB-xjdgmKjVBTa1FFDQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-primary-light px-6 py-3 text-sm font-medium text-white shadow-sm hover:opacity-90 transition-opacity"
              >
                Open Form in New Tab
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                What happens next?
              </h3>
              <div className="text-muted-foreground space-y-2">
                <p>You&apos;ll receive a confirmation email within 24 hours</p>
                <p>We&apos;ll keep you updated on our development progress</p>
                <p>You&apos;ll get priority access when we launch</p>
                <p>Exclusive invites to beta testing and demos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}