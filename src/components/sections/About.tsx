"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end center"]
  });

  const aboutText = "We are a multidisciplinary creative studio delivering strategy, design, and technology solutions that elevate brands and digital experiences.";
  const words = aboutText.split(" ");

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-20 max-w-7xl mx-auto border-t border-white/10" id="solutions">
      <div className="flex flex-col md:flex-row gap-16 items-start">
        <div className="w-full md:w-1/3">
          <h3 className="heading-text text-2xl text-gray-500 mb-4 tracking-widest uppercase">Solutions</h3>
          <p className="text-xl font-light text-gray-300">Creative direction and strategic digital solutions.</p>
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-3xl md:text-5xl leading-tight font-light hidden md:flex md:flex-wrap md:items-center">
            {words.map((word, i) => {
              const wordOpacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
              return (
                <motion.span key={i} className="mr-2 md:mr-3 inline-block" style={{ opacity: wordOpacity }}>
                  {word}
                </motion.span>
              );
            })}
          </p>
          <p className="text-2xl leading-tight font-light md:hidden text-gray-200">
            {aboutText}
          </p>
        </div>
      </div>
    </section>
  );
}
