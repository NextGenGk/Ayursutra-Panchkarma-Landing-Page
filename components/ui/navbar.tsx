"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-card/80 backdrop-blur-sm">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary-light" />
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  AyurSutra
                </h1>
              </Link>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
                Home
              </Link>
              <Link href="/faq" className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
                FAQ
              </Link>
              <SignedIn>
                <Link href="/dashboard" className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
                  Dashboard
                </Link>
              </SignedIn>
            </div>
            
            {/* Authentication Section */}
            <div className="hidden md:flex items-center ml-6">
              <SignedOut>
                <div className="flex items-center space-x-3">
                  <Link 
                    href="/sign-in"
                    className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link 
                    href="/sign-up"
                    className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-primary-light px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-90 transition-opacity"
                  >
                    Get Started
                  </Link>
                </div>
              </SignedOut>
              
              <SignedIn>
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "h-8 w-8"
                    }
                  }}
                />
              </SignedIn>
            </div>
            
            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground/70 hover:text-foreground focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/50 bg-card/95 backdrop-blur-sm">
          <div className="px-4 py-3 space-y-1">
            {/* Navigation Links */}
            <div className="space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-foreground/80 hover:bg-foreground/5 hover:text-primary rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/faq"
                className="block px-3 py-2 text-base font-medium text-foreground/80 hover:bg-foreground/5 hover:text-primary rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <SignedIn>
                <Link
                  href="/dashboard"
                  className="block px-3 py-2 text-base font-medium text-foreground/80 hover:bg-foreground/5 hover:text-primary rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
              </SignedIn>
            </div>
            
            {/* Authentication Section */}
            <SignedOut>
              <div className="pt-3 border-t border-border/30">
                <div className="space-y-2">
                  <Link
                    href="/sign-in"
                    className="block px-3 py-2 text-base font-medium border border-border text-center rounded-md hover:bg-accent transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/sign-up"
                    className="block px-3 py-2 text-base font-medium bg-gradient-to-r from-primary to-primary-light text-white rounded-md hover:opacity-90 transition-opacity text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </SignedOut>
            
            <SignedIn>
              <div className="pt-3 border-t border-border/30">
                <div className="flex items-center px-3 py-2">
                  <UserButton 
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: "h-8 w-8"
                      }
                    }}
                  />
                  <span className="ml-3 text-sm text-foreground/80">Account</span>
                </div>
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
}
