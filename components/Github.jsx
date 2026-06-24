"use client";

import ContributionGraph from "@/components/ContributionGraph";
import FadeUp from "@/components/FadeUp";
import Image from "next/image";
import { useEffect, useState } from "react";

const Card = ({ children, className = "" }) => (
  <div className={`
    relative rounded-xl border border-border bg-surface/60 backdrop-blur-sm
    transition-all duration-300
    hover:border-accent/30 hover:bg-surface/80 hover:shadow-[0_0_24px_rgba(239,159,39,0.06)]
    ${className}
  `}>
    {children}
  </div>
)

export default function Github() {
  const username = "saikat-codes";
  const [stats, setStats] = useState({ total: null, longest: null });

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((r) => r.json())
      .then((data) => {
        const contributions = data.contributions;
        const total = contributions.reduce((sum, day) => sum + day.count, 0);
        let longest = 0;
        let current = 0;
        contributions.forEach((day) => {
          if (day.count > 0) {
            current++;
            longest = Math.max(longest, current);
          } else {
            current = 0;
          }
        });
        setStats({ total, longest });
      })
      .catch(() => {});
  }, []);

  return (
    <section id="github" className="py-24">
      <FadeUp>
        <p className="font-mono text-sm text-muted mb-2">05 — github</p>
        <h2 className="text-3xl font-bold text-primary mb-10">on the internet</h2>
      </FadeUp>

      <div className="flex flex-col gap-4">
        <FadeUp delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-stretch">

            {/* profile card */}
            <Card className="col-span-2">
              <div className="flex items-center gap-4 p-5 h-full relative">
                <a
                  href={`https://github.com/${username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 text-muted hover:text-accent transition-colors"
                >
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <Image
                  src={`https://github.com/${username}.png`}
                  alt="Saikat's avatar"
                  width={52}
                  height={52}
                  className="rounded-full border border-border shrink-0"
                  unoptimized
                />
                <div>
                  <p className="text-primary font-semibold">Saikat Das</p>
                  <p className="text-xs text-secondary font-mono mt-0.5">@{username}</p>
                  <a
                    href={`https://github.com/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent hover:underline mt-2 inline-block"
                  >
                    view profile →
                  </a>
                </div>
              </div>
            </Card>

            {/* contributions */}
            <Card>
              <div className="p-5 flex flex-col justify-between h-full">
                <p className="font-mono text-xs text-muted uppercase tracking-wide">contributions</p>
                <p className="text-3xl font-bold text-primary mt-2">{stats.total ?? "—"}</p>
                <p className="text-xs text-secondary mt-1">this year</p>
              </div>
            </Card>

            {/* longest streak */}
            <Card>
              <div className="p-5 flex flex-col justify-between h-full">
                <p className="font-mono text-xs text-muted uppercase tracking-wide">longest streak</p>
                <p className="text-3xl font-bold text-accent mt-2">
                  {stats.longest ? `${stats.longest}d` : "—"}
                </p>
                <p className="text-xs text-secondary mt-1">personal best</p>
              </div>
            </Card>

          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <Card className="p-4">
            <ContributionGraph />
          </Card>
        </FadeUp>

        <FadeUp delay={0.3}>
          <Card className="p-5">
            <p className="font-mono text-xs text-muted uppercase tracking-wide mb-4">top languages</p>
            <Image
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=EF9F27&text_color=e0e0e0&langs_count=5`}
              alt="Top languages"
              width={450}
              height={140}
              className="w-full max-w-xs"
              unoptimized
            />
          </Card>
        </FadeUp>
      </div>
    </section>
  );
}
