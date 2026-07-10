import { Link } from "wouter";
import { ArrowLeft, ArrowRight, MapPin, Zap, Users, BarChart3 } from "lucide-react";

const worlds = [
  {
    name: "Perdido Offshore Spar",
    type: "Offshore / Deepwater",
    hotspots: 9,
    status: "Live",
    programs: ["IPP", "NTA", "CDM"],
    description: "The world's deepest spar platform. Walk the topsides, inspect risers, and respond to live integrity findings.",
  },
  {
    name: "Refinery Process Unit",
    type: "Onshore / Refinery",
    hotspots: 120,
    status: "In Development",
    programs: ["ISE", "IST", "TAR", "CDM"],
    description: "A full-scale refinery unit with distillation, reactors, heat exchangers, and piping systems.",
  },
  {
    name: "Nuclear Power Station",
    type: "Power Generation",
    hotspots: 100,
    status: "Planned",
    programs: ["NTA", "ISE", "CSC"],
    description: "Pressurized water reactor facility with containment, steam generators, and safety systems.",
  },
  {
    name: "Pipeline Corridor",
    type: "Transmission / Pipeline",
    hotspots: 80,
    status: "Planned",
    programs: ["IPP", "NTA", "CDM"],
    description: "High-pressure transmission pipeline with compressor stations, pig launchers, and valve sites.",
  },
  {
    name: "Offshore FPSO",
    type: "Offshore / Production",
    hotspots: 90,
    status: "Planned",
    programs: ["ISE", "IST", "IRE"],
    description: "Floating production storage and offloading vessel — topsides, hull, mooring, and risers.",
  },
];

const layers = [
  {
    number: "01",
    name: "Industrial World Engine",
    items: ["Authentication & progress tracking", "3D navigation & camera", "Mission system", "Hotspot detection", "Radio chatter & HUD", "D-IMS integration", "CodeIQ & CertIQ", "Analytics"],
  },
  {
    number: "02",
    name: "World Packages",
    items: ["3D facility model (.glb)", "Hotspot coordinates", "Missions & scenarios", "Site documents & photos", "Audio & lighting", "NPC characters"],
  },
  {
    number: "03",
    name: "Scenario Database",
    items: ["Mission brief & characters", "Evidence collection", "Engineering documents", "CodeIQ questions", "D-IMS work packages", "Scoring & CPD credits"],
  },
  {
    number: "04",
    name: "Equipment Library",
    items: ["Pressure vessels", "Heat exchangers", "Piping & valves", "Rotating equipment", "Storage tanks", "Electrical gear"],
  },
];

const missionFlow = [
  "Arrival", "Briefing", "Walkthrough", "Inspection", "Collect Evidence",
  "Interview Workers", "Review Documents", "Make Decisions", "Submit Findings", "Score & Debrief", "CPD Credit",
];

export default function Platform() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section className="bg-[#060F1E] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #4A6FA5 0%, transparent 60%), radial-gradient(circle at 20% 80%, #C9A84C 0%, transparent 50%)" }} />

        <div className="max-w-7xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-white/40 text-sm hover:text-white/70 transition-colors mb-8">
            <ArrowLeft size={14} /> Holden University
          </Link>

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
              <span className="text-[#C9A84C] text-xs font-medium tracking-wide">Perdido World — Now Live</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-5">
              IntegrityOS
            </h1>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              The training engine inside Holden University. Students walk through real industrial facilities in 3D, respond to live scenarios, collect findings, and earn certifications — all in a single platform.
            </p>
            <p className="text-white/25 text-sm">
              ~15 planned worlds · ~100 hotspots per world · 1,900+ scenarios
            </p>
          </div>
        </div>
      </section>

      {/* ── WORLDS ── */}
      <section className="bg-[#0B1F3A] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-3">Industrial Worlds</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Real facilities.<br className="hidden md:block" /> Real scenarios.</h2>
          </div>

          <div className="space-y-4">
            {worlds.map((w) => (
              <div key={w.name} className="bg-white/5 border border-white/8 rounded-xl p-6 md:p-7">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin size={14} className="text-[#C9A84C] flex-shrink-0" />
                      <h3 className="text-white font-bold text-lg">{w.name}</h3>
                      <span className={`text-[10px] font-bold tracking-wide uppercase px-2.5 py-0.5 rounded-full border ${
                        w.status === "Live"
                          ? "text-[#C9A84C] border-[#C9A84C]/30 bg-[#C9A84C]/10"
                          : w.status === "In Development"
                          ? "text-[#4A6FA5] border-[#4A6FA5]/30 bg-[#4A6FA5]/10"
                          : "text-white/25 border-white/10"
                      }`}>{w.status}</span>
                    </div>
                    <p className="text-white/35 text-xs mb-3">{w.type} · {w.hotspots} hotspots planned</p>
                    <p className="text-white/50 text-sm leading-relaxed max-w-xl">{w.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 md:flex-col md:items-end md:gap-1.5">
                    {w.programs.map((p) => (
                      <span key={p} className="text-[10px] text-[#C9A84C] font-bold bg-[#C9A84C]/8 border border-[#C9A84C]/15 px-2 py-0.5 rounded">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION FLOW ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center">
            <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-3">Universal Mission Engine</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0B1F3A]">Every scenario. One operating system.</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Every scenario across every world runs the same proven flow — from arrival to CPD credit.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-0">
            {missionFlow.map((step, i) => (
              <div key={step} className="flex items-center">
                <div className="flex flex-col items-center text-center px-2 py-4">
                  <div className="w-8 h-8 rounded-full bg-[#0B1F3A] flex items-center justify-center mb-2 flex-shrink-0">
                    <span className="text-[#C9A84C] text-xs font-black">{i + 1}</span>
                  </div>
                  <p className="text-[#0B1F3A] text-xs font-semibold leading-tight max-w-[70px]">{step}</p>
                </div>
                {i < missionFlow.length - 1 && (
                  <div className="w-6 h-px bg-gray-200 flex-shrink-0 mb-4 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARCHITECTURE LAYERS ── */}
      <section className="bg-[#F4F6F9] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-3">Platform Architecture</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0B1F3A]">Built to scale<br className="hidden md:block" /> without limits.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {layers.map((l) => (
              <div key={l.number} className="bg-white border border-gray-100 rounded-xl p-6">
                <p className="text-[#C9A84C] text-3xl font-black mb-3">{l.number}</p>
                <h3 className="font-bold text-[#0B1F3A] mb-4 text-sm leading-snug">{l.name}</h3>
                <ul className="space-y-1.5">
                  {l.items.map((item) => (
                    <li key={item} className="text-xs text-gray-500 flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#C9A84C] mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0B1F3A] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Experience IntegrityOS inside MIOA.</h2>
          <p className="text-white/40 mb-8 text-sm">IntegrityOS is the training environment for every Holden University program.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-[#0B1F3A] font-bold px-8 py-4 rounded hover:bg-[#d4b460] transition-colors">
              Apply Now <ArrowRight size={16} />
            </Link>
            <Link href="/schools/mioa"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded hover:border-white/40 transition-colors">
              Explore MIOA
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
