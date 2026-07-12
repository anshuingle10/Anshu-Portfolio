import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return null;

  return (
    <>
      {/* Mobile Horizontal Progress Bar (fixed at the top of page) */}
      <motion.div 
        className="md:hidden fixed top-0 left-0 right-0 h-[2px] bg-accent-blueprint dark:bg-accent-blueprintDark z-[9999] origin-left"
        style={{ scaleX }}
      />

      {/* Desktop Vertical Progress Track (fixed on the right side) */}
      <div className="hidden md:flex fixed right-6 top-[25%] bottom-[25%] w-[1.5px] bg-grid-light dark:bg-grid-dark z-[9998] items-start pointer-events-none select-none rounded-full overflow-hidden">
        <motion.div 
          className="w-full bg-accent-blueprint dark:bg-accent-blueprintDark origin-top rounded-full"
          style={{ 
            scaleY, 
            height: '100%' 
          }}
        />
      </div>

      {/* Small Coordinate indicator beside track */}
      <div className="hidden md:block fixed right-9 top-[50%] -translate-y-1/2 font-mono text-[7px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 tracking-widest z-[9998] uppercase select-none pointer-events-none origin-center -rotate-90">
        PAGE_OFFSET // {Math.round(scrollYProgress.get() * 100)}%
      </div>
    </>
  );
}
