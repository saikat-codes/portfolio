import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Journey from '@/components/Journey'
import Skills from '@/components/Skills'
import Github from '@/components/Github'
import About from '@/components/About'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Journey />
      <Skills />
      <Github />
      <About />
      <Footer />
    </main>
  )
}
