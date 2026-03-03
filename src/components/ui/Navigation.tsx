"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SplitText } from "./SplitText";

const LINKS = [
  { name: "Consulting", href: "#consulting" },
  { name: "Engineering", href: "#engineering" },
  { name: "Our Team", href: "#team" },
];

const SOCIALS = [
  { name: "Instagram", href: "https://instagram.com/elevate.devs" },
  { name: "Twitter", href: "https://twitter.com/elevate.devs" },
  { name: "TikTok", href: "https://tiktok.com/@elevate.devs" },
];

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
        <div className="heading-text text-2xl tracking-widest cursor-pointer hover:text-accent transition-colors">
          ELEVATE
        </div>
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
              <div className="heading-text text-2xl tracking-widest text-accent">
                ELEVATE
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
                    <SplitText>{link.name}</SplitText>
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
