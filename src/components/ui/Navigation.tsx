"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SplitText } from "./SplitText";

const LINKS = [
  { name: "Consulting", href: "#consulting" },
  { name: "Our Projects", href: "/projects" },
  { name: "Our Team", href: "/team" },
];

const SOCIALS = [
  { name: "Instagram", href: "https://instagram.com/elevate.devs" },
  { name: "Twitter", href: "https://twitter.com/elevatedevs" },
  { name: "TikTok", href: "https://tiktok.com/@elevate.devs" },
];

const logoVariants: Variants = {
  closed: { opacity: 0 },
  open: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
};

const partTransition = { duration: 1.2, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] };

const baseVariants: Variants = {
  closed: { y: 40, opacity: 0 },
  open: { y: 0, opacity: 1, transition: partTransition }
};

const leftVariants: Variants = {
  closed: { x: -40, y: -40, opacity: 0 },
  open: { x: 0, y: 0, opacity: 1, transition: partTransition }
};

const rightVariants: Variants = {
  closed: { x: 40, opacity: 0 },
  open: { x: 0, opacity: 1, transition: partTransition }
};

function AnimatedLogo({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.div 
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={logoVariants}
      className="relative w-10 h-10"
    >
      <motion.div variants={baseVariants} className="absolute inset-0">
        <svg viewBox="0 0 270 299" fill="none" className="w-full h-full">
          {/* <path 
            d="M176.424 141.421H62.1606C60.8274 141.421 59.7466 140.34 59.7466 139.007V107.222C59.7466 105.889 60.8274 104.808 62.1606 104.808H176.424C177.757 104.808 178.838 105.889 178.838 107.222V139.007C178.838 140.34 177.757 141.421 176.424 141.421Z" 
            fill="currentColor" 
          /> */}
        </svg>
      </motion.div>

      <motion.div variants={leftVariants} className="absolute inset-0">
        <svg viewBox="0 0 270 299" fill="none" className="w-full h-full">
          <path 
            d="M96.728 133.093L8.04676 168.176C8.04676 168.176 5.02924 257.695 7.44324 243.613C9.85725 229.532 179.441 159.123 179.441 159.123V105.166C179.441 104.086 178.399 103.313 177.366 103.625L138.202 115.47V100.181L215.638 63.926C216.628 63.4625 217.261 62.4891 217.261 61.3962V6.4949C217.261 3.50492 214.115 1.57089 211.44 2.90668L60.8596 78.1006C60.1776 78.4412 59.7467 79.138 59.7467 79.9003V135.689C59.7467 136.17 60.1662 136.544 60.6442 136.488L96.5336 132.319C97.0011 132.265 97.1656 132.92 96.728 133.093Z" 
            fill="currentColor"
          />
          <path 
            d="M176.424 141.421H62.1606C60.8274 141.421 59.7466 140.34 59.7466 139.007V107.222C59.7466 105.889 60.8274 104.808 62.1606 104.808H176.424C177.757 104.808 178.838 105.889 178.838 107.222V139.007C178.838 140.34 177.757 141.421 176.424 141.421Z" 
            fill="currentColor" 
          />
        </svg>
      </motion.div>

      <motion.div variants={rightVariants} className="absolute inset-0">
        <svg viewBox="0 0 270 299" fill="none" className="w-full h-full text-accent">
          <path 
            d="M104.623 295.065C85.321 285.774 34.4508 261.23 11.5083 249.621C5.01747 246.336 5.32261 240.975 11.9366 237.946L106.754 194.523C109.419 193.303 112.452 195.25 112.452 198.181V218.025C112.452 218.897 113.348 219.481 114.146 219.13L203.782 179.642V106.027C203.782 104.102 205.026 102.398 206.859 101.812L266.537 82.7149C267.835 82.2996 269.162 83.268 269.162 84.6309V214.613C269.162 217.962 267.271 221.025 264.277 222.525L119.84 294.929C115.053 297.329 109.447 297.387 104.623 295.065Z" 
            fill="currentColor"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when menu is open
  if (typeof document !== "undefined") {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }

  const menuVariants = {
    closed: {
      clipPath: "circle(0% at 100% 0)",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      clipPath: "circle(150% at 100% 0)",
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 40,
      },
    },
  };

  const linkContainerVariants = {
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const linkItemVariants = {
    closed: { opacity: 0, y: 50 },
    open: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] } },
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 md:p-10 mix-blend-difference text-white">
        <Link href="/" className="heading-text text-2xl tracking-widest cursor-pointer hover:text-accent transition-colors">
          ELEVATE
        </Link>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 group"
          aria-label="Open Menu"
        >
          <span className="heading-text text-xl group-hover:text-accent transition-colors">MENU</span>
          <Menu className="w-6 h-6 group-hover:text-accent transition-colors" />
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[100] bg-[#0f0f0f] text-white flex flex-col"
          >
            <div className="flex justify-between items-center p-6 md:p-10">
              <div className="flex items-center gap-4">
                <AnimatedLogo isOpen={isOpen} />
                <Link 
                  href="/" 
                  onClick={() => setIsOpen(false)}
                  className="heading-text text-2xl tracking-widest text-accent hover:opacity-80 transition-opacity"
                >
                  ELEVATE
                </Link>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 group"
                aria-label="Close Menu"
              >
                <span className="heading-text text-xl group-hover:text-red-500 transition-colors">CLOSE</span>
                <X className="w-6 h-6 group-hover:text-red-500 transition-colors" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 md:px-10 py-10 flex flex-col md:flex-row justify-between h-full">
              {/* Left Side: Socials & Contact */}
              <div className="hidden md:flex flex-col justify-end pb-10 gap-12 w-1/4">
                <div>
                  <h3 className="text-sm text-gray-400 mb-4 uppercase tracking-widest">Connect</h3>
                  <ul className="flex flex-col gap-2">
                    {SOCIALS.map((s) => (
                      <motion.li key={s.name} className="w-fit">
                        <a 
                          href={s.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-accent cursor-pointer transition-colors"
                        >
                          {s.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm text-gray-400 mb-4 uppercase tracking-widest">Contact</h3>
                  <a href="mailto:devs.elevate@gmail.com" className="text-xl font-light hover:text-accent transition-colors">
                    devs.elevate@gmail.com
                  </a>
                </div>
              </div>

              {/* Center/Right Side: Main Links */}
                <motion.nav
                  variants={linkContainerVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="flex flex-col justify-center h-full gap-4 md:gap-6 lg:gap-8 overflow-visible"
                >
                {LINKS.map((link) => (
                  <motion.div key={link.name} variants={linkItemVariants} className="py-2">
                    <Link 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="block group/link"
                    >
                      <SplitText>{link.name}</SplitText>
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              {/* Right Side: News Teaser (Visible on large screens) */}
              <div className="hidden lg:flex flex-col justify-end pb-10 w-1/4 pl-20">
                <h3 className="text-sm text-gray-400 mb-6 uppercase tracking-widest">Latest News</h3>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-accent/50 transition-colors cursor-pointer group">
                  <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">Announcement</span>
                  <h4 className="text-lg leading-tight mb-4 text-gray-200 group-hover:text-white transition-colors">Elevate launches highly anticipated DeFi margin protocol.</h4>
                  <p className="text-sm text-gray-500">Read the full story →</p>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
