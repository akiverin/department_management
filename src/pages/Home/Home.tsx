import FAQ from './FAQ/FAQ'
import Hero from './Hero/Hero'
import './Home.css'
import ProgramsSection from './ProgramsSection/ProgramsSection'
import Skills from './Skills/Skills'

function Home() {
  return (
    <main className="home">
        <Hero />
        <ProgramsSection />
        <Skills />
        <FAQ />
    </main>
  )
}

export default Home
