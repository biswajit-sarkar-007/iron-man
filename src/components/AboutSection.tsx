'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="relative py-80 px-12 md:px-24 lg:px-[15vw] bg-black overflow-hidden mt-80 ml-0 flex flex-col items-center">
      {/* HUD Background Grid */}
      <div className="absolute inset-0 hud-grid opacity-10 pointer-events-none"></div>

      {/* Decorative Corner Marks */}
      <div className="absolute top-20 left-12 w-32 h-32 border-t border-l border-iron-red/40 pointer-events-none"></div>
      <div className="absolute top-20 right-12 w-32 h-32 border-t border-r border-iron-red/40 pointer-events-none"></div>
      
      <div className="max-w-screen-2xl w-full grid grid-cols-1 lg:grid-cols-2 gap-48 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="inline-flex items-center space-x-4 px-4 py-2 border border-iron-red/30 bg-iron-red/5 rounded-sm">
            <div className="w-2 h-2 bg-iron-red animate-pulse"></div>
            <span className="text-[12px] font-orbitron tracking-[0.5em] text-iron-red font-bold uppercase">System: Mark VII Breakdown</span>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold font-orbitron leading-tight text-white uppercase tracking-tighter">
              Aeronautical <br/> <span className="text-iron-red">Superiority</span>
            </h2>
            <div className="h-1 w-24 bg-iron-red/50 shadow-[0_0_20px_rgba(215,25,32,0.5)]"></div>
          </div>
          
          <p className="text-white/50 font-mono text-xl leading-relaxed max-w-xl">
            The Mark VII isn't just a suit; it's a testament to engineering excellence. Utilizing proprietary gold-titanium alloys and real-time biometric synching.
          </p>
          
          <div className="grid grid-cols-2 gap-12 pt-12 relative">
            {/* Connection Line Decor */}
            <div className="absolute -top-6 left-0 w-full h-[1px] bg-gradient-to-r from-iron-red/20 via-transparent to-transparent"></div>
            
            <div className="space-y-4 group">
              <h4 className="text-iron-red font-orbitron text-4xl font-black group-hover:scale-110 transition-transform origin-left">1200%</h4>
              <p className="text-white/40 font-mono text-xs uppercase tracking-[0.3em]">Load Capacity</p>
            </div>
            <div className="space-y-4 group">
              <h4 className="text-iron-red font-orbitron text-4xl font-black group-hover:scale-110 transition-transform origin-left">MACH 3.5</h4>
              <p className="text-white/40 font-mono text-xs uppercase tracking-[0.3em]">Top Velocity</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative aspect-square rounded-sm overflow-hidden border border-white/10 group bg-iron-red/5"
        >
          {/* Internal HUD Elements */}
          <div className="absolute top-4 left-4 z-20 font-mono text-[10px] text-iron-red/60 uppercase tracking-widest bg-black/50 p-2 border border-iron-red/20">
            Scanning System... <br/> [98.2% Accuracy]
          </div>
          
          <div className="absolute inset-0 bg-iron-red/10 blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none"></div>
          
          <img 
            src="/images/about_suit.png" 
            alt="Iron Man Suit Details" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 relative z-0 scale-110 group-hover:scale-100"
          />
          
          {/* HUD scan line effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-iron-red/20 to-transparent h-1/2 w-full animate-scan z-20 pointer-events-none"></div>
          
          {/* Decorative brackets for the image */}
          <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-iron-red/50 z-30"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
