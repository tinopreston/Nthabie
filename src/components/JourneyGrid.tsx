import { motion } from "motion/react";
import { Milestone, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";
import { JourneyMilestone } from "../types";

export default function JourneyGrid() {
  const milestones: JourneyMilestone[] = [
    {
      id: "j-foundation",
      year: "Step 01",
      title: "Marketing & Sales Foundation",
      description: "Built a solid academic knowledge base in marketing and retail operations, forming core competencies at the University of Johannesburg."
    },
    {
      id: "j-early-sales",
      year: "Step 02",
      title: "Early Sales Experience",
      description: "Earned initial domain expertise in personal sales presentation, direct product distribution, and customer communications at Avon Justine."
    },
    {
      id: "j-leadership",
      year: "Step 03",
      title: "Financial Leadership Growth",
      description: "Appointed Residence Treasurer for Ndlovukazi Residence, managing logistics budgets and team-wide transparent financial tracking."
    },
    {
      id: "j-sales-mgmt",
      year: "Step 04",
      title: "Sales Management Exposure",
      description: "Promoted to oversee a division of Avon representatives, directing tasks, and balancing team fulfillment workflows."
    },
    {
      id: "j-campus-professional",
      year: "Step 05",
      title: "University Professional Role",
      description: "Employed as campus Student Assistant and Administrative Advisor, polishing office operations, schedule planning, and stakeholder support formats."
    },
    {
      id: "j-corporate-sales",
      year: "Step 06",
      title: "Corporate Sales Growth",
      description: "Successfully hired by Clover S.A. Proprietary Limited, driving direct retail store account metrics, representation, and promotional alignments."
    },
    {
      id: "j-research-ex",
      year: "Step 07",
      title: "Marketing Research Excellence",
      description: "Crowned 1st Place out of Honours competition tiers for pioneering research in Gen Z augmented reality shopping trends."
    },
    {
      id: "j-future-scaling",
      year: "Step 08",
      title: "Future Horizons & Scaling",
      description: "Looking forward to steering corporate brand growth, managing strategic promotional programs, and expanding consumer insights."
    }
  ];

  return (
    <section id="journey" className="relative py-24 bg-white dark:bg-navy overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/10 w-[35vw] h-[35vw] rounded-full blob-glow-2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[35vw] h-[35vw] rounded-full blob-glow-3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff8a65] mb-3"
          >
            Milestones Mapping
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy dark:text-white"
          >
            My Professional Journey
          </motion.h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 font-sans">
            A chronological visualization of Nthabiseng’s continuous ascendancy and domain milestones.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-coral to-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Stepping Stones Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {milestones.map((stone, idx) => {
            const isFuture = idx === milestones.length - 1;
            return (
              <motion.div
                key={stone.id}
                id={`journey-step-${stone.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className={`glass-panel p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between shadow-tiny relative overflow-hidden group ${
                  isFuture 
                    ? "border-coral/40 bg-gradient-to-b from-white to-[#fff8f6] dark:from-navy dark:to-[#1a1622] ring-1 ring-coral/10" 
                    : "border-gray-100 dark:border-white/5"
                }`}
              >
                {/* Connector accent indicators inside stones */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold tracking-widest text-[#f55175]">
                    {stone.year}
                  </span>
                  
                  {/* Glowing core indicator */}
                  <div className={`p-2 rounded-lg ${
                    isFuture 
                      ? "bg-coral/10 text-coral border border-coral/20 animate-pulse" 
                      : "bg-gray-50 dark:bg-navy border border-gray-100 dark:border-white/5 text-gray-400 group-hover:text-blush transition-colors"
                  }`}>
                    {isFuture ? <Sparkles className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-base md:text-lg font-bold text-navy dark:text-white leading-tight mb-3">
                    {stone.title}
                  </h3>
                  <p className="font-sans text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-normal">
                    {stone.description}
                  </p>
                </div>

                {/* Micro pointer vector lines */}
                {idx < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r from-gray-200 to-transparent dark:from-white/10 dark:to-transparent z-10 translate-x-1" />
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
