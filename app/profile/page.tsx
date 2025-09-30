import { UserProfile } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const user = await currentUser();
  
  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="bg-background py-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Profile Settings</h1>
          <p className="text-muted-foreground mt-2">
            Manage your account settings and preferences
          </p>
        </div>
        
        <div className="flex justify-center">
          <UserProfile 
            appearance={{
              elements: {
                card: "shadow-lg border border-border",
                navbar: "hidden",
                navbarMobileMenuButton: "hidden",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}