import { motion } from "motion/react";
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from "lucide-react";
import { EducationItem } from "../types";

export default function EducationTimeline() {
  const educations: EducationItem[] = [
    {
      id: "edu-bcom",
      institution: "University of Johannesburg",
      degree: "Bachelor of Commerce - BCom, Marketing",
      period: "Feb 2025 – Present",
      description: "Currently advancing her academic journey in Marketing, strengthening her strategic understanding of consumer behaviour, market dynamics, branding, business growth, and marketing management."
    },
    {
      id: "edu-advdip",
      institution: "University of Johannesburg",
      degree: "Advanced Diploma, Marketing",
      period: "Feb 2023 – Nov 2023",
      description: "Completed advanced studies in marketing, building knowledge in marketing strategy, consumer insights, research, communication, and business-focused marketing practice."
    },
    {
      id: "edu-hnd",
      institution: "University of Johannesburg",
      degree: "Higher National Diploma, Marketing",
      period: "Jan 2020 – Nov 2022",
      description: "Developed a strong foundation in marketing, sales, business communication, consumer behaviour, and market-related decision-making."
    },
    {
      id: "edu-hc",
      institution: "University of Johannesburg",
      degree: "Higher Certificate, Marketing and Sales",
      period: "Jan 2019 – Dec 2019",
      description: "Built foundational knowledge in marketing and sales, forming the base for her growth into a sales and marketing professional."
    }
  ];

  return (
    <section id="education" className="relative py-24 bg-white dark:bg-navy overflow-hidden">
      {/* Decorative Blob Glows */}
      <div className="absolute top-1/3 right-1/10 w-[35vw] h-[35vw] rounded-full blob-glow-3 pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/10 w-[35vw] h-[35vw] rounded-full blob-glow-4 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-coral mb-3"
          >
            Academic Foundation
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy dark:text-white"
          >
            Education
          </motion.h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 font-sans">
            Comprehensive marketing specializations from the University of Johannesburg.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-coral to-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Path Grid representation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {educations.map((edu, idx) => {
            const isLatest = idx === 0;
            return (
              <motion.div
                key={edu.id}
                id={`education-card-${edu.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className={`glass-panel p-8 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between shadow-sm overflow-hidden ${
                  isLatest 
                    ? "border-coral/30 ring-1 ring-coral/10 bg-gradient-to-b from-white to-[#fff8f6] dark:from-navy dark:to-[#171622]" 
                    : "border-gray-100 dark:border-white/5"
                }`}
              >
                {/* Visual Ribbon if Latest */}
                {isLatest && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-coral via-blush to-coral text-white text-[9px] font-sans font-bold uppercase tracking-widest px-4 py-1 rounded-bl-xl shadow-sm animate-pulse">
                    Currently Advancing
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl border ${
                      isLatest 
                        ? "bg-coral/10 border-coral/20 text-coral" 
                        : "bg-gray-50 dark:bg-navy border-gray-100 dark:border-white/5 text-gray-500"
                    }`}>
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-gray-400 dark:text-gray-500">
                        {edu.institution}
                      </h4>
                      <p className="font-sans text-[11px] text-gray-400/80 dark:text-gray-500/80 uppercase font-bold tracking-widest flex items-center gap-1.5 mt-0.5">
                        <MapPin className="w-3 h-3" />
                        <span>Johannesburg, SA</span>
                      </p>
                    </div>
                  </div>

                  <h3 className="font-serif text-lg md:text-xl font-bold text-navy dark:text-white mb-3 leading-tight">
                    {edu.degree}
                  </h3>

                  <p className="font-sans text-xs md:text-sm text-gray-500 dark:text-gray-300 leading-relaxed mb-6 font-normal">
                    {edu.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-auto pt-4 border-t border-gray-50 dark:border-white/5 font-mono text-[11px] font-bold text-coral/80">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Timeline: {edu.period}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
