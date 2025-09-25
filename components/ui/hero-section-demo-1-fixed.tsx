"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="w-full border-b border-border/50 bg-card/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary-light" />
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">AyurSutra</h1>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <Link href="/" className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
                  Home
                </Link>
                <a href="#faq" className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
                  FAQ
                </a>
              </div>
            </div>

            <div className="hidden md:inline-flex">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScaJqZUDR1F-sHXeBi6pjeZqXu_gzPxB-xjdgmKjVBTa1FFDQ/viewform" 
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-primary-light hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Join Waitlist
              </a>
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded="false"
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

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link 
              href="/" 
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground/90 hover:bg-accent hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="#faq" 
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground/90 hover:bg-accent hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScaJqZUDR1F-sHXeBi6pjeZqXu_gzPxB-xjdgmKjVBTa1FFDQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block w-full rounded-md bg-primary px-3 py-2 text-center text-base font-medium text-white hover:bg-primary-light hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default function HeroSectionOne() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      <Navbar />
      <div className="absolute inset-y-0 left-0 h-full w-px bg-border/50">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-border/50">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>
      <div className="w-full px-6 py-20 sm:px-8 md:py-28">
        <h1 className="relative z-10 mx-auto max-w-5xl px-4 text-center text-4xl font-bold text-foreground/90 sm:px-6 sm:text-5xl md:px-0 md:text-6xl lg:text-6xl">
          {"AyurSutra - Panchakarma Patient Management and Therapy Scheduling Software"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl px-4 py-4 text-center text-lg font-normal text-foreground/70 sm:px-6 md:px-0"
        >
          Automate therapy scheduling, ensure consistent care, and simplify patient management -trusted by Ayurveda centers worldwide.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLScaJqZUDR1F-sHXeBi6pjeZqXu_gzPxB-xjdgmKjVBTa1FFDQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="w-60 transform rounded-lg bg-primary px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-light hover:shadow-lg text-center"
          >
            Join Waitlist
          </a>
          <a 
            href="#faq"
            className="w-60 transform rounded-lg border-2 border-primary/20 bg-transparent px-6 py-2 font-medium text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 hover:shadow-sm dark:text-primary-light dark:hover:bg-primary/10 text-center"
          >
            Read FAQs
          </a>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.2,
          }}
          className="relative z-10 mt-12 w-full max-w-7xl mx-auto rounded-xl sm:rounded-[1.75rem] border-2 border-neutral-200 bg-neutral-100 p-2 sm:p-6 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="w-full overflow-hidden rounded-lg sm:rounded-2xl border-2 sm:border-[3px] border-gray-300 dark:border-gray-700">
            <Image
              src="/patient-home-page-01.webp"
              alt="AyurSutra patient dashboard preview"
              className="aspect-[16/9] h-auto w-full object-cover"
              height={800}
              width={1422}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
