"use client";

import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const brandColors = [
  { name: "Aqua", value: "#3DE1DA", textClass: "text-[#0B173B]" },
  { name: "Primary Blue", value: "#0050CA", textClass: "text-white" },
  { name: "Deep Navy", value: "#0B173B", textClass: "text-white" },
  { name: "Navy", value: "#18317B", textClass: "text-white" },
  { name: "White", value: "#FEFEFE", textClass: "text-[#0B173B]" },
];

const typographySamples = [
  { label: "Heading / Display", className: "heading-text text-6xl md:text-8xl", sample: "ELEVATE" },
  { label: "Heading / Section", className: "heading-text text-4xl md:text-5xl", sample: "OUR CAPABILITIES" },
  { label: "Heading / Card", className: "heading-text text-2xl md:text-3xl", sample: "CREATIVE DIRECTION" },
  { label: "Body / Large", className: "font-light text-xl md:text-2xl", sample: "A multidisciplinary creative studio delivering strategy, design, and technology solutions." },
  { label: "Body / Regular", className: "font-light text-base", sample: "Shaping brand narratives and visual identity across digital experiences." },
  { label: "Label / Uppercase", className: "text-sm tracking-widest uppercase", sample: "Strategy" },
];

const logoVariants = [
  { label: "Primary", file: "/brand/logo/Logo.svg", bg: "#FEFEFE" },
  { label: "Dark", file: "/brand/logo/Logo-1.svg", bg: "#000000" },
  { label: "Monochrome", file: "/brand/logo/Logo-2.svg", bg: "#FEFEFE" },
  { label: "Blue", file: "/brand/logo/Logo-3.svg", bg: "#0050CA" },
];

const downloadAssets = [
  { name: "Logo — Primary (Gradient)", file: "/brand/logo/Logo.svg" },
  { name: "Logo — Dark (White on Black)", file: "/brand/logo/Logo-1.svg" },
  { name: "Logo — Monochrome (Navy on White)", file: "/brand/logo/Logo-2.svg" },
  { name: "Logo — Blue (White on Blue)", file: "/brand/logo/Logo-3.svg" },
];

export default function BrandPage() {
  return (
    <main className="bg-[#0f0f0f] min-h-screen text-white flex flex-col">
      <Navigation />

      <div className="flex-1 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          {/* Header */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <h1 className="heading-text text-6xl md:text-8xl mb-4">Brand Guidelines</h1>
            <p className="text-gray-400 font-light text-lg md:text-xl max-w-2xl">
              A reference for maintaining visual consistency across all Elevate touchpoints.
            </p>
          </motion.div>

          {/* Brand Story */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
          >
            <h2 className="heading-text text-3xl md:text-4xl text-[#0050CA] mb-10">The Name</h2>
            <div className="border-t border-white/10" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 py-10">
              <div>
                <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-200">
                  Elevate comes from the word &ldquo;to elevate&rdquo;, meaning to lift and bring something to a higher level.
                </p>
                <p className="text-gray-400 font-light leading-relaxed mt-4">
                  It reflects our commitment to helping businesses evolve from conventional digital systems (Web2) to a more transparent, secure, and valuable decentralized ecosystem (Web3).
                </p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-200">
                  The design is inspired by interconnected chains, symbolizing the main concept of blockchain.
                </p>
                <p className="text-gray-400 font-light leading-relaxed mt-4">
                  Each interlocking element represents the interconnection between data blocks that form a strong, secure, and transparent system.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Logo */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
          >
            <h2 className="heading-text text-3xl md:text-4xl text-[#0050CA] mb-10">Logo</h2>
            <div className="border-t border-white/10" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
              {logoVariants.map((v) => (
                <div
                  key={v.label}
                  className="rounded-3xl border border-white/10 p-8 md:p-10 flex flex-col items-center justify-center gap-4"
                  style={{ backgroundColor: v.bg }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={v.file} alt={`Elevate logo — ${v.label}`} className="w-full max-w-[320px] h-auto" />
                  <span className={`text-xs uppercase tracking-widest ${v.bg === "#FEFEFE" ? "text-[#0B173B]/50" : "text-white/50"}`}>
                    {v.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <p className="text-gray-500 font-light text-sm">
                The logo consists of a geometric mark and the &ldquo;ELEVATE&rdquo; wordmark. Maintain clear space equal to the height of the &ldquo;E&rdquo; in the wordmark. Do not distort, rotate, or alter the logo.
              </p>
              <p className="text-gray-500 font-light text-sm">
                <strong className="text-gray-400">Primary:</strong> Left structure uses a gradient from <span className="text-[#3DE1DA]">#3DE1DA</span> to <span className="text-[#0050CA]">#0050CA</span>. Right structure and bar use <span className="text-gray-400">#0B173B</span>. Wordmark paths in <span className="text-gray-400">#0B173B</span>.
              </p>
              <p className="text-gray-500 font-light text-sm">
                <strong className="text-gray-400">Alternate variants:</strong> Dark (all white on black), Monochrome (all navy on white), Blue (all white on #0050CA).
              </p>
            </div>
          </motion.section>

          {/* Colors */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
          >
            <h2 className="heading-text text-3xl md:text-4xl text-[#0050CA] mb-10">Color Palette</h2>
            <div className="border-t border-white/10" />

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 py-10">
              {brandColors.map((color) => (
                <div key={color.name} className="flex flex-col gap-3">
                  <div
                    className="h-32 md:h-36 rounded-2xl flex items-end p-4 border border-white/5"
                    style={{ backgroundColor: color.value }}
                  >
                    <span className={`text-xs font-mono ${color.textClass}`}>{color.value}</span>
                  </div>
                  <span className="text-sm text-gray-400">{color.name}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-500 font-light text-sm">
              Primary Blue (#0050CA) is the main brand accent. Aqua (#3DE1DA) is used for gradients and highlights. Deep Navy (#0B173B) and Navy (#18317B) serve as dark tones.
            </p>
          </motion.section>

          {/* Typography */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.4 }}
          >
            <h2 className="heading-text text-3xl md:text-4xl text-[#0050CA] mb-10">Typography</h2>
            <div className="border-t border-white/10" />

            <div className="py-10 space-y-0">
              {typographySamples.map((item) => (
                <div key={item.label} className="py-8 border-b border-white/[0.06]">
                  <span className="text-xs text-gray-500 uppercase tracking-widest block mb-4">
                    {item.label}
                  </span>
                  <p className={item.className}>{item.sample}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-6">
              <div>
                <h3 className="text-sm text-gray-500 uppercase tracking-widest mb-3">Heading Font</h3>
                <p className="heading-text text-4xl mb-2">Bebas Neue</p>
                <p className="text-gray-400 font-light text-sm">Used for all headings, labels, and display text. Always uppercase with 0.02em letter spacing.</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 uppercase tracking-widest mb-3">Body Font</h3>
                <p className="text-4xl font-light mb-2">Manrope</p>
                <p className="text-gray-400 font-light text-sm">Used for body copy, descriptions, and UI elements. Light to regular weight.</p>
              </div>
            </div>
          </motion.section>

          {/* Components */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.5 }}
          >
            <h2 className="heading-text text-3xl md:text-4xl text-[#0050CA] mb-10">Components</h2>
            <div className="border-t border-white/10" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
              <div className="rounded-3xl bg-[#111] border border-white/10 p-8">
                <span className="text-xs text-gray-500 uppercase tracking-widest block mb-4">Border Radius</span>
                <div className="flex gap-4 items-end">
                  <div className="w-16 h-16 rounded-3xl bg-[#0050CA]/20 border border-[#0050CA]/40" />
                  <div className="w-12 h-12 rounded-2xl bg-[#0050CA]/20 border border-[#0050CA]/40" />
                  <div className="w-8 h-8 rounded-full bg-[#0050CA]/20 border border-[#0050CA]/40" />
                </div>
                <p className="text-gray-400 font-light text-sm mt-4">24px (cards), 16px (buttons), full (pills)</p>
              </div>
              <div className="rounded-3xl bg-[#111] border border-white/10 p-8">
                <span className="text-xs text-gray-500 uppercase tracking-widest block mb-4">Borders</span>
                <div className="space-y-4">
                  <div className="h-[1px] bg-white/10" />
                  <div className="h-[1px] bg-white/[0.06]" />
                  <div className="h-[1px] bg-[#0050CA]/40" />
                </div>
                <p className="text-gray-400 font-light text-sm mt-4">white/10 (sections), white/6 (subtle), blue/40 (active)</p>
              </div>
              <div className="rounded-3xl bg-[#111] border border-white/10 p-8">
                <span className="text-xs text-gray-500 uppercase tracking-widest block mb-4">Backgrounds</span>
                <div className="flex gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0f0f0f] border border-white/10" />
                  <div className="w-12 h-12 rounded-xl bg-[#111] border border-white/10" />
                  <div className="w-12 h-12 rounded-xl bg-[#0B173B] border border-white/10" />
                  <div className="w-12 h-12 rounded-xl bg-[#0050CA]/10 border border-[#0050CA]/20" />
                </div>
                <p className="text-gray-400 font-light text-sm mt-4">#0f0f0f, #111, #0B173B, blue/10</p>
              </div>
            </div>
          </motion.section>

          {/* Download Assets */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.6 }}
          >
            <h2 className="heading-text text-3xl md:text-4xl text-[#0050CA] mb-10">Download Assets</h2>
            <div className="border-t border-white/10" />

            <div className="py-10">
              {downloadAssets.map((asset, i) => (
                <div key={asset.name}>
                  <a
                    href={asset.file}
                    download
                    className="group flex items-center justify-between py-5 hover:pl-3 transition-all duration-300"
                  >
                    <span className="font-light group-hover:text-[#3DE1DA] transition-colors duration-300">
                      {asset.name}
                    </span>
                    <span className="text-xs text-gray-500 uppercase tracking-widest group-hover:text-[#3DE1DA] transition-colors duration-300">
                      SVG
                    </span>
                  </a>
                  {i < downloadAssets.length - 1 && (
                    <div className="border-t border-white/[0.06]" />
                  )}
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
