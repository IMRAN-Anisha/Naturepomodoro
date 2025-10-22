import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flower2, X } from 'lucide-react';
import { Button } from './ui/button';

interface MeditationGuideProps {
  duration: number; // in seconds
  onClose: () => void;
}

type BreathPhase = 'inhale' | 'hold' | 'exhale' | 'rest';

export function MeditationGuide({ duration, onClose }: MeditationGuideProps) {
  const [phase, setPhase] = useState<BreathPhase>('inhale');
  const [cycle, setCycle] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(duration);

  const breathingCycle = {
    inhale: 4,
    hold: 4,
    exhale: 6,
    rest: 2,
  };

  const getPhaseText = () => {
    switch (phase) {
      case 'inhale':
        return 'Breathe In';
      case 'hold':
        return 'Hold';
      case 'exhale':
        return 'Breathe Out';
      case 'rest':
        return 'Rest';
    }
  };

  const getCircleScale = () => {
    switch (phase) {
      case 'inhale':
        return 1.5;
      case 'hold':
        return 1.5;
      case 'exhale':
        return 0.8;
      case 'rest':
        return 0.8;
    }
  };

  useEffect(() => {
    const phaseOrder: BreathPhase[] = ['inhale', 'hold', 'exhale', 'rest'];
    let currentPhaseIndex = 0;
    let phaseTimeLeft = breathingCycle[phase];

    const interval = setInterval(() => {
      phaseTimeLeft -= 1;
      setTimeRemaining((prev) => Math.max(0, prev - 1));

      if (phaseTimeLeft <= 0) {
        currentPhaseIndex = (currentPhaseIndex + 1) % phaseOrder.length;
        const nextPhase = phaseOrder[currentPhaseIndex];
        setPhase(nextPhase);
        phaseTimeLeft = breathingCycle[nextPhase];

        if (nextPhase === 'inhale') {
          setCycle((prev) => prev + 1);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (timeRemaining <= 0) {
      setTimeout(() => onClose(), 2000);
    }
  }, [timeRemaining, onClose]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-emerald-50/95 via-teal-50/95 to-cyan-50/95 backdrop-blur-xl"
    >
      {/* Close button */}
      <Button
        onClick={onClose}
        variant="ghost"
        size="icon"
        className="absolute top-8 right-8 rounded-full bg-white/40 backdrop-blur-xl hover:bg-white/60 border border-white/40"
      >
        <X className="w-5 h-5" />
      </Button>

      <div className="flex flex-col items-center gap-12 px-6">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-4 bg-white/40 backdrop-blur-xl rounded-3xl border border-white/40 shadow-lg">
              <Flower2 className="w-10 h-10 text-teal-600" />
            </div>
          </div>
          <h2 className="text-4xl bg-gradient-to-r from-teal-700 via-cyan-600 to-blue-700 bg-clip-text text-transparent mb-2">
            Guided Meditation
          </h2>
          <p className="text-foreground/60">
            Follow the breathing pattern to relax and recharge
          </p>
        </motion.div>

        {/* Breathing Circle */}
        <div className="relative flex items-center justify-center">
          {/* Outer glow rings */}
          <motion.div
            animate={{
              scale: phase === 'inhale' || phase === 'hold' ? 2 : 1.2,
              opacity: phase === 'inhale' || phase === 'hold' ? 0.3 : 0.1,
            }}
            transition={{ duration: breathingCycle[phase], ease: 'easeInOut' }}
            className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-teal-400/30 to-cyan-400/30 blur-2xl"
          />

          <motion.div
            animate={{
              scale: phase === 'inhale' || phase === 'hold' ? 1.8 : 1.1,
              opacity: phase === 'inhale' || phase === 'hold' ? 0.4 : 0.2,
            }}
            transition={{ duration: breathingCycle[phase], ease: 'easeInOut' }}
            className="absolute w-56 h-56 rounded-full bg-gradient-to-r from-cyan-400/40 to-blue-400/40 blur-xl"
          />

          {/* Main breathing circle */}
          <motion.div
            animate={{
              scale: getCircleScale(),
            }}
            transition={{
              duration: breathingCycle[phase],
              ease: 'easeInOut',
            }}
            className="relative w-48 h-48 rounded-full bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-400 shadow-2xl backdrop-blur-xl"
          >
            {/* Inner circle for glass effect */}
            <div className="absolute inset-4 rounded-full bg-white/30 backdrop-blur-xl border border-white/40 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={phase}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <div className="text-2xl text-white mb-1">
                    {getPhaseText()}
                  </div>
                  <div className="text-sm text-white/80">
                    Cycle {cycle + 1}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Particle effects */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: phase === 'inhale' || phase === 'hold' ? 1.5 : 0.5,
                opacity: phase === 'inhale' || phase === 'hold' ? 0.6 : 0.2,
                rotate: i * 45,
              }}
              transition={{ duration: breathingCycle[phase], ease: 'easeInOut' }}
              className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) translateY(-120px) rotate(${i * 45}deg)`,
              }}
            />
          ))}
        </div>

        {/* Instructions */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center bg-white/30 backdrop-blur-2xl rounded-3xl p-8 border border-white/40 shadow-xl max-w-md"
        >
          <div className="text-lg text-foreground/70 mb-4">
            Time Remaining
          </div>
          <div className="text-5xl text-foreground mb-6">
            {formatTime(timeRemaining)}
          </div>
          <p className="text-sm text-foreground/60">
            Close your eyes, relax your shoulders, and follow the breathing rhythm. 
            Let your thoughts drift away with each exhale.
          </p>
        </motion.div>

        {/* Ambient particles in background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [-20, -40, -20],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              className="absolute w-2 h-2 rounded-full bg-teal-400/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
