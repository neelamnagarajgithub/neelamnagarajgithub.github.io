"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

/**
 * FadeIn - Simple fade in animation
 */
export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.6,
  className,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

/**
 * SlideUp - Slide up with fade
 */
export const SlideUp = ({
  children,
  delay = 0,
  duration = 0.6,
  className,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

/**
 * ScaleIn - Scale animation with fade
 */
export const ScaleIn = ({
  children,
  delay = 0,
  duration = 0.6,
  className,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

/**
 * HoverScale - Scale on hover
 */
export const HoverScale = ({
  children,
  scale = 1.05,
  duration = 0.3,
  className,
}: {
  children: ReactNode;
  scale?: number;
  duration?: number;
  className?: string;
}) => (
  <motion.div
    whileHover={{ scale }}
    transition={{ duration, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

/**
 * StaggerContainer - Container for staggered children
 */
export const StaggerContainer = ({
  children,
  delay = 0,
  staggerDelay = 0.1,
  className,
}: {
  children: ReactNode;
  delay?: number;
  staggerDelay?: number;
  className?: string;
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * StaggerItem - Child item for StaggerContainer
 */
export const StaggerItem = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

/**
 * GlowOnHover - Glow effect on hover
 */
export const GlowOnHover = ({
  children,
  glowColor = "rgba(180, 240, 224, 0.2)",
  className,
}: {
  children: ReactNode;
  glowColor?: string;
  className?: string;
}) => (
  <motion.div
    whileHover={{
      boxShadow: `0 0 30px ${glowColor}`,
    }}
    transition={{ duration: 0.3 }}
    className={className}
  >
    {children}
  </motion.div>
);

/**
 * PulseGlow - Continuous pulse glow
 */
export const PulseGlow = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div
    animate={{
      boxShadow: [
        "0 0 0 0 rgba(180, 240, 224, 0.4)",
        "0 0 0 10px rgba(180, 240, 224, 0)",
      ],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
    }}
    className={className}
  >
    {children}
  </motion.div>
);

/**
 * AnimatePresence wrapper
 */
export { AnimatePresence };
