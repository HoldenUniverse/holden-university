import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#060F1E] text-white">
      {/* Gold top bar */}
      <div className="h-1 bg-[#C9A84C]" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded bg-[#C9A84C] flex items-center justify-center flex-shrink-0">
                <span className="text-[#0B1F3A] font-black text-sm">HU</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">Holden University</p>
                <p className="text-[#C9A84C] text-[10px] tracking-wider uppercase">Digital Campus</p>
              </div>
            </div>
            <p className="text-white/40 text-xs leading-relaxed mt-4">
              Prepared to Protect. Built to Lead.
            </p>
            <p className="text-white/40 text-xs leading-relaxed mt-2">
              Learn › Practice › Simulate › Operate › Lead.
            </p>
          </div>

          {/* Schools */}
          <div>
            <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-4">Schools</p>
            <ul className="space-y-2.5">
              <li><Link href="/schools/mioa" className="text-white/50 text-sm hover:text-white transition-colors">Mechanical Integrity & Industrial Operations</Link></li>
              <li><span className="text-white/20 text-sm">More Schools — Coming Soon</span></li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-4">Platform</p>
            <ul className="space-y-2.5">
              <li><Link href="/platform" className="text-white/50 text-sm hover:text-white transition-colors">IntegrityOS</Link></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">3D Industrial Worlds</a></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Mission Engine</a></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">CodeIQ</a></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">CertIQ</a></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">D-IMS</a></li>
            </ul>
          </div>

          {/* University */}
          <div>
            <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-4">University</p>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-white/50 text-sm hover:text-white transition-colors">About Holden University</Link></li>
              <li><Link href="/admissions" className="text-white/50 text-sm hover:text-white transition-colors">Admissions</Link></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Student Portal</a></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Faculty & Staff</a></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Industry Partners</a></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs">© 2026 Holden University. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/25 text-xs hover:text-white/50 transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/25 text-xs hover:text-white/50 transition-colors">Terms of Use</a>
            <a href="#" className="text-white/25 text-xs hover:text-white/50 transition-colors">Accreditation</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
