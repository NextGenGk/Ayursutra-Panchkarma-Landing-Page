import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Activity } from "lucide-react";

export default async function AuthCallbackPage() {
  const user = await currentUser();
  
  if (!user) {
    redirect("/sign-in");
  }

  // Check if this is a new user (you can customize this logic)
  const isNewUser = user.createdAt && 
    new Date().getTime() - new Date(user.createdAt).getTime() < 60000; // Less than 1 minute old

  if (isNewUser) {
    redirect("/welcome");
  } else {
    redirect("/dashboard");
  }

  // This component shows while redirecting
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="h-16 w-16 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-4 animate-spin">
          <Activity className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-xl font-semibold text-foreground mb-2">Setting up your account...</h2>
        <p className="text-muted-foreground">Please wait while we redirect you to your dashboard.</p>
      </div>
    </div>
  );
}