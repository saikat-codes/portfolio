import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Journey from '@/components/Journey'
import Skills from '@/components/Skills'
import Github from '@/components/Github'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative z-10 max-w-4xl mx-auto px-6">
      <Hero />
      <Projects />
      <Journey />
      <Skills />
      <Github />
      <About />
      <Footer />
    </main>
  );
}
