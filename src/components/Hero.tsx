import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-700 bg-clip-text text-transparent mb-6">
            Find Your Flow
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-2xl mx-auto">
            Enhance your productivity with the Pomodoro Technique, guided meditation,
            and the calming power of nature.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a
            href="#timer"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 text-white hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Start Your Journey
          </a>
          <a
            href="#features"
            className="px-8 py-4 rounded-full bg-white/40 backdrop-blur-xl border border-white/40 text-foreground hover:bg-white/60 transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          <div className="bg-white/30 backdrop-blur-2xl rounded-3xl px-8 py-6 border border-white/40 shadow-xl">
            <div className="text-4xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
              25 min
            </div>
            <div className="text-sm text-foreground/60">Focus Sessions</div>
          </div>
          <div className="bg-white/30 backdrop-blur-2xl rounded-3xl px-8 py-6 border border-white/40 shadow-xl">
            <div className="text-4xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
              5 min
            </div>
            <div className="text-sm text-foreground/60">Short Breaks</div>
          </div>
          <div className="bg-white/30 backdrop-blur-2xl rounded-3xl px-8 py-6 border border-white/40 shadow-xl">
            <div className="text-4xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              15 min
            </div>
            <div className="text-sm text-foreground/60">Long Breaks</div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <a href="#features" className="text-foreground/40 hover:text-foreground/70 transition-colors">
            <ArrowDown className="w-8 h-8" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
