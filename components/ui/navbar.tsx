"use client";

import React, { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-card/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
                Home
              </Link>
              <Link href="/faq" className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
                FAQ
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center rounded-md bg-gradient-to-r from-primary to-primary-light px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-90 transition-opacity"
              >
                Get Started
              </Link>
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
        <div className="md:hidden bg-card/95 backdrop-blur-sm">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-foreground/80 hover:bg-foreground/5 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/faq"
              className="block px-3 py-2 text-base font-medium text-foreground/80 hover:bg-foreground/5 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/signup"
              className="block px-3 py-2 text-base font-medium text-foreground/80 hover:bg-foreground/5 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
