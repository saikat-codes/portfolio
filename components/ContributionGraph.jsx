'use client'

import { useEffect, useState, useRef } from 'react'

export default function ContributionGraph() {
  const username = 'saikat-codes'
  const [weeks, setWeeks] = useState([])
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then(r => r.json())
      .then(data => {
        setWeeks(data.contributions || [])
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    if (scrollContainerRef.current && weeks.length > 0) {
      scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth
    }
  }, [weeks])

  const getColor = (count) => {
    if (count === 0) return '#1a1a1a'
    if (count <= 2)  return '#1a3a1a'
    if (count <= 5)  return '#1e6b1e'
    if (count <= 9)  return '#28a428'
    return '#39d439'
  }

  // Group flat array into structural columns of 7 days
  const groupedWeeks = []
  for (let i = 0; i < weeks.length; i += 7) {
    groupedWeeks.push(weeks.slice(i, i + 7))
  }

  // Track month changes across week columns to place text accurately
  let assignedMonths = new Set()

  const getMonthLabel = (week) => {
    if (!week || week.length === 0) return null

    // Check the first day of this week column
    const date = new Date(week[0].date)
    const monthName = date.toLocaleString('default', { month: 'short' })

    // Only display the month label on the first column it appears in
    if (!assignedMonths.has(monthName)) {
      assignedMonths.add(monthName)
      return monthName
    }
    return null
  }

  return (
    <div>
      <p className="font-mono text-xs text-muted mb-3 tracking-wide uppercase">
        contribution graph
      </p>

      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scroll-smooth select-none pb-5"
      >
        <div className="flex gap-1 flex-col min-w-max pt-4">

          {/* Month Header Track */}
          <div className="flex gap-1 h-4 relative">
            {groupedWeeks.map((week, wi) => {
              const label = getMonthLabel(week)
              return (
                <div key={wi} className="w-[11px] flex-shrink-0 relative">
                  {label && (
                    <span className="absolute bottom-0 left-0 font-mono text-[10px] text-muted whitespace-nowrap">
                      {label}
                    </span>
                  )}
                </div>
              )
            })}
          </div>

          {/* Core Contribution Columns Track */}
          <div className="flex gap-1">
            {groupedWeeks.map((week, wi) => (
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
      </div>
    </div>
  )
}
