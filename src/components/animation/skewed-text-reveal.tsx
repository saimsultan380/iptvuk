"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkewedTextRevealProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "p" | "div";
}

export function SkewedTextReveal({
  children,
  className,
  style,
  delay = 0.12,
  duration = 0.95,
  as: Tag = "h1",
}: SkewedTextRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Tag className={cn("overflow-hidden", className)} style={style}>
      <motion.span
        className="block origin-left will-change-transform"
        initial={
          prefersReducedMotion
            ? false
            : { y: "115%", skewY: 8, opacity: 0 }
        }
        animate={{ y: "0%", skewY: 0, opacity: 1 }}
        transition={{
          duration: prefersReducedMotion ? 0 : duration,
          delay: prefersReducedMotion ? 0 : delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.span>
    </Tag>
  );
}
