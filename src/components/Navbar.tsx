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
      className="fixed top-0 left-0 w-full z-50 glass px-6 md:px-12 py-4 flex items-center justify-between pointer-events-auto"
    >
      <div className="flex items-center space-x-2">
        <span className="text-xs font-bold tracking-[0.3em] text-white/90">MARK VII EXOSUIT</span>
      </div>

      <div className="hidden md:flex items-center space-x-10 text-[10px] uppercase tracking-[0.2em] text-white/60">
        {['Overview', 'Engineering', 'Systems', 'Armor', 'Specs'].map((item) => (
          <a key={item} href="#" className="hover:text-white transition-colors duration-300">
            {item}
          </a>
        ))}
      </div>

      <div>
        <button className="cta-border px-6 py-2 text-[10px] uppercase tracking-widest text-white/90 rounded-sm hover:shadow-[0_0_20px_rgba(0,214,255,0.3)] transition-all duration-300">
          View Suit Specs
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
