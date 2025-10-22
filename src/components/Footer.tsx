import { Leaf, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/40 backdrop-blur-xl rounded-2xl border border-white/40">
              <Leaf className="w-5 h-5 text-emerald-600" />
            </div>
            <span className="bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-700 bg-clip-text text-transparent">
              Nature Pomodoro
            </span>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-foreground/60">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span>for mindful productivity</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-foreground/60">
            <a href="#home" className="hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#features" className="hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#timer" className="hover:text-foreground transition-colors">
              Timer
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-foreground/50">
          © 2025 Nature Pomodoro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
