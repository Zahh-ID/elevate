"use client";

import { motion } from "framer-motion";

export function Ecosystem() {
  return (
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
  );
}
