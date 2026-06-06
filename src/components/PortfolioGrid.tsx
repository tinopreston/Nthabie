import { motion } from "motion/react";
import { Award, Compass, CompassIcon, Presentation, Sparkles, BookOpen, Layers, Star } from "lucide-react";
import { ProjectItem } from "../types";

export default function PortfolioGrid() {
  const projects: ProjectItem[] = [
    {
      id: "ar-retailing",
      title: "Feels Human: Generation Z’s Augmented Reality Shopping",
      category: "Marketing Research",
      institution: "University of Johannesburg",
      achievement: "1st Place Winner",
      description: "A comprehensive team research project exploring how augmented reality shopping experiences connect with emotion, anthropomorphism, and Generation Z’s attitudes toward digital retail assistants. This project reflects Nthabiseng’s interest in marketing innovation, consumer behaviour, digital shopping, and the future of retail.",
      skills: ["Marketing research", "Consumer behaviour analysis", "Academic presentation", "Team collaboration", "Digital retail insight", "Research communication"],
      imagePlaceholderText: "Add UJ Research Poster Image Here",
      gradient: "from-blush via-coral to-gold"
    },
    {
      id: "ar-anthropomorphism",
      title: "Anthropomorphism and Attitudes in Generation Z’s Use of AR Retail Assistants",
      category: "Honours Poster Competition",
      institution: "University of Johannesburg",
      achievement: "CBE Honours Poster Competition 2025 Winner",
      description: "A winning honours research poster study focused on how Generation Z responds to and relates emotionally with AR retail assistants. The project connects core marketing theories, digital technology, emotional response, and human-like brand interactions to solve direct friction points in modern e-retailing.",
      skills: ["Academic research", "Data synthesis & presentation", "Digital branding dynamics", "Gen Z consumer behavior"],
      imagePlaceholderText: "Add CBE Honours Poster Image Here",
      gradient: "from-navy via-lavender to-blush"
    },
    {
      id: "pepsico-saatchi",
      title: "Bokomo / PepsiCo Big Idea at M+C Saatchi Group",
      category: "Brand Strategy Presentation",
      date: "15 October 2025",
      description: "A high-end brand strategy presentation experience completed through an elite collaboration between the University of Johannesburg Honours in Marketing department and the M+C Saatchi Group agency. This immersive experience exposed Nthabiseng to creative agency thinking, brand strategy, business model storytelling, and real-world consumer product messaging campaigns.",
      skills: ["Brand Strategy brief", "Campaign pitch design", "Agency-level presenting", "Consumer insights analysis"],
      imagePlaceholderText: "Add M+C Saatchi Presentation Showcase Here",
      gradient: "from-[#d4af37] via-coral to-blush"
    },
    {
      id: "clover-activation",
      title: "Clover / Tropika Brand Activations",
      category: "Brand Activation & Sales Engagement",
      description: "Nthabiseng participated in Clover and Tropika-related brand activation environments, including school sports day activations and community roadshows. These experiences strengthened her practical understanding of customer engagement, floor-level brand visibility, product promotion, experiential marketing, and direct team coordination.",
      skills: ["Brand activation", "Floor-level visibility", "Direct customer engagement", "Promo coordination"],
      imagePlaceholderText: "Add Clover Activation Image Here",
      gradient: "from-blush to-lavender"
    }
  ];

  return (
    <section id="portfolio" className="relative py-24 bg-white dark:bg-navy overflow-hidden">
      {/* Decorative backdrop elements */}
      <div className="absolute top-[15%] right-[-10vw] w-[40vw] h-[40vw] rounded-full blob-glow-2 pointer-events-none" />
      <div className="absolute bottom-[15%] left-[-10vw] w-[40vw] h-[40vw] rounded-full blob-glow-3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff8a65] mb-3"
          >
            My Practical Achievements
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy dark:text-white"
          >
            Portfolio Highlights
          </motion.h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 font-sans">
            A showcase of award-winning academic studies, corporate pitches, and consumer activations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-coral to-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((proj, idx) => {
            return (
              <motion.div
                key={proj.id}
                id={`project-card-${proj.id}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className="glass-panel rounded-3xl border border-gray-100 dark:border-white/5 overflow-hidden flex flex-col group shadow-sm hover:shadow-xl transition-all duration-300 relative"
              >
                {/* Visual / Image Placeholder mock container */}
                <div className="relative h-56 w-full flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-navy-dark/60 border-b border-gray-100 dark:border-white/5 select-none">
                  
                  {/* Dynamic Glowing background mesh behind text */}
                  <div className={`absolute inset-4 rounded-2xl bg-gradient-to-tr ${proj.gradient} opacity-5 blur-[2px]`} />
                  
                  {/* Decorative background vectors representing a polished mock layout */}
                  <div className="absolute inset-4 rounded-2xl border-2 border-dashed border-gray-100 dark:border-white/5 flex flex-col items-center justify-center p-6 text-center">
                    
                    {/* Animated visual glyph based on category */}
                    <div className="p-3.5 rounded-full bg-white dark:bg-navy shadow-md shadow-black/5 dark:shadow-white/5 border border-gray-50 dark:border-white/10 mb-3 text-coral/90 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      {proj.category.includes("Research") || proj.category.includes("Poster") ? (
                        <BookOpen className="w-6 h-6 text-blush" />
                      ) : proj.category.includes("Strategy") ? (
                        <Presentation className="w-6 h-6 text-gold" />
                      ) : (
                        <Compass className="w-6 h-6 text-coral" />
                      )}
                    </div>

                    <span className="font-serif italic text-lg font-bold text-navy dark:text-white leading-tight block">
                      {proj.title.split(":")[0]}
                    </span>
                    
                    <span className="text-[10px] sm:text-xs font-sans font-bold tracking-widest text-[#f55175] uppercase mt-2.5 bg-blush/10 dark:bg-blush/5 border border-blush/20 px-2.5 py-0.5 rounded-full">
                      {proj.imagePlaceholderText}
                    </span>
                  </div>
                </div>

                {/* Card Text details */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header line context */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-navy-dark text-[10px] font-sans font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                        {proj.category}
                      </span>
                      {proj.achievement && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-sans font-bold text-gold">
                          <Award className="w-3.5 h-3.5 shrink-0" />
                          <span>{proj.achievement}</span>
                        </span>
                      )}
                      {proj.date && (
                        <span className="text-xs text-gray-400 dark:text-gray-500 font-sans tracking-wide">
                          {proj.date}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-xl font-bold text-navy dark:text-white mb-4 leading-tight group-hover:text-blush transition-colors duration-300">
                      {proj.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-300 leading-relaxed mb-6 font-normal">
                      {proj.description}
                    </p>
                  </div>

                  {/* Skills tags footer of card */}
                  <div className="border-t border-gray-100 dark:border-white/5 pt-5">
                    <h4 className="font-sans text-[10px] font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-3 flex items-center gap-1.5">
                      <Star className="w-3 h-3 text-[#ff8a65]" />
                      <span>Applied Skill Sectors</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {proj.skills.map((skill, skIdx) => (
                        <span
                          key={skIdx}
                          id={`proj-skill-${proj.id}-${skIdx}`}
                          className="text-[10px] sm:text-xs font-sans font-medium hover:text-white hover:bg-[#ff8a65] duration-300 px-2 py-0.5 rounded-md bg-gray-50 dark:bg-navy-dark/40 border border-gray-100 dark:border-white/5 text-gray-600 dark:text-gray-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
