import { motion } from 'framer-motion'
import { Brain, Link, QrCode, Map, MessageSquare } from 'lucide-react'

const features = [
  {
    icon: <Brain className="w-6 h-6 text-jade-500" />,
    title: "AI Image Analysis",
    desc: "Simply upload a photo. Our AI auto-tags categories, colors, and brands to instantly match lost and found items."
  },
  {
    icon: <Link className="w-6 h-6 text-jade-500" />,
    title: "Blockchain Logging",
    desc: "Every item's history is immutably logged, ensuring a transparent and tamper-proof chain of custody."
  },
  {
    icon: <QrCode className="w-6 h-6 text-jade-500" />,
    title: "QR Handover",
    desc: "Secure item return through dynamically generated QR codes, verifying the true owner effortlessly."
  },
  {
    icon: <Map className="w-6 h-6 text-jade-500" />,
    title: "Campus Maps",
    desc: "Interactive campus maps pinpoint exactly where items were lost or found for quick retrieval."
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-jade-500" />,
    title: "Discord Bot Integration",
    desc: "Get instant notifications on your campus Discord server the moment a matching item is reported."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 50 }
  }
}

export default function Features() {
  return (
    <section id="features" className="py-32 px-6 relative z-10 bg-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-xs font-bold text-jade-500 tracking-[0.2em] uppercase mb-4 block">Features</span>
          <h2 className="font-mono text-4xl md:text-5xl font-bold mb-6">Smarter Recovery.</h2>
          <p className="text-fg-muted max-w-lg text-lg leading-relaxed">
            TRACE replaces outdated logbooks with a seamless, digital ecosystem designed for the modern campus.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((feat, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="group relative p-8 bg-bg-card rounded-2xl border border-border overflow-hidden hover:border-jade-500/30 transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-jade-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-jade-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-jade-400 transition-colors">{feat.title}</h3>
                <p className="text-fg-muted leading-relaxed text-sm">
                  {feat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
