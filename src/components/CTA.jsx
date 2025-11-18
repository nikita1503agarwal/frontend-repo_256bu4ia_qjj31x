import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 bg-[radial-gradient(80rem_40rem_at_50%_140%,rgba(34,211,238,0.15),transparent)]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 md:p-12">
          <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -left-24 -bottom-24 w-72 h-72 rounded-full bg-fuchsia-500/20 blur-3xl" />

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Feel the future. Book a test drive.
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-cyan-100/90"
          >
            Choose a date and preferred showroom. Our specialist will confirm within minutes.
          </motion.p>

          <form className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-cyan-300" />
              <input type="date" className="w-full h-12 pl-10 pr-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-cyan-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-cyan-300" />
              <input type="text" placeholder="City / Showroom" className="w-full h-12 pl-10 pr-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-cyan-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
            </div>
            <button type="button" className="inline-flex items-center justify-center gap-2 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold shadow-[0_10px_30px_rgba(34,211,238,0.35)]">
              Request Slot
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
