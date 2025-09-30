"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export const HeroSectionOne = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      <div className="absolute inset-y-0 left-0 h-full w-px bg-border/50">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-border/50">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>
      <div className="w-full px-6 py-20 sm:px-8 md:py-28">
        <h1 className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 md:px-0">
          <motion.span
            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.3, delay: 0, ease: "easeInOut" }}
            className="block text-6xl sm:text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent mb-3 leading-tight md:leading-[1.5]"
          >
            AyurSutra
          </motion.span>
          <motion.span
            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.3, delay: 0.5, ease: "easeInOut" }}
            className="block text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground/80 tracking-tight mb-2"
          >
            Panchakarma AI Powered Patient Management System
          </motion.span>
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
          className="relative z-10 mx-auto max-w-2xl px-4 py-6 text-center text-xl font-medium text-foreground/80 sm:px-6 md:px-0 md:text-2xl"
        >
          Harness AI to automate patient management, daily tasks, and therapy scheduling—secure, DPDP-compliant, so you can focus on care, not paper work.
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
          className="relative z-10 mt-8 flex items-center justify-center"
        >
          <SignedOut>
            <Link 
              href="/sign-up"
              className="w-60 transform rounded-lg bg-gradient-to-r from-primary to-primary-light px-8 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-center"
            >
              Get Started
            </Link>
          </SignedOut>
          <SignedIn>
            <Link 
              href="/dashboard"
              className="w-60 transform rounded-lg bg-gradient-to-r from-primary to-primary-light px-8 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-center"
            >
              Dashboard
            </Link>
          </SignedIn>
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
