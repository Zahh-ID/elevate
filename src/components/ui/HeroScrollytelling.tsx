"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroScrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Vector 1 (Left Wing)
  const v1X = useTransform(scrollYProgress, [0.1, 0.4], ["-80vw", "0vw"]);
  const v1Y = useTransform(scrollYProgress, [0.1, 0.4], ["-80vh", "0vh"]);
  const v1Opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.4], [0, 1, 1]);

  // Vector 2 (Right Wing)
  const v2X = useTransform(scrollYProgress, [0.1, 0.4], ["80vw", "0vw"]);
  const v2Y = useTransform(scrollYProgress, [0.1, 0.4], ["80vh", "0vh"]);
  const v2Opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.4], [0, 1, 1]);

  // Vector 5 (Base / Middle)
  const v5Y = useTransform(scrollYProgress, [0.1, 0.4], ["80vh", "0vh"]);
  const v5Opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.4], [0, 1, 1]);

  // Text Opacities & Transforms based on scroll position
  const titleOpacity = useTransform(scrollYProgress, [0, 0.05, 0.15], [1, 1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.15], ["0vh", "-15vh"]);
  const titleScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.8]);

  const slogan1Opacity = useTransform(scrollYProgress, [0.35, 0.45, 0.6], [0, 1, 0]);
  const slogan1X = useTransform(scrollYProgress, [0.35, 0.45], ["-10vw", "0vw"]);
  const slogan1Scale = useTransform(scrollYProgress, [0.35, 0.45], [0.8, 1]);

  const slogan2Opacity = useTransform(scrollYProgress, [0.6, 0.7, 0.85], [0, 1, 0]);
  const slogan2X = useTransform(scrollYProgress, [0.6, 0.7], ["10vw", "0vw"]);
  const slogan2Scale = useTransform(scrollYProgress, [0.6, 0.7], [0.8, 1]);

  return (
    <section ref={containerRef} className="relative h-[400vh] w-full bg-[#0f0f0f]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Grid Pattern (Optional polish) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

        {/* Text Overlays */}
        <motion.div 
          style={{ opacity: titleOpacity, y: titleY, scale: titleScale }}
          className="absolute z-50 flex flex-col items-center text-center px-4 w-full"
        >
          <h1 className="heading-text text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-4 text-white">
            ELEVATE <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">Build Your Web3 Vision</span>
          </h1>
          <p className="font-light text-white/50 text-base md:text-xl lg:text-2xl max-w-2xl leading-relaxed">
            Smart contracts, dApps, token systems, and beyond.
          </p>
        </motion.div>

        <motion.div 
          style={{ opacity: slogan1Opacity, x: slogan1X, scale: slogan1Scale }}
          className="absolute z-50 left-6 md:left-12 lg:left-[5%] text-left max-w-[240px] md:max-w-[300px] lg:max-w-[340px] pointer-events-none drop-shadow-md"
        >
          <h2 className="heading-text text-4xl md:text-6xl text-white/90">
            Designing Web3<br />Infrastructure
          </h2>
          <p className="mt-2 md:mt-4 font-light text-white/50 text-base md:text-lg leading-relaxed">
            Protocol architecture, liquidity systems, and cross-chain integrations.
          </p>
        </motion.div>

        <motion.div 
          style={{ opacity: slogan2Opacity, x: slogan2X, scale: slogan2Scale }}
          className="absolute z-50 right-6 md:right-12 lg:right-[5%] text-right max-w-[240px] md:max-w-[300px] lg:max-w-[340px] pointer-events-none drop-shadow-md"
        >
          <h2 className="heading-text text-4xl md:text-6xl text-white/90">
            Strategic Consulting
          </h2>
          <p className="mt-2 md:mt-4 font-light text-white/50 text-base md:text-lg leading-relaxed">
            Delivering technical development and strategic consulting across interconnected ecosystems.
          </p>
        </motion.div>

        {/* The SVG Logo Sections broken into isolated canvas layers to prevent boundary clipping */}
        <div className="relative z-0 w-[200px] h-[220px] md:w-[270px] md:h-[299px] pointer-events-none">
          
          {/* Vector 5 (Horizontal Base) */}
          <motion.div 
            style={{ y: v5Y, opacity: v5Opacity }} 
            className="absolute inset-0"
          >
            <svg width="100%" height="100%" viewBox="0 0 270 299" fill="none" className="overflow-visible">
              <path 
                d="M176.424 141.421H62.1606C60.8274 141.421 59.7466 140.34 59.7466 139.007V107.222C59.7466 105.889 60.8274 104.808 62.1606 104.808H176.424C177.757 104.808 178.838 105.889 178.838 107.222V139.007C178.838 140.34 177.757 141.421 176.424 141.421Z" 
                fill="currentColor" 
                className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              />
            </svg>
          </motion.div>
          
          {/* Vector 1 (Left Structure) */}
          <motion.div 
            style={{ x: v1X, y: v1Y, opacity: v1Opacity }} 
            className="absolute inset-0"
          >
            <svg width="100%" height="100%" viewBox="0 0 270 299" fill="none" className="overflow-visible">
              <path 
                d="M96.728 133.093L8.04676 168.176C8.04676 168.176 5.02924 257.695 7.44324 243.613C9.85725 229.532 179.441 159.123 179.441 159.123V105.166C179.441 104.086 178.399 103.313 177.366 103.625L138.202 115.47V100.181L215.638 63.926C216.628 63.4625 217.261 62.4891 217.261 61.3962V6.4949C217.261 3.50492 214.115 1.57089 211.44 2.90668L60.8596 78.1006C60.1776 78.4412 59.7467 79.138 59.7467 79.9003V135.689C59.7467 136.17 60.1662 136.544 60.6442 136.488L96.5336 132.319C97.0011 132.265 97.1656 132.92 96.728 133.093Z" 
                fill="currentColor"
                className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              />
            </svg>
          </motion.div>

          {/* Vector 2 (Right Structure) */}
          <motion.div 
            style={{ x: v2X, y: v2Y, opacity: v2Opacity }} 
            className="absolute inset-0"
          >
            <svg width="100%" height="100%" viewBox="0 0 270 299" fill="none" className="overflow-visible">
              <path 
                d="M104.623 295.065C85.321 285.774 34.4508 261.23 11.5083 249.621C5.01747 246.336 5.32261 240.975 11.9366 237.946L106.754 194.523C109.419 193.303 112.452 195.25 112.452 198.181V218.025C112.452 218.897 113.348 219.481 114.146 219.13L203.782 179.642V106.027C203.782 104.102 205.026 102.398 206.859 101.812L266.537 82.7149C267.835 82.2996 269.162 83.268 269.162 84.6309V214.613C269.162 217.962 267.271 221.025 264.277 222.525L119.84 294.929C115.053 297.329 109.447 297.387 104.623 295.065Z" 
                fill="currentColor"
                className="text-accent drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
