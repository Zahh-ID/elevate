"use client";

import { motion } from "framer-motion";

interface SplitTextProps {
  children: string;
}

export function SplitText({ children }: SplitTextProps) {
  return (
    <span className="inline-flex group heading-text text-8xl md:text-9xl cursor-pointer">
      {children.split("").map((char, i) => (
        <span key={i} className="relative overflow-hidden inline-flex">
          {/* Invisible spacer defines the exact clipping height bounds */}
          <span className="invisible leading-none py-0.5">{char === " " ? "\u00A0" : char}</span>
          
          {/* Sliding track inside bounds */}
          <motion.span
            className="absolute left-0 top-0 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2"
            style={{ transitionDelay: `${i * 0.02}s` }}
          >
            <span className="leading-none py-0.5">{char === " " ? "\u00A0" : char}</span>
            <span className="leading-none py-0.5 text-accent">{char === " " ? "\u00A0" : char}</span>
          </motion.span>
        </span>
      ))}
    </span>
  );
}
