import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, MapPin, Calendar, Plus, Minus, ArrowRight, Star } from "lucide-react";
import { ExperienceItem } from "../types";

export default function ExperienceTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const experiences: ExperienceItem[] = [
    {
      id: "clover",
      role: "Sales Representative",
      company: "Clover S.A. Proprietary Limited",
      type: "Full-time",
      period: "Feb 2024 – Present",
      location: "Roodepoort, Gauteng, South Africa | On-site",
      description: "Responsible for supporting sales growth, customer engagement, product representation, and brand visibility. This role strengthens Nthabiseng’s ability to connect with customers, understand market needs, represent consumer products professionally, and contribute to business growth.",
      strengths: [
        "Customer engagement",
        "Sales communication",
        "Product representation",
        "Brand activation support",
        "Relationship building",
        "Revenue-focused thinking"
      ]
    },
    {
      id: "stud-assist",
      role: "Student Assistant",
      company: "University of Johannesburg",
      type: "Contract",
      period: "Jan 2022 – Dec 2023",
      location: "City of Johannesburg, Gauteng, South Africa",
      description: "Supported academic and administrative activities within the marketing and commerce divisions at the University of Johannesburg. This role developed her organisational, communication, administrative, and student-support skills.",
      strengths: [
        "Administration",
        "Communication",
        "Student support",
        "Time management",
        "Professional responsibility"
      ]
    },
    {
      id: "admin-assist",
      role: "Administrative Assistant",
      company: "University of Johannesburg",
      type: "Contract",
      period: "Aug 2023 – Sep 2023",
      location: "City of Johannesburg, Gauteng, South Africa | On-site",
      description: "Provided administrative assistance in a professional university environment. The role strengthened her attention to detail, coordination, documentation, and office support capabilities.",
      strengths: [
        "Office support coordination",
        "Attention to detail",
        "Documentation & filling processes",
        "Professional responsibility"
      ]
    },
    {
      id: "avon-manager",
      role: "Sales Manager",
      company: "Avon",
      type: "Part-time",
      period: "Apr 2022 – Nov 2022",
      location: "City of Johannesburg, Gauteng, South Africa | On-site",
      description: "Managed sales representatives, delegated regional distribution tasks, and placed system orders on behalf of the team. This role built her leadership, sales coordination, people management, and order management skills.",
      strengths: [
        "Leadership & coaching",
        "Sales coordination",
        "People management",
        "Order system logistics"
      ]
    },
    {
      id: "res-treasurer",
      role: "Treasurer",
      company: "Ndlovukazi Ladies Residence",
      type: "Student Leadership",
      period: "Jan 2021 – Dec 2021",
      location: "University of Johannesburg",
      description: "Served as elected Treasurer for Ndlovukazi Ladies Residence, helping the residence raise funds for core activities, coordinate budgets, and support transparent financial planning for residence initiatives.",
      strengths: [
        "Financial forecasting",
        "Budget planning",
        "Teamwork & accountability",
        "Fundraising leadership"
      ]
    },
    {
      id: "avon-justine",
      role: "Sales Representative",
      company: "Avon Justine",
      type: "Part-time",
      period: "Apr 2019 – Nov 2019",
      location: "City of Johannesburg, Gauteng, South Africa | On-site",
      description: "Gained early experience in direct selling, customer communication, product promotion, and client relationship building.",
      strengths: [
        "Direct selling",
        "Customer communication",
        "Product promotion",
        "Client relationship building"
      ]
    }
  ];

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="experience" className="relative py-24 bg-gray-50/50 dark:bg-navy-dark/40 overflow-hidden">
      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-[-10vw] w-[40vw] h-[40vw] rounded-full blob-glow-1 pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10vw] w-[40vw] h-[40vw] rounded-full blob-glow-2 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-blush mb-3"
          >
            My Track Record
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy dark:text-white"
          >
            Professional Experience
          </motion.h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 font-sans">
            A journey of proven sales achievement, administration excellence, and leadership values.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blush to-coral mx-auto mt-4 rounded-full" />
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative border-l border-gray-200 dark:border-white/10 ml-4 md:ml-32 pl-6 md:pl-10 space-y-12">
          
          {experiences.map((exp, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <motion.div
                key={exp.id}
                id={`experience-item-${exp.id}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative"
              >
                {/* Year tag for desktop */}
                <div className="hidden md:block absolute right-full mr-12 top-1.5 text-right w-24">
                  <span className="font-mono text-xs font-bold text-gray-400 dark:text-gray-500 tracking-wider">
                    {exp.period.split("–")[0].trim()}
                  </span>
                  <span className="block font-sans text-[10px] text-coral/80 uppercase tracking-widest mt-0.5">
                    {exp.type}
                  </span>
                </div>

                {/* Glowing node point on connection line */}
                <span className="absolute -left-[31px] md:-left-[47px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white dark:bg-navy border-2 border-blush/80 shadow-md shadow-blush/10 z-15">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blush to-coral" />
                </span>

                {/* Main Card */}
                <div 
                  className={`glass-panel rounded-2xl border border-gray-100 dark:border-white/5 transition-all duration-300 relative shadow-sm overflow-hidden ${
                    isExpanded 
                      ? "ring-1 ring-blush/25 shadow-md" 
                      : "hover:border-blush/20 hover:shadow-md cursor-pointer"
                  }`}
                  onClick={() => !isExpanded && toggleExpand(idx)}
                >
                  {/* Card head bar */}
                  <div className="p-6 flex items-start justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-blush/10 dark:bg-blush/5 border border-blush/25 text-[10px] uppercase font-bold tracking-widest text-[#f55175] dark:text-[#f76c8c]">
                          {exp.type}
                        </span>
                        <span className="font-mono text-[11px] md:hidden text-gray-400 dark:text-gray-500 tracking-wider">
                          ({exp.period})
                        </span>
                      </div>

                      <h3 className="font-serif text-lg md:text-xl font-bold text-navy dark:text-white leading-tight">
                        {exp.role}
                      </h3>
                      
                      <p className="font-sans text-sm font-semibold text-coral dark:text-coral/90 mt-1 flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-gray-400 dark:text-gray-500 shrink-0" />
                        <span>{exp.company}</span>
                      </p>

                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3.5 text-xs text-gray-500 dark:text-gray-400 font-sans font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 opacity-70" />
                          <span>{exp.period}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 opacity-70" />
                          <span>{exp.location}</span>
                        </span>
                      </div>
                    </div>

                    {/* Toggle Indicator Button */}
                    <button
                      id={`exp-toggle-btn-${exp.id}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(idx);
                      }}
                      className="p-2 rounded-full border border-gray-100 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-400 hover:text-navy dark:hover:text-white transition-colors cursor-pointer shrink-0"
                    >
                      {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Expanding detail drawer body */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={`exp-detail-${exp.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-white/5 bg-gray-50/30 dark:bg-navy-dark/10 select-none">
                          <p className="font-sans text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                            {exp.description}
                          </p>

                          {exp.strengths && exp.strengths.length > 0 && (
                            <div>
                              <h4 className="font-sans text-xs font-bold tracking-widest text-[#f55175] uppercase mb-3 flex items-center gap-1.5">
                                <Star className="w-3.5 h-3.5" />
                                <span>Core Strength Pillars</span>
                              </h4>
                              <div className="flex flex-wrap gap-2.5">
                                {exp.strengths.map((str, sIdx) => {
                                  return (
                                    <span
                                      key={sIdx}
                                      id={`strength-badge-${exp.id}-${sIdx}`}
                                      className="text-xs font-sans font-medium px-3 py-1 rounded-lg border border-gray-200 dark:border-white/5 bg-white dark:bg-navy text-gray-700 dark:text-gray-300 shadow-tiny hover:scale-[1.02] duration-300"
                                    >
                                      {str}
                                    </span>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
