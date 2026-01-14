import Navbar from "@/components/Navbar";
import ScrollScene from "@/components/ScrollScene";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] selection:bg-arc-blue selection:text-white">
      <Navbar />
      
      <ScrollScene />
      
      <section className="relative z-20 bg-secondary py-32 px-6 md:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Detailed Specs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <h3 className="text-[10px] uppercase tracking-[.4em] text-arc-blue font-bold">Material Science</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                The Mark VII armor is composed of a proprietary gold-titanium alloy, reinforced with carbon-nanotubes to provide unmatched tensile strength while remaining lightweight for supersonic travel.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-[10px] uppercase tracking-[.4em] text-arc-blue font-bold">Neural Interface</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                A high-fidelity biometric link allows the user to control the suit with thought-latency speeds. The J.A.R.V.I.S. operating system provides real-time tactical analysis and system management.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-[10px] uppercase tracking-[.4em] text-arc-blue font-bold">Energy Output</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                The generation-4 Arc Reactor provides enough clean energy to power a small city. This power is routed through superconducting conduits to repulsor nodes and life-support systems.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-8 pt-20 border-t border-white/5">
            <span className="text-[10px] uppercase tracking-[.5em] text-white/20">Stark Industries // Classified</span>
            <div className="h-px w-24 bg-arc-blue/30 shadow-[0_0_10px_rgba(0,214,255,0.4)]"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
