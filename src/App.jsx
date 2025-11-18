import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Specs from './components/Specs';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Ambient background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <Specs />
      <CTA />

      <footer className="relative z-10 py-10 text-center text-cyan-200/70">
        © {new Date().getFullYear()} BMW M5 — Concept site for demonstration.
      </footer>
    </div>
  )
}

export default App
