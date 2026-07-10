import { Link } from "wouter";
import { ArrowLeft, ArrowRight, BookOpen, Wrench, Shield, Award } from "lucide-react";

const programs = [
  { code: "S10", name: "Inspector Pipeline Program", abbr: "IPP", hours: 320, description: "Comprehensive pipeline inspection covering damage mechanisms, NDE, integrity management, and regulatory compliance." },
  { code: "S11", name: "Inspector Stationary Equipment", abbr: "ISE", hours: 280, description: "Pressure vessels, heat exchangers, columns, and fixed equipment inspection to API 510 and ASME standards." },
  { code: "S12", name: "Inspector Aboveground Storage Tanks", abbr: "IST", hours: 240, description: "Tank inspection, fitness-for-service, corrosion assessment, and API 653 compliance." },
  { code: "S13", name: "Inspector Rotating Equipment", abbr: "IRE", hours: 260, description: "Pumps, compressors, turbines, and mechanical seal systems — vibration, alignment, and failure analysis." },
  { code: "S14", name: "NDE Technology & Applications", abbr: "NTA", hours: 300, description: "All 15 NDE methods — UT, RT, MT, PT, ET, IRIS, TOFD, Phased Array, and advanced digital techniques." },
  { code: "S15", name: "Turnaround & Shutdown Management", abbr: "TAR", hours: 200, description: "Planning, execution, and closeout of major turnarounds — scope, schedule, safety, and cost control." },
  { code: "S16", name: "Corrosion & Damage Mechanisms", abbr: "CDM", hours: 220, description: "All 32 damage mechanisms — causes, locations, inspection methods, and API 571 framework." },
  { code: "S17", name: "Codes, Standards & Compliance", abbr: "CSC", hours: 180, description: "Complete catalog of API, ASME, AWS, NACE, ASNT, and international codes used in industrial inspection." },
  { code: "S18", name: "Inspection Leadership & Operations", abbr: "ILO", hours: 160, description: "Team leadership, inspection program management, RBI facilitation, and operations integration." },
];

const nde = [
  "Ultrasonic Testing (UT)", "Radiographic Testing (RT)", "Magnetic Particle (MT)",
  "Liquid Penetrant (PT)", "Eddy Current (ET)", "Visual Testing (VT)",
  "IRIS", "TOFD", "Phased Array UT", "Long Range UT", "AUT",
  "Acoustic Emission", "Infrared Thermography", "Leak Testing", "Guided Wave UT",
];

const damage = [
  "CUI", "FAC", "MIC", "SCC", "HIC", "SOHIC", "Hydrogen Damage", "Fatigue",
  "Erosion", "Pitting", "Galvanic", "Thermal Fatigue", "Wet H₂S", "Naphthenic Acid",
  "Chloride SCC", "Creep", "High Temperature H₂/H₂S", "Amine Cracking",
];

const highlights = [
  { icon: BookOpen, value: "9", label: "Programs" },
  { icon: Wrench, value: "32", label: "Damage Mechanisms" },
  { icon: Shield, value: "15", label: "NDE Methods" },
  { icon: Award, value: "7", label: "Specializations" },
];

export default function MIOA() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section className="bg-[#0B1F3A] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03]"
            style={{ backgroundImage: "repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)", backgroundSize: "24px 24px" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-white/40 text-sm hover:text-white/70 transition-colors mb-8">
            <ArrowLeft size={14} /> Holden University
          </Link>

          <div className="flex items-start gap-5 mb-6">
            <div className="w-14 h-14 rounded-lg bg-[#C9A84C] flex items-center justify-center flex-shrink-0">
              <span className="text-[#0B1F3A] font-black text-lg">MIOA</span>
            </div>
            <div>
              <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-1">School of</p>
              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Mechanical Integrity &<br className="hidden md:block" /> Industrial Operations
              </h1>
            </div>
          </div>

          <p className="text-white/50 text-lg max-w-2xl leading-relaxed mb-4">
            The flagship school of Holden University. Nine programs covering every discipline of industrial inspection, integrity management, and operational leadership.
          </p>
          <p className="text-white/30 text-sm tracking-widest uppercase">Prepared to Protect. Built to Lead.</p>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#C9A84C]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#0B1F3A]/15">
            {highlights.map((h) => (
              <div key={h.label} className="px-6 py-6 text-center">
                <p className="text-4xl font-black text-[#0B1F3A]">{h.value}</p>
                <p className="text-[#0B1F3A]/60 text-xs mt-1 uppercase tracking-wide font-medium">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-3">Academic Programs</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0B1F3A]">Nine programs.<br className="hidden md:block" /> One complete career path.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {programs.map((p) => (
              <div key={p.code} className="border border-gray-100 rounded-xl p-6 hover:border-[#C9A84C]/30 hover:shadow-md transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black tracking-widest uppercase bg-[#0B1F3A] text-[#C9A84C] px-2.5 py-1 rounded">
                    {p.code}
                  </span>
                  <span className="text-xs text-gray-400">{p.hours} hrs</span>
                </div>
                <h3 className="font-bold text-[#0B1F3A] text-base leading-snug mb-2">{p.name}</h3>
                <p className="text-[10px] text-[#4A6FA5] font-bold tracking-wider uppercase mb-3">{p.abbr}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NDE & DAMAGE ── */}
      <section className="bg-[#F4F6F9] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

            {/* NDE */}
            <div>
              <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-3">NDE Technology</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#0B1F3A] mb-6">15 NDE Methods</h2>
              <div className="flex flex-wrap gap-2">
                {nde.map((n) => (
                  <span key={n} className="text-xs font-medium bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full">
                    {n}
                  </span>
                ))}
              </div>
            </div>

            {/* Damage */}
            <div>
              <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-3">Damage Library</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#0B1F3A] mb-6">32 Damage Mechanisms</h2>
              <div className="flex flex-wrap gap-2">
                {damage.map((d) => (
                  <span key={d} className="text-xs font-medium bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full">
                    {d}
                  </span>
                ))}
                <span className="text-xs font-medium bg-[#0B1F3A] text-[#C9A84C] px-3 py-1.5 rounded-full">
                  +14 more
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0B1F3A] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Start your journey in industrial inspection.</h2>
          <p className="text-white/40 mb-8">Apply to the School of Mechanical Integrity & Industrial Operations at Holden University.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-[#0B1F3A] font-bold px-8 py-4 rounded hover:bg-[#d4b460] transition-colors">
              Apply Now <ArrowRight size={16} />
            </Link>
            <Link href="/platform"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded hover:border-white/40 transition-colors">
              See IntegrityOS Platform
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
