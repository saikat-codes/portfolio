'use client'

import {GitHubCalendar} from 'react-github-calendar'

export default function ContributionGraph() {



  const githubTheme = {
    dark: [
      '#161b22',
      '#0e4429',
      '#006d32',
      '#26a641',
      '#39d353'
    ]
  }

  return (
    <div>
      <p className="mb-3 font-mono text-xs uppercase tracking-wide text-muted">
        contribution graph
      </p>

      <div

        className="overflow-x-auto scroll-smooth pb-5 select-none flex justify-center"
      >
        <div className="min-w-max pt-4">
          <GitHubCalendar
            username="saikat-codes"
            theme={githubTheme}
            colorScheme="dark"
          />
        </div>
      </div>
    </div>
  )
}
