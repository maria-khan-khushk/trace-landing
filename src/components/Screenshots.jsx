import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const screens = [
  { id: 1, title: 'Dashboard', color: 'from-jade-500/20 to-bg' },
  { id: 2, title: 'AI Match', color: 'from-blue-500/20 to-bg' },
  { id: 3, title: 'Map View', color: 'from-purple-500/20 to-bg' },
  { id: 4, title: 'QR Return', color: 'from-emerald-500/20 to-bg' },
]

export default function Screenshots() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Horizontal scroll effect
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])

  return (
    <section id="screens" ref={containerRef} className="py-32 overflow-hidden relative border-y border-white/5 bg-bg-card/30">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <span className="text-xs font-bold text-jade-500 tracking-[0.2em] uppercase mb-4 block">Interface</span>
        <h2 className="font-mono text-4xl md:text-5xl font-bold">Beautifully crafted.</h2>
      </div>

      <motion.div 
        style={{ x }}
        className="flex gap-8 px-6 md:px-20 w-[200vw] md:w-[150vw]"
      >
        {screens.map((screen, i) => (
          <motion.div
            key={screen.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="relative flex-shrink-0 w-[280px] md:w-[320px] aspect-[9/19] rounded-[2rem] border border-white/10 overflow-hidden bg-bg-card box-glow"
          >
            {/* Screen Inner */}
            <div className={`absolute inset-0 bg-gradient-to-b ${screen.color} opacity-50`} />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
              <span className="font-mono text-4xl font-bold text-white/10 mb-4">0{screen.id}</span>
              <p className="text-fg-muted text-sm border border-white/10 rounded-full px-4 py-2 bg-black/40 backdrop-blur-md">
                {screen.title} Screenshot
              </p>
              <p className="text-[10px] text-fg-muted/50 mt-4 max-w-[80%]">
                (Replace with actual app screenshot in src)
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
