import { Preloader } from "@/components/ui/Preloader";
import { Navigation } from "@/components/ui/Navigation";
import { HeroScrollytelling } from "@/components/ui/HeroScrollytelling";
import { About } from "@/components/sections/About";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Capabilities } from "@/components/sections/Capabilities";
import { Principles } from "@/components/sections/Principles";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navigation />
      <main className="relative w-full bg-[#0f0f0f] text-white">
        {/* The Hero sticky section */}
        <HeroScrollytelling />
        
        {/* Refactored Section Components */}
        <div className="relative z-10 w-full bg-[#0f0f0f] -mt-[100vh] text-white pt-32 rounded-t-[40px]">
          <About />
          <Ecosystem />
          <Capabilities />
          <Principles />
        </div>

        {/* The Footer */}
        <Footer />
      </main>
    </>
  );
}
