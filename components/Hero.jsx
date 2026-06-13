export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-3xl">
      <p className="font-mono text-sm text-secondary mb-4">hi, i'm</p>

      <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight mb-4">
        Saikat Das<span className="text-accent">.</span>
      </h1>

      <p className="text-lg text-secondary leading-relaxed mb-8 max-w-xl">
        Electrical Engineering undergrad at NIT Durgapur. Developer by choice. I
        build for the web, learn fast, and ship things that work.
      </p>

      <div className="flex gap-4">
        <a
          href="#work"
          className="px-5 py-2.5 rounded-md border border-border text-sm text-primary hover:border-accent transition-colors"
        >
          see my work ↓
        </a>

        <a
          href="https://github.com/saikat-codes"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-md border border-border text-sm text-secondary hover:text-primary hover:border-accent transition-colors"
        >
          github ↗
        </a>
      </div>
    </section>
  );
}
