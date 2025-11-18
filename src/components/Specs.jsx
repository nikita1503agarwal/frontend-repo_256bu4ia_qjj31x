import { motion } from 'framer-motion';

const specs = [
  { label: 'Powertrain', value: 'Dual-motor AWD, 750 hp' },
  { label: 'Battery', value: '108 kWh, 800V architecture' },
  { label: 'Range', value: '390 miles (WLTP target)' },
  { label: '0-60 mph', value: '3.2 seconds' },
  { label: 'Top Speed', value: '190 mph (track mode)' },
  { label: 'Charging', value: '10-80% in 18 min (DC fast)' },
  { label: 'Aero', value: 'Active grille + rear diffuser' },
  { label: 'Brakes', value: 'Carbon-ceramic with regen blending' },
];

export default function Specs() {
  return (
    <section id="specs" className="relative py-24 bg-gradient-to-b from-black/90 via-slate-950 to-black/90">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl font-bold text-white"
        >
          Performance Specs
        </motion.h3>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {specs.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="flex items-center justify-between p-5 rounded-xl bg-white/[0.04] border border-white/10"
            >
              <span className="text-cyan-200/90">{s.label}</span>
              <span className="text-white font-medium">{s.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
