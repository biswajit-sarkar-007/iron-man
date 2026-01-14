'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-80 px-12 md:px-32 lg:px-48 border-t border-white/5 relative overflow-hidden mt-[40vh]">
      {/* HUD Background Grid */}
      <div className="absolute inset-0 hud-grid opacity-5 pointer-events-none"></div>

      {/* Decorative pulse effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-iron-red/5 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-screen-2xl mx-auto flex flex-col items-center space-y-48 relative z-10">
        <div className="flex flex-col items-center space-y-12">
          <div className="w-20 h-20 border border-iron-red flex items-center justify-center relative bg-black">
            <div className="absolute inset-0 border border-iron-red/20 scale-[2] rounded-full animate-ping opacity-10"></div>
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-iron-red"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-iron-red"></div>
            <span className="text-iron-red font-orbitron font-black text-4xl group-hover:animate-glitch">S</span>
          </div>
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-orbitron font-black tracking-[1em] text-white">
              STARK <span className="text-iron-red">INDUSTRIES</span>
            </h2>
            <div className="flex items-center justify-center space-x-4">
                <div className="h-[1px] w-12 bg-iron-red opacity-30"></div>
                <p className="text-white/30 font-mono text-[10px] uppercase tracking-[0.8em]">Advanced R&D Division</p>
                <div className="h-[1px] w-12 bg-iron-red opacity-30"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-32 text-center w-full max-w-6xl">
          {['Technology', 'Aerospace', 'Defense', 'Energy'].map((item) => (
            <div key={item} className="space-y-10 group">
              <h4 className="text-white/20 font-orbitron text-xs uppercase tracking-[0.4em] font-bold group-hover:text-iron-red transition-colors">{item}</h4>
              <ul className="space-y-6 text-[11px] text-white/40 font-mono uppercase tracking-widest">
                <li className="hover:text-white transition-colors cursor-pointer border-b border-white/0 hover:border-white/10 pb-1 inline-block">Strategic Innovation</li>
                <br/>
                <li className="hover:text-white transition-colors cursor-pointer border-b border-white/0 hover:border-white/10 pb-1 inline-block">Integrated Systems</li>
                <br/>
                <li className="hover:text-white transition-colors cursor-pointer border-b border-white/0 hover:border-white/10 pb-1 inline-block">Future-Ready Tech</li>
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-32 border-t border-white/10 w-full flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center space-x-4 opacity-20 group cursor-help">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-white font-mono text-[10px] uppercase tracking-widest">Global Server Status: Online</p>
          </div>
          
          <div className="flex space-x-12 text-white/10 font-mono text-[10px] uppercase tracking-widest">
            <a href="#" className="hover:text-iron-red transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-iron-red transition-colors">Security Clearance</a>
            <a href="#" className="hover:text-iron-red transition-colors">Terms of Engagement</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
