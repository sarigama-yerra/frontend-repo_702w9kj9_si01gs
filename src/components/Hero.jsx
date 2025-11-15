import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-28 pb-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white/30 dark:from-neutral-950 dark:via-neutral-950/80 dark:to-neutral-950/40 pointer-events-none" />
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-3 py-1 text-xs text-neutral-600 dark:text-neutral-300">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
                Available for freelance — Web • 3D • Creative Dev
              </motion.div>
              <h2 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight leading-[1.05]">
                Building immersive web experiences and playful 3D worlds
              </h2>
              <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-lg max-w-xl">
                I blend engineering and art to craft interfaces that feel alive. From elegant web apps to interactive 3D scenes, I turn ideas into experiences.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#work" className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-3 text-sm font-semibold shadow hover:shadow-md transition">
                  View Selected Work
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow hover:shadow-lg transition">
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
