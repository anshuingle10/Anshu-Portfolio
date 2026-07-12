import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Mouse coordinate values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for the outer ring
  const ringX = useSpring(mouseX, { stiffness: 220, damping: 25 });
  const ringY = useSpring(mouseY, { stiffness: 220, damping: 25 });

  useEffect(() => {
    // Check if device supports touch to disable custom cursor on touch viewports
    const isTouchDevice = 
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 || 
      window.innerWidth < 768;

    if (isTouchDevice) {
      return;
    }

    setIsVisible(true);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 6);
      mouseY.set(e.clientY - 6);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    // Track mouse enters and exits for clickable elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.getAttribute('role') === 'button' || 
        target.classList.contains('cursor-pointer') ||
        target.closest('.group') || // Highlight on grid capability cards
        target.closest('[onClick]');

      if (isInteractable) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        /* Hide native cursor on desktop to allow blueprint custom cursor rendering */
        @media (min-width: 768px) {
          body, a, button, input, textarea, [role="button"], select {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Inner Dot: follows cursor immediately */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-accent-blueprint dark:bg-accent-blueprintDark rounded-full pointer-events-none z-[10000]"
        style={{
          x: mouseX,
          y: mouseY,
          scale: isClicked ? 0.8 : isHovered ? 1.3 : 1,
          backgroundColor: isHovered 
            ? 'var(--accent-crimson)' 
            : 'var(--accent-blueprint)'
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />

      {/* Outer Ring: follows cursor with spring physics delay */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-accent-blueprint/40 dark:border-accent-blueprintDark/40 rounded-full pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
          translateX: -10, // Offset difference for larger ring width
          translateY: -10,
          scale: isClicked ? 0.9 : isHovered ? 1.8 : 1,
          borderColor: isHovered 
            ? 'rgba(197, 49, 49, 0.45)' 
            : 'rgba(26, 115, 232, 0.4)'
        }}
      >
        {/* Tiny crosshair ticks inside outer ring */}
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            className="w-full h-full relative"
          >
            <div className="absolute top-0 left-[50%] -translate-x-[50%] w-[1px] h-1.5 bg-accent-crimson" />
            <div className="absolute bottom-0 left-[50%] -translate-x-[50%] w-[1px] h-1.5 bg-accent-crimson" />
            <div className="absolute left-0 top-[50%] -translate-y-[50%] h-[1px] w-1.5 bg-accent-crimson" />
            <div className="absolute right-0 top-[50%] -translate-y-[50%] h-[1px] w-1.5 bg-accent-crimson" />
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
