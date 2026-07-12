import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import Loader from '@/components/common/Loader';
import CustomCursor from '@/components/common/CustomCursor';
import ScrollProgress from '@/components/common/ScrollProgress';

export default function Layout() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the loader has already executed in this session
    const hasLoaded = sessionStorage.getItem('hasLoaded');
    if (hasLoaded === 'true') {
      setLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem('hasLoaded', 'true');
    setLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <Loader onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {!loading && (
        <div className="flex flex-col min-h-screen bg-base-light dark:bg-base-dark text-editorial-charcoal dark:text-editorial-ivory transition-colors duration-300">
          {/* Scroll progress bar */}
          <ScrollProgress />

          {/* Desktop custom cursor */}
          <CustomCursor />

          {/* Navigation bar at the top */}
          <Navbar />
          
          {/* Main viewport area */}
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full"
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </main>
    
          {/* Footer at the bottom */}
          <Footer />
        </div>
      )}
    </>
  );
}
