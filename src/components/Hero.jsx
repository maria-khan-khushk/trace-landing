import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Search, MapPin, ScanLine } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  return (
    <section ref={containerRef} className="relative min-h-[100vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-hero-glow rounded-full blur-3xl pointer-events-none opacity-60 mix-blend-screen" />

      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-jade-500/20 bg-jade-500/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-jade-500 animate-[pulse_2s_ease-in-out_infinite]" />
          <span className="text-xs font-semibold tracking-widest text-jade-500 uppercase">Bahria University Karachi — Now Live</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-mono text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85] mb-6"
        >
          TRACE<span className="text-jade-500">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-fg-muted max-w-2xl mx-auto leading-relaxed mb-10"
        >
          The AI-powered lost & found system built for your campus. Report, match, and recover items in minutes — not days.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#download" className="group relative px-8 py-4 bg-jade-500 text-bg-card font-bold rounded-xl overflow-hidden box-glow hover:scale-105 active:scale-95 transition-all duration-300">
            <span className="relative z-10 flex items-center gap-2">
              Download App
            </span>
          </a>
          <a href="https://trace-app-chi.vercel.app" target="_blank" rel="noreferrer" className="px-8 py-4 bg-bg-card border border-border text-fg font-bold rounded-xl hover:border-jade-500/50 hover:text-jade-400 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2">
            Try Web Version
          </a>
        </motion.div>
      </motion.div>

      {/* Fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
    </section>
  )
}
