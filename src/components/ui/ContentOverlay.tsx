"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView, useAnimation } from "framer-motion";
import { ArrowRight, Code2, ShieldAlert, Cpu, Zap } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Empty lines where CountUp used to be.

export function ContentOverlay() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: aboutScroll } = useScroll({
    target: aboutRef,
    offset: ["start 80%", "end center"]
  });

  const imgWidth = useTransform(aboutScroll, [0, 1], ["0%", "100%"]);
  
  // The split text for About
  const aboutText = "We are a Web3 infrastructure and consulting studio focused on building scalable blockchain applications, DeFi protocols, and cross-chain integrations.";
  const words = aboutText.split(" ");

  return (
    <div className="relative z-10 w-full bg-[#0f0f0f] -mt-[100vh] text-white pt-32 rounded-t-[40px]">
      
      {/* About Section - Character Reveal & Image Expansion */}
      <section ref={aboutRef} className="py-32 px-6 md:px-20 max-w-7xl mx-auto border-t border-white/10" id="consulting">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="w-full md:w-1/3">
            <h3 className="heading-text text-2xl text-gray-500 mb-4 tracking-widest uppercase">The Studio</h3>
            <p className="text-xl font-light text-gray-300">Technical development and strategic blockchain consulting.</p>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-3xl md:text-5xl leading-tight font-light hidden md:flex md:flex-wrap md:items-center">
              {words.map((word, i) => {
                // Determine if we should insert the expanding image here
                if (i === 5) {
                  return (
                    <span key={i} className="inline-flex items-center mx-2 h-[1em] align-middle overflow-hidden rounded-full shrink-0">
                      
                    </span>
                  );
                }
                const wordOpacity = useTransform(aboutScroll, [0, 1], [0.1, 1]);
                return (
                  <motion.span key={i} className="mr-2 md:mr-3 inline-block" style={{ opacity: wordOpacity }}>
                    {word}
                  </motion.span>
                );
              })}
            </p>
            {/* Fallback for mobile */}
            <p className="text-2xl leading-tight font-light md:hidden text-gray-200">
              {aboutText}
            </p>
          </div>
        </div>
      </section>

      {/* Sponsor Marquee */}
      <section className="py-20 border-y border-white/10 overflow-hidden bg-white/5 w-full max-w-[100vw]" id="sponsors">
        <h3 className="text-center text-sm tracking-widest uppercase text-gray-500 mb-12 heading-text">Core Ecosystem Integration</h3>
        <div className="flex">
          <motion.div 
            className="flex whitespace-nowrap gap-16 md:gap-32 items-center px-8"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-16 md:gap-32 items-center">
                <span className="heading-text text-3xl md:text-5xl opacity-40 hover:opacity-100 transition-opacity cursor-pointer">Ethereum</span>
                <span className="text-accent">•</span>
                <span className="heading-text text-3xl md:text-5xl opacity-40 hover:opacity-100 transition-opacity cursor-pointer">Cosmos</span>
                <span className="text-accent">•</span>
                <span className="heading-text text-3xl md:text-5xl opacity-40 hover:opacity-100 transition-opacity cursor-pointer">Solana</span>
                <span className="text-accent">•</span>
                <span className="heading-text text-3xl md:text-5xl opacity-40 hover:opacity-100 transition-opacity cursor-pointer">Polygon</span>
                <span className="text-accent">•</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divisions Bento Grid */}
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

      {/* Core Principles Section */}
      <section className="py-20 border-y border-white/10 bg-[#161616]">
        <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          <div>
            <div className="text-sm tracking-widest uppercase text-accent mb-4 heading-text">Protocol Mechanics</div>
            <p className="text-gray-400 font-light leading-relaxed">Focused on protocol design, DEX mechanics, and cross-chain infrastructure.</p>
          </div>
          <div>
            <div className="text-sm tracking-widest uppercase text-accent mb-4 heading-text">Architecture</div>
            <p className="text-gray-400 font-light leading-relaxed">Research-driven architecture for scalable blockchain systems.</p>
          </div>
          <div>
            <div className="text-sm tracking-widest uppercase text-accent mb-4 heading-text">Design Principles</div>
            <p className="text-gray-400 font-light leading-relaxed">Built with security-first and mechanism-driven design principles.</p>
          </div>
          <div>
            <div className="text-sm tracking-widest uppercase text-accent mb-4 heading-text">Integrations</div>
            <p className="text-gray-400 font-light leading-relaxed">Designing protocol mechanics and blockchain infrastructure for real-world integrations.</p>
          </div>
        </div>
      </section>


    </div>
  );
}
