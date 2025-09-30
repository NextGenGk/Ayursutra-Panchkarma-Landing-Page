import { SignUp } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create your account",
};

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Back to Home Link */}
      <div className="absolute top-6 left-6">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm">Back to Home</span>
        </Link>
      </div>

      {/* Sign Up Form */}
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">Create Account</h1>
          <p className="text-muted-foreground text-sm">
            Enter your email to get started
          </p>
        </div>

        <SignUp 
          appearance={{
            elements: {
              formButtonPrimary: 
                "bg-gradient-to-r from-primary to-primary-light hover:opacity-90 text-sm normal-case font-medium",
              card: "shadow-lg border bg-card w-full",
              headerTitle: "hidden",
              headerSubtitle: "hidden",
              socialButtonsBlockButton: "hidden",
              socialButtonsBlockButtonText: "hidden",
              dividerRow: "hidden",
              formFieldInput: "border-border focus:border-primary",
              footerActionLink: "text-primary hover:text-primary-light",
            },
          }}
        />

        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link 
              href="/sign-in" 
              className="font-medium text-primary hover:text-primary-light transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}