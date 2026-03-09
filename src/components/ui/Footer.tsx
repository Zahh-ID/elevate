"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 w-full h-screen bg-[#050505] overflow-hidden flex flex-col items-center justify-center text-white border-t border-white/10" id="team">
      {/* Animated Glowing Light Background */}
      <motion.div 
        className="absolute bottom-[-50%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[120px] bg-accent/30 pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-4 mt-20">
        <h2 className="heading-text text-6xl md:text-[12rem] leading-none mb-6 tracking-tighter mix-blend-overlay">
          LET'S ELEVATE
        </h2>
        <a 
          href="mailto:build@elevate.hq" 
          className="group relative px-8 py-4 bg-white text-black rounded-full font-bold overflow-hidden"
        >
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">START BUILDING</span>
          <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </a>
      </div>

      <div className="absolute bottom-8 left-0 right-0 px-6 md:px-20 flex justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
        <span>© {new Date().getFullYear()} ELEVATE Studio</span>
        <div className="flex gap-6">
          <Link href="/brand" className="hover:text-accent transition-colors">Brand</Link>
          <a href="https://instagram.com/elevate.devs" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Instagram</a>
          <a href="https://twitter.com/elevatedevs" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Twitter</a>
          <a href="https://tiktok.com/@elevate.devs" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">TikTok</a>
        </div>
      </div>
    </footer>
  );
}
