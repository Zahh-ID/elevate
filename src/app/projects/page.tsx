import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { ComingSoon } from "@/components/sections/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | Elevate",
  description: "Explore our portfolio of cutting-edge Web3 infrastructure, DeFi margin protocols, cross-chain bridges, and automated market maker architectures.",
};

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
