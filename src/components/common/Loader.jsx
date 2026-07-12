import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const STEPS = [
  'Initializing Portfolio...',
  'Loading Engineering Modules...',
  'Compiling UI Components...',
  'Preparing Assets...',
  'Portfolio Ready'
];

export default function Loader({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (currentStep < STEPS.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 400); // Step every 400ms
      return () => clearTimeout(timeout);
    } else {
      const finishTimeout = setTimeout(() => {
        onComplete();
      }, 500); // Hold final ready state for 500ms
      return () => clearTimeout(finishTimeout);
    }
  }, [currentStep, onComplete]);

  // Reduced motion alternative: simply skip animations
  if (shouldReduceMotion) {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-base-dark text-editorial-ivory select-none font-mono">
        <div className="text-sm uppercase tracking-[0.2em] mb-4 text-accent-blueprintDark">Anshu Vijay Ingle</div>
        <div className="text-xs text-editorial-ivory/60">{STEPS[currentStep]}</div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-base-dark text-editorial-ivory select-none font-mono overflow-hidden">
      
      {/* Blueprint Grid Lines Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.06] z-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--border-grid) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border-grid) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Axis crosshair guides */}
      <div className="absolute top-[20%] left-0 w-full h-[1px] bg-grid-dark/30 z-0 pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 w-full h-[1px] bg-grid-dark/30 z-0 pointer-events-none" />
      <div className="absolute top-0 left-[20%] w-[1px] h-full bg-grid-dark/30 z-0 pointer-events-none" />
      <div className="absolute top-0 right-[20%] w-[1px] h-full bg-grid-dark/30 z-0 pointer-events-none" />

      {/* Animated Blueprint AI Logo */}
      <div className="relative w-24 h-24 mb-10 flex items-center justify-center">
        
        {/* Outer square border line drawing */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-accent-blueprintDark fill-none stroke-current">
          <motion.rect
            x="5"
            y="5"
            width="90"
            height="90"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
          {/* Axis diagonals */}
          <motion.line
            x1="5"
            y1="5"
            x2="95"
            y2="95"
            strokeWidth="0.8"
            opacity="0.25"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, ease: "easeInOut", delay: 0.2 }}
          />
          <motion.line
            x1="95"
            y1="5"
            x2="5"
            y2="95"
            strokeWidth="0.8"
            opacity="0.25"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, ease: "easeInOut", delay: 0.2 }}
          />
        </svg>

        {/* Center Text */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-2xl font-bold text-editorial-ivory z-10"
        >
          AI
        </motion.div>

        {/* CAD Corner Ticks */}
        <span className="absolute top-1 left-1 text-[8px] opacity-40 select-none pointer-events-none">+</span>
        <span className="absolute top-1 right-1 text-[8px] opacity-40 select-none pointer-events-none">+</span>
        <span className="absolute bottom-1 left-1 text-[8px] opacity-40 select-none pointer-events-none">+</span>
        <span className="absolute bottom-1 right-1 text-[8px] opacity-40 select-none pointer-events-none">+</span>

      </div>

      {/* Progress sequence bar */}
      <div className="w-56 h-[2px] bg-grid-dark/60 relative overflow-hidden rounded-full mb-4">
        <motion.div
          className="absolute top-0 left-0 h-full bg-accent-blueprintDark"
          initial={{ left: '-100%', width: '0%' }}
          animate={{ 
            left: '0%', 
            width: `${((currentStep + 1) / STEPS.length) * 100}%` 
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Loading Steps Info Display */}
      <div className="h-6 flex items-center justify-center">
        <motion.span
          key={currentStep}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 0.85, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25 }}
          className="text-[10px] tracking-[0.25em] uppercase text-accent-blueprintDark font-mono"
        >
          {STEPS[currentStep]}
        </motion.span>
      </div>

      {/* Tech indicators */}
      <div className="absolute bottom-8 font-mono text-[7px] text-editorial-ivory/20 tracking-widest uppercase flex gap-4">
        <span>PORT: 8080</span>
        <span>SYS_STATUS: IN_BOOT_LOADER</span>
        <span>BAUD: 115200</span>
      </div>

    </div>
  );
}
