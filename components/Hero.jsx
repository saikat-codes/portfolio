"use client";

import { motion } from "framer-motion";
import DecryptedText from "@/components/DecryptedText";
import BorderGlow from "@/components/BorderGlow";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }
  },
};

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center py-20 select-none">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-start"
      >
        {/* Intro Tagline */}
        <motion.p
          variants={itemVariants}
          className="font-mono text-sm sm:text-base text-muted/80 tracking-widest uppercase mb-3"
        >
          hi, i'm
        </motion.p>

        {/* Main Name Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl md:text-8xl font-black text-primary tracking-tight leading-none mb-6"
        >
          <DecryptedText
            text="Saikat Das"
            animateOn="inViewHover"
            sequential
            revealDirection="start"
            speed={80}
            className="text-primary inline-block"
            encryptedClassName="text-accent"
          />
          <span className="text-accent">.</span>
        </motion.h1>

        {/* Bio Description */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-secondary/90 leading-relaxed mb-10 max-w-xl"
        >
          Electrical Engineering undergrad at{" "}
          <span className="text-primary font-medium border-b border-border/60 pb-0.5">NIT Durgapur</span>.
          Developer by choice. I build for the web, learn, and ship things that work.
        </motion.p>

        {/* Action Callouts with Amber Border Glows */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">

          {/* Primary Button: Work link */}
          <BorderGlow
            edgeSensitivity={35}
            glowColor="239 159 39"
            backgroundColor="#111111"
            borderRadius={12}
            glowRadius={100}
            glowIntensity={1.4}
            coneSpread={30}
            colors={["#EF9F27", "#f5be6b", "#ffffff", "#EF9F27"]}
          >
            <a
              href="#work"
              className="group flex items-center justify-center px-6 py-3 w-full h-full text-primary font-medium text-sm transition-transform duration-200 active:scale-98 hover:text-accent/90"
            >
              see my work
              <span className="ml-1.5 transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
            </a>
          </BorderGlow>

          {/* Secondary Button: GitHub link */}
          <BorderGlow
            edgeSensitivity={35}
            glowColor="239 159 39"
            backgroundColor="#111111"
            borderRadius={12}
            glowRadius={100}
            glowIntensity={1.4}
            coneSpread={30}
            colors={["#EF9F27", "#777777", "#3a3a3a", "#EF9F27"]}
          >
            <a
              href="https://github.com/saikat-codes"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center px-6 py-3 w-full h-full text-primary font-medium text-sm transition-transform duration-200 active:scale-98 hover:text-accent/90"
            >
              github
              <span className="ml-1.5 transition-transform duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </a>
          </BorderGlow>

        </motion.div>
      </motion.div>
    </section>
  );
}
