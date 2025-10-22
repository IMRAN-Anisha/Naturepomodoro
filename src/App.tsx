import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { PomodoroTimer } from './components/PomodoroTimer';
import { Footer } from './components/Footer';
import { Leaf } from 'lucide-react';

export default function App() {
  return (
    <div className="size-full min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1752564291899-9906330bc8b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBmb3Jlc3QlMjBsaWdodHxlbnwxfHx8fDE3NjExMjExNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/90 via-teal-50/80 to-cyan-50/90 backdrop-blur-sm" />
      </div>

      {/* Floating ambient elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-teal-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <Features />

        {/* Timer Section */}
        <section id="timer" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-3 bg-white/40 backdrop-blur-xl rounded-2xl border border-white/40 shadow-lg">
                  <Leaf className="w-8 h-8 text-emerald-600" />
                </div>
              </div>
              <h2 className="text-5xl bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-700 bg-clip-text text-transparent mb-4">
                Start Your Focus Session
              </h2>
              <p className="text-foreground/70 max-w-md mx-auto">
                Choose your mode and begin your journey to mindful productivity.
                Don't forget to try the meditation feature during your breaks!
              </p>
            </div>

            {/* Timer Component */}
            <div className="flex justify-center">
              <div className="bg-white/30 backdrop-blur-2xl rounded-3xl p-12 border border-white/40 shadow-2xl">
                <PomodoroTimer />
              </div>
            </div>

            {/* Timer Legend */}
            <div className="mt-12 text-center">
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-foreground/60">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 shadow-lg" />
                  <span>25 min focus sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-sky-400 to-cyan-500 shadow-lg" />
                  <span>5 min short breaks</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 shadow-lg" />
                  <span>15 min long breaks</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/30 backdrop-blur-2xl rounded-3xl p-12 border border-white/40 shadow-2xl text-center">
              <h2 className="text-4xl bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-700 bg-clip-text text-transparent mb-6">
                The Science of Productivity
              </h2>
              <div className="space-y-6 text-foreground/70">
                <p>
                  The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.
                  By breaking work into focused intervals separated by short breaks, you can maintain high levels of
                  concentration while avoiding mental fatigue.
                </p>
                <p>
                  Combined with mindful breathing exercises during breaks, this technique becomes even more powerful.
                  Our guided meditation feature helps you fully disconnect, reduce stress, and return to work with
                  renewed energy and clarity.
                </p>
                <p>
                  The nature-inspired interface isn't just beautiful—it's designed to create a calming environment
                  that promotes focus and well-being. Studies show that exposure to natural elements, even digitally,
                  can reduce stress and improve cognitive function.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
