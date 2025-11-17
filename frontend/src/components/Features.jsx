import { motion } from 'framer-motion';
import { Sparkles, Shield, Zap } from 'lucide-react';

const items = [
  {
    icon: Sparkles,
    title: 'Premium Materials',
    desc: 'Heavyweight tees, embroidered caps and precision decals built for the long run.'
  },
  {
    icon: Shield,
    title: 'Built to Endure',
    desc: 'Fade-resistant inks, reinforced stitching and quality you can feel.'
  },
  {
    icon: Zap,
    title: 'Performance Aesthetic',
    desc: 'Dark, sleek and minimal — made to complement night drives and city lights.'
  }
];

export default function Features() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md"
            >
              <item.icon className="text-purple-400" />
              <h3 className="mt-4 text-white font-semibold text-lg">{item.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
