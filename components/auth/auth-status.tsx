"use client";

import { useUser, UserButton } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Link from "next/link";

interface AuthStatusProps {
  showSignUp?: boolean;
  className?: string;
}

export function AuthStatus({ showSignUp = true, className = "" }: AuthStatusProps) {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <Loader2 className="h-4 w-4 animate-spin" />
        <span className="text-sm text-muted-foreground">Loading...</span>
      </div>
    );
  }

  if (isSignedIn) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <span className="text-sm text-foreground">
          Welcome, {user.firstName || user.emailAddresses[0]?.emailAddress}
        </span>
        <UserButton 
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-8 w-8"
            }
          }}
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Link 
        href="/sign-in"
        className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
      >
        Sign In
      </Link>
      {showSignUp && (
        <Link 
          href="/sign-up"
          className="inline-flex items-center rounded-md bg-gradient-to-r from-primary to-primary-light px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-90 transition-opacity"
        >
          Sign Up
        </Link>
      )}
    </div>
  );
}