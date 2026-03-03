"use client";

import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { ComingSoon } from "@/components/sections/ComingSoon";

export default function ProjectsPage() {
  return (
    <main className="bg-[#0f0f0f] min-h-screen text-white flex flex-col">
      <Navigation />
      
      <div className="flex-1 flex flex-col justify-center pt-20">
        <ComingSoon />
      </div>

      <Footer />
    </main>
  );
}
