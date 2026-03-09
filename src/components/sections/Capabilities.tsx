"use client";

import { type Variants, motion } from "framer-motion";

const categories = [
  {
    label: "Strategy",
    items: [
      {
        title: "Creative Direction",
        description: "Shaping brand narratives and visual identity across digital experiences.",
      },
      {
        title: "Technology Strategy",
        description: "Aligning technical decisions with business goals for scalable growth.",
      },
      {
        title: "Research & Development",
        description: "Exploring emerging technologies to drive innovation and competitive advantage.",
      },
      {
        title: "Content Strategy",
        description: "Developing messaging frameworks, editorial planning, and content systems.",
      },
    ],
  },
  {
    label: "Creative",
    items: [
      {
        title: "Art Direction",
        description: "Crafting cohesive visual systems that elevate brand presence.",
      },
      {
        title: "UX/UI Design",
        description: "Designing intuitive interfaces with user-centered principles.",
      },
      {
        title: "Illustration",
        description: "Custom visual storytelling that brings concepts to life.",
      },
      {
        title: "Graphics",
        description: "Producing high-quality visual assets for digital and print media.",
      },
      {
        title: "Motion Design",
        description: "Creating animations, micro-interactions, and dynamic visual content.",
      },
      {
        title: "Brand Identity",
        description: "Building logo systems, brand guidelines, and cohesive visual language.",
      },
    ],
  },
  {
    label: "Tech",
    items: [
      {
        title: "Web Development",
        description: "Building performant, responsive web applications with modern frameworks.",
      },
      {
        title: "Mobile Development",
        description: "Crafting native and cross-platform mobile apps for iOS and Android.",
      },
      {
        title: "Cloud & DevOps",
        description: "Managing infrastructure, CI/CD pipelines, and scalable deployments.",
      },
      {
        title: "API Development",
        description: "Designing backend services, RESTful APIs, and third-party integrations.",
      },
      {
        title: "Blockchain Development",
        description: "Building decentralized applications, smart contracts, and Web3 integrations.",
      },
    ],
  },
];

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease },
  },
};

export function Capabilities() {
  return (
    <section className="py-32 px-6 md:px-20 max-w-7xl mx-auto" id="capabilities">
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease }}
      >
        <h2 className="heading-text text-5xl md:text-7xl">Our Capabilities</h2>
      </motion.div>

      <div className="space-y-0">
        {categories.map((category) => (
          <motion.div
            key={category.label}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
          >
            {/* Top border for category */}
            <motion.div
              className="origin-left border-t border-white/10"
              variants={lineVariants}
            />

            <div className="flex flex-col md:flex-row py-10 md:py-14 gap-6 md:gap-0">
              {/* Parent: category label on the left */}
              <motion.div className="md:w-1/4 shrink-0" variants={itemVariants}>
                <h3 className="heading-text text-4xl md:text-5xl text-accent md:sticky md:top-32">
                  {category.label}
                </h3>
              </motion.div>

              {/* Children: items stacked on the right */}
              <div className="md:w-3/4">
                {category.items.map((item, i) => (
                  <div key={item.title}>
                    {i > 0 && (
                      <motion.div
                        className="origin-left border-t border-white/[0.06]"
                        variants={lineVariants}
                      />
                    )}
                    <motion.div
                      className="group py-6 md:py-8 flex flex-col md:flex-row md:items-baseline gap-1 md:gap-10 cursor-default"
                      variants={itemVariants}
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="heading-text text-xl md:text-2xl shrink-0 md:w-2/5 group-hover:text-accent transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 group-hover:text-gray-400 font-light leading-relaxed text-sm md:text-base md:w-3/5 transition-colors duration-300">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Bottom border */}
        <motion.div
          className="origin-left border-t border-white/10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={lineVariants}
        />
      </div>
    </section>
  );
}
