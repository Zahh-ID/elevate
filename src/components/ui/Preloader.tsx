"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fake loading progress for dramatic effect (since it's a static/CSR demo)
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 15);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500); // Wait half a second at 100%
          return 100;
        }
        return next;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[200] bg-[#0f0f0f] text-white flex flex-col justify-end p-6 md:p-10"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        >
          {/* Centered Big Logo/Name */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: Math.min(progress / 50, 1), scale: 1 }}
              transition={{ duration: 0.5 }}
              className="heading-text text-7xl md:text-9xl tracking-widest text-[#1a1a1a]"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
            >
              ELEVATE
            </motion.h1>
          </div>

          <div className="flex justify-between items-end relative z-10 w-full mb-4">
            <div className="heading-text text-4xl md:text-6xl uppercase leading-none">
              Loading<br />
              <span className="text-accent">Experience</span>
            </div>
            <div className="heading-text text-6xl md:text-8xl leading-none">
              {progress}%
            </div>
          </div>

          {/* Progress Bar Line */}
          <div className="w-full h-[2px] bg-white/20 relative overflow-hidden mt-4">
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-accent"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
