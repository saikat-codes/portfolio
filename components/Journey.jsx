"use client";

import FadeUp from "@/components/FadeUp";

const journey = [
  { year: "2025", text: "Started web dev — HTML, CSS, JavaScript fundamentals.", current: false },
  { year: "Sep 2025", text: "Joined NIT Durgapur (Electrical Engineering). Continued building in parallel.", current: false },
  { year: "Jan 2026", text: "React, React Router — built solid frontend projects.", current: false },
  { year: "May 2026", text: "Started DSA and backend — Node.js, Express, MongoDB.", current: false },
  { year: "Now", text: "Building full-stack projects end to end.", current: true },
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 max-w-3xl">
      <FadeUp>
        <p className="font-mono text-sm text-muted mb-2">03 — journey</p>
        <h2 className="text-4xl font-bold text-primary mb-12 tracking-tight">how i got here</h2>
      </FadeUp>

      <div className="relative flex flex-col pl-2">
        {journey.map((item, index) => (
          <div key={item.year} className="relative flex gap-6 group">

            <div className="flex flex-col items-center shrink-0 w-4 relative">
              {index !== journey.length - 1 && (
                <div className="absolute top-4 bottom-0 w-[1px] bg-border/40 group-hover:bg-border transition-colors duration-300" />
              )}

              <div
                className={`z-10 w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  item.current
                    ? "bg-accent ring-4 ring-accent/20 animate-pulse mt-2"
                    : "bg-muted/60 group-hover:bg-primary border border-bg mt-2.5"
                }`}
              />
            </div>

            {/* Step Block Content */}
            <div className="flex-1 pb-10">
              <FadeUp delay={index * 0.08}>
                <div
                  className={`rounded-xl p-4 transition-all duration-300 border border-transparent hover:border-border/40 hover:bg-surface/30 }`}
                >
                  <span
                    className={`font-mono text-xs font-semibold tracking-wider uppercase ${
                      item.current ? "text-accent" : "text-secondary"
                    }`}
                  >
                    {item.year}
                  </span>
                  <p
                    className={`text-[15px] leading-relaxed mt-1.5 ${
                      item.current ? "text-primary font-medium" : "text-primary/90"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              </FadeUp>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
