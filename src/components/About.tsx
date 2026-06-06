import { motion } from "motion/react";
import { Quote, Users, Award, Milestone } from "lucide-react";

export default function About() {
  const stats = [
    {
      id: "stat-connections",
      icon: <Users className="w-5 h-5 text-blush" />,
      value: "500+",
      label: "Professional Connections",
      description: "Growing network of industry leaders, peers, and collaborators on LinkedIn."
    },
    {
      id: "stat-followers",
      icon: <Milestone className="w-5 h-5 text-coral" />,
      value: "900+",
      label: "LinkedIn Followers",
      description: "Engaging a network interested in professional insights, sales, and retail strategy."
    },
    {
      id: "stat-award",
      icon: <Award className="w-5 h-5 text-gold" />,
      value: "1st Place",
      label: "UJ CBE Honours Poster Winner",
      description: "Top research project in Generation Z's augmented reality shopping behavior."
    }
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-gray-50/50 dark:bg-navy-dark/40 overflow-hidden"
    >
      {/* Decorative radial gradients */}
      <div className="absolute top-1/3 left-[-15%] w-[45vw] h-[45vw] rounded-full blob-glow-1 pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-15%] w-[45vw] h-[45vw] rounded-full blob-glow-3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-blush mb-3"
          >
            Get to know me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy dark:text-white"
          >
            About Nthabiseng
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blush to-coral mx-auto mt-4 rounded-full" />
        </div>

        {/* Bento Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Narrative Blocks */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between gap-6"
          >
            <div className="glass-panel p-8 md:p-10 rounded-2xl border border-gray-100 dark:border-white/5 relative shadow-sm">
              <h3 className="font-serif text-2xl font-bold mb-4 text-navy dark:text-white">
                Driven by Strategy, Fueled by Connection
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Nthabiseng Mohapi is a passionate sales and marketing professional with a strong background in marketing, customer engagement, and business growth. She is dedicated to building strong client relationships, understanding customer needs, and applying strategic sales techniques to deliver meaningful results.
              </p>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Her professional journey combines practical sales experience with a strong academic foundation in marketing from the University of Johannesburg. She has gained experience across corporate sales, brand activations, administration, student support, direct selling, and leadership. Nthabiseng is always eager to learn, adapt, and contribute to dynamic working environments where creativity, strategy, people skills, and performance matter.
              </p>
            </div>

            {/* Premium Highlight Card */}
            <div className="p-1 rounded-2xl bg-gradient-to-r from-blush via-coral to-gold shadow-md">
              <div className="bg-white dark:bg-navy p-6 md:p-8 rounded-[14px]">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-blush/10 dark:bg-blush/5 rounded-xl text-blush">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-serif text-md md:text-lg italic text-navy dark:text-gray-200 leading-relaxed font-semibold">
                      “Marketing is not only about selling. It is about understanding people, creating value, and building relationships that last.”
                    </p>
                    <span className="inline-block mt-3 text-xs tracking-wider uppercase font-sans font-bold text-coral">
                      — Nthabiseng Mohapi
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6 h-full"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.id}
                id={stat.id}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="flex-1 glass-panel p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-center"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2.5 bg-gray-50 dark:bg-navy rounded-xl border border-gray-100 dark:border-white/5">
                    {stat.icon}
                  </div>
                  <span className="font-serif text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blush via-coral to-gold tracking-tight">
                    {stat.value}
                  </span>
                </div>
                <h4 className="font-sans text-xs md:text-sm font-semibold text-gray-800 dark:text-white mb-1 uppercase tracking-wider">
                  {stat.label}
                </h4>
                <p className="font-sans text-xs text-gray-500 dark:text-gray-400 font-normal leading-normal">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
