"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/ui/Navigation";
import { Footer } from "@/components/ui/Footer";
import { ExternalLink, Github, Code2, Cpu, Zap, Globe } from "lucide-react";

const PROJECTS = [
  {
    title: "DeFi Margin Protocol",
    description: "A high-performance margin trading protocol built for the Cosmos ecosystem, featuring automated liquidations and specialized pools.",
    tags: ["Cosmos", "Rust", "DeFi"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
    link: "#",
    github: "#",
    icon: <Zap className="w-6 h-6 text-accent" />
  },
  {
    title: "Cross-Chain Bridge Infrastructure",
    description: "Resilient infrastructure for seamless token transfers and message passing across EVM and non-EVM networks.",
    tags: ["Solidity", "Go", "Interoperability"],
    image: "https://images.unsplash.com/photo-1558494949-ef010ccdcc91?q=80&w=2892&auto=format&fit=crop",
    link: "#",
    github: "#",
    icon: <Globe className="w-6 h-6 text-accent" />
  },
  {
    title: "Liquidity Management Engine",
    description: "Advanced algorithms for optimizing liquidity provision and reducing impermanent loss in automated market makers.",
    tags: ["Solana", "Anchor", "Algorithms"],
    image: "https://images.unsplash.com/photo-1642790103517-1a5a6df88a9a?q=80&w=2833&auto=format&fit=crop",
    link: "#",
    github: "#",
    icon: <Cpu className="w-6 h-6 text-accent" />
  }
];

export default function ProjectsPage() {
  return (
    <main className="bg-[#0f0f0f] min-h-screen text-white">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6 md:px-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="heading-text text-6xl md:text-8xl mb-6">Our <span className="text-accent">Projects</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            Architecting the next generation of decentralized finance. From protocol mechanics to full-stack engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-white/5 border border-white/10 rounded-[40px] overflow-hidden flex flex-col lg:flex-row hover:border-accent/30 transition-colors"
            >
              <div className="w-full lg:w-1/2 h-[300px] lg:h-auto relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:hidden" />
              </div>
              
              <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6 flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-2xl border border-accent/20">
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/10 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <h2 className="heading-text text-4xl mb-4 group-hover:text-accent transition-colors">{project.title}</h2>
                <p className="text-lg text-gray-400 font-light mb-8 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex gap-6">
                  <a href={project.github} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                    Source
                  </a>
                  <a href={project.link} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
