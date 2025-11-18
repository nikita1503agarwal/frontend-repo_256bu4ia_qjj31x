import { motion } from 'framer-motion';
import { Gauge, Zap, Cpu, Shield, Radar, Rocket } from 'lucide-react';

const items = [
  { icon: Gauge, title: '3.2s 0-60', desc: 'Launch control with adaptive torque vectoring for relentless acceleration.' },
  { icon: Zap, title: '800V Architecture', desc: 'Ultra-fast charging with thermal management to keep power consistent.' },
  { icon: Cpu, title: 'NeuroDrive AI', desc: 'Learns your driving style and tunes suspension, steering, and power delivery.' },
  { icon: Shield, title: 'Carbon Core', desc: 'Lightweight rigidity with active aero channels for stability at speed.' },
  { icon: Radar, title: 'L3 Autonomy', desc: 'Highway pilot with sensor fusion across lidar, radar, and cameras.' },
  { icon: Rocket, title: 'Track Mode', desc: 'Closed-circuit profile unlocking full cooling, downforce, and response.' },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-black/80 via-slate-900 to-black/90 overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[80rem] h-[80rem] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl font-bold text-white"
        >
          Born for the night. Built for tomorrow.
        </motion.h3>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative rounded-2xl p-6 bg-white/[0.04] border border-white/10 backdrop-blur hover:bg-white/[0.06]"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500/40 to-fuchsia-500/40 flex items-center justify-center mb-4 border border-white/10">
                <item.icon className="h-6 w-6 text-cyan-300" />
              </div>
              <h4 className="text-white font-semibold text-lg">{item.title}</h4>
              <p className="mt-2 text-cyan-100/80 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
