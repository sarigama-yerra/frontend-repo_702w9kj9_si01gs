import { motion } from 'framer-motion';
import { Palette, Cube, Globe, Sparkles } from 'lucide-react';

const items = [
  {
    title: 'Interactive 3D Product Teaser',
    tag: 'Three.js + Spline',
    desc: 'A playful product explorer with physics-based microinteractions and smooth camera transitions.',
    color: 'from-indigo-500/15 to-purple-500/15',
  },
  {
    title: 'Portfolio Starter UI Kit',
    tag: 'React + Tailwind',
    desc: 'Modern, accessible components with fluid motion and glassy surfaces for a premium feel.',
    color: 'from-emerald-500/15 to-cyan-500/15',
  },
  {
    title: 'Realtime Collab Canvas',
    tag: 'WebRTC + Canvas',
    desc: 'Draw, move and remix shapes together with buttery-smooth cursors and latency compensation.',
    color: 'from-amber-500/15 to-rose-500/15',
  },
];

export default function Showcase() {
  return (
    <section id="work" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight">Selected Work</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">
              A blend of engineering precision and artistic expression — tuned for performance, accessibility and delight.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl border border-neutral-200/70 dark:border-neutral-800/70 bg-gradient-to-br ${card.color} p-5`}
            >
              <div className="flex h-40 items-end rounded-xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 px-2 py-1 text-[11px] text-neutral-600 dark:text-neutral-300">
                    <Sparkles size={14} /> {card.tag}
                  </div>
                  <h4 className="text-lg font-semibold">{card.title}</h4>
                </div>
              </div>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
