import { Menu, Car, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 to-fuchsia-500 p-[2px] shadow-[0_0_35px_rgba(34,211,238,0.35)]">
            <div className="h-full w-full rounded-xl bg-slate-900/90 flex items-center justify-center">
              <Car className="h-5 w-5 text-cyan-400" />
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-cyan-300/70">BMW</p>
            <h1 className="text-lg font-semibold tracking-tight text-white">M5 — Neo Edition</h1>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-cyan-200/80 hover:text-white transition">Features</a>
          <a href="#specs" className="text-cyan-200/80 hover:text-white transition">Specs</a>
          <a href="#gallery" className="text-cyan-200/80 hover:text-white transition">Gallery</a>
          <a href="#cta" className="text-cyan-200/80 hover:text-white transition">Test Drive</a>
        </nav>

        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10">
          <Menu className="h-5 w-5 text-white" />
        </button>

        <a href="#cta" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-medium shadow-[0_0_25px_rgba(16,185,129,0.25)]">
          <Sparkles className="h-4 w-4" />
          Reserve Now
        </a>
      </div>
    </header>
  );
}
