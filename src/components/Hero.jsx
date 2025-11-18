import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/sbnqZNZdJSLK7U2A/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* gradient overlays for depth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cyan-500/10 to-transparent" />
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur text-cyan-200 text-xs tracking-widest uppercase"
          >
            BMW M Series
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white"
          >
            M5. Electric Thrill.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-6 max-w-xl text-cyan-100/90 text-lg"
          >
            A fusion of precision engineering and neon-drenched futurism. Experience launch control, adaptive aerodynamics, and a cockpit that feels alive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4"
          >
            <a href="#cta" className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold shadow-[0_10px_40px_rgba(34,211,238,0.35)]">Book a Test Drive</a>
            <a href="#specs" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold">Explore Specs</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
