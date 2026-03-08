import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Collections from './components/Collections'
import Shopping from './components/Shopping'
import CookMode from './components/CookMode'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-brand-cream overflow-x-hidden">
      <Navbar />
      <Hero />
      <PainPoints />
      <Features />
      <HowItWorks />
      <Collections />
      <Shopping />
      <CookMode />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
