import { Menu, Github, Linkedin, Mail, Brush, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mt-4 backdrop-blur-xl bg-white/60 dark:bg-neutral-900/60 border border-white/40 dark:border-white/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <motion.div initial={{ rotate: -8, scale: 0.9 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 12 }} className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 text-white shadow-lg">
                <Brush size={20} />
              </motion.div>
              <div className="leading-tight">
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Portfolio of</p>
                <h1 className="text-lg font-semibold tracking-tight">Web Dev & 3D Artist</h1>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-1">
              {[
                { label: "Work", href: "#work" },
                { label: "Art", href: "#art" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <a key={item.label} href={item.href} className="px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors rounded-lg">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm font-semibold shadow hover:shadow-md transition">
                <Mail size={16} /> Hire Me
              </a>
              <a href="#work" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow hover:shadow-lg transition">
                <Code2 size={16} /> Projects
              </a>
              <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 dark:border-neutral-800">
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
