import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import DesignProcess from '../components/DesignProcess'
import Services from '../components/Services'
import Tools from '../components/Tools'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Testimonials from '../components/Testimonials'
import Clients from '../components/Clients'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home({ darkMode, setDarkMode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <DesignProcess />
        <Services />
        <Tools />
        <Projects />
        <Experience />
        <Testimonials />
        <Clients />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
