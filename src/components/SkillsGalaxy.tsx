import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, BarChart, TrendingUp, Compass, Award, Tag } from "lucide-react";
import { SkillCategory } from "../types";

export default function SkillsGalaxy() {
  const [activeTab, setActiveTab] = useState<string>("sales");

  const skillCategories: SkillCategory[] = [
    {
      category: "sales",
      skills: [
        { name: "Sales communication", level: 95 },
        { name: "Customer relationship building", level: 98 },
        { name: "Client engagement", level: 94 },
        { name: "Product representation", level: 92 },
        { name: "Revenue growth mindset", level: 90 },
        { name: "Persuasion & negotiations", level: 88 },
        { name: "Service orientation", level: 95 },
      ]
    },
    {
      category: "marketing",
      skills: [
        { name: "Market research", level: 93 },
        { name: "Brand activations", level: 96 },
        { name: "Consumer behaviour", level: 92 },
        { name: "Marketing strategy", level: 90 },
        { name: "Brand storytelling", level: 94 },
        { name: "Campaign support", level: 91 },
        { name: "Digital marketing awareness", level: 85 },
      ]
    },
    {
      category: "professional",
      skills: [
        { name: "Communication", level: 98 },
        { name: "Teamwork", level: 95 },
        { name: "Adaptability", level: 94 },
        { name: "Leadership", level: 90 },
        { name: "Problem solving", level: 91 },
        { name: "Time management", level: 93 },
        { name: "Attention to detail", level: 92 },
        { name: "Professional writing", level: 88 },
        { name: "Presentation skills", level: 95 },
      ]
    },
    {
      category: "admin",
      skills: [
        { name: "Administration", level: 94 },
        { name: "Coordination", level: 92 },
        { name: "Task delegation", level: 89 },
        { name: "Fundraising", level: 91 },
        { name: "Financial responsibility", level: 88 },
        { name: "Order management", level: 90 },
        { name: "Planning", level: 91 },
      ]
    }
  ];

  const getTabLabel = (cat: string) => {
    switch (cat) {
      case "sales": return "Sales & Engagement";
      case "marketing": return "Strategic Marketing";
      case "professional": return "Professional Strengths";
      case "admin": return "Admin & Operations";
      default: return "";
    }
  };

  const getTabColor = (cat: string) => {
    switch (cat) {
      case "sales": return "border-blush text-blush bg-blush/5";
      case "marketing": return "border-coral text-coral bg-coral/5";
      case "professional": return "border-gold text-gold bg-gold/5";
      case "admin": return "border-lavender text-lavender bg-lavender/5";
      default: return "border-blush text-blush";
    }
  };

  const currentCategory = skillCategories.find(s => s.category === activeTab);

  // Skill bubbles for a visual layout container
  const allBubbles = [
    { name: "Sales Growth", size: "w-28 h-28", sizeText: "text-xs", color: "from-blush to-coral shadow-blush/20", x: "12%", y: "15%" },
    { name: "Consumer Insight", size: "w-32 h-32", sizeText: "text-sm", color: "from-coral to-gold shadow-coral/15", x: "72%", y: "20%" },
    { name: "Brand Activations", size: "w-36 h-36", sizeText: "text-base", color: "from-lavender to-blush shadow-lavender/15", x: "40%", y: "55%" },
    { name: "Relationship Hub", size: "w-30 h-30", sizeText: "text-xs", color: "from-gold to-blush shadow-gold/20", x: "75%", y: "65%" },
    { name: "AR Research", size: "w-26 h-26", sizeText: "text-xs", color: "from-blush to-lavender shadow-blush/15", x: "18%", y: "70%" },
  ];

  return (
    <section id="skills" className="relative py-24 bg-gray-50/50 dark:bg-navy-dark/40 overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-1/4 left-1/10 w-[45vw] h-[45vw] rounded-full blob-glow-1 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[45vw] h-[45vw] rounded-full blob-glow-2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f55175] mb-3"
          >
            Core Competencies
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy dark:text-white"
          >
            Skills & Strengths
          </motion.h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 font-sans">
            A complete matrix of sales techniques, strategic branding insight, and administrative capabilities.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blush to-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Structure: Left dynamic Galaxy bubbles, Right metric sliders */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left panel: Visual Floating Galaxy of core skill highlights */}
          <div className="lg:col-span-5 relative hidden md:block h-[380px] rounded-3xl overflow-hidden glass-panel border border-gray-100 dark:border-white/5 shadow-inner">
            <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
            <span className="absolute top-4 left-4 text-[10px] uppercase font-bold tracking-widest text-[#f55175] dark:text-[#f76c8c] flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Skills Interaction Galaxy</span>
            </span>

            {allBubbles.map((bub, idx) => (
              <motion.div
                key={bub.name}
                id={`skill-bubble-${idx}`}
                className="absolute"
                style={{ left: bub.x, top: bub.y }}
                animate={{
                  y: ["0%", "8%", "0%"],
                  x: ["0%", "5%", "0%"]
                }}
                transition={{
                  duration: 4 + idx * 1.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.08 }}
              >
                <div className={`rounded-full bg-gradient-to-br ${bub.color} flex flex-col items-center justify-center text-center p-3 text-white font-serif font-semibold shadow-lg leading-tight select-none border border-white/20 hover:border-white/50 cursor-default ${bub.size}`}>
                  <span className={`${bub.sizeText}`}>{bub.name}</span>
                  <div className="w-6 h-0.5 bg-white/40 mt-1.5 rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right panel: Tabbed slider metrics */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Nav Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 bg-gray-100/60 dark:bg-navy-dark/40 p-1.5 rounded-2xl border border-gray-200/50 dark:border-white/5 max-w-full overflow-x-auto">
              {skillCategories.map((sc) => {
                const isSelected = activeTab === sc.category;
                return (
                  <button
                    key={sc.category}
                    id={`skill-tab-btn-${sc.category}`}
                    onClick={() => setActiveTab(sc.category)}
                    className={`flex-1 min-w-[120px] py-3 px-4 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "bg-white dark:bg-navy text-navy dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/5"
                        : "text-gray-500 hover:text-navy dark:hover:text-white"
                    }`}
                  >
                    {getTabLabel(sc.category)}
                  </button>
                );
              })}
            </div>

            {/* Panel slider values with entry animations */}
            <div className="glass-panel p-8 rounded-2xl border border-gray-100 dark:border-white/5 min-h-[350px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  id={`skill-slider-panel-${activeTab}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex justify-between items-center pb-4 border-b border-gray-50 dark:border-white/5">
                    <span className="text-xs uppercase font-bold text-coral/80 tracking-widest font-sans">
                      Performance Matrix
                    </span>
                    <span className="text-xs font-semibold tracking-wider font-sans text-gray-400 dark:text-gray-500">
                      High Professional Mastery
                    </span>
                  </div>

                  <div className="space-y-4">
                    {currentCategory?.skills.map((skill, sIdx) => {
                      return (
                        <div key={skill.name} id={`skill-metric-row-${sIdx}`} className="space-y-1.5">
                          <div className="flex items-center justify-between font-sans">
                            <span className="text-xs md:text-sm font-semibold text-gray-800 dark:text-white">
                              {skill.name}
                            </span>
                            <span className="text-[11px] font-mono text-coral/90 font-bold tracking-widest">
                              {skill.level}%
                            </span>
                          </div>

                          <div className="w-full h-2 bg-gray-100 dark:bg-navy-dark/40 rounded-full overflow-hidden relative">
                            <motion.div
                              id={`skill-slider-inner-${sIdx}`}
                              className="h-full bg-gradient-to-r from-blush via-coral to-gold rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 0.8, delay: sIdx * 0.05, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
