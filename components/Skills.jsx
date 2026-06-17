"use client";

import BorderGlow from "@/components/BorderGlow";
import FadeUp from "@/components/FadeUp";

const skillGroups = [
  {
    label: "languages",
    skills: [
      { name: "JavaScript", icon: "javascript/javascript-original.svg" },
      { name: "C++", icon: "cplusplus/cplusplus-original.svg" },
      { name: "C", icon: "c/c-original.svg" },
      { name: "HTML", icon: "html5/html5-original.svg" },
      { name: "CSS", icon: "css3/css3-original.svg" },
    ],
  },
  {
    label: "frameworks & libraries",
    skills: [
      { name: "React", icon: "react/react-original.svg" },
      { name: "Tailwind", icon: "tailwindcss/tailwindcss-original.svg" },
      { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
      { name: "Express", icon: "express/express-original.svg", lightBg: true },
    ],
  },
  {
    label: "tools & platforms",
    skills: [
      { name: "Git", icon: "git/git-original.svg" },
      { name: "GitHub", icon: "github/github-original.svg", lightBg: true },
      { name: "MongoDB", icon: "mongodb/mongodb-original.svg" },
      { name: "VS Code", icon: "vscode/vscode-original.svg" },
      { name: "Linux", icon: "linux/linux-original.svg", lightBg: true },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <FadeUp>
        <p className="font-mono text-sm text-muted mb-2">
          04 — skills &amp; tools
        </p>
        <h2 className="text-4xl font-bold text-primary mb-12 tracking-tight">
          what i work with
        </h2>
      </FadeUp>

      <div className="flex flex-col gap-10">
        {skillGroups.map((group, index) => (
          <FadeUp key={group.label} delay={index * 0.1}>
            <div>
              <p className="font-mono text-xs text-muted/80 mb-4 tracking-widest uppercase">
                {group.label}
              </p>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <BorderGlow
                    key={skill.name}
                    edgeSensitivity={20}
                    glowColor="40 80 80"
                    backgroundColor="#111111"
                    borderRadius={12}
                    glowRadius={25}
                    glowIntensity={1.2}
                    coneSpread={20}
                    animated={false}
                    colors={["#c084fc", "#f472b6", "#38bdf8"]}
                  >
                    <div className="group flex items-center gap-2.5 px-4 py-2.5 w-full h-full cursor-default select-none">
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center transition-transform group-hover:scale-105 ${skill.lightBg ? "bg-white p-0.5" : ""}`}
                      >
                        <img
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
                          alt={skill.name}
                          className="w-4 h-4 object-contain"
                        />
                      </div>
                      <span className="text-sm font-medium text-secondary group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  </BorderGlow>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
