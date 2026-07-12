import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiLayers } from 'react-icons/fi';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Journey', id: 'journey' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
];

export default function Footer() {
  const handleNavClick = (id) => {
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

  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 5 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <footer className="relative w-full overflow-hidden bg-base-light dark:bg-base-dark border-t border-grid-light/40 dark:border-grid-dark/40 py-16 md:py-20 transition-colors duration-300">
      
      {/* Subtle blueprint grid background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.10] dark:opacity-[0.05] z-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--border-grid) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border-grid) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Technical coordinate markings */}
      <span className="absolute top-2 left-2 font-mono text-[7px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 select-none pointer-events-none">SYS_TERMINUS // COORD (0, 3200)</span>
      <span className="absolute top-2 right-2 font-mono text-[7px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 select-none pointer-events-none">ALIGN_GRID // TRUE</span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Animated blueprint lines */}
        <div className="w-full h-[1px] bg-grid-light dark:bg-grid-dark relative mb-12 overflow-hidden select-none">
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full bg-accent-blueprint dark:bg-accent-blueprintDark origin-left"
          />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start"
        >
          
          {/* LEFT COLUMN: Identity & Bio (Span 5) */}
          <motion.div variants={itemVariants} className="md:col-span-6 lg:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 border border-grid-light dark:border-grid-dark flex items-center justify-center font-mono text-xs overflow-hidden select-none bg-surface-light dark:bg-surface-dark transition-colors duration-300">
                <span className="font-display font-semibold text-editorial-charcoal dark:text-editorial-ivory">AI</span>
                <div className="absolute w-[150%] h-[1px] bg-accent-blueprint/15 dark:bg-accent-blueprintDark/15 rotate-45 transform origin-center pointer-events-none"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-semibold text-base text-editorial-charcoal dark:text-editorial-ivory leading-tight transition-colors">
                  Anshu Vijay Ingle
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-accent-blueprint dark:text-accent-blueprintDark font-semibold select-none">
                  Java Full Stack Developer
                </span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm font-light text-editorial-charcoal/65 dark:text-editorial-ivory/65 leading-relaxed max-w-sm">
              Building scalable software with Java, Spring Boot, React, and modern engineering practices. Focus on clean logic architectures, datastore schemas, and type-safe systems.
            </p>
          </motion.div>

          {/* CENTER COLUMN: Quick Navigation (Span 4) */}
          <motion.div variants={itemVariants} className="md:col-span-6 lg:col-span-4 text-left">
            <h4 className="font-mono text-[9px] uppercase tracking-[0.2em] text-editorial-charcoal/40 dark:text-editorial-ivory/40 font-bold border-b border-grid-light/40 dark:border-grid-dark/40 pb-2 mb-4 select-none">
              QUICK_NAVIGATION // SITE_MAP
            </h4>
            
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4 font-mono text-xs">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="text-editorial-charcoal/70 dark:text-editorial-ivory/70 hover:text-accent-blueprint dark:hover:text-accent-blueprintDark uppercase tracking-wider transition-colors py-1 block text-left"
                  >
                    // {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT COLUMN: Connect details (Span 3) */}
          <motion.div variants={itemVariants} className="md:col-span-12 lg:col-span-3 text-left">
            <h4 className="font-mono text-[9px] uppercase tracking-[0.2em] text-editorial-charcoal/40 dark:text-editorial-ivory/40 font-bold border-b border-grid-light/40 dark:border-grid-dark/40 pb-2 mb-4 select-none">
              CONNECT // DIRECT_LINKS
            </h4>

            <div className="flex flex-col gap-2.5 font-mono text-xs">
              <a 
                href="https://github.com/anshuingle10" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-editorial-charcoal/70 dark:text-editorial-ivory/70 hover:text-accent-blueprint transition-colors"
              >
                <FiGithub size={13} className="shrink-0" />
                <span>GITHUB</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/anshu-ingle-37b17b259" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-editorial-charcoal/70 dark:text-editorial-ivory/70 hover:text-accent-blueprint transition-colors"
              >
                <FiLinkedin size={13} className="shrink-0" />
                <span>LINKEDIN</span>
              </a>

              <a 
                href="mailto:anshu.ingle2105@gmail.com"
                className="flex items-center gap-2 text-editorial-charcoal/70 dark:text-editorial-ivory/70 hover:text-accent-blueprint transition-colors"
              >
                <FiMail size={13} className="shrink-0" />
                <span>EMAIL</span>
              </a>
            </div>
          </motion.div>

        </motion.div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-8 border-t border-grid-light/40 dark:border-grid-dark/40 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-[9px] tracking-wide text-editorial-charcoal/40 dark:text-editorial-ivory/40">
          
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left select-none">
            <span>&copy; 2026 Anshu Vijay Ingle.</span>
            <span>Designed &amp; Developed by Anshu Vijay Ingle</span>
          </div>

          {/* Technology stack indicators */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 select-none">
            <span className="text-[8px] uppercase tracking-widest text-editorial-charcoal/30 dark:text-editorial-ivory/30 mr-1.5">// BUILT WITH:</span>
            {['React', 'Vite', 'Tailwind', 'Framer Motion'].map((tech) => (
              <span key={tech} className="px-2 py-0.5 border border-grid-light dark:border-grid-dark bg-surface-light/35 dark:bg-surface-dark/35 rounded-sm">
                {tech}
              </span>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}
