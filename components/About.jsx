"use client";

import FadeUp from "@/components/FadeUp";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="grid md:grid-cols-2 gap-10">
        {/* bio column */}
        <FadeUp delay={0.1}>
          <div>
            <p className="font-mono text-sm text-muted mb-2">06 — about</p>
            <h2 className="text-3xl font-bold text-primary mb-4 tracking-tight">
              a bit about me
            </h2>
            <p className="text-secondary leading-relaxed text-[16px]">
              I study <b>Electrical Engineering</b> at <b>NIT Durgapur</b> — but
              most of my interest lies in <b>tech</b> and{" "}
              <b>building for the web</b>. I started right after JEE in 2025,
              going from absolute zero to building{" "}
              <b>full-stack applications</b> in <b>less than a year</b>. Still
              learning, still building.
            </p>
          </div>
        </FadeUp>

        {/* right now column */}
        <FadeUp delay={0.2}>
          <div>
            <p className="font-mono text-sm text-muted mb-2">07 — right now</p>
            <h2 className="text-3xl font-bold text-primary mb-4 tracking-tight">
              currently
            </h2>

            <ul className="flex flex-col gap-3.5">
              <li className="flex items-center gap-3 text-secondary text-[16px] transition-colors hover:text-primary">
                <span className="flex items-center justify-center shrink-0 w-5 h-5 rounded-md bg-accent/10 text-accent text-xs font-bold select-none">
                  →
                </span>
                <span>
                  <b>Building</b> full-stack projects
                </span>
              </li>

              <li className="flex items-center gap-3 text-secondary text-[16px] transition-colors hover:text-primary">
                <span className="flex items-center justify-center shrink-0 w-5 h-5 rounded-md bg-accent/10 text-accent text-xs font-bold select-none">
                  →
                </span>
                <span>
                  <b>Learning</b> Node.js, Express & MongoDB
                </span>
              </li>

              <li className="flex items-center gap-3 text-secondary text-[16px] transition-colors hover:text-primary">
                <span className="flex items-center justify-center shrink-0 w-5 h-5 rounded-md bg-accent/10 text-accent text-xs font-bold select-none">
                  →
                </span>
                <span>
                  <b>Practicing</b> DSA problems
                </span>
              </li>

              <li className="flex items-center gap-3 text-secondary text-[16px] transition-colors hover:text-primary">
                <span className="flex items-center justify-center shrink-0 w-5 h-5 rounded-md bg-accent/10 text-accent text-xs font-bold select-none">
                  →
                </span>
                <span>
                  <b>Open to</b> collabs and internships
                </span>
              </li>
            </ul>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
