import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMenu, FiX, FiFileText, FiSun, FiMoon } from 'react-icons/fi';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Journey', id: 'journey' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Sync initial theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.body.classList.add('dark');
      setIsDark(true);
    } else {
      document.body.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  // Handle scroll listener to toggle sticky glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver to dynamically track active sections on scroll
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
    
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Trigger when section is in the viewport focus area
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Smooth scroll with sticky navbar height offset (72px)
  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 72;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  // Toggle theme dark/light
  const toggleTheme = () => {
    const newDarkState = !isDark;
    setIsDark(newDarkState);
    if (newDarkState) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 h-[72px] transition-all duration-300 ${
        hasScrolled
          ? 'bg-base-light/75 dark:bg-base-dark/75 backdrop-blur-md border-b border-grid-light/40 dark:border-grid-dark/40 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Branding & Custom CAD Logo */}
        <Link 
          to="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveSection('home');
          }}
          className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-crimson rounded-sm p-1"
          aria-label="Anshu Ingle - Go to top of page"
        >
          {/* Logo icon with coordinate cues */}
          <div className="relative w-9 h-9 border border-grid-light dark:border-grid-dark flex items-center justify-center font-mono text-sm overflow-hidden select-none bg-surface-light dark:bg-surface-dark transition-colors duration-300">
            <span className="absolute top-0 left-0 text-[8px] leading-none text-editorial-charcoal/30 dark:text-editorial-ivory/30 pointer-events-none">+</span>
            <span className="absolute top-0 right-0 text-[8px] leading-none text-editorial-charcoal/30 dark:text-editorial-ivory/30 pointer-events-none">+</span>
            <span className="absolute bottom-0 left-0 text-[8px] leading-none text-editorial-charcoal/30 dark:text-editorial-ivory/30 pointer-events-none">+</span>
            <span className="absolute bottom-0 right-0 text-[8px] leading-none text-editorial-charcoal/30 dark:text-editorial-ivory/30 pointer-events-none">+</span>
            
            <span className="font-display font-semibold text-editorial-charcoal dark:text-editorial-ivory z-10">AI</span>
            
            <div className="absolute w-[150%] h-[1px] bg-accent-blueprint/20 dark:bg-accent-blueprintDark/20 rotate-45 transform origin-center pointer-events-none"></div>
          </div>
          
          {/* Brand Name & Role Title */}
          <div className="flex flex-col select-none">
            <span className="font-display font-medium text-sm tracking-tight text-editorial-charcoal dark:text-editorial-ivory leading-tight transition-colors">
              Anshu Ingle
            </span>
            <span className="font-mono text-[9px] text-editorial-charcoal/50 dark:text-editorial-ivory/50 tracking-wider uppercase mt-0.5 transition-colors">
              Java Full Stack Developer
            </span>
          </div>
        </Link>

        {/* Center: Editorial Navigation Links (Desktop) */}
        <nav className="hidden md:block" aria-label="Main navigation menu">
          <ul className="flex items-center space-x-6 lg:space-x-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="relative py-1">
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`font-mono text-xs tracking-wider uppercase py-1.5 px-0.5 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-crimson rounded-sm relative group ${
                    activeSection === item.id
                      ? 'text-accent-crimson dark:text-accent-red font-medium'
                      : 'text-editorial-charcoal/70 dark:text-editorial-ivory/70 hover:text-editorial-charcoal dark:hover:text-editorial-ivory'
                  }`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                  
                  {/* Subtle Hover underline */}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-editorial-charcoal/20 dark:bg-editorial-ivory/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />

                  {/* Active Underline (Shared Framer Motion Layout Animation) */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 w-full h-[1.5px] bg-accent-crimson dark:bg-accent-red"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Technical Actions & Social Icons */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
          {/* GitHub Icon */}
          <a
            href="https://github.com/anshuingle10"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-editorial-charcoal/70 dark:text-editorial-ivory/70 hover:text-accent-crimson dark:hover:text-accent-red transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-crimson rounded-sm"
            aria-label="Open Anshu Ingle's GitHub profile in a new tab"
          >
            <FiGithub size={18} className="stroke-[1.5px]" />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/anshu-ingle-37b17b259"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-editorial-charcoal/70 dark:text-editorial-ivory/70 hover:text-accent-crimson dark:hover:text-accent-red transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-crimson rounded-sm"
            aria-label="Open Anshu Ingle's LinkedIn profile in a new tab"
          >
            <FiLinkedin size={18} className="stroke-[1.5px]" />
          </a>

          {/* Theme Toggler */}
          <button
            onClick={toggleTheme}
            className="p-2 text-editorial-charcoal/70 dark:text-editorial-ivory/70 hover:text-accent-crimson dark:hover:text-accent-red transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-crimson rounded-sm"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            {isDark ? <FiSun size={18} className="stroke-[1.5px]" /> : <FiMoon size={18} className="stroke-[1.5px]" />}
          </button>

          {/* Outline Resume Button */}
          <a
            href="/assets/resume/Anshu_Vijay_Ingle_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-wider px-4 py-2 border border-grid-light dark:border-grid-dark text-editorial-charcoal dark:text-editorial-ivory hover:text-accent-crimson dark:hover:text-accent-red hover:bg-hatch-light dark:hover:bg-hatch-dark transition-all duration-200 select-none flex items-center gap-2 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-crimson"
          >
            <FiFileText size={14} className="stroke-[1.5px]" />
            Resume
          </a>
        </div>

        {/* Mobile Control Indicators (Burger + Toggle) */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            className="p-2 text-editorial-charcoal/70 dark:text-editorial-ivory/70 hover:text-accent-crimson dark:hover:text-accent-red transition-colors focus:outline-none"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            {isDark ? <FiSun size={18} className="stroke-[1.5px]" /> : <FiMoon size={18} className="stroke-[1.5px]" />}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-editorial-charcoal dark:text-editorial-ivory focus:outline-none"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <FiX size={24} className="stroke-[1.5px]" /> : <FiMenu size={24} className="stroke-[1.5px]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Smooth Height Expand using Framer Motion) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-base-light dark:bg-base-dark border-b border-grid-light/40 dark:border-grid-dark/40"
          >
            <nav className="px-4 pt-2 pb-6 space-y-4" aria-label="Mobile navigation menu">
              <ul className="space-y-2">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left font-mono text-xs uppercase tracking-wider py-2 transition-colors duration-200 ${
                        activeSection === item.id
                          ? 'text-accent-crimson dark:text-accent-red font-medium'
                          : 'text-editorial-charcoal/70 dark:text-editorial-ivory/70'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4 border-t border-grid-light/40 dark:border-grid-dark/40 flex flex-col gap-4">
                {/* Resume button in mobile view */}
                <a
                  href="/assets/resume/Anshu_Vijay_Ingle_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center font-mono text-xs uppercase tracking-wider py-2.5 border border-grid-light dark:border-grid-dark text-editorial-charcoal dark:text-editorial-ivory hover:bg-hatch-light dark:hover:bg-hatch-dark transition-all rounded-sm flex items-center justify-center gap-2"
                >
                  <FiFileText size={14} className="stroke-[1.5px]" />
                  Resume
                </a>
                
                {/* Social icons in mobile view */}
                <div className="flex justify-center gap-6">
                  <a
                    href="https://github.com/anshuingle10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-editorial-charcoal/70 dark:text-editorial-ivory/70 hover:text-accent-crimson dark:hover:text-accent-red transition-colors"
                    aria-label="Open Anshu Ingle's GitHub profile in a new tab"
                  >
                    <FiGithub size={20} className="stroke-[1.5px]" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anshu-ingle-37b17b259"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-editorial-charcoal/70 dark:text-editorial-ivory/70 hover:text-accent-crimson dark:hover:text-accent-red transition-colors"
                    aria-label="Open Anshu Ingle's LinkedIn profile in a new tab"
                  >
                    <FiLinkedin size={20} className="stroke-[1.5px]" />
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
