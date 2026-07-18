import React from 'react';
import PortfolioHero from '../portfolioHero';
function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-teal-500/30 selection:text-teal-200">
      {/* Structural grid line overlay for high-density engineering aesthetic */}
      <div className="fixed inset-0 pointer-events-none border-x border-zinc-900/50 max-w-7xl mx-auto grid grid-cols-4 gap-4 px-4">
        <div className="border-r border-zinc-900/30 h-full"></div>
        <div className="border-r border-zinc-900/30 h-full"></div>
        <div className="border-r border-zinc-900/30 h-full"></div>
      </div>

      <main className="relative z-10">
        <PortfolioHero />
      </main>
    </div>
  );
}

export default App;