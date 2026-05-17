import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

// Import Screenshots
import screen1 from '../assets/screens/screen1.jpeg'
import screen2 from '../assets/screens/screen2.png'
import screen3 from '../assets/screens/screen3.png'
import screen4 from '../assets/screens/screen4.png'
import screen5 from '../assets/screens/screen5.png'
import screen6 from '../assets/screens/screen6.jpeg'
import screen7 from '../assets/screens/screen7.png'
import screen8 from '../assets/screens/screen8.png'

const screens = [
  { id: 1, img: screen1, title: 'Welcome & Login', desc: 'Secure email & Google sign-in gateway tailored for Bahria University students.' },
  { id: 2, img: screen2, title: 'Lost & Found Feed', desc: 'Explore recently reported lost and found items on campus in real-time.' },
  { id: 3, img: screen3, title: 'Report Lost Item', desc: 'Easily log a lost item with details, category, and precise campus location.' },
  { id: 4, img: screen6, title: 'AI Matching Hub', desc: 'Advanced AI instantly matches reported items based on visual tags & features.' },
  { id: 5, img: screen5, title: 'Active Listings', desc: 'Manage your reported items, track match statuses, and verify claims.' },
  { id: 6, img: screen4, title: 'Secure QR Handover', desc: 'Verify the true owner instantly via dynamically generated secure QR codes.' },
  { id: 7, img: screen7, title: 'User Profile & Logs', desc: 'Access your history, active claims, and comprehensive lost/found logs.' },
  { id: 8, img: screen8, title: 'Settings', desc: 'Settings where usercs can control their notifications and app preferences.' },
]

export default function Screenshots() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeImage, setActiveImage] = useState(null) // Lightbox modal state

  const carouselRef = useRef(null)

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(screens.length - 1, prev + 1))
  }

  // Calculate slide offset based on index and screen widths
  const slideWidth = 320 // 300px card + 20px gap
  const xOffset = -currentIndex * slideWidth

  return (
    <section id="screens" className="py-32 px-6 relative border-y border-border bg-bg-card/20 overflow-hidden transition-all duration-400">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-hero-glow rounded-full blur-3xl pointer-events-none opacity-20" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="text-xs font-bold text-jade-500 tracking-[0.2em] uppercase mb-4 block">Interface</span>
          <h2 className="font-mono text-4xl md:text-5xl font-bold">App Showcase.</h2>
          <p className="text-fg-muted mt-4 max-w-md text-sm md:text-base">
            Take control of the tour. Swipe, drag, or use the buttons below to explore every screen and functionality of TRACE.
          </p>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${currentIndex === 0
              ? 'border-border text-fg-muted/30 cursor-not-allowed'
              : 'border-border bg-bg-card text-fg hover:border-jade-500 hover:text-jade-400 box-glow active:scale-95'
              }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === screens.length - 1}
            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${currentIndex === screens.length - 1
              ? 'border-border text-fg-muted/30 cursor-not-allowed'
              : 'border-border bg-bg-card text-fg hover:border-jade-500 hover:text-jade-400 box-glow active:scale-95'
              }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Interactive Carousel */}
      <div className="max-w-6xl mx-auto relative px-2">
        <div className="overflow-visible" ref={carouselRef}>
          <motion.div
            animate={{ x: xOffset }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex gap-5 cursor-grab active:cursor-grabbing w-max py-4"
          >
            {screens.map((screen, i) => {
              const isActive = i === currentIndex
              return (
                <motion.div
                  key={screen.id}
                  onClick={() => setCurrentIndex(i)}
                  animate={{
                    scale: isActive ? 1 : 0.95,
                    opacity: isActive ? 1 : 0.6
                  }}
                  transition={{ duration: 0.4 }}
                  className={`relative flex-shrink-0 w-[300px] aspect-[9/19] rounded-[2rem] border overflow-hidden bg-bg-card transition-all duration-400 box-glow ${isActive ? 'border-jade-500/50 shadow-[0_0_30px_rgba(16,185,129,0.15)]' : 'border-border hover:border-jade-500/20'
                    }`}
                >
                  <img
                    src={screen.img}
                    alt={screen.title}
                    className="w-full h-full object-cover select-none"
                  />

                  {/* Dark Vignette overlay (important for reading white text in light mode too) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-90 pointer-events-none" />

                  {/* Zoom Overlay on Hover */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveImage(screen.img)
                    }}
                    className="absolute inset-0 bg-jade-950/20 backdrop-blur-[2px] opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-zoom-in"
                  >
                    <div className="p-4 rounded-full bg-jade-500/25 border border-jade-400/30 text-white flex items-center gap-2 box-glow hover:scale-105 transition-transform">
                      <ZoomIn className="w-5 h-5 text-jade-300" />
                      <span className="text-xs font-semibold text-jade-100">View Full Screen</span>
                    </div>
                  </div>

                  {/* Screen Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end z-10 pointer-events-none">
                    <span className="font-mono text-xs font-bold text-jade-500 mb-1">SCREEN 0{screen.id}</span>
                    <h4 className="text-lg font-bold text-white tracking-wide mb-2">{screen.title}</h4>
                    <p className="text-xs text-white/70 leading-relaxed line-clamp-2">{screen.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {screens.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-8 bg-jade-500 box-glow' : 'w-2.5 bg-fg-muted/20 hover:bg-fg-muted/40'
                }`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox / Zoom-in Modal Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-h-[85vh] max-w-[90vw] aspect-[9/19] rounded-[2rem] border border-white/10 overflow-hidden box-glow"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage}
                alt="App Screenshot Zoomed"
                className="w-full h-full object-contain"
              />
            </motion.div>
            <div className="absolute top-6 right-6 text-white/50 font-mono text-xs tracking-wider">
              CLICK ANYWHERE TO CLOSE
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
