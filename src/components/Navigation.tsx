import { Leaf } from 'lucide-react';
import { motion } from 'motion/react';

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-40 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/30 backdrop-blur-2xl rounded-3xl px-8 py-4 border border-white/40 shadow-xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/40 backdrop-blur-xl rounded-2xl border border-white/40">
                <Leaf className="w-6 h-6 text-emerald-600" />
              </div>
              <span className="text-xl bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-700 bg-clip-text text-transparent">
                Nature Pomodoro
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#home"
                className="text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#features"
                className="text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                Features
              </a>
              <a
                href="#timer"
                className="text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                Timer
              </a>
              <a
                href="#about"
                className="text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                About
              </a>
            </div>

            {/* CTA Button */}
            <a
              href="#timer"
              className="hidden md:block px-6 py-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 text-white hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
