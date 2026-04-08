import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="container">
        <AboutMe />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
