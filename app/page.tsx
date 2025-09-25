import HeroSectionOne from "@/components/ui/hero-section-demo-1-fixed";
import WaitlistSection from "@/components/ui/waitlist-section";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSectionOne />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
}
