"use client";

import { motion } from "framer-motion";

export function ComingSoon() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-20 relative overflow-hidden">
      {/* Background Animated Glow */}
      <motion.div 
        className="absolute w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative z-10 flex flex-col items-center gap-12">
        {/* The Animated Logo (Shake Effect) */}
        <motion.div 
          className="relative w-32 h-32 md:w-48 md:h-48"
          animate={{ 
            x: [-1, 1, -1, 1, 0],
            y: [1, -1, 1, -1, 0]
          }}
          transition={{ 
            duration: 0.2, 
            repeat: Infinity, 
            repeatType: "mirror" 
          }}
        >
          {/* Vector 1 (Left Structure) */}
          <div className="absolute inset-0 text-white opacity-40">
            <svg viewBox="0 0 270 299" fill="none" className="w-full h-full">
              <path d="M96.728 133.093L8.04676 168.176C8.04676 168.176 5.02924 257.695 7.44324 243.613C9.85725 229.532 179.441 159.123 179.441 159.123V105.166C179.441 104.086 178.399 103.313 177.366 103.625L138.202 115.47V100.181L215.638 63.926C216.628 63.4625 217.261 62.4891 217.261 61.3962V6.4949C217.261 3.50492 214.115 1.57089 211.44 2.90668L60.8596 78.1006C60.1776 78.4412 59.7467 79.138 59.7467 79.9003V135.689C59.7467 136.17 60.1662 136.544 60.6442 136.488L96.5336 132.319C97.0011 132.265 97.1656 132.92 96.728 133.093Z" fill="currentColor" />
              <path d="M176.424 141.421H62.1606C60.8274 141.421 59.7466 140.34 59.7466 139.007V107.222C59.7466 105.889 60.8274 104.808 62.1606 104.808H176.424C177.757 104.808 178.838 105.889 178.838 107.222V139.007C178.838 140.34 177.757 141.421 176.424 141.421Z" fill="white" />
            </svg>
          </div>

          {/* Vector 2 (Right Structure) */}
          <div className="absolute inset-0 text-accent opacity-80">
            <svg viewBox="0 0 270 299" fill="none" className="w-full h-full">
              <path d="M104.623 295.065C85.321 285.774 34.4508 261.23 11.5083 249.621C5.01747 246.336 5.32261 240.975 11.9366 237.946L106.754 194.523C109.419 193.303 112.452 195.25 112.452 198.181V218.025C112.452 218.897 113.348 219.481 114.146 219.13L203.782 179.642V106.027C203.782 104.102 205.026 102.398 206.859 101.812L266.537 82.7149C267.835 82.2996 269.162 83.268 269.162 84.6309V214.613C269.162 217.962 267.271 221.025 264.277 222.525L119.84 294.929C115.053 297.329 109.447 297.387 104.623 295.065Z" fill="currentColor" />
            </svg>
          </div>
        </motion.div>

        <div>
          <h1 className="heading-text text-5xl md:text-8xl tracking-tight mb-4">
            COMING <span className="text-accent underline decoration-white/10 decoration-8 underline-offset-8 italic">SOON</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl font-light tracking-widest uppercase">
            Architecting New Frontiers
          </p>
        </div>

        {/* Loading Bar Teaser */}
        <div className="w-64 h-[2px] bg-white/10 relative overflow-hidden">
          <motion.div 
            className="absolute left-0 top-0 bottom-0 bg-accent"
            animate={{ left: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: "30%" }}
          />
        </div>
      </div>
    </section>
  );
}
