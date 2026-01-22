"use client";

import { motion, HTMLMotionProps } from "framer-motion";

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  fullWidth?: boolean;
}

export function FadeIn({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.5,
  fullWidth = false,
  ...props
}: FadeInProps) {
  const directionOffset = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration }}
      className={`${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
