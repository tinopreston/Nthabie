import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  FileText, Briefcase, Target, Award, Lightbulb, Sparkles, Users, Mail, X, CheckCircle, ArrowRight 
} from "lucide-react";
import { ProfileTile } from "../types";

export default function ProfileTiles() {
  const [selectedTile, setSelectedTile] = useState<ProfileTile | null>(null);

  const tilesData: ProfileTile[] = [
    {
      id: "summary",
      title: "Professional Summary",
      teaser: "A driven sales and marketing champion passionate about connecting brands with real people.",
      iconName: "FileText",
      category: "Profile",
      content: `Nthabiseng Mohapi is a driven and adaptable sales and marketing professional with experience in revenue growth, customer engagement, market research, brand activations, and client relationship building. Her work reflects a strong passion for connecting brands with people, creating meaningful customer experiences, and contributing to business growth.

She brings together practical sales experience, academic marketing knowledge, creativity, and a commitment to continuous learning.`
    },
    {
      id: "role",
      title: "Current Role",
      teaser: "Representing leading products and securing business impact at Clover S.A. Proprietary Limited.",
      iconName: "Briefcase",
      category: "Experience",
      meta: {
        role: "Sales Representative",
        company: "Clover S.A. Proprietary Limited",
        period: "Feb 2024 – Present",
        location: "Roodepoort, Gauteng, South Africa"
      },
      content: `Nthabiseng currently works as a Sales Representative at Clover S.A. Proprietary Limited. Her role involves customer engagement, product representation, sales support, brand visibility, and contributing to revenue growth. Through this role, she has gained practical experience in building customer relationships, supporting brand activations, and representing trusted consumer brands in professional environments.`,
      highlights: [
        "Customer engagement & direct representation",
        "Strategic sales communication inside trade accounts",
        "Driving store-level product representation",
        "Supporting brand activations & regional campaigns",
        "Securing premium floor-level brand visibility",
        "Applying revenue-focused retail thinking"
      ]
    },
    {
      id: "marketing",
      title: "Marketing Expertise",
      teaser: "From consumer psychology to trade show activations, applying strategic insight.",
      iconName: "Target",
      category: "Core Capability",
      content: `Nthabiseng’s marketing background includes customer engagement, market research, strategic sales techniques, brand activations, consumer behaviour understanding, marketing communication, campaign support, brand storytelling, and experiential marketing exposure.`,
      highlights: [
        "Customer engagement & relations",
        "Market research execution & synthesis",
        "Strategic sales campaigns & direct selling",
        "Mapping consumer behavior dynamics",
        "Brand storytelling and communications",
        "Experiential brand activation setups"
      ]
    },
    {
      id: "research",
      title: "Research Excellence",
      teaser: "Winner of the UJ CBE Honours Research Presentation 2025: Generation Z's AR retailing.",
      iconName: "Award",
      category: "Academic",
      content: `Nthabiseng was part of the winning team in the University of Johannesburg College of Business and Economics Honours Research Poster Presentation 2025. Her group won 1st place for the project:

“Feels Human: Generation Z’s Augmented Reality Shopping.”

The research explored how augmented reality and emotion influence digital shopping experiences, particularly among Generation Z consumers. The project reflects her interest in marketing research, consumer behaviour, technology-driven retail, and the future of digital customer experiences.`,
      highlights: [
        "Winning study: “Anthropomorphism and Attitudes in Generation Z’s Use of AR Retail Assistants.”",
        "1st Place Team out of UJ's Honours cohort",
        "Investigated digital interaction & humanized brand interfaces",
        "Presented comprehensive research findings to academic panels"
      ]
    },
    {
      id: "strategy",
      title: "Brand Strategy & Big Ideas",
      teaser: "Presented the Bokomo / PepsiCo Big Idea at M+C Saatchi Group with agency collaboration.",
      iconName: "Lightbulb",
      category: "Corporate Exposure",
      content: `Nthabiseng participated in the Bokomo / PepsiCo Big Idea presentation at M+C Saatchi Group on 15 October 2025. This experience exposed her to brand strategy, creative thinking, agency collaboration, and marketing storytelling in a high-stakes environment.

Collaborating with leading creative professionals, she successfully analyzed consumer insights to design scalable campaign ideas.`,
      highlights: [
        "Brand strategy development alongside creatives",
        "Direct corporate briefing with Bokomo & PepsiCo executives",
        "Campaign ideation & strategic narrative building",
        "Professional presentation at M+C Saatchi Group agency headquarters",
        "Synthesizing complex consumer shopping statistics"
      ]
    },
    {
      id: "recognition",
      title: "Peak Recognition",
      teaser: "Recognised at the 2025 Masakhane Peak Recognition ceremonies.",
      iconName: "Sparkles",
      category: "Achievement",
      content: `Nthabiseng was recognised at the 2025 Masakhane Peak Recognition. This recognition reflects her dedication, teamwork, professionalism, and contribution to growth within her work environment.`,
      highlights: [
        "2025 Masakhane Peak Recognition Awardee",
        "1st Place UJ CBE Honours Research Poster Presentation 2025",
        "Brand Strategy presenter at agency level (M+C Saatchi Group)",
        "Accomplished academic tracks with multiple excellence awards"
      ]
    },
    {
      id: "leadership",
      title: "Residence Leadership",
      teaser: "Served as Treasurer for Ndlovukazi Ladies Residence at University of Johannesburg.",
      iconName: "Users",
      category: "Leadership",
      meta: {
        role: "Residence Treasurer",
        company: "Ndlovukazi Ladies Residence (UJ)",
        period: "Jan 2021 – Dec 2021",
        location: "Johannesburg, South Africa"
      },
      content: `Nthabiseng served as Treasurer for Ndlovukazi Ladies Residence at the University of Johannesburg from January 2021 to December 2021. In this leadership role, she helped the residence raise funds for additional activities and supported financial planning for residence initiatives.`,
      highlights: [
        "Budgeting and bookkeeping of student residence funds",
        "Organizing successful community fundraising drives",
        "Representing Ndlovukazi residents in financial steering groups",
        "Fostering collaboration, planning, and task delegation"
      ]
    },
    {
      id: "contact",
      title: "Professional Contact Profile",
      teaser: "Available for corporate roles, marketing collaborations, and strategic sales positions.",
      iconName: "Mail",
      category: "Connection",
      content: `Location: City of Johannesburg, Gauteng, South Africa
LinkedIn: https://www.linkedin.com/in/nthabiseng-mohapi-984066218/

Nthabiseng is open to exploring corporate sales development, marketing coordination, brand activation management, and retail strategy roles across South Africa. Connect today to discuss roles or mutual collaborations!`,
      highlights: [
        "Location: Johannesburg, Gauteng, South Africa",
        "Email: prestonnyaningwe@gmail.com",
        "Phone: Available upon professional request",
        "LinkedIn: linkedin.com/in/nthabiseng-mohapi-984066218"
      ]
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case "FileText": return <FileText className="w-5 h-5" />;
      case "Briefcase": return <Briefcase className="w-5 h-5" />;
      case "Target": return <Target className="w-5 h-5" />;
      case "Award": return <Award className="w-5 h-5" />;
      case "Lightbulb": return <Lightbulb className="w-5 h-5" />;
      case "Sparkles": return <Sparkles className="w-5 h-5" />;
      case "Users": return <Users className="w-5 h-5" />;
      case "Mail": return <Mail className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const getColorTheme = (id: string) => {
    switch (id) {
      case "summary": return { bg: "hover:border-blush/35", text: "text-blush", iconBg: "bg-blush/10 text-blush", glow: "shadow-blush/5" };
      case "role": return { bg: "hover:border-coral/35", text: "text-coral", iconBg: "bg-coral/10 text-coral", glow: "shadow-coral/5" };
      case "marketing": return { bg: "hover:border-gold/35", text: "text-gold", iconBg: "bg-gold/10 text-gold", glow: "shadow-gold/5" };
      case "research": return { bg: "hover:border-lavender/35", text: "text-lavender", iconBg: "bg-lavender/10 text-lavender", glow: "shadow-lavender/5" };
      case "strategy": return { bg: "hover:border-blush/35", text: "text-blush", iconBg: "bg-blush/10 text-blush", glow: "shadow-blush/5" };
      case "recognition": return { bg: "hover:border-coral/35", text: "text-coral", iconBg: "bg-coral/10 text-coral", glow: "shadow-coral/5" };
      case "leadership": return { bg: "hover:border-gold/35", text: "text-gold", iconBg: "bg-gold/10 text-gold", glow: "shadow-gold/5" };
      case "contact": return { bg: "hover:border-lavender/35", text: "text-lavender", iconBg: "bg-lavender/10 text-lavender", glow: "shadow-lavender/5" };
      default: return { bg: "hover:border-blush/35", text: "text-blush", iconBg: "bg-blush/10 text-blush", glow: "shadow-blush/5" };
    }
  };

  const handleConnectAction = () => {
    window.open("https://www.linkedin.com/in/nthabiseng-mohapi-984066218/", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="profile" className="relative py-24 bg-white dark:bg-navy">
      {/* Visual Accents */}
      <div className="absolute top-1/4 right-[5%] w-[35vw] h-[35vw] rounded-full blob-glow-2 pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-[35vw] h-[35vw] rounded-full blob-glow-4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-coral mb-3"
          >
            Interactive Insights
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy dark:text-white"
          >
            Explore My Professional Profile
          </motion.h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 font-sans">
            Click on any profile card to dive into details, strengths, and leadership contexts.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-coral to-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Tile Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tilesData.map((tile, idx) => {
            const theme = getColorTheme(tile.id);
            return (
              <motion.div
                key={tile.id}
                id={`profile-tile-${tile.id}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => setSelectedTile(tile)}
                className={`glass-panel p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-lg ${theme.glow} ${theme.bg} cursor-pointer transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
              >
                {/* Micro reflection shine */}
                <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:animate-shine pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-xl ${theme.iconBg} transition-all duration-300`}>
                      {getIcon(tile.iconName)}
                    </div>
                    <span className="text-[10px] font-sans font-semibold tracking-wider uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-navy-dark px-2 py-1 rounded-md">
                      {tile.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-navy dark:text-white group-hover:text-blush transition-colors duration-300 mb-2">
                    {tile.title}
                  </h3>
                  
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-sans leading-relaxed mb-6">
                    {tile.teaser}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-coral dark:text-coral group-hover:translate-x-1 transition-transform duration-300 mt-auto">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal Pop-up component with AnimatePresence */}
        <AnimatePresence>
          {selectedTile && (
            <motion.div
              id="tile-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
              onClick={() => setSelectedTile(null)}
            >
              <motion.div
                id="tile-modal-card"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="w-full max-w-2xl bg-white dark:bg-navy rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-white/5 relative flex flex-col max-h-[85vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header glow strip */}
                <div className="h-2 w-full bg-gradient-to-r from-blush via-coral to-gold" />

                {/* Close Button */}
                <button
                  id="modal-close-btn"
                  onClick={() => setSelectedTile(null)}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal scroll area */}
                <div className="p-8 md:p-10 overflow-y-auto">
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className={`p-3.5 rounded-xl ${getColorTheme(selectedTile.id).iconBg}`}>
                      {getIcon(selectedTile.iconName)}
                    </div>
                    <div>
                      <span className="text-[10px] font-sans font-bold tracking-widest text-coral uppercase">
                        {selectedTile.category}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-navy dark:text-white">
                        {selectedTile.title}
                      </h3>
                    </div>
                  </div>

                  {/* Metadata display if exists */}
                  {selectedTile.meta && (
                    <div className="bg-gray-50 dark:bg-navy-dark/40 p-4 rounded-xl mb-6 text-xs md:text-sm grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 border border-gray-100 dark:border-white/5">
                      {selectedTile.meta.role && (
                        <div>
                          <span className="text-gray-400 block font-sans">Role</span>
                          <span className="font-semibold text-gray-800 dark:text-white">{selectedTile.meta.role}</span>
                        </div>
                      )}
                      {selectedTile.meta.company && (
                        <div>
                          <span className="text-gray-400 block font-sans">Organization</span>
                          <span className="font-semibold text-gray-800 dark:text-white">{selectedTile.meta.company}</span>
                        </div>
                      )}
                      {selectedTile.meta.period && (
                        <div>
                          <span className="text-gray-400 block font-sans">Timeline</span>
                          <span className="font-semibold text-gray-800 dark:text-white">{selectedTile.meta.period}</span>
                        </div>
                      )}
                      {selectedTile.meta.location && (
                        <div>
                          <span className="text-gray-400 block font-sans">Location</span>
                          <span className="font-semibold text-gray-800 dark:text-white">{selectedTile.meta.location}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Content paragraph */}
                  <div className="font-sans text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6 whitespace-pre-line">
                    {selectedTile.content}
                  </div>

                  {/* Bullet Highlights if exists */}
                  {selectedTile.highlights && selectedTile.highlights.length > 0 && (
                    <div className="mt-6">
                      <h4 className="font-sans text-xs font-bold tracking-widest text-navy dark:text-white uppercase mb-4">
                        Key Pillars & Takeaways
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedTile.highlights.map((hlt, i) => (
                          <div 
                            key={i} 
                            id={`modal-highlight-${selectedTile.id}-${i}`}
                            className="flex items-start gap-2.5 bg-gray-50/50 dark:bg-navy-dark/20 p-3 rounded-lg border border-gray-100/50 dark:border-white/5"
                          >
                            <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                            <span className="text-xs font-sans text-gray-700 dark:text-gray-300 leading-normal">
                              {hlt}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Special Call to action for Contact Tile */}
                  {selectedTile.id === "contact" && (
                    <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/5 text-center">
                      <button
                        id="modal-connect-btn"
                        onClick={handleConnectAction}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blush via-coral to-gold text-white font-sans text-sm font-bold tracking-wider hover:shadow-lg hover:shadow-blush/20 cursor-pointer transition-all duration-300"
                      >
                        <Users className="w-4 h-4" />
                        <span>Connect with Nthabiseng</span>
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
