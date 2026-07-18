export default function PortfolioHero() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans px-8 py-12 md:px-24">
      {/* Navigation */}
      <nav className="flex justify-between items-center border-b border-slate-800 pb-6 mb-16">
        <div className="text-sm tracking-wider font-medium">
          Shreesh Chauhan <span className="text-slate-500">/</span> <span className="text-slate-400">Software Engineer</span>
        </div>
        <div className="flex space-x-8 text-xs tracking-widest uppercase text-slate-400">
          <a href="#work" className="hover:text-indigo-400 transition-colors">Work</a>
          <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a>
          <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
          <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
        <div className="lg:col-span-7 space-y-8">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            <span>Open to New Opportunities</span>
          </div>

          {/* Large Title */}
          <h1 className="text-6xl font-extrabold tracking-tight text-slate-100 leading-none">
            Software <br />
            <span className="text-indigo-400">Engineer.</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
            CIS student at Stony Brook University building ML systems and backend infrastructure — from 
            graph neural networks that catch fraud patterns invisible to traditional models, to production 
            data pipelines for research platforms.
          </p>

          {/* Links */}
          <div className="space-y-4 pt-4">
            <a href="#work" className="inline-flex items-center text-sm font-semibold text-slate-200 hover:text-indigo-400 transition-colors group">
              See the work <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <div className="flex space-x-4 text-xs font-mono text-slate-500 pt-2">
              <a href="https://github.com" className="hover:text-slate-300">GitHub</a>
              <span>/</span>
              <a href="https://linkedin.com" className="hover:text-slate-300">LinkedIn</a>
              <span>/</span>
              <a href="mailto:email" className="hover:text-slate-300">Email</a>
            </div>
          </div>
        </div>

        {/* Profile Image Frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-80 h-80 bg-slate-900 border border-slate-800 flex items-center justify-center shadow-[8px_8px_0px_rgba(129,140,248,0.1)] relative group overflow-hidden">
            <span className="text-8xl font-black tracking-tighter text-slate-800 group-hover:text-slate-700 transition-colors select-none">SC</span>
          </div>
        </div>
      </div>

      {/* Footer Details Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-8 text-left">
        <div>
          <div className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-2">Role</div>
          <div className="text-sm font-semibold text-slate-300">Software Engineer</div>
        </div>
        <div>
          <div className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-2">School</div>
          <div className="text-sm font-semibold text-slate-300">Stony Brook University</div>
        </div>
        <div>
          <div className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-2">Class</div>
          <div className="text-sm font-semibold text-slate-300">2029</div>
        </div>
        <div>
          <div className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-2">Works In</div>
          <div className="text-sm font-semibold text-slate-300">ML Systems, Backend</div>
        </div>
      </div>
    </div>
  )
}