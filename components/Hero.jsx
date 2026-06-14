"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-24">
      <motion.p
        className="font-mono text-sm text-secondary mb-4"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        hi, i'm
      </motion.p>

      <motion.h1
        className="text-6xl md:text-8xl font-bold text-primary leading-tight mb-4"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        Saikat Das<span className="text-accent">.</span>
      </motion.h1>

      <motion.p
        className="text-lg text-secondary leading-relaxed mb-8 max-w-xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        Electrical Engineering undergrad at NIT Durgapur. Developer by choice. I
        build for the web, learn fast, and ship things that work.
      </motion.p>

      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <a
          href="#work"
          className="px-5 py-2.5 rounded-md border border-border text-sm text-primary hover:border-accent transition-colors"
        >
          see my work ↓
        </a>

        <a
          href="https://github.com/saikat-codes"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-md border border-border text-sm text-secondary hover:text-primary hover:border-accent transition-colors"
        >
          github ↗
        </a>
      </motion.div>
    </section>
  );
}
