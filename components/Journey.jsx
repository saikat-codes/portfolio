import FadeUp from '@/components/FadeUp'

const journey = [
  { year: '2025', text: 'Started web dev — HTML, CSS, JavaScript fundamentals.', current: false },
  { year: 'Sep 2025', text: 'Joined NIT Durgapur (Electrical Engineering). Continued building in parallel.', current: false },
  { year: 'Jan 2026', text: 'React, React Router — built solid frontend projects.', current: false },
  { year: 'May 2026', text: 'Started DSA and backend — Node.js, Express, MongoDB.', current: false },
  { year: 'Now', text: 'Building full-stack projects end to end.', current: true },
]


export default function Journey() {
  return (
    <section id="journey" className="px-6 py-24 max-w-3xl">
      <FadeUp delay={0.1}>
        <p className="font-mono text-sm text-muted mb-2">03 — journey</p>
        <h2 className="text-4xl font-bold text-primary mb-10">how i got here</h2>
      </FadeUp>

      <div className="flex flex-col">
        {journey.map((item, index) => (
          <FadeUp key={item.year} delay={index * 0.1}>
          <div key={item.year} className="flex gap-5">

            {/* dot + line column */}
            <div className="flex flex-col items-center">
              <div
                className={`w-2.5 h-2.5 rounded-full mt-1.5 ${
                  item.current ? 'bg-accent' : 'bg-muted'
                }`}
              />
              {index !== journey.length - 1 && (
                <div className="w-px flex-1 bg-border mt-2" />
              )}
            </div>

            {/* text content */}
            <div className="pb-8">
              <p className="font-mono text-xs text-secondary mb-1">{item.year}</p>
              <p className="text-primary">{item.text}</p>
            </div>

          </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
