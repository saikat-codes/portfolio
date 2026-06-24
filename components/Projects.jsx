"use client";

import FadeUp from "@/components/FadeUp";

const projects = [
  {
    name: "Habit Tracker",
    icon: "📋",
    desc: "Full-stack habit tracking app — currently in progress.",
    tag: "in progress",
    link: "https://github.com/saikat-codes/habit-tracker_full",
    stack: [
      { id: "react", name: "react-original.svg" },
      { id: "vitejs", name: "vitejs-original.svg" },
      { id: "nodejs", name: "nodejs-original.svg" }
    ]
  },
  {
    name: "Query Management System",
    icon: "⚡",
    desc: "Full-stack system to manage and route queries with real-time email and Telegram notifications.",
    tag: "full stack",
    link: "https://github.com/saikat-codes/query-management-system",
    stack: [
      { id: "react", name: "react-original.svg" },
      { id: "nodejs", name: "nodejs-original.svg" },
      { id: "express", name: "express-original.svg", lightBg: true },
    ]
  },
  {
    name: "Weather App",
    icon: "🌤",
    desc: "Responsive weather app with real-time data from OpenWeatherMap and city search.",
    tag: "frontend",
    link: "https://github.com/saikat-codes/js-weather",
    stack: [
      { id: "html5", name: "html5-original.svg" },
      { id: "css3", name: "css3-original.svg" },
      { id: "javascript", name: "javascript-original.svg" }
    ]
  }
];

export default function Projects() {
  return (
    <section id="work" className="max-w-3xl py-24">
      <FadeUp>
        <p className="font-mono text-sm text-muted mb-2">02 — projects</p>
        <h2 className="text-4xl font-bold text-primary mb-12 tracking-tight">selected work</h2>
      </FadeUp>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <FadeUp key={project.name} delay={index * 0.08}>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col sm:flex-row sm:items-center justify-between border-b border-border/50 py-7 transition-all duration-300 hover:px-2 gap-4"
            >
              <div className="flex items-start gap-4 flex-1">
                {/* Project Icon container */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-surface/50 text-base shadow-sm transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-surface">
                  {project.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-primary transition-colors duration-300 group-hover:text-accent">
                    {project.name}
                  </h3>

                  <p className="mt-1.5 text-sm text-secondary/80 leading-relaxed max-w-xl">
                    {project.desc}
                  </p>

                  {/* Tech stack badges */}
                  <div className="mt-4 flex gap-2">
                    {project.stack.map((tech) => (
                      <div
                        key={tech.id}
                        className={`flex h-7 w-7 items-center justify-center rounded-sm border border-border/60 shadow-sm ${
                          tech.lightBg ? "bg-white p-0.5" : "bg-surface/40"
                        }`}
                        title={tech.id}
                      >
                        <img
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.id}/${tech.name}`}
                          alt={tech.id}
                          className="h-4 w-4 object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status Pill Badge & Animated Arrow */}
              <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 self-end sm:self-center w-full sm:w-auto pt-2 sm:pt-0">
                <span
                  className={`rounded-full border px-3 py-0.5 text-[11px] font-mono font-medium tracking-wider ${
                    project.tag === "in progress"
                      ? "border-emerald-500/20 bg-emerald-500/5 text-emerald-400"
                      : "border-accent/20 bg-accent/5 text-accent"
                  }`}
                >
                  {project.tag}
                </span>

                <span className="text-muted/80 font-semibold transition-transform duration-300 transform group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 select-none">
                  ↗
                </span>
              </div>
            </a>
          </FadeUp>
        ))}
      </div>

      <FadeUp delay={0.3}>
        <a
          href="https://github.com/saikat-codes"
          target="_blank"
          rel="noreferrer"
          className="group mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-secondary transition-colors hover:text-accent font-mono"
        >
          view all on github
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </FadeUp>
    </section>
  );
}
