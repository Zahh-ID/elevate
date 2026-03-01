import { Preloader } from "@/components/ui/Preloader";
import { Navigation } from "@/components/ui/Navigation";
import { HeroScrollytelling } from "@/components/ui/HeroScrollytelling";
import { ContentOverlay } from "@/components/ui/ContentOverlay";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navigation />
      <main className="relative w-full bg-[#0f0f0f] text-white">
        {/* The Hero sticky section */}
        <HeroScrollytelling />
        
        {/* The scrolling overlapping content */}
        <ContentOverlay />

        {/* The Footer */}
        <Footer />
      </main>
    </>
  );
}
