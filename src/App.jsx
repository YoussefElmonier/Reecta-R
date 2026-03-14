import { useEffect } from 'react'
import Lenis from 'lenis'
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
import SharedRecipeFoundPage from './pages/SharedRecipeFoundPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'

function App() {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/'
  const shareMatch = pathname.match(/^\/r\/([^/]+)\/?$/)
  const shareId = shareMatch ? decodeURIComponent(shareMatch[1]) : null
  const isPrivacyPolicyRoute = /^\/privacy-policy\/?$/.test(pathname)

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

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

    return () => {
      observer.disconnect()
      lenis.destroy()
    }
  }, [])

  if (shareId) {
    return (
      <div className="min-h-screen bg-brand-cream overflow-x-hidden">
        <Navbar />
        <SharedRecipeFoundPage shareId={shareId} />
        <Footer />
      </div>
    )
  }

  if (isPrivacyPolicyRoute) {
    return (
      <div className="min-h-screen bg-brand-cream overflow-x-hidden">
        <Navbar />
        <PrivacyPolicyPage />
        <Footer />
      </div>
    )
  }

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
