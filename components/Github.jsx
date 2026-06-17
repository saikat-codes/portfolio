'use client'

import { useEffect, useState } from 'react'
import ContributionGraph from '@/components/ContributionGraph'
import FadeUp from '@/components/FadeUp'
import BorderGlow from '@/components/BorderGlow'

export default function Github() {
  const username = 'saikat-codes'
  const [stats, setStats] = useState({ total: null, longest: null })

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then(r => r.json())
      .then(data => {
        const contributions = data.contributions
        const total = contributions.reduce((sum, day) => sum + day.count, 0)
        let longest = 0
        let current = 0
        contributions.forEach(day => {
          if (day.count > 0) {
            current++
            longest = Math.max(longest, current)
          } else {
            current = 0
          }
        })
        setStats({ total, longest })
      })
      .catch(() => {})
  }, [])

  return (
    <section id="github" className="py-24">

      <FadeUp>
        <p className="font-mono text-sm text-muted mb-2">05 — github</p>
        <h2 className="text-3xl font-bold text-primary mb-10">on the internet</h2>
      </FadeUp>

      <div className="flex flex-col gap-6">

        <FadeUp delay={0.1}>
          {/* Added items-stretch to force equal row heights natively across all columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 items-stretch">

            {/* profile card */}
            <div className="col-span-2 flex">
              <BorderGlow
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="#111111"
                borderRadius={16}
                glowRadius={50}
                glowIntensity={1}
                coneSpread={25}
                animated={false}
                colors={["#EF9F27", "#f5be6b", "#ffffff", "#EF9F27"]}
                className="w-full h-full flex"
              >

                <div className="flex items-center gap-4 p-4 h-full w-full relative">
                  <a
                    href={`https://github.com/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 text-muted hover:text-accent transition-colors"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  <img
                    src={`https://github.com/${username}.png`}
                    alt="Saikat Das"
                    className="w-12 h-12 rounded-full border border-border shrink-0"
                  />
                  <div>
                    <p className="text-primary font-semibold leading-none">Saikat Das</p>
                    <p className="text-xs text-secondary font-mono mt-1">@{username}</p>
                    <a
                      href={`https://github.com/${username}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-3 inline-flex items-center text-xs font-medium text-secondary transition-colors hover:text-accent"
                    >
                      view profile →
                    </a>
                  </div>
                </div>
              </BorderGlow>
            </div>

            {/* contributions card */}
            <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#111111"
              borderRadius={16}
              glowRadius={50}
              glowIntensity={1}
              coneSpread={25}
              animated={false}
              colors={["#EF9F27", "#f5be6b", "#ffffff", "#EF9F27"]}
            >
              <div className="p-4 flex flex-col justify-between h-full w-full">
                <p className="font-mono text-xs text-muted uppercase tracking-wide">contributions</p>
                <p className="text-3xl font-bold text-primary mt-2">{stats.total ?? '—'}</p>
                <p className="text-xs text-secondary mt-1">this year</p>
              </div>
            </BorderGlow>

            {/* longest streak card */}
            <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#111111"
              borderRadius={16}
              glowRadius={50}
              glowIntensity={1}
              coneSpread={25}
              animated={false}
              colors={["#EF9F27", "#f5be6b", "#ffffff", "#EF9F27"]}
            >
              <div className="p-4 flex flex-col justify-between h-full w-full">
                <p className="font-mono text-xs text-muted uppercase tracking-wide">longest streak</p>
                <p className="text-3xl font-bold text-accent mt-2">
                  {stats.longest ? `${stats.longest}d` : '—'}
                </p>
                <p className="text-xs text-secondary mt-1">personal best</p>
              </div>
            </BorderGlow>

          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#111111"
              borderRadius={16}
              glowRadius={50}
              glowIntensity={1}
              coneSpread={25}
              animated={false}
              colors={["#EF9F27", "#f5be6b", "#ffffff", "#EF9F27"]}
            >
          <div className="border border-border rounded-xl p-4 bg-surface">
            <ContributionGraph />
          </div>
          </BorderGlow>
        </FadeUp>

        <FadeUp delay={0.3}>
          <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#111111"
              borderRadius={16}
              glowRadius={50}
              glowIntensity={1}
              coneSpread={25}
              animated={false}
              colors={["#EF9F27", "#f5be6b", "#ffffff", "#EF9F27"]}
            >
          <div className="border border-border rounded-xl p-5 bg-surface">
            <p className="font-mono text-xs text-muted uppercase tracking-wide mb-4">top languages</p>
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=EF9F27&text_color=e0e0e0&langs_count=5`}
              alt="Top languages"
              className="w-full max-w-xs"
            />
          </div>
          </BorderGlow>
        </FadeUp>

      </div>
    </section>
  )
}
