import type { Variants } from "framer-motion";

export const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

export const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease },
    },
};

export const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
        scaleX: 1,
        transition: { duration: 0.6, ease },
    },
};
