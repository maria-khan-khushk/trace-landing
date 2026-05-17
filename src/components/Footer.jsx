export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border bg-bg-card/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono font-bold text-sm tracking-wider">
          TRACE<span className="text-jade-500">.</span>
        </div>

        <div className="text-xs text-fg-muted">
          Built at Bahria University Karachi — BSE Semester Project 2026
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/UmerCodes19/Trace" target="_blank" rel="noreferrer" className="text-xs text-fg-muted hover:text-jade-400 transition-colors">GitHub</a>
          <a href="https://trace-self.vercel.app" target="_blank" rel="noreferrer" className="text-xs text-fg-muted hover:text-jade-400 transition-colors">Dashboard</a>
          <a href="https://trace-app-chi.vercel.app" target="_blank" rel="noreferrer" className="text-xs text-fg-muted hover:text-jade-400 transition-colors">Web App</a>
        </div>
      </div>
    </footer>
  )
}
