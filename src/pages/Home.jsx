import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiFileText, FiCpu, FiLayers, FiBookOpen, FiUsers, FiMapPin, FiActivity, FiTerminal, FiSliders, FiTrendingUp, FiDatabase, FiGlobe, FiMonitor, FiMail, FiPhone, FiCopy, FiCheck, FiSend, FiLoader, FiGithub, FiLinkedin, FiUser, FiCheckCircle, FiAlertCircle, FiX } from 'react-icons/fi';
import technestStoreImage from '../assets/technest-store.png';
import portraitImage from '../assets/portrait.jpg';



const BADGES = [
  { name: 'Java', desc: 'Core Backend' },
  { name: 'Spring Boot', desc: 'API Engine' },
  { name: 'React', desc: 'UI Layer' },
  { name: 'MySQL', desc: 'Datastore' },
  { name: 'REST API', desc: 'Integration' },
  { name: 'Git', desc: 'Version Control' }
];

const TIMELINE_STEPS = [
  { step: '01', code: 'START_PROG', title: 'Started Programming' },
  { step: '02', code: 'JAVA_CORE', title: 'Learned Java' },
  { step: '03', code: 'FULLSTACK', title: 'Built Full Stack Projects' },
  { step: '04', code: 'SPRING_API', title: 'Learning Spring Boot' },
  { step: '05', code: 'SE_READY', title: 'Preparing for Software Engineering Roles' }
];

const HIGHLIGHT_CARDS = [
  {
    icon: FiCpu,
    title: 'Problem Solver',
    desc: 'Deconstructing complex, monolithic business logic into clear, modular, and optimized services.'
  },
  {
    icon: FiLayers,
    title: 'Clean Architecture',
    desc: 'Applying SOLID design patterns, strict MVC separation, and schema normalization for maintainable code.'
  },
  {
    icon: FiBookOpen,
    title: 'Continuous Learning',
    desc: 'Consistently researching JVM performance parameters, concurrency threads, and modern UI state models.'
  },
  {
    icon: FiUsers,
    title: 'Team Collaboration',
    desc: 'Partnering through structured Git workflows, conducting clean code reviews, and writing detailed documentation.'
  }
];

const PRINCIPLES = [
  { name: 'Clean Code', code: 'PRIN_01', level: '100% FOCUS' },
  { name: 'Performance', code: 'PRIN_02', level: 'JVM OPT' },
  { name: 'Scalability', code: 'PRIN_03', level: 'LOAD BAL' },
  { name: 'Reliability', code: 'PRIN_04', level: 'UPTIME' },
  { name: 'Security', code: 'PRIN_05', level: 'AUTH JWT' },
  { name: 'Continuous Learning', code: 'PRIN_06', level: 'ADAPT' }
];

const SKILLS_CATEGORIES = [
  {
    title: 'Backend Engineering',
    code: 'CAT_01',
    icon: FiCpu,
    caption: 'Building scalable backend applications.',
    skills: ['Java', 'Spring Boot', 'REST APIs', 'Hibernate (Learning)', 'JPA (Learning)', 'MySQL', 'Maven', 'Git']
  },
  {
    title: 'Frontend Engineering',
    code: 'CAT_02',
    icon: FiLayers,
    caption: 'Creating clean and responsive user interfaces.',
    skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Responsive Design']
  },
  {
    title: 'Tools & Workflow',
    code: 'CAT_03',
    icon: FiTerminal,
    caption: 'Modern development workflow and collaboration.',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'IntelliJ IDEA', 'Figma', 'Chrome DevTools']
  },
  {
    title: 'Currently Learning',
    code: 'CAT_04',
    icon: FiBookOpen,
    caption: 'Continuously expanding my engineering skills.',
    skills: ['Spring Security', 'Microservices', 'Docker', 'System Design', 'JUnit', 'REST API Best Practices']
  }
];

const SNAPSHOTS = [
  { code: 'LANG_INDEX', label: 'Languages', value: 'Java, JavaScript, SQL' },
  { code: 'FRAMEWORK_CORE', label: 'Frameworks', value: 'Spring Boot, React' },
  { code: 'DATASTORE_LAYER', label: 'Databases', value: 'MySQL, JDBC Schemas' },
  { code: 'DEV_WORKFLOW', label: 'Developer Tools', value: 'Git, Postman, IDEA' },
  { code: 'DEPLOYMENTS', label: 'Projects Built', value: '3 Core Applications' }
];

const LEARNING_JOURNEY = [
  {
    stage: '01',
    code: 'STAGE_01 // ACADEMIC_BASE',
    date: '2022 - 2026',
    title: 'BE Information Technology',
    desc: 'Acquired critical computer science knowledge during my Bachelor of Engineering studies, focusing on database structures, OS designs, networking protocols, and systems analysis.'
  },
  {
    stage: '02',
    code: 'STAGE_02 // LANG_JVM_CORE',
    date: '2023 - 2024',
    title: 'Learning Java Core & Algorithms',
    desc: 'Discovered a passion for type-safe structures. Mastered Java Object-Oriented programming (OOP), memory layouts, data structures, and foundational SQL relationships.'
  },
  {
    stage: '03',
    code: 'STAGE_03 // UI_REACT_ENG',
    date: '2024',
    title: 'Building Frontend Web Interfaces',
    desc: 'Learned client-side web development. Built multiple responsive frontend modules using HTML5, CSS3, Tailwind CSS, and React, focusing on modular hooks and state management.'
  },
  {
    stage: '04',
    code: 'STAGE_04 // REST_BOOT_JPA',
    date: '2024 - 2025',
    title: 'Learning Java Full Stack APIs',
    desc: 'Bridged client-server gaps. Built secure REST API endpoints with Spring Boot, set up JWT-based validations, and mapped relational database schemas using JPA/Hibernate.'
  },
  {
    stage: '05',
    code: 'STAGE_05 // DEV_TEST_INTEG',
    date: '2025 - 2026',
    title: 'Building Real-World Applications',
    desc: 'Engineered end-to-end full stack web platforms. Integrated cache optimization mechanisms (Redis), configured build scripts (Maven), and wrote unit tests (JUnit) to verify code paths.'
  },
  {
    stage: '06',
    code: 'STAGE_06 // PROD_READY',
    date: '2026 - CURRENT',
    title: 'Open to Full Stack Developer Opportunities',
    desc: 'Prepared to bring robust Java Spring Boot and React skills to a software engineering team, focusing on writing clean, scalable, and maintainable code in an enterprise environment.'
  }
];

const COURSEWORK = [
  { name: 'Object-Oriented Programming', icon: FiCpu, desc: 'Designing reusable, modular, and maintainable systems using OOP principles.' },
  { name: 'Data Structures & Algorithms', icon: FiSliders, desc: 'Optimizing code execution efficiency and system memory utilization.' },
  { name: 'Database Management Systems', icon: FiDatabase, desc: 'Designing structured schema patterns and optimizing relational databases.' },
  { name: 'Operating Systems', icon: FiTerminal, desc: 'Understanding low-level thread scheduling, memory managers, and concurrency.' },
  { name: 'Computer Networks', icon: FiGlobe, desc: 'Mastering protocol models (TCP/IP), network routing, and request streams.' },
  { name: 'Software Engineering', icon: FiLayers, desc: 'Applying lifecycle methodologies, testing parameters, and design patterns.' },
  { name: 'Web Technologies', icon: FiMonitor, desc: 'Constructing modern client applications and API data exchanges.' }
];

const ACADEMIC_HIGHLIGHTS = [
  { title: 'Strong Java Foundation', desc: 'Focusing on type safety, class declarations, encapsulation, and exceptions.' },
  { title: 'Backend Development Focus', desc: 'Building service architectures, managing requests, and processing logic.' },
  { title: 'Database Design', desc: 'Designing relational integrity tables, primary keys, and index bounds.' },
  { title: 'Problem Solving', desc: 'Deconstructing logic equations and optimizing execution constraints.' },
  { title: 'Software Engineering', desc: 'Applying clean architectures, modular folders, and documentation standards.' },
  { title: 'Continuous Learning', desc: 'Reading specifications, researching modern libraries, and building code patterns.' }
];

const TECHNICAL_FOCUS = ['Java', 'Spring Boot', 'React', 'MySQL', 'REST APIs', 'Git', 'Tailwind CSS', 'Responsive Design'];

const FEATURED_PROJECTS = [
  {
    title: 'TechNest Store',
    category: 'Frontend Project',
    status: 'Completed',
    image: technestStoreImage,
    desc: 'TechNest Store is a premium electronics e-commerce website developed using React, Vite, JavaScript and Tailwind CSS. Users can browse products, search products, view product details, add items to cart, manage wishlist and enjoy a fully responsive shopping experience.',
    technologies: ['React', 'JavaScript', 'Vite', 'Tailwind CSS', 'React Router', 'Framer Motion'],
    features: [
      'Responsive Design',
      'Product Listing',
      'Product Details',
      'Search Products',
      'Shopping Cart',
      'Wishlist',
      'Login & Register',
      'Protected Checkout',
      'Contact Page'
    ],
    liveUrl: 'https://anshuingle10.github.io/TechNest-Store/',
    githubUrl: 'https://github.com/anshuingle10/TechNest-Store'
  }
];


export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    },
  };

  // Contact form state
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success' | 'error', message: string }

  // Copy to clipboard state
  const [copiedText, setCopiedText] = useState('');

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2000);
  };

  // Toast auto-dismiss logic
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const validate = () => {
    let tempErrors = {};
    if (!formState.name.trim()) {
      tempErrors.name = "Name is required";
    }

    if (!formState.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      tempErrors.email = "Email is invalid";
    }

    if (!formState.subject.trim()) {
      tempErrors.subject = "Subject is required";
    }

    if (!formState.message.trim()) {
      tempErrors.message = "Message is required";
    } else if (formState.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent duplicate submissions

    if (validate()) {
      setIsSubmitting(true);
      setToast(null);

      const url = 'https://script.google.com/macros/s/AKfycbyiqRTBiaNk045ysc4r342QO-sLEeKWu59Igr9f1DsgS2Z2fTnGpLFQpTY7QuvEKEIDpA/exec';
      const payload = {
        name: formState.name.trim(),
        email: formState.email.trim(),
        subject: formState.subject.trim(),
        message: formState.message.trim()
      };

      try {
        const response = await fetch(url, {
          method: 'POST',
          mode: 'no-cors', // Correct mode to handle Google Apps Script redirects & CORS bypass
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        // Opaque response status will be 0 on success. Accept either 200 or 0 as successful POST.
        if (response.status === 200 || response.status === 0) {
          setSubmitSuccess(true);
          setToast({
            type: 'success',
            message: 'Thank you! Your message has been sent successfully.'
          });
          setFormState({ name: '', email: '', subject: '', message: '' });
          setErrors({});
          setTimeout(() => setSubmitSuccess(false), 3500);
        } else {
          setToast({
            type: 'error',
            message: 'Unable to send your message. Please try again.'
          });
        }
      } catch (error) {
        console.error('Network or CORS error during form submission:', error);
        setToast({
          type: 'error',
          message: 'Unable to send your message. Please try again.'
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      {/* ========================================================
          1. HERO SECTION (Approved Version - Unmodified)
         ======================================================== */}
      <section
        id="home"
        className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-base-light dark:bg-base-dark flex items-center transition-colors duration-300"
      >

        {/* Layered Background System */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.22] dark:opacity-[0.12] z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--border-grid) 1px, transparent 1px),
              linear-gradient(to bottom, var(--border-grid) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="absolute top-[20%] left-0 w-full h-[1px] bg-grid-light/30 dark:bg-grid-dark/30 z-0 pointer-events-none" />
        <div className="absolute bottom-[20%] left-0 w-full h-[1px] bg-grid-light/30 dark:bg-grid-dark/30 z-0 pointer-events-none" />
        <div className="absolute top-[40%] right-[10%] -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-accent-blueprint/8 dark:bg-accent-blueprintDark/4 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-accent-primary/4 dark:bg-accent-primary/2 rounded-full blur-[90px] pointer-events-none z-0" />

        {/* Hero Grid Content */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">

            {/* Left Column: Narrative & Details */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="lg:col-span-7 flex flex-col justify-center text-left"
            >
              <motion.div
                variants={itemVariants}
                className="font-mono text-[9px] tracking-[0.25em] text-editorial-charcoal/50 dark:text-editorial-ivory/50 uppercase font-semibold flex items-center gap-2 select-none"
              >
                <span>SYS_ARCH_SPEC // INGLE.DEV // PORT: 8080</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-editorial-charcoal dark:text-editorial-ivory mt-3 leading-[1.1]"
              >
                Anshu Ingle
              </motion.h1>

              <motion.h2
                variants={itemVariants}
                className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-accent-blueprint dark:text-accent-blueprintDark font-semibold mt-3.5 select-none"
              >
                Java Full Stack Developer
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="font-sans text-xl sm:text-2xl font-light text-editorial-charcoal/90 dark:text-editorial-ivory/90 mt-5 leading-snug max-w-xl"
              >
                Building scalable web applications with Java, Spring Boot, React, and MySQL.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="font-sans text-sm sm:text-base font-light text-editorial-charcoal/65 dark:text-editorial-ivory/65 mt-4 max-w-lg leading-relaxed"
              >
                I specialize in architecting high-performance Java applications and building responsive web experiences. By combining clean backend services with intuitive user interfaces, I deliver robust, maintainable systems that solve complex, real-world problems.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-2.5 mt-7 select-none"
              >
                {BADGES.map((badge) => (
                  <div
                    key={badge.name}
                    className="group relative cursor-default py-1.5 px-3 border border-grid-light/50 dark:border-grid-dark/50 bg-surface-light/40 dark:bg-surface-dark/40 backdrop-blur-sm shadow-[0_2px_10px_rgba(0,0,0,0.01)] hover:border-accent-blueprint/50 dark:hover:border-accent-blueprintDark/50 rounded-[4px] transition-all duration-300 hover:-translate-y-0.5"
                    aria-label={`${badge.name} - ${badge.desc}`}
                  >
                    <div className="flex flex-col">
                      <span className="font-sans text-[10px] sm:text-xs font-semibold text-editorial-charcoal dark:text-editorial-ivory transition-colors">
                        {badge.name}
                      </span>
                      <span className="font-mono text-[7px] text-editorial-charcoal/40 dark:text-editorial-ivory/40 uppercase tracking-widest mt-0.5 group-hover:text-accent-blueprint dark:group-hover:text-accent-blueprintDark transition-colors">
                        {badge.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-4 mt-9"
              >
                <a
                  href="#projects"
                  className="group relative inline-flex items-center gap-2 px-6 py-3 bg-editorial-charcoal text-base-light dark:bg-editorial-ivory dark:text-base-dark font-mono text-xs uppercase tracking-wider font-semibold shadow-cad hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blueprint"
                >
                  <span>View Projects</span>
                  <FiArrowRight className="stroke-[2px] transition-transform duration-200 group-hover:translate-x-1" />
                </a>

                <a
                  href="/assets/resume/Anshu_Vijay_Ingle_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-grid-light dark:border-grid-dark bg-transparent text-editorial-charcoal dark:text-editorial-ivory font-mono text-xs uppercase tracking-wider font-semibold hover:text-accent-crimson dark:hover:text-accent-red hover:bg-hatch-light dark:hover:bg-hatch-dark transition-all duration-200 rounded-sm flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blueprint"
                >
                  <FiFileText className="stroke-[1.5px]" />
                  Download Resume
                </a>
              </motion.div>

            </motion.div>

            {/* Right Column: Visual Diagram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 50, damping: 18, delay: 0.45 }}
              className="lg:col-span-5 w-full flex items-center justify-center relative select-none"
            >
              <motion.div
                animate={{ y: [-5, 5] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="w-full max-w-[460px]"
              >
                <div className="relative border border-grid-light dark:border-grid-dark bg-surface-light/35 dark:bg-surface-dark/35 backdrop-blur-md p-4 sm:p-5 shadow-[0_20px_50px_rgba(26,115,232,0.04)] dark:shadow-[0_20px_50px_rgba(59,130,246,0.06)] rounded-sm transition-colors duration-300">

                  <span className="absolute top-0 left-0 text-[10px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 pointer-events-none p-1 font-mono select-none">+</span>
                  <span className="absolute top-0 right-0 text-[10px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 pointer-events-none p-1 font-mono select-none">+</span>
                  <span className="absolute bottom-0 left-0 text-[10px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 pointer-events-none p-1 font-mono select-none">+</span>
                  <span className="absolute bottom-0 right-0 text-[10px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 pointer-events-none p-1 font-mono select-none">+</span>

                  <div className="flex items-center justify-between border-b border-grid-light/40 dark:border-grid-dark/40 pb-3 mb-4 font-mono text-[9px] text-editorial-charcoal/50 dark:text-editorial-ivory/50">
                    <span>SYS_ARCH_LAYOUT // VER_2.4</span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                      <span>ONLINE // 14ms</span>
                    </span>
                  </div>

                  <svg
                    viewBox="0 0 460 320"
                    className="w-full h-auto text-editorial-charcoal dark:text-editorial-ivory fill-none stroke-current"
                  >
                    <style>{`
                      @keyframes flow-fast {
                        to { stroke-dashoffset: -20; }
                      }
                      @keyframes flow-slow {
                        to { stroke-dashoffset: -25; }
                      }
                      @keyframes pulse-dot {
                        0%, 100% { opacity: 0.35; filter: drop-shadow(0 0 1px #10B981); }
                        50% { opacity: 1; filter: drop-shadow(0 0 3px #10B981); }
                      }
                      .flow-fast {
                        stroke: var(--accent-blueprint);
                        stroke-width: 1.2;
                        stroke-dasharray: 4, 4;
                        fill: none;
                        animation: flow-fast 1.3s linear infinite;
                      }
                      .flow-slow {
                        stroke: var(--accent-blueprint);
                        stroke-width: 1.2;
                        stroke-dasharray: 5, 5;
                        fill: none;
                        animation: flow-slow 2.2s linear infinite;
                      }
                      .active-indicator {
                        fill: #10B981;
                        animation: pulse-dot 2.5s ease-in-out infinite;
                        stroke: none;
                      }
                    `}</style>

                    <path d="M 95 160 L 135 160" className="flow-fast" />
                    <path d="M 215 160 L 235 160 L 235 105 L 255 105" className="flow-fast" />
                    <path d="M 215 160 L 235 160 L 235 220 L 255 220" className="flow-slow" />
                    <path d="M 345 105 L 365 105 L 365 162.5 L 385 162.5" className="flow-fast" />
                    <path d="M 345 220 L 365 220 L 365 162.5 L 385 162.5" className="flow-slow" />

                    {/* Client */}
                    <g>
                      <rect x="15" y="130" width="80" height="60" rx="3" stroke="var(--border-grid)" fill="var(--bg-surface)" strokeWidth="1" />
                      <rect x="15" y="130" width="80" height="18" rx="3" fill="var(--border-grid)" opacity="0.15" />
                      <text x="23" y="142" fontFamily="DM Mono" fontSize="8" fontWeight="bold" fill="var(--text-primary)" stroke="none">CLIENT</text>
                      <text x="23" y="162" fontFamily="Plus Jakarta Sans" fontSize="9" fontWeight="semibold" fill="var(--text-primary)" stroke="none">React View</text>
                      <text x="23" y="174" fontFamily="DM Mono" fontSize="7" fill="var(--text-muted)" stroke="none">Port: 3000</text>
                      <circle cx="83" cy="139" r="2.5" className="active-indicator" />
                    </g>

                    {/* Gateway */}
                    <g>
                      <rect x="135" y="130" width="80" height="60" rx="3" stroke="var(--border-grid)" fill="var(--bg-surface)" strokeWidth="1" />
                      <rect x="135" y="130" width="80" height="18" rx="3" fill="var(--border-grid)" opacity="0.15" />
                      <text x="143" y="142" fontFamily="DM Mono" fontSize="8" fontWeight="bold" fill="var(--text-primary)" stroke="none">GATEWAY</text>
                      <text x="143" y="162" fontFamily="Plus Jakarta Sans" fontSize="9" fontWeight="semibold" fill="var(--text-primary)" stroke="none">API Router</text>
                      <text x="143" y="174" fontFamily="DM Mono" fontSize="7" fill="var(--text-muted)" stroke="none">Reverse Proxy</text>
                      <circle cx="203" cy="139" r="2.5" className="active-indicator" />
                    </g>

                    {/* JVM Core */}
                    <g>
                      <rect x="255" y="70" width="90" height="70" rx="3" stroke="var(--border-grid)" fill="var(--bg-surface)" strokeWidth="1" />
                      <rect x="255" y="70" width="90" height="18" rx="3" fill="var(--border-grid)" opacity="0.15" />
                      <text x="263" y="82" fontFamily="DM Mono" fontSize="8" fontWeight="bold" fill="var(--text-primary)" stroke="none">JVM ENGINE</text>
                      <text x="263" y="101" fontFamily="Plus Jakarta Sans" fontSize="9" fontWeight="semibold" fill="var(--text-primary)" stroke="none">Spring Boot</text>
                      <text x="263" y="113" fontFamily="DM Mono" fontSize="7" fill="var(--text-muted)" stroke="none">REST Services</text>
                      <text x="263" y="125" fontFamily="DM Mono" fontSize="7" fill="var(--accent-primary)" stroke="none">Active Thread</text>
                      <circle cx="333" cy="79" r="2.5" className="active-indicator" />
                    </g>

                    {/* Cache */}
                    <g>
                      <rect x="255" y="190" width="90" height="60" rx="3" stroke="var(--border-grid)" fill="var(--bg-surface)" strokeWidth="1" />
                      <rect x="255" y="190" width="90" height="18" rx="3" fill="var(--border-grid)" opacity="0.15" />
                      <text x="263" y="202" fontFamily="DM Mono" fontSize="8" fontWeight="bold" fill="var(--text-primary)" stroke="none">CACHE</text>
                      <text x="263" y="222" fontFamily="Plus Jakarta Sans" fontSize="9" fontWeight="semibold" fill="var(--text-primary)" stroke="none">Redis DB</text>
                      <text x="263" y="234" fontFamily="DM Mono" fontSize="7" fill="var(--text-muted)" stroke="none">In-Memory</text>
                      <circle cx="333" cy="199" r="2.5" className="active-indicator" />
                    </g>

                    {/* MySQL Datastore */}
                    <g>
                      <rect x="385" y="130" width="60" height="65" rx="3" stroke="var(--border-grid)" fill="var(--bg-surface)" strokeWidth="1" />
                      <rect x="385" y="130" width="60" height="18" rx="3" fill="var(--border-grid)" opacity="0.15" />
                      <text x="391" y="142" fontFamily="DM Mono" fontSize="8" fontWeight="bold" fill="var(--text-primary)" stroke="none">DATASTORE</text>
                      <text x="391" y="161" fontFamily="Plus Jakarta Sans" fontSize="9" fontWeight="semibold" fill="var(--text-primary)" stroke="none">MySQL</text>
                      <text x="391" y="173" fontFamily="DM Mono" fontSize="7" fill="var(--text-muted)" stroke="none">Port: 3306</text>
                      <text x="391" y="183" fontFamily="DM Mono" fontSize="7" fill="var(--text-muted)" stroke="none">Relational</text>
                      <circle cx="433" cy="139" r="2.5" className="active-indicator" />
                    </g>

                  </svg>

                  <div className="flex items-center justify-between border-t border-grid-light/40 dark:border-grid-dark/40 pt-2.5 mt-3 font-mono text-[8px] text-editorial-charcoal/40 dark:text-editorial-ivory/40">
                    <span>COORD // X:255 Y:070</span>
                    <span>GRID: 40x40 PX // SCALE 1:1</span>
                  </div>

                </div>
              </motion.div>
            </motion.div>

          </div>

          {/* Footer Coordinate Ruler */}
          <div className="mt-16 sm:mt-24 border-t border-grid-light/40 dark:border-grid-dark/40 pt-4 font-mono text-[8px] sm:text-[9px] text-editorial-charcoal/30 dark:text-editorial-ivory/30 flex justify-between select-none">
            <span>SCALE_1:1 // GRID_ALIGN: TRUE</span>
            <span className="hidden sm:inline">LATENCY_P99: 14ms // THROUGHPUT: 12K_REQ/S</span>
            <span>REVISION // v2.0.4</span>
          </div>

        </div>

      </section>

      {/* ========================================================
          2. ABOUT SECTION (Refined Version - Unmodified)
         ======================================================== */}
      <section
        id="about"
        className="py-20 md:py-32 border-t border-grid-light/40 dark:border-grid-dark/40 relative overflow-hidden bg-base-light dark:bg-base-dark transition-colors duration-300"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.20] dark:opacity-[0.10] z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--border-grid) 1px, transparent 1px),
              linear-gradient(to bottom, var(--border-grid) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] bg-accent-blueprint/5 dark:bg-accent-blueprintDark/3 rounded-full blur-[100px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="font-mono text-[9px] tracking-[0.25em] text-editorial-charcoal/50 dark:text-editorial-ivory/50 uppercase font-semibold mb-12 border-b border-grid-light/40 dark:border-grid-dark/40 pb-3 flex justify-between select-none">
            <span>SEC_02 // SYSTEM_BUILDER_PROFILE</span>
            <span>INDEX: 0x02</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">

            {/* LEFT SIDE: Premium CAD Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4"
            >
              <div className="relative border border-grid-light dark:border-grid-dark bg-surface-light/45 dark:bg-surface-dark/45 p-6 rounded-sm shadow-sm transition-colors duration-300">

                <span className="absolute top-0 left-0 text-[10px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 pointer-events-none p-1 font-mono select-none">+</span>
                <span className="absolute top-0 right-0 text-[10px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 pointer-events-none p-1 font-mono select-none">+</span>
                <span className="absolute bottom-0 left-0 text-[10px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 pointer-events-none p-1 font-mono select-none">+</span>
                <span className="absolute bottom-0 right-0 text-[10px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 pointer-events-none p-1 font-mono select-none">+</span>

                <div className="relative w-full aspect-[4/5] rounded-xl border border-grid-light dark:border-grid-dark/60 mb-6 overflow-hidden bg-base-light dark:bg-base-dark transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] dark:hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] hover:border-accent-blueprint/50 dark:hover:border-accent-blueprintDark/50 group select-none">
                  {/* Ticks on the corners */}
                  <span className="absolute top-0 left-0 text-[10px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 pointer-events-none p-1 font-mono select-none z-10">+</span>
                  <span className="absolute top-0 right-0 text-[10px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 pointer-events-none p-1 font-mono select-none z-10">+</span>
                  <span className="absolute bottom-0 left-0 text-[10px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 pointer-events-none p-1 font-mono select-none z-10">+</span>
                  <span className="absolute bottom-0 right-0 text-[10px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 pointer-events-none p-1 font-mono select-none z-10">+</span>

                  <motion.img
                    src={portraitImage}
                    alt="Anshu Ingle Portrait"
                    className="w-full h-full object-cover object-center transition-transform duration-500 rounded-xl"
                    whileHover={{ scale: 1.03 }}
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <h3 className="font-display font-bold text-xl text-editorial-charcoal dark:text-editorial-ivory transition-colors">
                        Anshu Ingle
                      </h3>
                      <p className="font-mono text-xs text-accent-blueprint dark:text-accent-blueprintDark uppercase mt-0.5 tracking-wider font-semibold select-none">
                        Java Full Stack Developer
                      </p>
                    </div>

                    {/* Futuristic Status Badge & Label */}
                    <div className="flex flex-col items-start sm:items-end gap-1 select-none">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 shadow-[0_0_8px_rgba(16,185,129,0.15)] text-[9px] font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                        </span>
                        <span>Open to Opportunities</span>
                      </div>
                      <span className="font-mono text-[7px] uppercase tracking-widest text-editorial-charcoal/50 dark:text-editorial-ivory/50">
                        Available for Internship
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-grid-light/40 dark:border-grid-dark/40 space-y-3 font-mono text-[10px] text-editorial-charcoal/80 dark:text-editorial-ivory/80">
                    <div className="flex items-center gap-2.5">
                      <FiMapPin className="stroke-[1.5px] text-accent-blueprint dark:text-accent-blueprintDark" />
                      <span>LOCATION: INDIA</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <FiLayers className="stroke-[1.5px] text-accent-blueprint dark:text-accent-blueprintDark" />
                      <span>DEGREE: BE IN INF_TECH</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <FiActivity className="stroke-[1.5px] text-accent-blueprint dark:text-accent-blueprintDark" />
                      <span>ROLE: SOFTWARE_ENGINEER_IN_TRAINING</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* RIGHT SIDE: Narrative Story & Animated Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8 flex flex-col justify-start"
            >
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-editorial-charcoal dark:text-editorial-ivory leading-tight transition-colors">
                Engineering Reliable Software,<br />One Project at a Time.
              </h2>

              <div className="mt-8 space-y-6 font-sans text-sm sm:text-base font-light text-editorial-charcoal/75 dark:text-editorial-ivory/75 leading-relaxed transition-colors">
                <p>
                  My engineering journey began during my Bachelor of Engineering in Information Technology, where I discovered a deep interest in object-oriented logic and database structures. As I explored standard algorithms and concurrency models, I realized that software is not just about writing syntax—it is about designing maintainable, robust architecture. This passion naturally aligned with the depth and security parameters of the <strong className="font-semibold text-editorial-charcoal dark:text-editorial-ivory">Java</strong> ecosystem.
                </p>
                <p>
                  As a Java Full Stack Developer, I specialize in building efficient, decoupled backend APIs using <strong className="font-semibold text-editorial-charcoal dark:text-editorial-ivory">Spring Boot</strong> and mapping database schemas in <strong className="font-semibold text-editorial-charcoal dark:text-editorial-ivory">MySQL</strong>. Simultaneously, I bridge backend services with clean user experiences in <strong className="font-semibold text-editorial-charcoal dark:text-editorial-ivory">React</strong>. I focus on write-once-run-anywhere reliability, API structure isolation, and continuous learning to ensure that the code I deploy is performant and easily read by other developers.
                </p>
              </div>

              <div className="mt-12">
                <h4 className="font-mono text-[9px] tracking-[0.2em] text-editorial-charcoal/50 dark:text-editorial-ivory/50 uppercase font-semibold mb-6 select-none">
                  DEVELOPMENT_PIPELINE // MILESTONES
                </h4>

                <div className="relative py-2">
                  <div className="hidden md:block absolute top-[11px] left-0 right-0 h-[1px] bg-grid-light dark:bg-grid-dark z-0" />
                  <div className="md:hidden absolute left-[11px] top-4 bottom-4 w-[1px] bg-grid-light dark:bg-grid-dark z-0" />

                  <div className="relative flex flex-col md:flex-row items-start justify-between gap-6 md:gap-4 z-10">
                    {TIMELINE_STEPS.map((step) => (
                      <motion.div
                        key={step.step}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: parseInt(step.step) * 0.08 }}
                        className="flex flex-row md:flex-col items-center md:items-center gap-4 md:gap-0 w-full md:w-[18%]"
                      >
                        <div className="w-6 h-6 rounded-full border border-grid-light dark:border-grid-dark bg-base-light dark:bg-base-dark flex items-center justify-center font-mono text-[9px] font-bold text-editorial-charcoal/80 dark:text-editorial-ivory/80 z-10 shrink-0 hover:border-accent-blueprint dark:hover:border-accent-blueprintDark transition-colors duration-200">
                          {step.step}
                        </div>
                        <div className="flex flex-col md:items-center text-left md:text-center mt-0 md:mt-3">
                          <span className="font-mono text-[7px] sm:text-[8px] uppercase tracking-wider text-accent-blueprint dark:text-accent-blueprintDark font-semibold select-none">
                            {step.code}
                          </span>
                          <span className="font-sans text-xs text-editorial-charcoal/80 dark:text-editorial-ivory/80 leading-snug mt-0.5 font-medium max-w-[140px] md:max-w-none">
                            {step.title}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                </div>

              </div>

            </motion.div>

          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {HIGHLIGHT_CARDS.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative border border-grid-light/50 dark:border-grid-dark/50 bg-surface-light/35 dark:bg-surface-dark/35 backdrop-blur-sm p-6 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-accent-blueprint/40 dark:hover:border-accent-blueprintDark/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 border border-grid-light dark:border-grid-dark bg-base-light dark:bg-base-dark flex items-center justify-center text-accent-blueprint dark:text-accent-blueprintDark group-hover:text-accent-primary dark:group-hover:text-accent-primary transition-colors duration-300 mb-4 rounded-sm">
                    <IconComponent size={18} className="stroke-[1.5px]" />
                  </div>

                  <h4 className="font-display font-semibold text-base text-editorial-charcoal dark:text-editorial-ivory transition-colors">
                    {card.title}
                  </h4>
                  <p className="font-sans text-[12px] sm:text-xs text-editorial-charcoal/60 dark:text-editorial-ivory/60 mt-2 leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Values Section */}
          <div className="mt-20 md:mt-28">
            <div className="font-mono text-[9px] tracking-[0.25em] text-editorial-charcoal/50 dark:text-editorial-ivory/50 uppercase font-semibold mb-8 border-b border-grid-light/40 dark:border-grid-dark/40 pb-3 flex justify-between select-none">
              <span>ENGINEERING_PRINCIPLES // ARCHITECT_METRICS</span>
              <span>v1.0</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {PRINCIPLES.map((pr, idx) => (
                <motion.div
                  key={pr.name}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex flex-col gap-2 p-4 border border-grid-light dark:border-grid-dark bg-surface-light/20 dark:bg-surface-dark/20 hover:border-accent-blueprint dark:hover:border-accent-blueprintDark hover:bg-surface-light/40 dark:hover:bg-surface-dark/40 transition-all duration-300 rounded-sm select-none"
                >
                  <div className="flex justify-between items-center font-mono text-[8px] text-editorial-charcoal/40 dark:text-editorial-ivory/40">
                    <span>{pr.code}</span>
                    <span className="text-[7px] uppercase tracking-wider font-semibold text-accent-blueprint dark:text-accent-blueprintDark">
                      {pr.level}
                    </span>
                  </div>
                  <h5 className="font-display font-medium text-xs sm:text-sm text-editorial-charcoal dark:text-editorial-ivory mt-1">
                    {pr.name}
                  </h5>

                  <div className="w-full h-1 bg-grid-light/50 dark:bg-grid-dark/50 relative mt-2 overflow-hidden rounded-full">
                    <div
                      className="absolute top-0 left-0 h-full bg-accent-blueprint/70 dark:bg-accent-blueprintDark/70 animate-pulse"
                      style={{
                        width: idx % 2 === 0 ? '80%' : '90%',
                        animationDuration: '3s'
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          3. SKILLS SECTION (Engineering Capabilities)
         ======================================================== */}
      <section
        id="skills"
        className="py-20 md:py-32 border-t border-grid-light/40 dark:border-grid-dark/40 relative overflow-hidden bg-base-light dark:bg-base-dark transition-colors duration-300"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.20] dark:opacity-[0.10] z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--border-grid) 1px, transparent 1px),
              linear-gradient(to bottom, var(--border-grid) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="absolute top-[30%] right-[-5%] w-[400px] h-[400px] bg-accent-blueprint/5 dark:bg-accent-blueprintDark/3 rounded-full blur-[110px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-left mb-16">
            <span className="font-mono text-[9px] tracking-[0.25em] text-accent-blueprint dark:text-accent-blueprintDark uppercase font-semibold select-none">
              [SEC_03 // CORE_STACK]
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-editorial-charcoal dark:text-editorial-ivory mt-3 transition-colors">
              Engineering Capabilities
            </h2>
            <p className="font-sans text-sm sm:text-base font-light text-editorial-charcoal/65 dark:text-editorial-ivory/65 mt-3 max-w-xl transition-colors">
              Technologies, frameworks, and tools I use to build scalable, maintainable, and modern software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS_CATEGORIES.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group relative border border-grid-light/50 dark:border-grid-dark/50 bg-surface-light/35 dark:bg-surface-dark/35 backdrop-blur-sm p-6 rounded-sm shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:border-accent-blueprint/40 dark:hover:border-accent-blueprintDark/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <span className="absolute top-0 left-0 text-[8px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 pointer-events-none p-0.5 font-mono select-none">+</span>
                  <span className="absolute top-0 right-0 text-[8px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 pointer-events-none p-0.5 font-mono select-none">+</span>

                  <div>
                    <div className="flex items-center justify-between border-b border-grid-light/40 dark:border-grid-dark/40 pb-3 mb-4 font-mono text-[9px] text-editorial-charcoal/40 dark:text-editorial-ivory/40">
                      <span>{cat.code}</span>
                      <IconComp size={14} className="stroke-[1.5px] text-accent-blueprint dark:text-accent-blueprintDark group-hover:rotate-6 transition-transform duration-300" />
                    </div>

                    <h3 className="font-display font-semibold text-base text-editorial-charcoal dark:text-editorial-ivory transition-colors">
                      {cat.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {cat.skills.map((skill) => (
                        <div key={skill}>
                          {skill.includes('(Learning)') ? (
                            <span
                              className="font-mono text-[9px] tracking-wide px-2 py-0.5 border border-dashed border-grid-light dark:border-grid-dark bg-base-light/20 dark:bg-base-dark/20 text-editorial-charcoal/50 dark:text-editorial-ivory/50 rounded-sm cursor-default select-none inline-flex items-center gap-1"
                              title={`${skill.replace(' (Learning)', '')} - Learning in progress`}
                            >
                              <span>{skill.replace(' (Learning)', '')}</span>
                              <span className="text-[6px] text-accent-blueprint dark:text-accent-blueprintDark font-bold uppercase tracking-wide opacity-80">[LEARNING]</span>
                            </span>
                          ) : (
                            <span
                              className="font-mono text-[9px] tracking-wide px-2 py-0.5 border border-grid-light dark:border-grid-dark bg-base-light/50 dark:bg-base-dark/50 text-editorial-charcoal/85 dark:text-editorial-ivory/85 rounded-sm hover:border-accent-blueprint dark:hover:border-accent-blueprintDark hover:text-accent-blueprint dark:hover:text-accent-blueprintDark hover:scale-[1.02] transition-all duration-200 cursor-default select-none inline-block"
                            >
                              {skill}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-grid-light/40 dark:border-grid-dark/40 pt-3 mt-6 font-mono text-[8px] tracking-wide text-editorial-charcoal/50 dark:text-editorial-ivory/50">
                    // {cat.caption}
                  </div>

                </motion.div>
              );
            })}
          </div>

          {/* Stats Summary */}
          <div className="mt-16 md:mt-24">
            <div className="font-mono text-[9px] tracking-[0.25em] text-editorial-charcoal/50 dark:text-editorial-ivory/50 uppercase font-semibold mb-8 border-b border-grid-light/40 dark:border-grid-dark/40 pb-3 flex justify-between select-none">
              <span>SYSTEM_STATS // CORE_SUMMARY_INDEX</span>
              <span>v1.0</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {SNAPSHOTS.map((snap, idx) => (
                <motion.div
                  key={snap.label}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex flex-col p-4 border border-grid-light dark:border-grid-dark bg-surface-light/20 dark:bg-surface-dark/20 hover:border-accent-blueprint dark:hover:border-accent-blueprintDark hover:bg-surface-light/45 dark:hover:bg-surface-dark/45 transition-all duration-300 rounded-sm select-none"
                >
                  <div className="font-mono text-[8px] text-editorial-charcoal/40 dark:text-editorial-ivory/40">
                    [{snap.code}]
                  </div>
                  <h4 className="font-display font-medium text-xs text-editorial-charcoal/55 dark:text-editorial-ivory/55 mt-2 transition-colors">
                    {snap.label}
                  </h4>
                  <div className="font-sans text-sm sm:text-base font-semibold text-editorial-charcoal dark:text-editorial-ivory mt-1 leading-snug transition-colors">
                    {snap.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          4. PROJECTS SECTION (Redesigned Cyberpunk/Minimal Layout)
         ======================================================== */}
      <section
        id="projects"
        className="py-20 md:py-32 border-t border-grid-light/40 dark:border-grid-dark/40 relative overflow-hidden bg-base-light dark:bg-base-dark transition-colors duration-300"
      >
        {/* Subtle grid backdrop */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.20] dark:opacity-[0.10] z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--border-grid) 1px, transparent 1px),
              linear-gradient(to bottom, var(--border-grid) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Ambient background glow */}
        <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] bg-accent-blueprint/5 dark:bg-accent-blueprintDark/3 rounded-full blur-[100px] pointer-events-none z-0" />
        <div className="absolute bottom-[10%] right-[-10%] w-[300px] h-[300px] bg-accent-primary/4 dark:bg-accent-primary/2 rounded-full blur-[90px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-left mb-16">
            <span className="font-mono text-[9px] tracking-[0.25em] text-accent-blueprint dark:text-accent-blueprintDark uppercase font-semibold select-none">
              [SEC_04 // PROJECTS_MESH]
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-editorial-charcoal dark:text-editorial-ivory mt-3 transition-colors">
              Featured Projects
            </h2>
            <p className="font-sans text-sm sm:text-base font-light text-editorial-charcoal/65 dark:text-editorial-ivory/65 mt-3 max-w-xl transition-colors">
              A collection of frontend projects built while learning modern web development.
            </p>
          </div>

          {/* Featured Projects Grid */}
          <div className="space-y-16">
            {FEATURED_PROJECTS.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                
                {/* Left Column: Visual Showcase Screenshot */}
                <div className="lg:col-span-5 w-full">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className="relative border border-grid-light dark:border-grid-dark bg-surface-light/45 dark:bg-surface-dark/45 p-3 rounded-xl shadow-sm hover:border-accent-blueprint/50 dark:hover:border-accent-blueprintDark/50 transition-colors duration-300 select-none overflow-hidden"
                    >
                      {/* Glowing outer shadow/border effect */}
                      <div className="absolute inset-0 bg-accent-blueprint/4 dark:bg-accent-blueprintDark/2 opacity-0 group-hover:opacity-100 blur-[8px] transition-opacity duration-300 pointer-events-none" />
                      
                      {/* Ticks on the corners */}
                      <span className="absolute top-0 left-0 text-[10px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 pointer-events-none p-1 font-mono select-none z-20">+</span>
                      <span className="absolute top-0 right-0 text-[10px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 pointer-events-none p-1 font-mono select-none z-20">+</span>
                      <span className="absolute bottom-0 left-0 text-[10px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 pointer-events-none p-1 font-mono select-none z-20">+</span>
                      <span className="absolute bottom-0 right-0 text-[10px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 pointer-events-none p-1 font-mono select-none z-20">+</span>

                      {/* Image container */}
                      <div className="relative w-full aspect-[16/12] border border-grid-light dark:border-grid-dark/60 rounded-lg overflow-hidden transition-colors duration-300 bg-[#0B0C10] flex items-center justify-center">
                        {project.image ? (
                          <>
                            {/* Real project screenshot */}
                            <motion.img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-contain object-center transition-transform duration-500 rounded-lg"
                              whileHover={{ scale: 1.03 }}
                            />
                            
                            {/* Subtle dark overlay on hover */}
                            <div className="absolute inset-0 bg-editorial-charcoal/40 dark:bg-base-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-10">
                              <div className="flex flex-col items-center gap-1.5 transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="w-10 h-10 rounded-full border border-editorial-ivory/30 bg-editorial-charcoal/80 text-editorial-ivory flex items-center justify-center shadow-lg">
                                  <FiMonitor size={16} />
                                </div>
                                <span className="font-mono text-[9px] uppercase tracking-widest text-editorial-ivory font-semibold drop-shadow-md">
                                  Live Preview
                                </span>
                              </div>
                            </div>
                          </>
                        ) : (
                          /* Fallback Placeholder content styling */
                          <div className="relative w-full h-full flex flex-col items-center justify-center">
                            {/* Grid background */}
                            <svg className="absolute inset-0 w-full h-full opacity-[0.06] dark:opacity-[0.04] pointer-events-none stroke-current text-accent-blueprint dark:text-accent-blueprintDark">
                              <line x1="0" y1="50%" x2="100%" y2="50%" />
                              <line x1="50%" y1="0" x2="50%" y2="100%" />
                              <circle cx="50%" cy="50%" r="30%" fill="none" />
                            </svg>
                            
                            {/* Dimensions tags */}
                            <span className="absolute top-2 left-2 font-mono text-[7px] text-editorial-charcoal/30 dark:text-editorial-ivory/30 pointer-events-none select-none">SYS_PREVIEW // (16:12)</span>
                            <span className="absolute bottom-2 right-2 font-mono text-[7px] text-editorial-charcoal/30 dark:text-editorial-ivory/30 pointer-events-none select-none">RESOL // 1280x960</span>

                            <motion.div
                              animate={{ y: [-4, 4] }}
                              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                              className="flex flex-col items-center"
                            >
                              <FiMonitor size={42} className="text-accent-blueprint dark:text-accent-blueprintDark opacity-75 mb-3 group-hover:scale-105 transition-transform duration-300" />
                              <span className="font-mono text-xs uppercase tracking-widest text-editorial-charcoal/70 dark:text-editorial-ivory/70 font-semibold select-none">
                                Project Preview
                              </span>
                              <span className="font-mono text-[9px] uppercase tracking-wider text-editorial-charcoal/40 dark:text-editorial-ivory/40 mt-1 select-none">
                                LIVE_DEMO_CONNECTED
                              </span>
                            </motion.div>
                          </div>
                        )}
                      </div>

                    </motion.div>
                  </a>
                </div>


                {/* Right Column: Project details */}
                <div className="lg:col-span-7 flex flex-col justify-start">
                  
                  {/* Category and Status Badge */}
                  <div className="flex items-center gap-3 select-none">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-accent-blueprint dark:text-accent-blueprintDark font-semibold">
                      {project.category}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-grid-light dark:bg-grid-dark" />
                    <span className="font-mono text-[9px] px-2 py-0.5 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 uppercase tracking-wider font-semibold rounded-sm flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                      {project.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-editorial-charcoal dark:text-editorial-ivory mt-2 tracking-tight transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm sm:text-base font-light text-editorial-charcoal/75 dark:text-editorial-ivory/75 mt-4 leading-relaxed transition-colors">
                    {project.desc}
                  </p>

                  {/* Checklist Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 border-t border-grid-light/40 dark:border-grid-dark/40 pt-6">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 select-none">
                        <FiCheck className="text-emerald-500 shrink-0 stroke-[2.5px] text-xs sm:text-sm" />
                        <span className="font-sans text-xs font-light text-editorial-charcoal/75 dark:text-editorial-ivory/75 transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Technology badges */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                        className="font-mono text-[9px] tracking-wide px-2.5 py-1 border border-grid-light dark:border-grid-dark bg-surface-light/35 dark:bg-surface-dark/35 text-editorial-charcoal/80 dark:text-editorial-ivory/80 rounded-sm hover:border-accent-blueprint dark:hover:border-accent-blueprintDark hover:text-accent-blueprint dark:hover:text-accent-blueprintDark transition-all duration-200 cursor-default select-none inline-block"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap items-center gap-4 mt-8">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-2 px-6 py-3 bg-editorial-charcoal text-base-light dark:bg-editorial-ivory dark:text-base-dark font-mono text-xs uppercase tracking-wider font-semibold shadow-cad hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blueprint"
                    >
                      <span>Live Demo</span>
                      <FiArrowRight className="stroke-[2px] transition-transform duration-200 group-hover:translate-x-1" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border border-grid-light dark:border-grid-dark bg-transparent text-editorial-charcoal dark:text-editorial-ivory font-mono text-xs uppercase tracking-wider font-semibold hover:text-accent-crimson dark:hover:text-accent-red hover:bg-hatch-light dark:hover:bg-hatch-dark transition-all duration-200 rounded-sm flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blueprint"
                    >
                      <FiGithub className="stroke-[1.5px]" />
                      <span>GitHub Repository</span>
                    </a>
                  </div>

                </div>

              </motion.div>
            ))}
          </div>

          {/* View All Projects (Coming Soon) Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 border border-dashed border-grid-light dark:border-grid-dark bg-surface-light/20 dark:bg-surface-dark/20 p-6 sm:p-8 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 transition-colors duration-300"
          >
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 border border-dashed border-grid-light dark:border-grid-dark bg-base-light dark:bg-base-dark flex items-center justify-center text-editorial-charcoal/50 dark:text-editorial-ivory/50 rounded-sm shrink-0">
                <FiCpu size={20} className="animate-spin text-accent-blueprint dark:text-accent-blueprintDark" style={{ animationDuration: '8s' }} />
              </div>
              <div>
                <h4 className="font-display font-semibold text-base text-editorial-charcoal dark:text-editorial-ivory transition-colors">
                  More Projects in the Pipeline
                </h4>
                <p className="font-sans text-xs sm:text-sm font-light text-editorial-charcoal/60 dark:text-editorial-ivory/60 mt-1 transition-colors">
                  Future deployments will include Java Spring Boot APIs, JPA schemas, cache services, and secure endpoints.
                </p>
              </div>
            </div>
            <div className="font-mono text-[9px] sm:text-xs tracking-wider uppercase px-4 py-2 border border-dashed border-grid-light dark:border-grid-dark bg-base-light/50 dark:bg-base-dark/50 text-editorial-charcoal/50 dark:text-editorial-ivory/50 rounded-sm select-none cursor-default shrink-0">
              View All Projects (Coming Soon)
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================
          5. JOURNEY SECTION (journey scroll target)
         ======================================================== */}
      <section
        id="journey"
        className="py-20 md:py-32 border-t border-grid-light/40 dark:border-grid-dark/40 relative overflow-hidden bg-base-light dark:bg-base-dark transition-colors duration-300"
      >
        {/* Subtle grid backdrop */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.20] dark:opacity-[0.10] z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--border-grid) 1px, transparent 1px),
              linear-gradient(to bottom, var(--border-grid) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Ambient bottom-left glow */}
        <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] bg-accent-blueprint/5 dark:bg-accent-blueprintDark/3 rounded-full blur-[100px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">

            {/* Left Column: Narrative (Span 4) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-4"
            >
              <span className="font-mono text-[9px] tracking-[0.25em] text-accent-blueprint dark:text-accent-blueprintDark uppercase font-semibold select-none">
                [SEC_05 // JOURNEY_PIPELINE]
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-editorial-charcoal dark:text-editorial-ivory mt-3 leading-tight transition-colors">
                Journey
              </h2>
              <p className="font-sans text-sm sm:text-base font-light text-editorial-charcoal/65 dark:text-editorial-ivory/65 mt-4 transition-colors">
                My progression from a BE Information Technology student to a Java Full Stack Developer, focusing on academic foundations and self-motivated systems engineering.
              </p>
            </motion.div>

            {/* Right Column: Timeline progression cards (Span 8) */}
            <div className="lg:col-span-8 relative pl-8 sm:pl-10 ml-2 md:ml-4 border-l border-grid-light dark:border-grid-dark space-y-8 py-2 transition-colors duration-300">

              {/* Vertical timeline connector */}
              {LEARNING_JOURNEY.map((stage, idx) => (
                <motion.div
                  key={stage.stage}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="relative group"
                >
                  {/* Circular visual marker on line */}
                  <span className="absolute w-5 h-5 rounded-full bg-base-light dark:bg-base-dark border border-grid-light/40 dark:border-grid-dark -left-[41px] sm:-left-[43px] top-2 flex items-center justify-center transition-colors group-hover:border-accent-blueprint dark:group-hover:border-accent-blueprintDark select-none">
                    <span className="font-mono text-[8px] font-bold text-editorial-charcoal/40 dark:text-editorial-ivory/40 group-hover:text-accent-blueprint dark:group-hover:text-accent-blueprintDark transition-colors">
                      {stage.stage}
                    </span>
                  </span>

                  {/* Glassmorphic milestone detail block */}
                  <div className="border border-grid-light/50 dark:border-grid-dark/50 bg-surface-light/35 dark:bg-surface-dark/35 backdrop-blur-sm p-6 rounded-sm shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:border-accent-blueprint/40 dark:hover:border-accent-blueprintDark/40 transition-all duration-300 hover:-translate-y-0.5">

                    {/* Telemetry info row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-grid-light/40 dark:border-grid-dark/40 pb-2 mb-3 select-none">
                      <span className="font-mono text-[8px] uppercase tracking-wider text-accent-blueprint dark:text-accent-blueprintDark font-semibold">
                        {stage.code}
                      </span>
                      <span className="font-mono text-[8px] sm:text-[9px] text-editorial-charcoal/50 dark:text-editorial-ivory/50 px-1.5 py-0.5 border border-grid-light dark:border-grid-dark bg-base-light/50 dark:bg-base-dark/50 rounded-sm">
                        {stage.date}
                      </span>
                    </div>

                    <h3 className="font-display font-semibold text-sm sm:text-base text-editorial-charcoal dark:text-editorial-ivory transition-colors">
                      {stage.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm font-light text-editorial-charcoal/70 dark:text-editorial-ivory/70 mt-2 leading-relaxed transition-colors">
                      {stage.desc}
                    </p>
                  </div>
                </motion.div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          6. EDUCATION SECTION (Approved - Unmodified)
         ======================================================== */}
      <section
        id="education"
        className="py-20 md:py-32 border-t border-grid-light/40 dark:border-grid-dark/40 relative overflow-hidden bg-base-light dark:bg-base-dark transition-colors duration-300"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.20] dark:opacity-[0.10] z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--border-grid) 1px, transparent 1px),
              linear-gradient(to bottom, var(--border-grid) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="absolute top-[20%] right-[-10%] w-[380px] h-[380px] bg-accent-blueprint/5 dark:bg-accent-blueprintDark/3 rounded-full blur-[110px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-left mb-16">
            <span className="font-mono text-[9px] tracking-[0.25em] text-accent-blueprint dark:text-accent-blueprintDark uppercase font-semibold select-none">
              [SEC_06 // ACADEMIC_RECORD]
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-editorial-charcoal dark:text-editorial-ivory mt-3 transition-colors">
              Education
            </h2>
            <p className="font-sans text-sm sm:text-base font-light text-editorial-charcoal/65 dark:text-editorial-ivory/65 mt-3 max-w-xl transition-colors">
              My academic foundation that shaped my journey into software engineering and full-stack development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">

            {/* Left Column: Elegant Academic Profile Card (Span 4) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-4"
            >
              <div className="relative border border-grid-light dark:border-grid-dark bg-surface-light/45 dark:bg-surface-dark/45 p-6 rounded-sm shadow-sm transition-colors duration-300">

                {/* Structural corner coordinate ticks */}
                <span className="absolute top-0 left-0 text-[10px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 pointer-events-none p-1 font-mono select-none">+</span>
                <span className="absolute top-0 right-0 text-[10px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 pointer-events-none p-1 font-mono select-none">+</span>
                <span className="absolute bottom-0 left-0 text-[10px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 pointer-events-none p-1 font-mono select-none">+</span>
                <span className="absolute bottom-0 right-0 text-[10px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 pointer-events-none p-1 font-mono select-none">+</span>

                {/* Academic Vector Wireframe Mockup */}
                <div className="relative w-full aspect-[4/3] bg-base-light dark:bg-base-dark border border-dashed border-grid-light dark:border-grid-dark mb-6 flex flex-col items-center justify-center overflow-hidden transition-colors duration-300">
                  <svg className="absolute inset-0 w-full h-full opacity-[0.10] dark:opacity-[0.06] pointer-events-none stroke-current text-accent-blueprint dark:text-accent-blueprintDark">
                    <line x1="0" y1="50%" x2="100%" y2="50%" />
                    <line x1="50%" y1="0" x2="50%" y2="100%" />
                    <circle cx="50%" cy="50%" r="30%" fill="none" />
                  </svg>
                  <span className="absolute top-2 left-2 font-mono text-[7px] text-editorial-charcoal/30 dark:text-editorial-ivory/30 pointer-events-none select-none">GRID // 0x06</span>

                  <span className="text-3xl filter saturate-50 select-none">🎓</span>
                  <span className="font-mono text-[8px] uppercase tracking-widest mt-3 text-editorial-charcoal/50 dark:text-editorial-ivory/50 select-none">
                    BACHELOR // DEGREE_SPEC
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-display font-bold text-lg text-editorial-charcoal dark:text-editorial-ivory transition-colors">
                      Bachelor of Engineering
                    </h3>
                    <p className="font-mono text-xs text-accent-blueprint dark:text-accent-blueprintDark uppercase mt-0.5 tracking-wider font-semibold select-none">
                      Information Technology
                    </p>
                  </div>

                  <div className="pt-4 border-t border-grid-light/40 dark:border-grid-dark/40 space-y-3 font-mono text-[10px] text-editorial-charcoal/80 dark:text-editorial-ivory/80">
                    <div className="flex justify-between items-center">
                      <span className="text-editorial-charcoal/45 dark:text-editorial-ivory/45">DURATION:</span>
                      <span className="font-semibold">2022 – 2026</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-editorial-charcoal/45 dark:text-editorial-ivory/45">STATUS:</span>
                      <span className="px-1.5 py-0.5 border border-grid-light dark:border-grid-dark rounded-sm bg-base-light/50 dark:bg-base-dark/50 font-semibold text-[9px]">
                        GRADUATED
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-editorial-charcoal/45 dark:text-editorial-ivory/45">LOCATION:</span>
                      <span className="font-semibold">INDIA</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Right Column: Academic Overview Narrative (Span 8) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-8 flex flex-col justify-start"
            >
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-editorial-charcoal dark:text-editorial-ivory leading-snug transition-colors">
                Academic Foundation in Systems & Software Engineering
              </h3>

              <div className="mt-6 space-y-5 font-sans text-sm sm:text-base font-light text-editorial-charcoal/75 dark:text-editorial-ivory/75 leading-relaxed transition-colors">
                <p>
                  During my Bachelor of Engineering in Information Technology, I focused on establishing a strong, mathematical foundation in computer science and software design. Rather than simply learning syntax patterns, I dedicated my studies to understanding how data structures are allocated in memory, how databases optimize indices for complex queries, and how operating systems handle thread schedules.
                </p>
                <p>
                  This structured baseline ignited my passion for backend systems design and database integrations, which naturally drew me toward the depth of the <strong className="font-semibold text-editorial-charcoal dark:text-editorial-ivory">Java</strong> enterprise eco-framework. Combining these foundational theories with modern web components like React allows me to approach full-stack problems with a focus on modularity, security, and performance.
                </p>
              </div>
            </motion.div>

          </div>

          {/* RELEVANT COURSEWORK GRID */}
          <div className="mt-20 md:mt-28">
            <div className="font-mono text-[9px] tracking-[0.25em] text-editorial-charcoal/50 dark:text-editorial-ivory/50 uppercase font-semibold mb-8 border-b border-grid-light/40 dark:border-grid-dark/40 pb-3 flex justify-between select-none">
              <span>RELEVANT_COURSEWORK // CURRICULUM_METRICS</span>
              <span>v1.0</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {COURSEWORK.map((course, idx) => {
                const IconComponent = course.icon;
                return (
                  <motion.div
                    key={course.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    className="group relative border border-grid-light/50 dark:border-grid-dark/50 bg-surface-light/35 dark:bg-surface-dark/35 backdrop-blur-sm p-6 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-accent-blueprint/40 dark:hover:border-accent-blueprintDark/40 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 border border-grid-light dark:border-grid-dark bg-base-light dark:bg-base-dark flex items-center justify-center text-accent-blueprint dark:text-accent-blueprintDark group-hover:text-accent-primary dark:group-hover:text-accent-primary transition-colors duration-300 mb-4 rounded-sm">
                      <IconComponent size={18} className="stroke-[1.5px]" />
                    </div>

                    <h4 className="font-display font-semibold text-sm sm:text-base text-editorial-charcoal dark:text-editorial-ivory transition-colors">
                      {course.name}
                    </h4>
                    <p className="font-sans text-[12px] sm:text-xs text-editorial-charcoal/60 dark:text-editorial-ivory/60 mt-2 leading-relaxed">
                      {course.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ACADEMIC HIGHLIGHTS */}
          <div className="mt-20 md:mt-28">
            <div className="font-mono text-[9px] tracking-[0.25em] text-editorial-charcoal/50 dark:text-editorial-ivory/50 uppercase font-semibold mb-8 border-b border-grid-light/40 dark:border-grid-dark/40 pb-3 flex justify-between select-none">
              <span>ACADEMIC_HIGHLIGHTS // CORE_COMPETENCIES</span>
              <span>v1.0</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {ACADEMIC_HIGHLIGHTS.map((hl, idx) => (
                <motion.div
                  key={hl.title}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex flex-col justify-between p-4 border border-grid-light dark:border-grid-dark bg-surface-light/20 dark:bg-surface-dark/20 hover:border-accent-blueprint dark:hover:border-accent-blueprintDark hover:bg-surface-light/45 dark:hover:bg-surface-dark/45 transition-all duration-300 rounded-sm select-none"
                >
                  <div>
                    <div className="font-mono text-[8px] text-editorial-charcoal/35 dark:text-editorial-ivory/35">
                      [HL_{idx + 1 < 10 ? '0' + (idx + 1) : idx + 1}]
                    </div>
                    <h5 className="font-display font-medium text-xs sm:text-sm text-editorial-charcoal dark:text-editorial-ivory mt-2 leading-tight transition-colors">
                      {hl.title}
                    </h5>
                  </div>
                  <p className="font-sans text-[10px] text-editorial-charcoal/50 dark:text-editorial-ivory/50 mt-3 leading-normal">
                    {hl.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CURRENT TECHNICAL FOCUS */}
          <div className="mt-20 md:mt-28">
            <div className="font-mono text-[9px] tracking-[0.25em] text-editorial-charcoal/50 dark:text-editorial-ivory/50 uppercase font-semibold mb-8 border-b border-grid-light/40 dark:border-grid-dark/40 pb-3 flex justify-between select-none">
              <span>CURRENT_TECHNICAL_FOCUS // INGLE.DEV</span>
              <span>INDEX: 0x06</span>
            </div>

            <div className="flex flex-wrap gap-2.5 max-w-3xl">
              {TECHNICAL_FOCUS.map((focus, idx) => (
                <motion.div
                  key={focus}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="font-mono text-[10px] tracking-wide px-3 py-1.5 border border-grid-light dark:border-grid-dark bg-surface-light/35 dark:bg-surface-dark/35 text-editorial-charcoal/80 dark:text-editorial-ivory/80 rounded-sm hover:border-accent-blueprint dark:hover:border-accent-blueprintDark hover:text-accent-blueprint dark:hover:text-accent-blueprintDark transition-all duration-200 cursor-default select-none"
                >
                  // {focus}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          7. CONTACT SECTION (New Implementation)
         ======================================================== */}
      <section
        id="contact"
        className="py-20 md:py-32 border-t border-grid-light/40 dark:border-grid-dark/40 relative overflow-hidden bg-base-light dark:bg-base-dark transition-colors duration-300"
      >
        {/* Subtle grid backdrop */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.22] dark:opacity-[0.12] z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--border-grid) 1px, transparent 1px),
              linear-gradient(to bottom, var(--border-grid) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] bg-accent-blueprint/5 dark:bg-accent-blueprintDark/3 rounded-full blur-[110px] pointer-events-none z-0" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[350px] h-[350px] bg-accent-primary/4 dark:bg-accent-primary/2 rounded-full blur-[90px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div className="text-left mb-16">
            <span className="font-mono text-[9px] tracking-[0.25em] text-accent-blueprint dark:text-accent-blueprintDark uppercase font-semibold select-none">
              [SEC_07 // COMMAND_CENTER]
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-editorial-charcoal dark:text-editorial-ivory mt-3 transition-colors">
              Let's Build Something Great Together
            </h2>
            <p className="font-sans text-sm sm:text-base font-light text-editorial-charcoal/65 dark:text-editorial-ivory/65 mt-3 max-w-2xl transition-colors">
              I'm actively seeking Java Full Stack Developer opportunities and am always open to discussing software engineering, collaboration, and innovative projects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* LEFT COLUMN: Contact details, status, & stats widgets (Span 5) */}
            <div className="lg:col-span-5 space-y-6">

              {/* Copyable Contact Cards */}
              <div className="relative border border-grid-light dark:border-grid-dark bg-surface-light/45 dark:bg-surface-dark/45 p-6 rounded-sm space-y-4 shadow-sm transition-colors duration-300">
                <span className="absolute top-0 right-0 text-[8px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 pointer-events-none p-0.5 font-mono select-none">+</span>

                <h3 className="font-mono text-[9px] tracking-[0.2em] text-editorial-charcoal/40 dark:text-editorial-ivory/40 uppercase font-semibold border-b border-grid-light/40 dark:border-grid-dark/40 pb-2 mb-4 select-none">
                  SYSTEM_ENDPOINTS // CONFIGURABLE
                </h3>

                {/* Full Name Card */}
                <div className="flex items-center gap-3 p-3 border border-grid-light dark:border-grid-dark bg-base-light/40 dark:bg-base-dark/40 rounded-sm select-none">
                  <FiUser size={14} className="text-accent-blueprint dark:text-accent-blueprintDark shrink-0" />
                  <div className="text-left">
                    <span className="font-mono text-[8px] text-editorial-charcoal/40 dark:text-editorial-ivory/40 uppercase block">FULL NAME</span>
                    <span className="font-sans text-xs sm:text-sm text-editorial-charcoal dark:text-editorial-ivory font-semibold transition-colors">
                      Anshu Vijay Ingle
                    </span>
                  </div>
                </div>

                {/* Title Card */}
                <div className="flex items-center gap-3 p-3 border border-grid-light dark:border-grid-dark bg-base-light/40 dark:bg-base-dark/40 rounded-sm select-none">
                  <FiLayers size={14} className="text-accent-blueprint dark:text-accent-blueprintDark shrink-0" />
                  <div className="text-left">
                    <span className="font-mono text-[8px] text-editorial-charcoal/40 dark:text-editorial-ivory/40 uppercase block">TITLE</span>
                    <span className="font-sans text-xs sm:text-sm text-editorial-charcoal dark:text-editorial-ivory font-semibold transition-colors">
                      Java Full Stack Developer
                    </span>
                  </div>
                </div>

                {/* Email card */}
                <div
                  onClick={() => handleCopy('anshu.ingle2105@gmail.com', 'EMAIL')}
                  className="group flex items-center justify-between p-3 border border-grid-light dark:border-grid-dark bg-base-light/40 dark:bg-base-dark/40 hover:border-accent-blueprint/40 dark:hover:border-accent-blueprintDark/40 transition-all duration-300 rounded-sm cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <FiMail size={14} className="text-accent-blueprint dark:text-accent-blueprintDark shrink-0" />
                    <div className="text-left">
                      <span className="font-mono text-[8px] text-editorial-charcoal/40 dark:text-editorial-ivory/40 uppercase block select-none">EMAIL</span>
                      <span className="font-sans text-xs sm:text-sm text-editorial-charcoal dark:text-editorial-ivory font-medium transition-colors">
                        anshu.ingle2105@gmail.com
                      </span>
                    </div>
                  </div>
                  <div className="text-editorial-charcoal/45 dark:text-editorial-ivory/45 group-hover:text-accent-blueprint transition-colors">
                    {copiedText === 'EMAIL' ? <FiCheck size={12} className="text-emerald-500" /> : <FiCopy size={12} />}
                  </div>
                </div>

                {/* Phone card */}
                <div
                  onClick={() => handleCopy('+91 8379965593', 'PHONE')}
                  className="group flex items-center justify-between p-3 border border-grid-light dark:border-grid-dark bg-base-light/40 dark:bg-base-dark/40 hover:border-accent-blueprint/40 dark:hover:border-accent-blueprintDark/40 transition-all duration-300 rounded-sm cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <FiPhone size={14} className="text-accent-blueprint dark:text-accent-blueprintDark shrink-0" />
                    <div className="text-left">
                      <span className="font-mono text-[8px] text-editorial-charcoal/40 dark:text-editorial-ivory/40 uppercase block select-none">PHONE</span>
                      <span className="font-sans text-xs sm:text-sm text-editorial-charcoal dark:text-editorial-ivory font-medium transition-colors">
                        +91 8379965593
                      </span>
                    </div>
                  </div>
                  <div className="text-editorial-charcoal/45 dark:text-editorial-ivory/45 group-hover:text-accent-blueprint transition-colors">
                    {copiedText === 'PHONE' ? <FiCheck size={12} className="text-emerald-500" /> : <FiCopy size={12} />}
                  </div>
                </div>

                {/* Location card */}
                <div
                  onClick={() => handleCopy('Amravati, Maharashtra, India', 'LOCATION')}
                  className="group flex items-center justify-between p-3 border border-grid-light dark:border-grid-dark bg-base-light/40 dark:bg-base-dark/40 hover:border-accent-blueprint/40 dark:hover:border-accent-blueprintDark/40 transition-all duration-300 rounded-sm cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <FiMapPin size={14} className="text-accent-blueprint dark:text-accent-blueprintDark shrink-0" />
                    <div className="text-left">
                      <span className="font-mono text-[8px] text-editorial-charcoal/40 dark:text-editorial-ivory/40 uppercase block select-none">LOCATION</span>
                      <span className="font-sans text-xs sm:text-sm text-editorial-charcoal dark:text-editorial-ivory font-medium transition-colors">
                        Amravati, Maharashtra, India
                      </span>
                    </div>
                  </div>
                  <div className="text-editorial-charcoal/45 dark:text-editorial-ivory/45 group-hover:text-accent-blueprint transition-colors">
                    {copiedText === 'LOCATION' ? <FiCheck size={12} className="text-emerald-500" /> : <FiCopy size={12} />}
                  </div>
                </div>

                {/* Direct Link Social Icon buttons */}
                <div className="flex items-center gap-3 pt-3 select-none">
                  <a
                    href="https://github.com/anshuingle10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-grid-light dark:border-grid-dark bg-base-light/50 dark:bg-base-dark/50 hover:border-accent-blueprint dark:hover:border-accent-blueprintDark flex items-center justify-center rounded-sm text-editorial-charcoal dark:text-editorial-ivory hover:-translate-y-0.5 transition-all duration-300 shadow-sm relative group/btn"
                    title="GitHub Profile"
                  >
                    <FiGithub size={16} className="stroke-[1.5px]" />
                    <span className="absolute bottom-[-24px] bg-editorial-charcoal text-base-light dark:bg-editorial-ivory dark:text-base-dark font-mono text-[7px] uppercase px-1.5 py-0.5 rounded-sm opacity-0 group-hover/btn:opacity-100 transition-opacity tracking-wider pointer-events-none">
                      GITHUB
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/anshu-ingle-37b17b259"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-grid-light dark:border-grid-dark bg-base-light/50 dark:bg-base-dark/50 hover:border-accent-blueprint dark:hover:border-accent-blueprintDark flex items-center justify-center rounded-sm text-editorial-charcoal dark:text-editorial-ivory hover:-translate-y-0.5 transition-all duration-300 shadow-sm relative group/btn"
                    title="LinkedIn Profile"
                  >
                    <FiLinkedin size={16} className="stroke-[1.5px]" />
                    <span className="absolute bottom-[-24px] bg-editorial-charcoal text-base-light dark:bg-editorial-ivory dark:text-base-dark font-mono text-[7px] uppercase px-1.5 py-0.5 rounded-sm opacity-0 group-hover/btn:opacity-100 transition-opacity tracking-wider pointer-events-none">
                      LINKEDIN
                    </span>
                  </a>

                  <a
                    href="mailto:anshu.ingle2105@gmail.com"
                    className="w-10 h-10 border border-grid-light dark:border-grid-dark bg-base-light/50 dark:bg-base-dark/50 hover:border-accent-blueprint dark:hover:border-accent-blueprintDark flex items-center justify-center rounded-sm text-editorial-charcoal dark:text-editorial-ivory hover:-translate-y-0.5 transition-all duration-300 shadow-sm relative group/btn"
                    title="Send Direct Email"
                  >
                    <FiMail size={16} className="stroke-[1.5px]" />
                    <span className="absolute bottom-[-24px] bg-editorial-charcoal text-base-light dark:bg-editorial-ivory dark:text-base-dark font-mono text-[7px] uppercase px-1.5 py-0.5 rounded-sm opacity-0 group-hover/btn:opacity-100 transition-opacity tracking-wider pointer-events-none">
                      EMAIL
                    </span>
                  </a>

                  <a
                    href="/assets/resume/Anshu_Vijay_Ingle_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-grid-light dark:border-grid-dark bg-base-light/50 dark:bg-base-dark/50 hover:border-accent-blueprint dark:hover:border-accent-blueprintDark flex items-center justify-center rounded-sm text-editorial-charcoal dark:text-editorial-ivory hover:-translate-y-0.5 transition-all duration-300 shadow-sm relative group/btn"
                    title="Download Resume"
                  >
                    <FiFileText size={16} className="stroke-[1.5px]" />
                    <span className="absolute bottom-[-24px] bg-editorial-charcoal text-base-light dark:bg-editorial-ivory dark:text-base-dark font-mono text-[7px] uppercase px-1.5 py-0.5 rounded-sm opacity-0 group-hover/btn:opacity-100 transition-opacity tracking-wider pointer-events-none">
                      RESUME
                    </span>
                  </a>
                </div>

              </div>

              {/* Availability Status Card */}
              <div className="relative border border-grid-light dark:border-grid-dark bg-surface-light/45 dark:bg-surface-dark/45 p-6 rounded-sm shadow-sm transition-colors duration-300 select-none">
                <span className="absolute top-0 right-0 text-[8px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 pointer-events-none p-0.5 font-mono select-none">+</span>

                <h3 className="font-mono text-[9px] tracking-[0.2em] text-editorial-charcoal/40 dark:text-editorial-ivory/40 uppercase font-semibold border-b border-grid-light/40 dark:border-grid-dark/40 pb-2 mb-4">
                  AVAILABILITY_STATUS // TELEMETRY
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    <span className="font-sans text-xs sm:text-sm font-semibold text-editorial-charcoal dark:text-editorial-ivory transition-colors">
                      🟢 Available for Opportunities
                    </span>
                  </div>

                  <div className="pt-2">
                    <span className="font-mono text-[8px] text-editorial-charcoal/40 dark:text-editorial-ivory/40 uppercase block mb-2">INTERESTED ROLES:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Java Full Stack Developer', 'Backend Developer', 'Software Engineer', 'Full Stack Engineer'].map((item) => (
                        <span key={item} className="font-mono text-[8px] tracking-wide px-2 py-0.5 border border-grid-light dark:border-grid-dark bg-base-light/35 dark:bg-base-dark/35 text-editorial-charcoal/70 dark:text-editorial-ivory/70 rounded-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Quick Response Card */}
              <div className="relative border border-grid-light dark:border-grid-dark bg-surface-light/45 dark:bg-surface-dark/45 p-6 rounded-sm shadow-sm transition-colors duration-300 select-none">
                <span className="absolute top-0 right-0 text-[8px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 pointer-events-none p-0.5 font-mono select-none">+</span>

                <h3 className="font-mono text-[9px] tracking-[0.2em] text-editorial-charcoal/40 dark:text-editorial-ivory/40 uppercase font-semibold border-b border-grid-light/40 dark:border-grid-dark/40 pb-2 mb-4">
                  QUICK_RESPONSE_CARD // TIME_ESTIMATE
                </h3>

                <div className="grid grid-cols-2 gap-4 font-mono text-[10px]">
                  <div>
                    <span className="text-editorial-charcoal/40 dark:text-editorial-ivory/40 uppercase text-[8px] block">AVG RESPONSE:</span>
                    <span className="font-sans text-xs sm:text-sm font-semibold mt-1 block text-accent-blueprint dark:text-accent-blueprintDark">Within 24 Hours</span>
                  </div>
                  <div>
                    <span className="text-editorial-charcoal/40 dark:text-editorial-ivory/40 uppercase text-[8px] block">PREFERRED MODE:</span>
                    <span className="font-sans text-xs sm:text-sm font-semibold mt-1 block text-editorial-charcoal dark:text-editorial-ivory">Email, LinkedIn</span>
                  </div>
                </div>

              </div>

            </div>

            {/* RIGHT COLUMN: Premium glass contact form (Span 7) */}
            <div className="lg:col-span-7">
              <div className="relative border border-grid-light dark:border-grid-dark bg-surface-light/45 dark:bg-surface-dark/45 p-6 sm:p-8 rounded-sm shadow-sm transition-colors duration-300">
                <span className="absolute top-0 left-0 text-[10px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 pointer-events-none p-1 font-mono select-none">+</span>
                <span className="absolute top-0 right-0 text-[10px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 pointer-events-none p-1 font-mono select-none">+</span>
                <span className="absolute bottom-0 left-0 text-[10px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 pointer-events-none p-1 font-mono select-none">+</span>
                <span className="absolute bottom-0 right-0 text-[10px] text-editorial-charcoal/20 dark:text-editorial-ivory/20 pointer-events-none p-1 font-mono select-none">+</span>

                <div className="flex items-center justify-between border-b border-grid-light/40 dark:border-grid-dark/40 pb-3 mb-6 font-mono text-[9px] text-editorial-charcoal/50 dark:text-editorial-ivory/50">
                  <span>OUTBOX_STREAM // PORT_25</span>
                  <span className="flex items-center gap-1.5 select-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>READY</span>
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 text-left">

                  {/* Name field */}
                  <div className="relative flex flex-col">
                    <label className="font-mono text-[9px] uppercase tracking-widest text-editorial-charcoal/50 dark:text-editorial-ivory/50 mb-1 select-none">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className={`w-full px-3.5 py-2.5 border rounded-sm bg-base-light/35 dark:bg-base-dark/35 text-editorial-charcoal dark:text-editorial-ivory font-sans text-sm focus:outline-none transition-all duration-300 focus:border-accent-blueprint dark:focus:border-accent-blueprintDark
                        ${errors.name ? 'border-accent-crimson' : 'border-grid-light dark:border-grid-dark'}`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <span className="font-mono text-[8px] text-accent-crimson uppercase tracking-wide mt-1 select-none">
                        // ERROR: {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="relative flex flex-col">
                    <label className="font-mono text-[9px] uppercase tracking-widest text-editorial-charcoal/50 dark:text-editorial-ivory/50 mb-1 select-none">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 border rounded-sm bg-base-light/35 dark:bg-base-dark/35 text-editorial-charcoal dark:text-editorial-ivory font-sans text-sm focus:outline-none transition-all duration-300 focus:border-accent-blueprint dark:focus:border-accent-blueprintDark
                        ${errors.email ? 'border-accent-crimson' : 'border-grid-light dark:border-grid-dark'}`}
                      placeholder="name@example.com"
                    />
                    {errors.email && (
                      <span className="font-mono text-[8px] text-accent-crimson uppercase tracking-wide mt-1 select-none">
                        // ERROR: {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Subject field */}
                  <div className="relative flex flex-col">
                    <label className="font-mono text-[9px] uppercase tracking-widest text-editorial-charcoal/50 dark:text-editorial-ivory/50 mb-1 select-none">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className={`w-full px-3.5 py-2.5 border rounded-sm bg-base-light/35 dark:bg-base-dark/35 text-editorial-charcoal dark:text-editorial-ivory font-sans text-sm focus:outline-none transition-all duration-300 focus:border-accent-blueprint dark:focus:border-accent-blueprintDark
                        ${errors.subject ? 'border-accent-crimson' : 'border-grid-light dark:border-grid-dark'}`}
                      placeholder="Opportunity / Collaboration / Project discussion"
                    />
                    {errors.subject && (
                      <span className="font-mono text-[8px] text-accent-crimson uppercase tracking-wide mt-1 select-none">
                        // ERROR: {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="relative flex flex-col">
                    <label className="font-mono text-[9px] uppercase tracking-widest text-editorial-charcoal/50 dark:text-editorial-ivory/50 mb-1 select-none">
                      Message
                    </label>
                    <textarea
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      rows="4"
                      className={`w-full px-3.5 py-2.5 border rounded-sm bg-base-light/35 dark:bg-base-dark/35 text-editorial-charcoal dark:text-editorial-ivory font-sans text-sm focus:outline-none transition-all duration-300 focus:border-accent-blueprint dark:focus:border-accent-blueprintDark resize-none
                        ${errors.message ? 'border-accent-crimson' : 'border-grid-light dark:border-grid-dark'}`}
                      placeholder="Detailed system request description..."
                    />
                    {errors.message && (
                      <span className="font-mono text-[8px] text-accent-crimson uppercase tracking-wide mt-1 select-none">
                        // ERROR: {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting || submitSuccess}
                      className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-editorial-charcoal text-base-light dark:bg-editorial-ivory dark:text-base-dark font-mono text-xs uppercase tracking-wider font-semibold shadow-cad hover:-translate-x-0.5 hover:-translate-y-0.5 disabled:translate-x-0 disabled:translate-y-0 disabled:opacity-85 disabled:cursor-not-allowed transition-all duration-200 rounded-sm"
                    >
                      {isSubmitting ? (
                        <>
                          <FiLoader className="animate-spin text-accent-blueprint shrink-0" />
                          <span>Sending...</span>
                        </>
                      ) : submitSuccess ? (
                        <>
                          <FiCheck className="text-emerald-500 shrink-0" />
                          <span>SENT SUCCESSFULLY</span>
                        </>
                      ) : (
                        <>
                          <FiSend className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    {/* Success prompt feedback */}
                    {submitSuccess && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="font-mono text-[9px] text-emerald-600 dark:text-emerald-400 uppercase tracking-wide select-none"
                      >
                        // Thank you! Your message has been sent successfully.
                      </motion.span>
                    )}
                  </div>

                </form>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Toast notifications */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 border rounded-sm font-sans text-xs shadow-cad bg-base-light dark:bg-base-dark border-grid-light dark:border-grid-dark"
            style={{
              boxShadow: toast.type === 'success'
                ? '4px 4px 0px 0px #10B981' // Emerald-500 shadow
                : '4px 4px 0px 0px #DC2626'  // Crimson shadow
            }}
          >
            {toast.type === 'success' ? (
              <FiCheckCircle size={16} className="text-emerald-500 shrink-0" />
            ) : (
              <FiAlertCircle size={16} className="text-accent-crimson shrink-0" />
            )}
            <span className="text-editorial-charcoal dark:text-editorial-ivory font-medium text-xs">
              {toast.message}
            </span>
            <button
              onClick={() => setToast(null)}
              className="ml-2 text-editorial-charcoal/40 dark:text-editorial-ivory/40 hover:text-editorial-charcoal dark:hover:text-editorial-ivory transition-colors"
            >
              <FiX size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
