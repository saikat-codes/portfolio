import FadeUp from "@/components/FadeUp";
import { Mail } from "lucide-react";

const GitHubSVG = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInSVG = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Footer() {
  return (
    <footer id="contact" className="py-16 border-t border-border">
      <FadeUp>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <h2 className="text-4xl font-bold text-primary">
            let&apos;s talk<span className="text-accent">.</span>
          </h2>

          <div className="flex gap-3">
            {/* personal email */}
            <a
              href="mailto:saikat612006@gmail.com"
              title="Personal Email"
              className="w-11 h-11 rounded-xl border border-border bg-surface flex items-center justify-center text-secondary hover:text-accent hover:border-accent hover:bg-accent/5 transition-all"
            >
              <Mail size={18} strokeWidth={1.5} />
            </a>

            {/* institutional email */}
            <a
              href="mailto:sd.25u10707@nitdgp.ac.in"
              title="Institute Email — NIT Durgapur"
              className="w-11 h-11 rounded-xl border border-border bg-surface flex items-center justify-center text-secondary hover:text-accent hover:border-accent hover:bg-accent/5 transition-all"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
              </svg>
            </a>

            <a
              href="https://github.com/saikat-codes"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl border border-border bg-surface flex items-center justify-center text-secondary hover:text-accent hover:border-accent hover:bg-accent/5 transition-all"
            >
              <GitHubSVG />
            </a>

            <a
              href="https://www.linkedin.com/in/saikat-das-698a5b2a2"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl border border-border bg-surface flex items-center justify-center text-secondary hover:text-accent hover:border-accent hover:bg-accent/5 transition-all"
            >
              <LinkedInSVG />
            </a>
          </div>
        </div>
      </FadeUp>

      <FadeUp delay={0.2}>
        <p className="text-center text-xs text-muted mt-12 font-mono">
          built by Saikat Das · {new Date().getFullYear()}
        </p>
      </FadeUp>
    </footer>
  );
}
