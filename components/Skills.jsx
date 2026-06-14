import FadeUp from '@/components/FadeUp'

const skillGroups = [
  {
    label: 'languages',
    skills: [
      { name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
      { name: 'C++',        icon: 'cplusplus/cplusplus-original.svg' },
      { name: 'C',          icon: 'c/c-original.svg' },
      { name: 'HTML',       icon: 'html5/html5-original.svg' },
      { name: 'CSS',        icon: 'css3/css3-original.svg' },
    ],
  },
  {
    label: 'frameworks & libraries',
    skills: [
      { name: 'React',    icon: 'react/react-original.svg' },
      { name: 'Tailwind', icon: 'tailwindcss/tailwindcss-original.svg' },
      { name: 'Node.js',  icon: 'nodejs/nodejs-original.svg' },
      { name: 'Express',  icon: 'express/express-original.svg', lightBg: true },
    ],
  },
  {
    label: 'tools & platforms',
    skills: [
      { name: 'Git',     icon: 'git/git-original.svg' },
      { name: 'GitHub',  icon: 'github/github-original.svg', lightBg: true },
      { name: 'MongoDB', icon: 'mongodb/mongodb-original.svg' },
      { name: 'VS Code', icon: 'vscode/vscode-original.svg' },
      { name: 'Linux',   icon: 'linux/linux-original.svg', lightBg: true },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <FadeUp>
        <p className="font-mono text-sm text-muted mb-2">04 — skills &amp; tools</p>
        <h2 className="text-4xl font-bold text-primary mb-10">what i work with</h2>
      </FadeUp>

      <div className="flex flex-col gap-8">
        {skillGroups.map((group, index) => (
          <FadeUp key={group.label} delay={index * 0.1}>
            <div>
              <p className="font-mono text-xs text-muted mb-3 tracking-wide uppercase">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 border border-border rounded-lg px-3 py-2 bg-surface"
                  >
                    <div className={`w-5 h-5 rounded flex items-center justify-center ${skill.lightBg ? 'bg-white' : ''}`}>
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
                        alt={skill.name}
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="text-sm text-secondary">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
