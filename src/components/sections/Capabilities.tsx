"use client";

import { ArrowRight, Code2, ShieldAlert, Cpu, Zap } from "lucide-react";

export function Capabilities() {
  return (
    <section className="py-32 px-6 md:px-20 max-w-7xl mx-auto" id="engineering">
      <div className="mb-16">
        <h2 className="heading-text text-5xl md:text-7xl">Our Capabilities</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {/* Card 1: Wide */}
        <div className="md:col-span-2 group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-8 flex flex-col justify-end">
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop" className="absolute inset-0 object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700 w-full h-full mix-blend-luminosity" alt="Engineering" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="relative z-10">
            <Code2 className="w-10 h-10 text-accent mb-4" />
            <h3 className="heading-text text-4xl mb-2">Smart Contract Architecture</h3>
            <p className="text-gray-400 max-w-md">Designing core architectures, DEX mechanics, and specialized liquidity systems.</p>
          </div>
        </div>
        
        {/* Card 2: Square */}
        <div className="md:col-span-1 group relative rounded-3xl overflow-hidden bg-[#111] border border-white/10 p-8 flex flex-col justify-end hover:border-accent/50 transition-colors">
          <ShieldAlert className="w-10 h-10 text-red-500 mb-4" />
          <h3 className="heading-text text-4xl mb-2">Data Infrastructure</h3>
          <p className="text-gray-400">Building resilient blockchain data infrastructure and indexing solutions.</p>
        </div>

        {/* Card 3: Square */}
        <div className="md:col-span-1 group relative rounded-3xl overflow-hidden bg-accent/10 border border-accent/20 p-8 flex flex-col justify-end hover:bg-accent/20 transition-colors">
          <Zap className="w-10 h-10 text-accent mb-4" />
          <h3 className="heading-text text-4xl mb-2 text-accent">Cross-Chain Integration</h3>
          <p className="text-gray-300">Seamless payment gateway integrations and cross-chain bridging networks.</p>
        </div>

        {/* Card 4: Wide */}
        <div className="md:col-span-2 group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-8 flex flex-col justify-end">
           <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop" className="absolute inset-0 object-cover opacity-10 group-hover:opacity-30 transition-opacity duration-700 w-full h-full mix-blend-luminosity" alt="Infrastructure" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
           <div className="relative z-10 flex justify-between items-end">
            <div>
              <Cpu className="w-10 h-10 text-gray-400 mb-4" />
              <h3 className="heading-text text-4xl mb-2">Ecosystem Specialists</h3>
              <p className="text-gray-400 max-w-md">We specialize in Cosmos-based chains, Solana ecosystem integrations, and EVM-compatible networks.</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-colors shrink-0">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
