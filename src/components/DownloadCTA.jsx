import { motion } from 'framer-motion'

export default function DownloadCTA() {
  return (
    <section id="download" className="py-32 px-6 relative bg-bg overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-hero-glow rounded-full blur-3xl pointer-events-none opacity-40 mix-blend-screen" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-5xl md:text-7xl font-bold mb-6"
        >
          Never lose<br /><span className="text-jade-500 text-shadow-sm">again.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-fg-muted mb-12"
        >
          Available now for Bahria University Karachi students. Free forever.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="https://trace-app-chi.vercel.app" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-jade-500 text-bg-card font-bold rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 box-glow text-center">
            Launch Web App
          </a>
          <a href="/trace-app.apk" download className="w-full sm:w-auto px-8 py-4 bg-bg-card border border-white/10 text-fg font-bold rounded-xl hover:border-jade-500/50 hover:text-jade-400 hover:scale-105 active:scale-95 transition-all duration-300 text-center">
            Download Android APK
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 inline-flex items-center gap-2 px-4 py-2 bg-bg-card border border-white/5 rounded-full font-mono text-xs text-fg-muted"
        >
          v1.0.0 &nbsp;—&nbsp; Bahria University Karachi &nbsp;—&nbsp; Final Year Project 2026
        </motion.div>
      </div>
    </section>
  )
}
