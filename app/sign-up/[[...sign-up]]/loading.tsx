import { Activity } from "lucide-react";

export default function SignUpLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20 flex items-center justify-center">
      <div className="text-center">
        <div className="h-16 w-16 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-4 animate-pulse">
          <Activity className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-xl font-semibold text-foreground mb-2">Loading Sign Up</h2>
        <p className="text-muted-foreground">Please wait while we prepare your registration page...</p>
      </div>
    </div>
  );
}