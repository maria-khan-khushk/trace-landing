import { useEffect } from 'react'
import Lenis from 'lenis'
import Hero from './components/Hero'
import Features from './components/Features'
import Screenshots from './components/Screenshots'
import StoryTimeline from './components/StoryTimeline'
import Testimonials from './components/Testimonials'
import DownloadCTA from './components/DownloadCTA'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="bg-bg text-fg overflow-x-hidden min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4 lg:px-10 border-b border-white/5 bg-bg/80 backdrop-blur-xl">
        <a href="#" className="font-mono font-bold text-lg tracking-wider">
          TRACE<span className="text-jade-500">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-fg-muted hover:text-fg transition-colors">Features</a>
          <a href="#screens" className="text-sm font-medium text-fg-muted hover:text-fg transition-colors">Screens</a>
          <a href="#how" className="text-sm font-medium text-fg-muted hover:text-fg transition-colors">How it works</a>
          <a href="https://trace-self.vercel.app" target="_blank" className="text-sm font-medium text-fg-muted hover:text-jade-400 transition-colors">Dashboard</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#download" className="px-5 py-2.5 bg-jade-500 hover:bg-jade-400 text-bg-card font-bold rounded-lg text-sm transition-all duration-300 box-glow hover:scale-105 active:scale-95">
            Download App
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <Features />
        <Screenshots />
        <StoryTimeline />
        <Testimonials />
        <DownloadCTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
