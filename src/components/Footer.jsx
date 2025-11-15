import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative mt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-bold">Let’s build something extraordinary</h4>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300">Open to freelance, collaborations, and creative experiments.</p>
            </div>
            <div className="flex md:justify-end gap-3">
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm font-semibold shadow"> <Mail size={16}/> Email</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 px-4 py-2 text-sm font-semibold"><Github size={16}/> GitHub</a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 px-4 py-2 text-sm font-semibold"><Linkedin size={16}/> LinkedIn</a>
            </div>
          </div>
        </div>
        <p className="mt-6 text-xs text-neutral-500">© {new Date().getFullYear()} Your Name — Web Developer & 3D Artist</p>
      </div>
    </footer>
  );
}
