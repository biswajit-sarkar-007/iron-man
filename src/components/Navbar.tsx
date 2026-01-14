'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Navbar = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const y = useTransform(scrollY, [0, 100], [-20, 0]);

  return (
    <motion.nav 
      style={{ opacity, y }}
      className="fixed top-0 left-0 w-full z-50 glass px-6 md:px-12 py-6 flex items-center justify-between pointer-events-auto border-b border-white/5"
    >
      {/* Scanning Laser Effect */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-iron-red to-transparent opacity-30 animate-scan pointer-events-none"></div>

      <div className="flex items-center space-x-3 group cursor-pointer">
        <div className="w-10 h-10 border border-iron-red/50 rounded-sm flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-iron-red/10 group-hover:bg-iron-red/20 transition-colors"></div>
          <span className="text-iron-red font-bold text-lg relative z-10 group-hover:animate-glitch">S</span>
        </div>
        <span className="text-sm font-bold tracking-[0.5em] text-white/90 font-orbitron group-hover:text-iron-red transition-colors">STARK <span className="text-iron-red">INDUSTRIES</span></span>
      </div>

      <div className="hidden md:flex items-center space-x-12 text-[11px] uppercase tracking-[0.4em] font-orbitron text-white/50">
        {['Systems', 'Armor', 'Arsenal', 'Mission', 'Specs'].map((item) => (
          <a key={item} href="#" className="hover:text-iron-red transition-all duration-300 relative group py-2">
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-iron-red transition-all duration-300 group-hover:w-full"></span>
            <div className="absolute -top-1 -right-1 w-1 h-1 bg-iron-red opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        ))}
      </div>

      <div className="flex items-center space-x-6">
        <div className="hidden lg:flex flex-col items-end mr-4">
          <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">Auth Level</span>
          <span className="text-[10px] font-mono text-iron-gold uppercase tracking-widest">Alpha-Prime</span>
        </div>
        <button className="px-8 py-3 text-[11px] uppercase tracking-[0.3em] font-orbitron text-white/90 rounded-sm border border-iron-red/30 bg-iron-red/5 hover:bg-iron-red hover:text-white hover:border-iron-red transition-all duration-300 shadow-[0_0_20px_rgba(215,25,32,0.1)] hover:shadow-[0_0_30px_rgba(215,25,32,0.4)] relative overflow-hidden group">
          <span className="relative z-10">Deploy Suit</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
