import React from "react";
import { motion } from "motion/react";
import { Award, Medal, Trophy, Star, Users, Flame, Milestone } from "lucide-react";

interface AchievementItem {
  id: string;
  badge: React.ReactNode;
  title: string;
  description: string;
  highlightText?: string;
}

export default function AchievementsSection() {
  const achievements: AchievementItem[] = [
    {
      id: "ach-cbe-winner",
      badge: <Trophy className="w-6 h-6 text-gold" />,
      title: "1st Place Winner – UJ CBE Honours Poster",
      description: "Ranked 1st place in the UJ College of Business and Economics Honours Research Presentation 2025 for “Feels Human: Generation Z’s Augmented Reality Shopping.”",
      highlightText: "Top Academic Honor"
    },
    {
      id: "ach-masakhane",
      badge: <Medal className="w-6 h-6 text-blush" />,
      title: "2025 Masakhane Peak Recognition",
      description: "Awarded for exceptional community dedication, collaborative synergy, and milestone delivery within regional workspaces.",
      highlightText: "Professional Excellence"
    },
    {
      id: "ach-poster",
      badge: <Award className="w-6 h-6 text-coral" />,
      title: "CBE Honours Poster Competition 2025 Winner",
      description: "Honored for the pioneering study: “Anthropomorphism and Attitudes in Generation Z’s Use of AR Retail Assistants.”",
      highlightText: "Research Excellence"
    },
    {
      id: "ach-saatchi",
      badge: <Milestone className="w-6 h-6 text-lavender" />,
      title: "Brand Strategy Presentation at M+C Saatchi",
      description: "Pitched the Bokomo / PepsiCo Big Idea campaign brief in direct collaboration with UJ Marketing Department and agency executives.",
      highlightText: "Agency Briefing"
    },
    {
      id: "ach-conn",
      badge: <Users className="w-6 h-6 text-[#2563eb]" />,
      title: "500+ Professional LinkedIn Connections",
      description: "Successfully cultivated an active corporate network of decision-makers, marketers, and regional sales executives.",
      highlightText: "Connected Network"
    },
    {
      id: "ach-foll",
      badge: <Flame className="w-6 h-6 text-orange-500" />,
      title: "900+ Organic Professional Followers",
      description: "Reaching a growing audience interested in consumer goods activations and practical marketing analysis.",
      highlightText: "Industry Audience"
    }
  ];

  return (
    <section id="achievements" className="relative py-24 bg-gray-50/50 dark:bg-navy-dark/40 overflow-hidden">
      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 right-[-10vw] w-[40vw] h-[40vw] rounded-full blob-glow-1 pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-10vw] w-[40vw] h-[40vw] rounded-full blob-glow-4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f55175] mb-3"
          >
            Awards & Recognition
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy dark:text-white"
          >
            Achievements & Recognition
          </motion.h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 font-sans">
            A celebration of high-caliber performance, leadership, and research credentials.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blush to-coral mx-auto mt-4 rounded-full" />
        </div>

        {/* Milestone Badge Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((ach, idx) => {
            return (
              <motion.div
                key={ach.id}
                id={`achievement-card-${ach.id}`}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="glass-panel p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group overflow-hidden relative"
              >
                {/* Mirror flare light effect */}
                <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:animate-shine pointer-events-none" />

                <div>
                  {/* Decorative Glowing ribbon & Badge container */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-navy border border-gray-100 dark:border-white/5 shadow-tiny inline-flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      {ach.badge}
                    </div>

                    {ach.highlightText && (
                      <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-coral/80 bg-coral/5 border border-coral/25 px-2.5 py-1 rounded-md">
                        {ach.highlightText}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-lg font-bold text-navy dark:text-white mb-3 leading-tight group-hover:text-blush transition-colors duration-300">
                    {ach.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed z-10 relative">
                    {ach.description}
                  </p>
                </div>

                <div className="flex items-center gap-1 mt-6 text-[10px] font-sans font-bold uppercase tracking-widest text-gold dark:text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Star className="w-3.5 h-3.5 fill-gold inline" />
                  <span>Credential Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
