import { useState } from "react";
import { motion } from "motion/react";
import { Linkedin, FileText, Compass, Award, ExternalLink } from "lucide-react";

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const floatingCards = [
    { text: "Sales Growth", delay: 0, positionClass: "-left-8 sm:-left-16 md:-left-24 top-[15%]", icon: "📈", color: "from-blush to-coral" },
    { text: "Marketing Strategy", delay: 1.5, positionClass: "-right-8 sm:-right-16 md:-right-24 top-[10%]", icon: "🎯", color: "from-gold to-coral" },
    { text: "Customer Engagement", delay: 0.8, positionClass: "-left-12 sm:-left-20 md:-left-32 top-[44%]", icon: "🤝", color: "from-lavender to-blush" },
    { text: "Brand Activation", delay: 2.2, positionClass: "-right-12 sm:-right-20 md:-right-32 top-[48%]", icon: "✨", color: "from-blush to-lavender" },
    { text: "Market Research", delay: 1.2, positionClass: "-left-8 sm:-left-16 md:-left-26 bottom-[15%]", icon: "📊", color: "from-gold to-blush" },
    { text: "UJ Graduate", delay: 2.8, positionClass: "-right-8 sm:-right-16 md:-right-28 bottom-[12%]", icon: "🎓", color: "from-lavender to-coral" },
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-white dark:bg-navy"
    >
      {/* Editorial Banner Overlay Background */}
      <div className="absolute top-0 left-0 right-0 h-[400px] md:h-[450px] overflow-hidden pointer-events-none z-0">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D16AQHMllzMgAI2lg/profile-displaybackgroundimage-shrink_200_800/B4DZUaZ_8rHAAU-/0/1739904779619?e=1782345600&v=beta&t=t0U1gxQedxDuxtY--FWTitFu12ugV2xRdqxDLkqZHlc"
          alt="LinkedIn Banner Background Decor"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-20 dark:opacity-10 scale-102 filter blur-[0.5px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/80 to-white dark:from-navy/10 dark:via-navy/90 dark:to-navy" />
      </div>

      {/* Decorative Blur Blobs in Background */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[160px] bg-blush/10 dark:bg-blush/5 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[160px] bg-coral/10 dark:bg-coral/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full blur-[200px] bg-gradient-to-tr from-lavender/5 to-gold/5 pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Side Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Tagline Badge */}
          <motion.div
            id="hero-label-badge"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blush/10 to-coral/10 border border-blush/20 text-blush dark:text-blush font-sans text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <Award className="w-3.5 h-3.5 animate-pulse" />
            <span>Welcome to my digital portfolio</span>
          </motion.div>

          {/* Main Title Headings */}
          <motion.h1
            id="hero-main-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-navy dark:text-white leading-tight mb-2"
          >
            I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blush via-coral to-gold underline decoration-gold/30">Nthabiseng Mohapi</span>
          </motion.h1>

          <motion.h2
            id="hero-subheading"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="font-sans text-lg md:text-xl lg:text-2xl font-semibold tracking-wide text-coral dark:text-coral/90 mb-4 uppercase"
          >
            Sales Representative & Marketing Professional
          </motion.h2>

          {/* Core Tagline */}
          <motion.p
            id="hero-tagline"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="font-serif text-lg md:text-xl text-gray-700 dark:text-gray-200 italic font-normal leading-relaxed mb-4 border-l-4 border-gold/40 pl-4"
          >
            "Driving revenue growth, building meaningful customer relationships, and turning marketing insight into real business impact."
          </motion.p>

          {/* Mini Bio Section */}
          <motion.p
            id="hero-bio-para"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-normal leading-relaxed mb-10 max-w-xl"
          >
            A passionate sales and marketing professional based in Johannesburg, South Africa, with experience in customer engagement, brand activations, market research, strategic sales, administration, and leadership.
          </motion.p>

          {/* Action Button Links */}
          <motion.div
            id="hero-actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="flex flex-wrap gap-4 w-full sm:w-auto"
          >
            {/* Primary Action Button */}
            <button
              id="hero-btn-portfolio"
              onClick={() => handleScrollTo("portfolio")}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blush via-coral to-gold text-white font-sans text-sm font-semibold tracking-wider hover:shadow-lg hover:shadow-blush/25 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              <span>Explore My Work</span>
            </button>

            {/* Secondary Action: Resume / CV button */}
            <button
              id="hero-btn-cv"
              onClick={() => handleScrollTo("download-cv-section")}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-navy/80 hover:bg-gray-50 text-gray-800 dark:text-white border border-gray-200 dark:border-white/10 font-sans text-sm font-semibold tracking-wider shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-coral" />
              <span>Download CV</span>
            </button>

            {/* LinkedIn Action Button */}
            <a
              id="hero-btn-linkedin"
              href="https://www.linkedin.com/in/nthabiseng-mohapi-984066218/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-50 dark:bg-sky-950/20 hover:bg-sky-100/80 dark:hover:bg-sky-900/30 text-sky-600 dark:text-sky-400 font-sans text-sm font-semibold tracking-wider border border-sky-100 dark:border-sky-900/35 transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </motion.div>
        </div>

        {/* Right Side Visual Portrait Area inside gradient circle */}
        <div className="lg:col-span-5 flex justify-center items-center relative mt-8 lg:mt-0">
          <div className="relative w-72 h-72 sm:w-85 sm:h-85 md:w-96 md:h-96 flex justify-center items-center">
            
            {/* Spinning decorative frame rings */}
            <div className="absolute inset-[-10px] rounded-full border border-dashed border-blush/35 animate-[spin_35s_linear_infinite]" />
            <div className="absolute inset-[-20px] rounded-full border border-double border-gold/25 animate-[spin_45s_linear_infinite_reverse]" />

            {/* Pulsing Gradient Circle Background of portrait */}
            <motion.div
              id="hero-gradient-circle-bg"
              animate={{
                scale: [1, 1.04, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-blush via-coral to-gold opacity-90 blur-[1px] shadow-2xl shadow-blush/20"
            />

            {/* Inner frame profile placeholder area */}
            <div className="absolute inset-3 rounded-full bg-white dark:bg-navy overflow-hidden z-10 flex items-center justify-center border-4 border-white/60 dark:border-navy/60 shadow-inner group">
              {!imageError ? (
                <div className="relative w-full h-full">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQHrdoX7wLkijA/profile-displayphoto-shrink_800_800/B4DZY6i4WCHAAc-/0/1744738946294?e=1782345600&v=beta&t=XnwCkm1J64kWs6JOiNcD_3EuXBLISdqnEXTcJe0-F9A"
                    alt="Nthabiseng Mohapi Professional Portrait"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Subtle dark layout overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              ) : (
                <div className="portrait-placeholder select-none relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-50/80 via-white to-gray-100/90 dark:from-navy-dark dark:via-navy dark:to-navy-dark px-6 text-center">
                  {/* Abstract Stylized Elegant Geometric Avatar as Portrait Artwork */}
                  <svg className="w-40 h-40 md:w-44 md:h-44 text-coral/15 dark:text-white/5 absolute -bottom-4 z-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>

                  {/* Floating shiny sparkles */}
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-gold animate-ping" />
                  <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-blush animate-pulse" />

                  {/* Typography branding context */}
                  <div className="z-10 mt-6 pointer-events-none">
                    <span className="font-serif italic text-3xl font-bold text-navy dark:text-white leading-tight block">
                      Nthabiseng
                    </span>
                    <span className="font-serif text-3xl font-normal tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blush to-coral block mt-0.5">
                      Mohapi
                    </span>
                    <div className="w-12 h-1 bg-gradient-to-r from-blush to-gold mx-auto my-3.5 rounded-full" />
                    <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 font-sans tracking-widest font-semibold uppercase">
                      Professional Portrait
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Drifting Floating Mini Cards (motion reactive!) */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={i}
                id={`floating-card-${i}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [-6, 6, -6],
                  x: [-3, 3, -3]
                }}
                transition={{
                  scale: { duration: 0.5, delay: 0.15 * i },
                  y: {
                    repeat: Infinity,
                    duration: 5 + i * 0.8,
                    ease: "easeInOut",
                  },
                  x: {
                    repeat: Infinity,
                    duration: 6 + i * 1.1,
                    ease: "easeInOut",
                  }
                }}
                className={`absolute z-20 ${card.positionClass}`}
              >
                <div className="glass-panel text-[11px] md:text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md shadow-black/5 dark:shadow-white/5 border border-white/40 dark:border-white/10 text-gray-800 dark:text-white cursor-default select-none group whitespace-nowrap">
                  <span className="text-sm">{card.icon}</span>
                  <span>{card.text}</span>
                  <div className={`absolute -inset-[1px] rounded-full bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
