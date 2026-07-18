import React, { useState } from 'react';

export default function PortfolioHero() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'courtprice' | 'copilot' | 'solquest'

  // Common Navigation Component
  const Navigation = () => (
    <nav className="flex justify-between items-center border-b border-slate-800 pb-6 mb-16">
      <button 
        onClick={() => setCurrentPage('home')} 
        className="text-sm tracking-wider font-medium text-left hover:text-indigo-400 transition-colors"
      >
        Shreesh Chauhan <span className="text-slate-500">/</span> <span className="text-slate-400">Software Engineer</span>
      </button>
      <div className="flex space-x-8 text-xs tracking-widest uppercase text-slate-400">
        {currentPage === 'home' ? (
          <>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a>
            <a href="#competencies" className="hover:text-indigo-400 transition-colors">Skills</a>
          </>
        ) : (
          <button onClick={() => setCurrentPage('home')} className="hover:text-indigo-400 transition-colors">
            ← Back Home
          </button>
        )}
      </div>
    </nav>
  );

  // Common Footer Layout for Project Deep Dives
  const ProjectFooter = () => (
    <footer className="border-t border-slate-800 pt-8 mt-24 text-center">
      <button 
        onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}
        className="text-xs font-mono text-indigo-400 hover:text-indigo-300 transition-colors"
      >
        ← Return to Main Portfolio
      </button>
    </footer>
  );

  if (currentPage === 'courtprice') {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans px-8 py-12 md:px-24 max-w-7xl mx-auto">
        <Navigation />
        <div className="max-w-3xl space-y-8">
          <div className="text-xs font-mono text-indigo-400 uppercase tracking-widest">Case Study / Full-Stack Web App</div>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-100">CourtPrice 🎾</h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            A full-stack web application that tracks ATP tennis player performance metrics and directly correlates live competitive statistics with real-world memorabilia valuation trends across digital marketplaces[cite: 1].
          </p>

          <div className="border-t border-b border-slate-800 py-6 my-8 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
            <div><span className="text-slate-500 block">ROLE</span> Full-Stack Developer[cite: 1]</div>
            <div><span className="text-slate-500 block">STACK</span> React, Node, Express[cite: 1]</div>
            <div><span className="text-slate-500 block">DATA</span> eBay API, ATP CSV[cite: 1]</div>
            <div><span className="text-slate-500 block">STATUS</span> Production Active[cite: 1]</div>
          </div>

          <h3 className="text-xl font-bold text-slate-200 pt-4">Core Functionality</h3>
          <ul className="list-disc list-inside text-slate-400 space-y-2 text-sm leading-relaxed">
            <li>Dynamic lookups across prominent ATP professional configurations (Alcaraz, Sinner, Djokovic)[cite: 1].</li>
            <li>Direct ingestion grids detailing surface trends, career win/loss metrics, and historical scores[cite: 1].</li>
            <li>Calculates live market performance indices (average, minimum, and maximum valuation metrics) utilizing authentic production APIs[cite: 1].</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-200 pt-4">Architecture Design</h3>
          <div className="bg-slate-900 border border-slate-800 p-6 font-mono text-xs text-slate-400 rounded space-y-1 overflow-x-auto">
            <p>User Browser → React Client (Port 5173)[cite: 1]</p>
            <p className="pl-12">↓ Express REST Engine (Port 3001)[cite: 1]</p>
            <p className="pl-24">├── eBay Browse API (Live Price Polling)[cite: 1]</p>
            <p className="pl-24">└── Local ATP Datasets (Match History Grids)[cite: 1]</p>
          </div>
        </div>
        <ProjectFooter />
      </div>
    );
  }

  if (currentPage === 'copilot') {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans px-8 py-12 md:px-24 max-w-7xl mx-auto">
        <Navigation />
        <div className="max-w-3xl space-y-8">
          <div className="text-xs font-mono text-indigo-400 uppercase tracking-widest">Case Study / AI & Graph Engineering</div>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-100">Fraud Investigation Copilot</h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            An advanced financial crime investigation framework leveraging spatial network representations to parse complex money rings, structuring, and multi-layered assets down to isolated anomalies instantly[cite: 1].
          </p>

          <div className="border-t border-b border-slate-800 py-6 my-8 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
            <div><span className="text-slate-500 block">ROLE</span> ML Systems Engineer[cite: 1]</div>
            <div><span className="text-slate-500 block">ARCHITECTURE</span> 6-Layer Pipeline[cite: 1]</div>
            <div><span className="text-slate-500 block">CORE GNN</span> GraphSAGE Model[cite: 1]</div>
            <div><span className="text-slate-500 block">EVALUATION</span> 95% Graph Accuracy[cite: 1]</div>
          </div>

          <h3 className="text-xl font-bold text-slate-200 pt-4">Technical Overview</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Traditional transactional rules often miss relational structures across overlapping account nodes. By implementing a multi-layered topological evaluation process, the pipeline detects suspicious patterns and reduces investigation cycles from hours to under 60 seconds[cite: 1].
          </p>

          <h3 className="text-xl font-bold text-slate-200 pt-4">System Breakdown</h3>
          <ul className="list-disc list-inside text-slate-400 space-y-2 text-sm leading-relaxed">
            <li><strong className="text-slate-200">PyTorch Geometric Ensembles:</strong> GraphSAGE layer passes node messages over transaction graphs to catch hidden structures[cite: 1].</li>
            <li><strong className="text-slate-200">Regulatory Automation:</strong> Integrates Gemini LLM to auto-generate regulatory-grade Suspicious Activity Reports (SAR) based on data matrices[cite: 1].</li>
            <li><strong className="text-slate-200">Contextual Ingestion:</strong> Vectors are stored in a database layer to enable fast retrieval during analyst interactions[cite: 1].</li>
          </ul>
        </div>
        <ProjectFooter />
      </div>
    );
  }

  if (currentPage === 'solquest') {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans px-8 py-12 md:px-24 max-w-7xl mx-auto">
        <Navigation />
        <div className="max-w-3xl space-y-8">
          <div className="text-xs font-mono text-indigo-400 uppercase tracking-widest">Case Study / Web3 Architecture</div>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-100">SOL QUEST ⚔️</h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Award-winning Web3 multi-tiered game infrastructure built under strict 16-hour hackathon constraints, implementing secure wallet integrations and zero-latency transaction checking structures[cite: 1].
          </p>

          <div className="border-t border-b border-slate-800 py-6 my-8 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
            <div><span className="text-slate-500 block">AWARD</span> Hopper Hacks Winner[cite: 1]</div>
            <div><span className="text-slate-500 block">BLOCKCHAIN</span> Solana Devnet[cite: 1]</div>
            <div><span className="text-slate-500 block">ENGINE</span> Phaser Top-Down[cite: 1]</div>
            <div><span className="text-slate-500 block">BACKEND</span> Django[cite: 1]</div>
          </div>

          <h3 className="text-xl font-bold text-slate-200 pt-4">Engineering Achievements</h3>
          <ul className="list-disc list-inside text-slate-400 space-y-2 text-sm leading-relaxed">
            <li>Designed asynchronous transaction layers to process state transitions without blocking the canvas render cycle[cite: 1].</li>
            <li>Configured secure verification channels to authenticate payload validations directly with on-chain ledgers[cite: 1].</li>
            <li>Managed real-time distribution states across active client instances efficiently[cite: 1].</li>
          </ul>
        </div>
        <ProjectFooter />
      </div>
    );
  }

  // MAIN PORTFOLIO DASHBOARD VIEW
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans px-8 py-12 md:px-24 max-w-7xl mx-auto selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navigation />

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-32">
        <div className="lg:col-span-8 space-y-8">
          <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            <span>Active at CRIZM Research Lab</span>
          </div>

          <h1 className="text-6xl font-extrabold tracking-tight text-slate-100 leading-none">
            Shreesh Chauhan<span className="text-indigo-400">.</span>
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            Computer Information Systems student at <span className="text-slate-200 font-semibold">Stony Brook University</span>[cite: 1]. Building engineering systems at the convergence of graph structural machine learning, resilient backend architectures, and production scaling mechanics[cite: 1].
          </p>

          <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-500 pt-4">
            <a href="https://github.com/shreeshchauhan" target="_blank" rel="noreferrer" className="hover:text-slate-200 transition-colors underline underline-offset-4">GitHub</a>
            <span>/</span>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-200 transition-colors underline underline-offset-4">LinkedIn</a>
            <span>/</span>
            <a href="mailto:shreeshchauhan.01@gmail.com" className="hover:text-slate-200 transition-colors underline underline-offset-4">Email</a>
          </div>
        </div>

        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="w-64 h-64 bg-slate-900 border border-slate-800 flex items-center justify-center shadow-[8px_8px_0px_rgba(129,140,248,0.06)] relative group">
            <span className="text-7xl font-black tracking-tighter text-slate-800 group-hover:text-indigo-950 transition-colors select-none">SC</span>
          </div>
        </div>
      </div>

      {/* Selected Engineering Projects */}
      <section id="projects" className="border-t border-slate-800 pt-16 mb-32">
        <div className="flex justify-between items-baseline mb-12">
          <h2 className="text-xs font-bold tracking-widest uppercase text-slate-500">Selected Code Repositories</h2>
          <span className="text-xs font-mono text-slate-600">Click headers to inspect modules</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Project 1: Fraud Investigation Copilot */}
          <div className="bg-slate-900/40 border border-slate-800 p-8 rounded hover:border-slate-700 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex justify-between items-start mb-4">
                <button 
                  onClick={() => { setCurrentPage('copilot'); window.scrollTo(0,0); }}
                  className="text-lg font-bold text-slate-100 group-hover:text-indigo-400 text-left transition-colors"
                >
                  Fraud Copilot →
                </button>
                <span className="text-[10px] font-mono bg-indigo-950/50 border border-indigo-900/50 text-indigo-300 px-2 py-0.5 rounded">GNN + LLM</span>
              </div>
              <p className="text-slate-400 text-xs mb-6 leading-relaxed">
                Processes structural relationship graphs using 6-layer GraphSAGE detection networks to uncover complex asset manipulation schemes instantly[cite: 1].
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-slate-500">
              <span>PyTorch</span>•<span>FastAPI</span>•<span>Gemini</span>[cite: 1]
            </div>
          </div>

          {/* Project 2: CourtPrice */}
          <div className="bg-slate-900/40 border border-slate-800 p-8 rounded hover:border-slate-700 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex justify-between items-start mb-4">
                <button 
                  onClick={() => { setCurrentPage('courtprice'); window.scrollTo(0,0); }}
                  className="text-lg font-bold text-slate-100 group-hover:text-indigo-400 text-left transition-colors"
                >
                  CourtPrice 🎾 →
                </button>
                <span className="text-[10px] font-mono bg-slate-800 text-slate-400 px-2 py-0.5 rounded">Full-Stack</span>
              </div>
              <p className="text-slate-400 text-xs mb-6 leading-relaxed">
                Correlates competitive ATP data feeds with real-time eBay pricing components using dedicated Express routing logic[cite: 1].
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-slate-500">
              <span>React</span>•<span>Node.js</span>•<span>eBay API</span>[cite: 1]
            </div>
          </div>

          {/* Project 3: SOL QUEST */}
          <div className="bg-slate-900/40 border border-slate-800 p-8 rounded hover:border-slate-700 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex justify-between items-start mb-4">
                <button 
                  onClick={() => { setCurrentPage('solquest'); window.scrollTo(0,0); }}
                  className="text-lg font-bold text-slate-100 group-hover:text-indigo-400 text-left transition-colors"
                >
                  Sol Quest →
                </button>
                <span className="text-[10px] font-mono bg-emerald-950/50 border border-emerald-900/50 text-emerald-400 px-2 py-0.5 rounded">Hackathon Winner</span>
              </div>
              <p className="text-slate-400 text-xs mb-6 leading-relaxed">
                Real-time Phaser ecosystem processing automated transaction routines over high-throughput cryptographic networks[cite: 1].
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-slate-500">
              <span>Solana</span>•<span>Django</span>•<span>Vite</span>[cite: 1]
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Timeline */}
      <section id="experience" className="border-t border-slate-800 pt-16 mb-32">
        <h2 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-12">Professional Timeline</h2>
        <div className="space-y-12 max-w-4xl">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 relative">
            <div className="md:col-span-4 text-xs font-mono text-slate-500">Jan 2026 – Present[cite: 1]</div>
            <div className="md:col-span-8 space-y-2">
              <h3 className="text-base font-bold text-slate-200">Junior ML Systems & Data Pipeline Engineer</h3>
              <div className="text-xs font-mono text-indigo-400">CRIZM — Vertically Integrated Projects Lab[cite: 1]</div>
              <p className="text-slate-400 text-xs leading-relaxed pt-2">
                Engineering custom ingestion strategies and multi-format extraction workflows across core grading toolings[cite: 1]. Extended Joern-based static analysis components to build robust linting rules processing Python and C++ structures seamlessly within evaluation pipelines[cite: 1].
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 relative">
            <div className="md:col-span-4 text-xs font-mono text-slate-500">Jan 2026 – Present[cite: 1]</div>
            <div className="md:col-span-8 space-y-2">
              <h3 className="text-base font-bold text-slate-200">Marketing Technology Assistant</h3>
              <div className="text-xs font-mono text-indigo-400">Auxiliary Services Association, Stony Brook University[cite: 1]</div>
              <p className="text-slate-400 text-xs leading-relaxed pt-2">
                Refactoring structural application page indices to match modern WCAG 2.1 Level AA access targets[cite: 1]. Managing automated metadata systems and layout architectures for highly visible public web roots[cite: 1].
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Technical Competencies Matrix */}
      <section id="competencies" className="border-t border-slate-800 pt-16">
        <h2 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-12">System Competencies Matrix</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-xs font-mono">
          <div>
            <h4 className="font-bold text-indigo-400 mb-4 uppercase tracking-wider">01 / Runtimes & Languages</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Python[cite: 1]</li>
              <li>Java[cite: 1]</li>
              <li>SQL (MySQL)[cite: 1]</li>
              <li>HTML / CSS[cite: 1]</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-indigo-400 mb-4 uppercase tracking-wider">02 / Frameworks & ML</h4>
            <ul className="space-y-2 text-slate-400">
              <li>PyTorch Geometric[cite: 1]</li>
              <li>GraphSAGE Core[cite: 1]</li>
              <li>FastAPI / Node.js[cite: 1]</li>
              <li>Streamlit Engine[cite: 1]</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-indigo-400 mb-4 uppercase tracking-wider">03 / Operations & Systems</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Git Versioning[cite: 1]</li>
              <li>Data Architecture[cite: 1]</li>
              <li>Solana Integration[cite: 1]</li>
              <li>OmniCMS / Modern Campus[cite: 1]</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}