import FadeUp from '@/components/FadeUp'

const projects = [
  {
    name: 'Habit Tracker',
    desc: 'Full-stack habit tracking app — currently in progress.',
    stack: ['react', 'vitejs', 'nodejs'],
    tag: 'in progress',
    link: 'https://github.com/saikat-codes/habit-tracker_full',
  },
  {
    name: 'Query Management System',
    desc: 'Full-stack system to manage and route queries with real-time email and Telegram notifications.',
    stack: ['react', 'nodejs', 'express'],
    tag: 'full-stack',
    link: 'https://github.com/saikat-codes/query-management-system',
  },
  {
    name: 'Weather App',
    desc: 'Responsive weather app with real-time data from OpenWeatherMap and city search.',
    stack: ['html5', 'css3', 'javascript'],
    tag: 'frontend',
    link: 'https://github.com/saikat-codes/js-weather',
  },
]

const iconMap = {
  react:      'react/react-original.svg',
  nodejs:     'nodejs/nodejs-original.svg',
  express:    'express/express-original.svg',
  vitejs:     'vitejs/vitejs-original.svg',
  html5:      'html5/html5-original.svg',
  css3:       'css3/css3-original.svg',
  javascript: 'javascript/javascript-original.svg',
}

// icons that need a light background to be visible
const needsLightBg = ['express']

const tagStyles = {
  'in progress': 'border-accent/40 bg-accent/10 text-accent',
  'full-stack':  'border-border bg-surface text-secondary',
  'frontend':    'border-border bg-surface text-secondary',
}

export default function Projects() {
  return (
    <section id="work" className="px-6 py-24 max-w-3xl">
      <FadeUp>
        <p className="font-mono text-sm text-muted mb-2">02 — projects</p>
        <h2 className="text-3xl font-bold text-primary mb-10">selected work</h2>
      </FadeUp>

      <div className="flex flex-col">
        {projects.map((project) => (
          <FadeUp key={project.name} delay={0.2}>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group flex justify-between items-center py-5 border-b border-border hover:px-2 transition-all"
            >
              <div>
                <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                  {project.name}
                </h3>

                <div className="flex gap-2 mt-2">
                  {project.stack.map((tech) => (
                    <div
                      key={tech}
                      className={`w-7 h-7 rounded-md border border-border flex items-center justify-center ${needsLightBg.includes(tech) ? "bg-white" : "bg-surface"}`}
                    >
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconMap[tech]}`}
                        alt={tech}
                        className="w-4 h-4"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`text-xs border rounded-full px-3 py-1 font-medium ${tagStyles[project.tag]}`}
                >
                  {project.tag}
                </span>
                <span className="text-muted group-hover:text-accent transition-colors">
                  ↗
                </span>
              </div>
            </a>
          </FadeUp>
        ))}
      </div>

      <a
        href="https://github.com/saikat-codes"
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-8 text-sm text-secondary hover:text-accent transition-colors"
      >
        view all on github →
      </a>
    </section>
  );
}
