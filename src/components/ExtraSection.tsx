'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ExtraSection = () => {
  const stats = [
    { label: 'Reactor Status', value: 'Prime', color: 'bg-arc-blue' },
    { label: 'Neural Link', value: 'Stable', color: 'bg-iron-red' },
    { label: 'Armor Integrity', value: '100%', color: 'bg-iron-gold' },
    { label: 'Oxygen Level', value: 'Optimal', color: 'bg-white' },
  ];

  return (
    <section className="relative py-80 bg-black border-y border-iron-red/20 my-80 mt-16 mb-16 px-12 md:px-24 lg:px-[10vw]">
      {/* HUD Background Grid */}
      <div className="absolute inset-0 hud-grid opacity-5 pointer-events-none"></div>
      
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-iron-red/50 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-full bg-iron-red/5 blur-[160px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-24">
          <div className="space-y-8 max-w-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-[10px] font-mono text-iron-red/60 bg-iron-red/10 px-2 py-1 border border-iron-red/20 uppercase tracking-[.3em]">Module: HUD-Interface</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold font-orbitron text-white uppercase tracking-tighter">
              Tactical <br/> <span className="text-iron-red">Analytics</span>
            </h2>
            <p className="text-white/40 font-mono text-lg leading-relaxed">
              Real-time monitoring and advanced system analytics for peak performance in high-altitude combat environments.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full md:w-auto">
            {stats.map((stat, idx) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
                className="p-8 border border-white/5 bg-secondary group hover:border-iron-red/40 transition-all duration-700 rounded-sm relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-1.5 h-full ${stat.color} opacity-40`}></div>
                <div className="space-y-4">
                  <p className="text-white/20 font-mono text-[10px] uppercase tracking-widest">{stat.label}</p>
                  <p className="text-white font-orbitron text-lg font-black group-hover:text-iron-red transition-colors tracking-widest uppercase">{stat.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-48 grid grid-cols-1 md:grid-cols-3 gap-12 bg-white/5 border border-white/5 rounded-sm overflow-hidden p-12">
          {[
            { title: 'Stealth Mode', desc: 'Active cloaking technology utilizing light refraction for covert operations.', tech: 'Ref: CLK-01' },
            { title: 'Repulsor Charge', desc: 'Variable yield energy discharge for orbital flight and offensive maneuvers.', tech: 'Ref: REP-08' },
            { title: 'Nano-Repair', desc: 'Automated structural integrity restoration using microscopic assemblers.', tech: 'Ref: NNO-44' }
          ].map((item, idx) => (
            <div key={idx} className="p-20 bg-black group hover:bg-iron-red/5 transition-all duration-700 rounded-sm border border-white/5 hover:border-iron-red/30 relative">
              <div className="absolute top-4 right-4 text-[8px] font-mono text-white/20 uppercase tracking-widest">{item.tech}</div>
              <div className="w-16 h-16 border border-iron-red/30 rounded-full mb-12 flex items-center justify-center group-hover:border-iron-red transition-all duration-700 group-hover:shadow-[0_0_20px_rgba(215,25,32,0.3)]">
                <span className="text-iron-red font-mono text-xl font-black">0{idx + 1}</span>
              </div>
              <h3 className="text-white font-orbitron text-2xl mb-8 uppercase tracking-widest">{item.title}</h3>
              <p className="text-white/40 font-mono text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-iron-red/50 to-transparent"></div>
      
      {/* Decorative vertical lines */}
      <div className="absolute left-10 top-0 bottom-0 w-px bg-white/5"></div>
      <div className="absolute right-10 top-0 bottom-0 w-px bg-white/5"></div>
    </section>
  );
};

export default ExtraSection;
