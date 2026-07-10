import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";

const schools = [
  { name: "School of Mechanical Integrity & Industrial Operations", abbr: "MIOA", href: "/schools/mioa", active: true },
  { name: "More Schools Coming Soon", abbr: "", href: "#", active: false },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [schoolsOpen, setSchoolsOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (href: string) => location === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B1F3A] border-b border-white/10">
      {/* Top bar */}
      <div className="border-b border-white/8 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <p className="text-[11px] text-white/40 tracking-wide uppercase">
            Prepared to Protect. Built to Lead.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[11px] text-white/40 hover:text-[#C9A84C] transition-colors">Student Portal</a>
            <a href="#" className="text-[11px] text-white/40 hover:text-[#C9A84C] transition-colors">Faculty</a>
            <a href="#" className="text-[11px] text-white/40 hover:text-[#C9A84C] transition-colors">Contact</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded bg-[#C9A84C] flex items-center justify-center flex-shrink-0">
              <span className="text-[#0B1F3A] font-black text-sm">HU</span>
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-tight">Holden University</p>
              <p className="text-[#C9A84C] text-[10px] leading-tight tracking-wider uppercase">Digital Campus</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Schools dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setSchoolsOpen(true)}
                onMouseLeave={() => setSchoolsOpen(false)}
                className="flex items-center gap-1 px-4 py-2 text-sm text-white/70 hover:text-white transition-colors rounded"
              >
                Schools <ChevronDown size={13} className={`transition-transform ${schoolsOpen ? "rotate-180" : ""}`} />
              </button>
              {schoolsOpen && (
                <div
                  onMouseEnter={() => setSchoolsOpen(true)}
                  onMouseLeave={() => setSchoolsOpen(false)}
                  className="absolute top-full left-0 mt-0 w-80 bg-[#0B1F3A] border border-white/10 rounded-lg shadow-2xl overflow-hidden"
                >
                  {schools.map((s) => (
                    <Link key={s.abbr} href={s.href}
                      className={`block px-5 py-3.5 border-b border-white/5 last:border-0 transition-colors ${
                        s.active ? "hover:bg-white/5 cursor-pointer" : "opacity-40 cursor-default pointer-events-none"
                      }`}
                    >
                      <p className="text-white text-sm font-medium leading-snug">{s.name}</p>
                      {s.abbr && <p className="text-[#C9A84C] text-[10px] mt-0.5 tracking-wider uppercase">{s.abbr}</p>}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/platform"
              className={`px-4 py-2 text-sm rounded transition-colors ${isActive("/platform") ? "text-[#C9A84C]" : "text-white/70 hover:text-white"}`}>
              IntegrityOS
            </Link>
            <Link href="/admissions"
              className={`px-4 py-2 text-sm rounded transition-colors ${isActive("/admissions") ? "text-[#C9A84C]" : "text-white/70 hover:text-white"}`}>
              Admissions
            </Link>
            <Link href="/about"
              className={`px-4 py-2 text-sm rounded transition-colors ${isActive("/about") ? "text-[#C9A84C]" : "text-white/70 hover:text-white"}`}>
              About
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors px-3 py-2">Sign In</a>
            <Link href="/admissions"
              className="bg-[#C9A84C] text-[#0B1F3A] text-sm font-bold px-5 py-2 rounded hover:bg-[#d4b460] transition-colors">
              Apply Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0B1F3A] border-t border-white/10 px-6 py-4 space-y-1">
          <Link href="/" onClick={() => setOpen(false)} className="block py-3 text-white/70 text-sm border-b border-white/5">Home</Link>
          <Link href="/schools/mioa" onClick={() => setOpen(false)} className="block py-3 text-white/70 text-sm border-b border-white/5">MIOA — Mechanical Integrity</Link>
          <Link href="/platform" onClick={() => setOpen(false)} className="block py-3 text-white/70 text-sm border-b border-white/5">IntegrityOS Platform</Link>
          <Link href="/admissions" onClick={() => setOpen(false)} className="block py-3 text-white/70 text-sm border-b border-white/5">Admissions</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block py-3 text-white/70 text-sm">About</Link>
          <div className="pt-4">
            <Link href="/admissions" onClick={() => setOpen(false)}
              className="block text-center bg-[#C9A84C] text-[#0B1F3A] font-bold text-sm px-5 py-3 rounded">
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
