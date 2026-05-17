import { motion } from 'framer-motion'

const reviews = [
  { name: "Ali K.", role: "CS Student", text: "Lost my wallet in the cafeteria. Found it within 2 hours thanks to TRACE." },
  { name: "Sara M.", role: "BBA Dept", text: "The Discord integration is incredible. I got a notification instantly when my keys were found." },
  { name: "Usman A.", role: "Engineering", text: "Finally replacing the old register book. The QR handover feels so secure and futuristic." },
  { name: "Fatima R.", role: "Media Sciences", text: "The AI image matching is magic. It accurately tagged my lost AirPods case instantly." }
]

export default function Testimonials() {
  return (
    <section className="py-24 overflow-hidden bg-bg relative">
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-bg to-transparent z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-bg to-transparent z-10" />
      
      <motion.div 
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {/* Double the array for seamless infinite scroll */}
        {[...reviews, ...reviews].map((review, i) => (
          <div 
            key={i}
            className="w-[300px] md:w-[400px] p-6 bg-bg-card rounded-2xl border border-border flex-shrink-0"
          >
            <p className="text-fg-muted mb-6 leading-relaxed">"{review.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-jade-500/20 flex items-center justify-center font-bold text-jade-500">
                {review.name[0]}
              </div>
              <div>
                <h5 className="text-sm font-bold">{review.name}</h5>
                <p className="text-xs text-fg-muted">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
