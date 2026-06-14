'use client'

import { useEffect, useState } from 'react'

export default function ContributionGraph() {
  const [weeks, setWeeks] = useState([])

  useEffect(() => {
    fetch('https://github-contributions-api.jogruber.de/v4/saikat-codes?y=last')
      .then(r => r.json())
      .then(data => setWeeks(data.contributions))
      .catch(() => {})
  }, [])

  const getColor = (count) => {
    if (count === 0) return '#1a1a1a'
    if (count <= 2)  return '#1a3a1a'
    if (count <= 5)  return '#1e6b1e'
    if (count <= 9)  return '#28a428'
    return '#39d439'
  }

  // group flat array into weeks of 7
  const grouped = []
  for (let i = 0; i < weeks.length; i += 7) {
    grouped.push(weeks.slice(i, i + 7))
  }

  return (
    <div>
      <p className="font-mono text-xs text-muted mb-3 tracking-wide uppercase">
        contribution graph
      </p>
      <div className="flex gap-1 overflow-x-auto pb-1">
        {grouped.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((day, di) => (
              <div
                key={di}
                title={`${day.date}: ${day.count} contributions`}
                style={{
                  backgroundColor: getColor(day.count),
                  width: 11,
                  height: 11,
                  borderRadius: 3,
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
