import { motion } from 'motion/react';
import { Sprout, Flower2, Brain, Trophy, Clock, Heart } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Pomodoro Technique',
    description: 'Boost productivity with 25-minute focused work sessions followed by refreshing breaks.',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    icon: Flower2,
    title: 'Guided Meditation',
    description: 'Relax and recharge with breathing exercises during your break times.',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Brain,
    title: 'Mental Clarity',
    description: 'Reduce stress and improve focus with our calming nature-inspired interface.',
    color: 'from-teal-400 to-cyan-500',
  },
  {
    icon: Trophy,
    title: 'Track Progress',
    description: 'Monitor your completed sessions and build consistent productivity habits.',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    icon: Sprout,
    title: 'Natural Flow',
    description: 'Work in harmony with your natural rhythm for sustainable productivity.',
    color: 'from-emerald-400 to-green-500',
  },
  {
    icon: Heart,
    title: 'Wellness First',
    description: 'Prioritize your mental health with regular mindfulness breaks.',
    color: 'from-rose-400 to-pink-500',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-700 bg-clip-text text-transparent mb-4">
            Why Nature Pomodoro?
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Combine proven productivity techniques with mindfulness and nature-inspired design
            for a holistic approach to focused work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/30 backdrop-blur-2xl rounded-3xl p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl text-foreground mb-3">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
