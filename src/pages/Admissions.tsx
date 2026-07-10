import { Link } from "wouter";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

const steps = [
  { step: "01", title: "Choose Your School", desc: "Start with the School of Mechanical Integrity & Industrial Operations (MIOA). Select the program that fits your career goals." },
  { step: "02", title: "Submit Application", desc: "Complete the online application form. No standardized testing required. We look for industry experience and commitment." },
  { step: "03", title: "Enrollment Review", desc: "Our team reviews your background and goals within 5 business days. We'll contact you to discuss fit and next steps." },
  { step: "04", title: "Begin Your Program", desc: "Access IntegrityOS, your program materials, and your cohort community. Your first mission starts on Day 1." },
];

const programs = [
  { code: "S10", name: "Inspector Pipeline Program", hours: 320 },
  { code: "S11", name: "Inspector Stationary Equipment", hours: 280 },
  { code: "S12", name: "Inspector Aboveground Storage Tanks", hours: 240 },
  { code: "S13", name: "Inspector Rotating Equipment", hours: 260 },
  { code: "S14", name: "NDE Technology & Applications", hours: 300 },
  { code: "S15", name: "Turnaround & Shutdown Management", hours: 200 },
  { code: "S16", name: "Corrosion & Damage Mechanisms", hours: 220 },
  { code: "S17", name: "Codes, Standards & Compliance", hours: 180 },
  { code: "S18", name: "Inspection Leadership & Operations", hours: 160 },
];

const included = [
  "Full IntegrityOS platform access",
  "3D industrial world training environments",
  "Mission engine with real scenarios",
  "CodeIQ assessment modules",
  "CertIQ practice examinations",
  "D-IMS work package library",
  "Digital credentials upon completion",
  "CPD / continuing education credits",
  "Industry mentor matching",
  "Career placement support",
];

export default function Admissions() {
  return (
    <div className="min-h-screen">
      <section className="bg-[#0B1F3A] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-white/40 text-sm hover:text-white/70 transition-colors mb-8">
            <ArrowLeft size={14} /> Holden University
          </Link>
          <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-3">Admissions</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Begin your path<br className="hidden md:block" /> at Holden University.</h1>
          <p className="text-white/40 text-lg max-w-xl">Applications are open for all nine MIOA programs. No standardized testing. Industry experience welcomed at every level.</p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-3">How It Works</p>
            <h2 className="text-3xl font-black text-[#0B1F3A]">Four steps to enrollment.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="border border-gray-100 rounded-xl p-7">
                <p className="text-[#C9A84C] text-4xl font-black mb-4">{s.step}</p>
                <h3 className="font-bold text-[#0B1F3A] mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-[#F4F6F9] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div>
              <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-3">Open Programs</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#0B1F3A] mb-6">MIOA — All 9 programs now enrolling.</h2>
              <div className="space-y-2">
                {programs.map((p) => (
                  <div key={p.code} className="flex items-center justify-between bg-white border border-gray-100 rounded-lg px-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-black bg-[#0B1F3A] text-[#C9A84C] px-2 py-0.5 rounded">{p.code}</span>
                      <span className="text-sm font-medium text-[#0B1F3A]">{p.name}</span>
                    </div>
                    <span className="text-xs text-gray-400 flex-shrink-0">{p.hours} hrs</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-3">What's Included</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#0B1F3A] mb-6">Everything you need. Nothing you don't.</h2>
              <div className="space-y-3">
                {included.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1F3A] py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to apply?</h2>
          <p className="text-white/40 text-sm mb-8">Applications take less than 10 minutes. We'll follow up within 5 business days.</p>
          <a href="mailto:admissions@holdenuniversity.edu"
            className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#0B1F3A] font-bold px-8 py-4 rounded hover:bg-[#d4b460] transition-colors">
            Start Your Application <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
