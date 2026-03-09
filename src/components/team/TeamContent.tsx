"use client";

import { motion } from "framer-motion";
import { departments } from "@/data/team";
import {
    ease,
    containerVariants,
    lineVariants,
    itemVariants,
} from "@/lib/animations";
import { TeamMemberCard } from "./TeamMemberCard";

export function TeamContent() {
    return (
        <div className="flex-1 pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6 md:px-20">
                {/* Header */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease }}
                >
                    <h1 className="heading-text text-5xl md:text-7xl mb-4">Our Team</h1>
                    <p className="text-gray-400 font-light text-lg md:text-xl max-w-xl">
                        The people behind Elevate — builders, creatives, and strategists.
                    </p>
                </motion.div>

                {/* Team roster */}
                <div className="space-y-0">
                    {departments.map((dept) => (
                        <motion.div
                            key={dept.label}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            variants={containerVariants}
                        >
                            <motion.div
                                className="origin-left border-t border-white/10"
                                variants={lineVariants}
                            />

                            <div className="flex flex-col md:flex-row py-10 md:py-14 gap-6 md:gap-0">
                                {/* Department label */}
                                <motion.div className="md:w-1/4 shrink-0" variants={itemVariants}>
                                    <h2 className="heading-text text-4xl md:text-5xl text-[#3DE1DA]">
                                        {dept.label}
                                    </h2>
                                </motion.div>

                                {/* Members */}
                                <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-5">
                                    {dept.members.map((member) => (
                                        <TeamMemberCard key={member.name} member={member} />
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
            </div>
        </div>
    );
}
