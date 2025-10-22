import { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Play, Pause, RotateCcw, Coffee, Sprout, Flower2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MeditationGuide } from './MeditationGuide';

type TimerMode = 'work' | 'shortBreak' | 'longBreak';

interface TimerSettings {
  work: number;
  shortBreak: number;
  longBreak: number;
}

export function PomodoroTimer() {
  const [mode, setMode] = useState<TimerMode>('work');
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [sessionsCompleted, setSessionsCompleted] = useState(0);
  const [showMeditation, setShowMeditation] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const settings: TimerSettings = {
    work: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60,
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgress = () => {
    const totalTime = settings[mode];
    return ((totalTime - timeLeft) / totalTime) * 100;
  };

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            handleTimerComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, timeLeft]);

  const handleTimerComplete = () => {
    if (mode === 'work') {
      const newSessions = sessionsCompleted + 1;
      setSessionsCompleted(newSessions);
      if (newSessions % 4 === 0) {
        switchMode('longBreak');
      } else {
        switchMode('shortBreak');
      }
    } else {
      switchMode('work');
    }
  };

  const switchMode = (newMode: TimerMode) => {
    setMode(newMode);
    setTimeLeft(settings[newMode]);
    setIsRunning(false);
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(settings[mode]);
  };

  const getModeLabel = () => {
    switch (mode) {
      case 'work':
        return 'Focus Time';
      case 'shortBreak':
        return 'Short Break';
      case 'longBreak':
        return 'Long Break';
    }
  };

  const getModeColor = () => {
    switch (mode) {
      case 'work':
        return 'from-emerald-400 to-teal-500';
      case 'shortBreak':
        return 'from-sky-400 to-cyan-500';
      case 'longBreak':
        return 'from-blue-400 to-indigo-500';
    }
  };

  const circumference = 2 * Math.PI * 140;
  const strokeDashoffset = circumference - (getProgress() / 100) * circumference;

  return (
    <>
      {showMeditation && (
        <MeditationGuide
          duration={settings[mode]}
          onClose={() => setShowMeditation(false)}
        />
      )}
      
      <div className="flex flex-col items-center gap-8 w-full max-w-md">
        {/* Mode Selector */}
        <div className="flex gap-3 p-2 bg-white/40 backdrop-blur-xl rounded-full border border-white/40 shadow-lg">
        <button
          onClick={() => switchMode('work')}
          className={`px-6 py-2 rounded-full transition-all duration-500 ${
            mode === 'work'
              ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white shadow-lg'
              : 'text-foreground/70 hover:text-foreground'
          }`}
        >
          <Sprout className="w-4 h-4 inline-block mr-2" />
          Focus
        </button>
        <button
          onClick={() => switchMode('shortBreak')}
          className={`px-6 py-2 rounded-full transition-all duration-500 ${
            mode === 'shortBreak'
              ? 'bg-gradient-to-r from-sky-400 to-cyan-500 text-white shadow-lg'
              : 'text-foreground/70 hover:text-foreground'
          }`}
        >
          <Coffee className="w-4 h-4 inline-block mr-2" />
          Break
        </button>
        <button
          onClick={() => switchMode('longBreak')}
          className={`px-6 py-2 rounded-full transition-all duration-500 ${
            mode === 'longBreak'
              ? 'bg-gradient-to-r from-blue-400 to-indigo-500 text-white shadow-lg'
              : 'text-foreground/70 hover:text-foreground'
          }`}
        >
          <Coffee className="w-4 h-4 inline-block mr-2" />
          Long Break
        </button>
      </div>

      {/* Timer Display */}
      <motion.div
        key={mode}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="relative"
      >
        <svg className="w-80 h-80 transform -rotate-90" viewBox="0 0 300 300">
          {/* Background circle */}
          <circle
            cx="150"
            cy="150"
            r="140"
            fill="none"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="8"
          />
          {/* Progress circle */}
          <motion.circle
            cx="150"
            cy="150"
            r="140"
            fill="none"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className={`bg-gradient-to-r ${getModeColor()}`}
            style={{
              stroke: 'url(#gradient)',
              transition: 'stroke-dashoffset 1s linear',
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              {mode === 'work' && (
                <>
                  <stop offset="0%" stopColor="#34d399" />
                  <stop offset="100%" stopColor="#14b8a6" />
                </>
              )}
              {mode === 'shortBreak' && (
                <>
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </>
              )}
              {mode === 'longBreak' && (
                <>
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#6366f1" />
                </>
              )}
            </linearGradient>
          </defs>
        </svg>

        {/* Timer content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${mode}-${timeLeft}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <p className="text-foreground/60 mb-2">{getModeLabel()}</p>
              <div className="text-7xl tracking-wider text-foreground">
                {formatTime(timeLeft)}
              </div>
              <div className="mt-4 text-sm text-foreground/50">
                Sessions: {sessionsCompleted}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Controls */}
      <div className="flex gap-4">
        <Button
          onClick={toggleTimer}
          size="lg"
          className={`rounded-full px-8 bg-gradient-to-r ${getModeColor()} hover:opacity-90 border-0 shadow-xl transition-all duration-300 hover:scale-105`}
        >
          {isRunning ? (
            <>
              <Pause className="w-5 h-5 mr-2" />
              Pause
            </>
          ) : (
            <>
              <Play className="w-5 h-5 mr-2" />
              Start
            </>
          )}
        </Button>
        <Button
          onClick={resetTimer}
          size="lg"
          variant="outline"
          className="rounded-full px-6 bg-white/40 backdrop-blur-xl border-white/40 hover:bg-white/60 transition-all duration-300"
        >
          <RotateCcw className="w-5 h-5" />
        </Button>
        {(mode === 'shortBreak' || mode === 'longBreak') && (
          <Button
            onClick={() => setShowMeditation(true)}
            size="lg"
            variant="outline"
            className="rounded-full px-6 bg-white/40 backdrop-blur-xl border-white/40 hover:bg-white/60 transition-all duration-300 hover:scale-105"
          >
            <Flower2 className="w-5 h-5" />
          </Button>
        )}
      </div>

      {/* Session indicator */}
      <div className="flex gap-2">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              i < sessionsCompleted % 4
                ? `bg-gradient-to-r ${getModeColor()} shadow-lg`
                : 'bg-white/30 backdrop-blur-sm'
            }`}
          />
        ))}
      </div>
    </div>
    </>
  );
}
