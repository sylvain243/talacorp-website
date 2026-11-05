"use client";

import { motion, MotionConfig, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Respecte le réglage « réduire les animations » du système de l'internaute. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

type Direction = "up" | "left" | "right" | "none";

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  left: { x: -36, y: 0 },
  right: { x: 36, y: 0 },
  none: { x: 0, y: 0 },
};

/** Apparition douce quand le bloc entre à l'écran. */
export function Reveal({
  children,
  className = "",
  delay = 0,
  from = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: Direction;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

/** Grille dont les éléments apparaissent l'un après l'autre. */
export function Stagger({
  children,
  className = "",
  onLoad = false,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  /** true : joue l'animation au chargement (hero) plutôt qu'au défilement */
  onLoad?: boolean;
  as?: "div" | "ol" | "ul";
}) {
  const Comp = as === "ol" ? motion.ol : as === "ul" ? motion.ul : motion.div;
  return (
    <Comp
      className={className}
      variants={container}
      initial="hidden"
      {...(onLoad ? { animate: "show" } : { whileInView: "show", viewport: { once: true, margin: "-60px" } })}
    >
      {children}
    </Comp>
  );
}

export function StaggerItem({
  children,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const Comp = as === "li" ? motion.li : motion.div;
  return (
    <Comp className={className} variants={item}>
      {children}
    </Comp>
  );
}

/** Image de hero : léger zoom arrière à l'arrivée. */
export function HeroMedia({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 1.06 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Trait doré qui se dessine de gauche à droite (étapes de méthode). */
export function DrawLine({ className = "" }: { className?: string }) {
  return (
    <motion.span
      aria-hidden="true"
      className={`block h-[3px] origin-left bg-gold ${className}`}
      variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.8, ease } } }}
    />
  );
}
