import { Link } from "wouter";
import { ArrowRight, Shield, Zap, Globe, Award, ChevronRight } from "lucide-react";

const stats = [
  { value: "9", label: "Active Programs" },
  { value: "1,900+", label: "Scenarios in Development" },
  { value: "32", label: "Damage Mechanisms" },
  { value: "15", label: "NDE Methods" },
  { value: "7", label: "Specializations" },
];

const schools = [
  {
    abbr: "MIOA",
    name: "School of Mechanical Integrity & Industrial Operations",
    tagline: "The flagship school of Holden University.",
    description: "Nine industrial programs covering inspection, NDE, piping, tanks, pressure vessels, turnarounds, rotating equipment, and leadership — built for the field.",
    programs: 9,
    href: "/schools/mioa",
    color: "#C9A84C",
    active: true,
  },
  {
    abbr: "",
    name: "Additional Schools",
    tagline: "Expanding the campus.",
    description: "New schools are being developed. Each will bring the same depth, rigor, and real-world focus as MIOA.",
    programs: null,
    href: "#",
    color: "#4A6FA5",
    active: false,
  },
];

const worlds = [
  { name: "Perdido Offshore Spar", type: "Offshore", status: "Live", color: "#C9A84C" },
  { name: "Refinery Process Unit", type: "Refinery", status: "In Development", color: "#4A6FA5" },
  { name: "Nuclear Power Station", type: "Nuclear", status: "Planned", color: "#4A6FA5" },
  { name: "Pipeline Corridor", type: "Pipeline", status: "Planned", color: "#4A6FA5" },
  { name: "FPSO Vessel", type: "Offshore", status: "Planned", color: "#4A6FA5" },
];

const pillars = [
  { icon: Shield, title: "Prepared to Protect", text: "Every program is built around real-world damage mechanisms, industry codes, and field-proven inspection methods." },
  { icon: Zap, title: "Built to Lead", text: "From technician to lead inspector to operations leader — Holden University programs build the full career." },
  { icon: Globe, title: "Learn in Real Facilities", text: "IntegrityOS puts students inside real industrial worlds — not simulations. Walk Perdido. Inspect the refinery." },
  { icon: Award, title: "Industry-Recognized", text: "Programs align with ASME, API, AWS, ASNT, and all major industrial codes and standards." },
];

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section className="relative bg-[#0B1F3A] min-h-[88vh] flex items-center overflow-hidden">
        {/* Geometric background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]"
            style={{ backgroundImage: "repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)", backgroundSize: "30px 30px" }} />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#4A6FA5] opacity-5 blur-3xl -translate-x-1/2 translate-y-1/2" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#C9A84C] opacity-5 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
              <span className="text-[#C9A84C] text-xs font-medium tracking-wide">Digital Campus — Now Open</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-6">
              Holden<br />
              <span className="text-[#C9A84C]">University</span>
            </h1>

            <p className="text-white/50 text-lg md:text-xl leading-relaxed mb-4 max-w-xl">
              Industrial education built for the real world. Train inside actual facilities. Inspect real equipment. Earn credentials that mean something.
            </p>

            <p className="text-white/30 text-sm tracking-widest uppercase mb-10">
              Learn › Practice › Simulate › Operate › Lead
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/schools/mioa"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-[#0B1F3A] font-bold px-7 py-3.5 rounded hover:bg-[#d4b460] transition-colors text-sm">
                Explore MIOA <ArrowRight size={16} />
              </Link>
              <Link href="/platform"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-7 py-3.5 rounded hover:border-white/40 hover:bg-white/5 transition-colors text-sm">
                See IntegrityOS
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F4F6F9] to-transparent" />
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#F4F6F9] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-y md:divide-y-0 divide-gray-200">
            {stats.map((s) => (
              <div key={s.label} className="px-6 py-7 text-center">
                <p className="text-3xl font-black text-[#0B1F3A]">{s.value}</p>
                <p className="text-xs text-gray-500 mt-1 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHOOLS ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-3">Schools & Colleges</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0B1F3A]">A campus built by industry.<br className="hidden md:block" /> For industry.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {schools.map((school) => (
              <div key={school.name}
                className={`border rounded-xl overflow-hidden transition-all ${
                  school.active
                    ? "border-[#0B1F3A]/10 hover:border-[#C9A84C]/40 hover:shadow-lg cursor-pointer"
                    : "border-gray-100 opacity-60"
                }`}>
                {/* School color bar */}
                <div className="h-1" style={{ backgroundColor: school.color }} />

                <div className="p-8">
                  {school.abbr && (
                    <span className="inline-block text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-[#0B1F3A]/5 text-[#0B1F3A] mb-4">
                      {school.abbr}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-[#0B1F3A] leading-snug mb-2">{school.name}</h3>
                  <p className="text-[#C9A84C] text-sm font-medium mb-4">{school.tagline}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{school.description}</p>

                  <div className="flex items-center justify-between">
                    {school.programs ? (
                      <span className="text-xs text-gray-400">{school.programs} programs</span>
                    ) : (
                      <span className="text-xs text-gray-300">Coming soon</span>
                    )}
                    {school.active && (
                      <Link href={school.href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B1F3A] hover:text-[#C9A84C] transition-colors">
                        Explore School <ChevronRight size={14} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRITYOS CALLOUT ── */}
      <section className="bg-[#0B1F3A] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-4">The Platform</p>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-5">
                IntegrityOS —<br />Train inside real<br />industrial facilities.
              </h2>
              <p className="text-white/50 text-base leading-relaxed mb-8">
                Students don't just read about inspection — they walk through a working Perdido offshore spar, find damage mechanisms in-situ, interview workers, collect evidence, and submit findings. The same engine scales to every facility in every program.
              </p>
              <Link href="/platform"
                className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#0B1F3A] font-bold px-6 py-3 rounded hover:bg-[#d4b460] transition-colors text-sm">
                Explore the Platform <ArrowRight size={15} />
              </Link>
            </div>

            <div className="space-y-3">
              {worlds.map((w) => (
                <div key={w.name} className="flex items-center justify-between bg-white/5 border border-white/8 rounded-lg px-5 py-4">
                  <div>
                    <p className="text-white font-semibold text-sm">{w.name}</p>
                    <p className="text-white/35 text-xs mt-0.5">{w.type}</p>
                  </div>
                  <span className={`text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full border ${
                    w.status === "Live"
                      ? "text-[#C9A84C] border-[#C9A84C]/30 bg-[#C9A84C]/10"
                      : w.status === "In Development"
                      ? "text-[#4A6FA5] border-[#4A6FA5]/30 bg-[#4A6FA5]/10"
                      : "text-white/25 border-white/10 bg-white/5"
                  }`}>
                    {w.status}
                  </span>
                </div>
              ))}
              <p className="text-white/25 text-xs text-center pt-2">~15 worlds × ~100 hotspots each planned</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className="bg-[#F4F6F9] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center">
            <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-3">What Sets Us Apart</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0B1F3A]">Education that works as hard as the industry.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-7 border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-[#0B1F3A] flex items-center justify-center mb-5">
                  <p.icon size={18} className="text-[#C9A84C]" />
                </div>
                <h3 className="font-bold text-[#0B1F3A] mb-2 text-base">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#0B1F3A] mb-4">
            Ready to build your career in industrial integrity?
          </h2>
          <p className="text-gray-500 text-base mb-8">
            Explore the School of Mechanical Integrity & Industrial Operations — the flagship school of Holden University.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions"
              className="inline-flex items-center justify-center gap-2 bg-[#0B1F3A] text-white font-bold px-8 py-4 rounded hover:bg-[#0d2545] transition-colors">
              Apply to Holden University <ArrowRight size={16} />
            </Link>
            <Link href="/schools/mioa"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 text-[#0B1F3A] font-semibold px-8 py-4 rounded hover:border-[#0B1F3A] transition-colors">
              Browse Programs
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
