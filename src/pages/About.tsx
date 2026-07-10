import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";

const values = [
  { title: "Field-First", desc: "Every program, every scenario, every assessment is grounded in what actually happens in the field — not textbooks written decades ago." },
  { title: "Depth Over Breadth", desc: "We go deep on the disciplines that matter. MIOA covers 32 damage mechanisms, 15 NDE methods, and all major codes because the industry demands it." },
  { title: "Technology as a Tool", desc: "IntegrityOS exists to give students experience they couldn't get any other way — walking a facility, finding damage, making the call." },
  { title: "Credentials That Matter", desc: "Holden University programs are built to the same standards as the certifications your employer requires. We prepare you, then you pass." },
];

const codes = [
  "API 570", "API 510", "API 653", "API 571", "API 580", "API 581",
  "ASME B31.3", "ASME B31.4", "ASME VIII", "ASME V", "AWS D1.1",
  "NACE SP0169", "ASNT SNT-TC-1A", "ISO 9712", "OSHA 1910",
];

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="bg-[#0B1F3A] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-white/40 text-sm hover:text-white/70 transition-colors mb-8">
            <ArrowLeft size={14} /> Holden University
          </Link>
          <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-3">About</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Built for the<br className="hidden md:block" /> people who keep industry running.</h1>
          <p className="text-white/40 text-lg max-w-2xl leading-relaxed">
            Holden University was founded on a single belief: industrial education should be as demanding, realistic, and uncompromising as the work itself.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-4">Our Mission</p>
              <h2 className="text-3xl font-black text-[#0B1F3A] mb-5">Prepared to Protect.<br />Built to Lead.</h2>
              <p className="text-gray-500 text-base leading-relaxed mb-5">
                Industrial facilities — refineries, pipelines, offshore platforms, nuclear plants — are among the most complex and highest-consequence environments on earth. The people who inspect and maintain them carry enormous responsibility.
              </p>
              <p className="text-gray-500 text-base leading-relaxed mb-5">
                Holden University exists to train those people. Not with slides and multiple choice questions, but with real scenarios in real facilities, real codes and standards, and real decision-making under pressure.
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                We do this through the School of Mechanical Integrity & Industrial Operations — nine programs that cover the full career arc from entry-level inspection to leadership and operations.
              </p>
            </div>
            <div className="space-y-4">
              {values.map((v) => (
                <div key={v.title} className="border-l-2 border-[#C9A84C] pl-5 py-1">
                  <h3 className="font-bold text-[#0B1F3A] mb-1">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Codes */}
      <section className="bg-[#F4F6F9] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-4">Standards We Teach</p>
          <h2 className="text-2xl font-black text-[#0B1F3A] mb-8">Built on the codes the industry actually uses.</h2>
          <div className="flex flex-wrap gap-2">
            {codes.map((c) => (
              <span key={c} className="text-sm font-semibold bg-white border border-gray-200 text-[#0B1F3A] px-4 py-2 rounded-lg">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1F3A] py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Join Holden University.</h2>
          <p className="text-white/40 text-sm mb-8">Applications open for all MIOA programs.</p>
          <Link href="/admissions"
            className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#0B1F3A] font-bold px-8 py-4 rounded hover:bg-[#d4b460] transition-colors">
            Apply Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
