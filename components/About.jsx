"use client";

import FadeUp from "@/components/FadeUp";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="grid md:grid-cols-2 gap-10">

        {/* bio column */}
        <FadeUp delay={0.1}>
          <div>
            <p className="font-mono text-sm text-muted mb-2">
              06 — about
            </p>
            <h2 className="text-2xl font-bold text-primary mb-4 tracking-tight">
              a bit about me
            </h2>
            <p className="text-secondary leading-relaxed text-[15px]">
              I study Electrical Engineering at NIT Durgapur — but most of my time
              goes into writing JavaScript and ricing my Linux setup. I started
              web dev right after JEE in 2025 and went from zero to full-stack
              in under a year. Still going.
            </p>
          </div>
        </FadeUp>

        {/* right now column */}
        <FadeUp delay={0.2}>
          <div>
            <p className="font-mono text-sm text-muted mb-2">
              07 — right now
            </p>
            <h2 className="text-2xl font-bold text-primary mb-4 tracking-tight">
              currently
            </h2>

            <ul className="flex flex-col gap-3.5">
              {[
                "building a full-stack query management system",
                "learning Node.js, Express & MongoDB",
                "grinding DSA on LeetCode",
                "open to collabs and internships"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-secondary text-[15px] transition-colors hover:text-primary">
                  <span className="flex items-center justify-center shrink-0 w-5 h-5 rounded-md bg-accent/10 text-accent text-xs font-bold select-none">
                    →
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
