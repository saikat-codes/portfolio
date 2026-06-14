import FadeUp from '@/components/FadeUp'

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="grid md:grid-cols-2 gap-10">

        <FadeUp delay={0.1}>
          <div>
            <p className="font-mono text-sm text-muted mb-2">06 — about</p>
            <h2 className="text-2xl font-bold text-primary mb-4">a bit about me</h2>
            <p className="text-secondary leading-relaxed">
              I study Electrical Engineering at NIT Durgapur — but most of my time
              goes into writing JavaScript and ricing my Linux setup. I started
              web dev right after JEE in 2025 and went from zero to full-stack
              in under a year. Still going.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div>
            <p className="font-mono text-sm text-muted mb-2">07 — right now</p>
            <h2 className="text-2xl font-bold text-primary mb-4">currently</h2>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-secondary">
                <span className="text-accent">→</span>
                building a full-stack query management system
              </li>
              <li className="flex items-start gap-2 text-secondary">
                <span className="text-accent">→</span>
                learning Node.js, Express &amp; MongoDB
              </li>
              <li className="flex items-start gap-2 text-secondary">
                <span className="text-accent">→</span>
                grinding DSA on LeetCode
              </li>
              <li className="flex items-start gap-2 text-secondary">
                <span className="text-accent">→</span>
                open to collabs and internships
              </li>
            </ul>
          </div>
        </FadeUp>

      </div>
    </section>
  )
}
