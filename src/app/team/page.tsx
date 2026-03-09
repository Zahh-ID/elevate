import type { Metadata } from "next";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { TeamContent } from "@/components/team/TeamContent";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the people behind Elevate — builders, creatives, and strategists delivering strategy, design, and technology.",
  openGraph: {
    title: "Our Team | Elevate",
    description:
      "Meet the people behind Elevate — builders, creatives, and strategists.",
  },
};

export default function TeamPage() {
  return (
    <main className="bg-[#0f0f0f] min-h-screen text-white flex flex-col">
      <Navigation />
      <TeamContent />
      <Footer />
    </main>
  );
}
