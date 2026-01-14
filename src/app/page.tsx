import Navbar from "@/components/Navbar";
import ScrollScene from "@/components/ScrollScene";
import AboutSection from "@/components/AboutSection";
import ExtraSection from "@/components/ExtraSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] selection:bg-iron-red selection:text-white flex flex-col space-y-[40vh] pb-[40vh]">
      {/* Global Background Grid Overlay */}
      <div className="fixed inset-0 hud-grid opacity-5 pointer-events-none z-0"></div>
      
      <Navbar />
      
      <div className="relative z-10">
        <ScrollScene />
      </div>
      
      <div className="relative z-10 px-12 md:px-24 lg:px-[10vw]">
        <AboutSection />
      </div>
      
      <section className="relative z-20 bg-secondary py-[30vh] px-16 md:px-32 lg:px-64 border-y border-white/5 mx-6 md:mx-12 lg:mx-[10vw] rounded-sm shadow-[0_0_100px_rgba(215,25,32,0.05)] overflow-hidden">
        {/* Internal Hud grid for this section */}
        <div className="absolute inset-0 hud-grid opacity-10 pointer-events-none"></div>
        
        {/* HUD Decoration */}
        <div className="absolute top-20 left-12 flex items-center space-x-3">
          <div className="w-3 h-3 bg-iron-red animate-pulse"></div>
          <div className="w-64 h-px bg-iron-red/30"></div>
          <span className="text-[14px] font-mono text-iron-red/60 uppercase tracking-[0.6em] font-bold">Diagnostic: Advanced Synthesis</span>
        </div>
        
        <div className="max-w-screen-2xl mx-auto space-y-80 relative z-10">
          {/* Detailed Specs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-32 lg:gap-48 mt-24">
            <div className="space-y-16 group">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-[2px] bg-iron-red group-hover:w-24 transition-all duration-500"></div>
                <h3 className="text-sm uppercase tracking-[.6em] text-iron-red font-black font-orbitron">Material</h3>
              </div>
              <p className="text-white/40 text-xl leading-relaxed font-mono pl-22 border-l border-white/5">
                The Mark VII armor is composed of a proprietary gold-titanium alloy, reinforced with carbon-nanotubes to provide unmatched tensile strength while remaining lightweight for supersonic travel.
              </p>
            </div>
            <div className="space-y-16 group">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-[2px] bg-iron-gold group-hover:w-24 transition-all duration-500"></div>
                <h3 className="text-sm uppercase tracking-[.6em] text-iron-gold font-black font-orbitron">Neural</h3>
              </div>
              <p className="text-white/40 text-xl leading-relaxed font-mono pl-22 border-l border-white/5">
                A high-fidelity biometric link allows the user to control the suit with thought-latency speeds. The J.A.R.V.I.S. operating system provides real-time tactical analysis.
              </p>
            </div>
            <div className="space-y-16 group">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-[2px] bg-arc-blue group-hover:w-24 transition-all duration-500"></div>
                <h3 className="text-sm uppercase tracking-[.6em] text-arc-blue font-black font-orbitron">Energy</h3>
              </div>
              <p className="text-white/40 text-xl leading-relaxed font-mono pl-22 border-l border-white/5">
                The generation-4 Arc Reactor provides enough clean energy to power a small city. This power is routed through superconducting conduits to repulsor nodes.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-16 pt-32 border-t border-white/10 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-px bg-gradient-to-r from-transparent via-iron-red to-transparent"></div>
            
            <div className="flex items-center space-x-12">
              <div className="h-px w-48 bg-gradient-to-r from-transparent via-iron-red/30 to-transparent"></div>
              <span className="text-sm uppercase tracking-[1.5em] text-white/20 font-orbitron font-bold">Classified: Level 7 Clearanced Only</span>
              <div className="h-px w-48 bg-gradient-to-l from-transparent via-iron-red/30 to-transparent"></div>
            </div>
            <div className="h-3 w-64 bg-iron-red/5 shadow-[0_0_50px_rgba(215,25,32,0.2)] rounded-sm relative overflow-hidden border border-iron-red/20">
               <div className="absolute inset-y-0 left-0 bg-iron-red/40 w-[65%] animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative mb-[40vh] px-12 md:px-24 lg:px-[10vw] z-10">
        <ExtraSection />
      </div>
      
      <div className="mt-[40vh] relative z-20">
        <Footer />
      </div>
    </main>
  );
}
