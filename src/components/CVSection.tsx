import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Download, FileText, CheckCircle, Briefcase, Award, MapPin, UserCheck, ShieldCheck } from "lucide-react";

export default function CVSection() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const keyFacts = [
    { label: "Current Role", val: "Sales Representative at Clover S.A.", icon: <Briefcase className="w-4 h-4 text-blush" /> },
    { label: "Domain Fields", val: "Sales, Marketing, Customer Engagement", icon: <Award className="w-4 h-4 text-coral" /> },
    { label: "Education Focus", val: "University of Johannesburg", icon: <UserCheck className="w-4 h-4 text-gold" /> },
    { label: "Geographic Hub", val: "Johannesburg, South Africa", icon: <MapPin className="w-4 h-4 text-lavender" /> },
    { label: "Key Strengths", val: "Sales, Marketing, Research, Communication, Leadership", icon: <ShieldCheck className="w-4 h-4 text-emerald-500" /> }
  ];

  const handleDownload = () => {
    setDownloadSuccess(true);
    // Trigger download of a sample / mocked PDF path safely
    const link = document.createElement("a");
    link.href = "#";
    link.setAttribute("download", "Nthabiseng-Mohapi-CV.pdf");
    document.body.appendChild(link);
    // We clean up immediately
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);

    // Fade notification out
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 4500);
  };

  return (
    <section id="download-cv-section" className="relative py-24 bg-gray-50/50 dark:bg-navy-dark/40 overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/4 left-5 w-[30vh] h-[30vh] rounded-full blob-glow-1 pointer-events-none" />
      <div className="absolute bottom-1/4 right-5 w-[30vh] h-[30vh] rounded-full blob-glow-3 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f55175] mb-3"
          >
            Curriculum Vitae
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy dark:text-white"
          >
            Download My CV
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blush to-coral mx-auto mt-4 rounded-full" />
        </div>

        {/* CV Presentation Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="glass-panel p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-white/5 shadow-xl relative overflow-hidden"
        >
          {/* Subtle design header overlay lines */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blush via-coral to-gold" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Visual CV Paper Graphic on Left */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-44 h-56 bg-white dark:bg-navy-dark rounded-2xl border border-gray-200 dark:border-white/10 p-4 shadow-lg transform -rotate-2 hover:rotate-0 hover:scale-105 duration-300 cursor-default select-none group">
                
                {/* Simulated Text Lines */}
                <div className="w-10 h-3 bg-gradient-to-r from-blush to-coral rounded-md mb-4" />
                <div className="w-full h-1 bg-gray-200 dark:bg-white/10 rounded-full mb-2" />
                <div className="w-5/6 h-1 bg-gray-100 dark:bg-white/5 rounded-full mb-3" />
                
                <div className="space-y-1.5 mb-4">
                  <div className="w-full h-1 bg-gray-200 dark:bg-white/10 rounded-full" />
                  <div className="w-full h-1 bg-gray-100 dark:bg-white/5 rounded-full" />
                  <div className="w-3/4 h-1 bg-gray-100 dark:bg-white/5 rounded-full" />
                </div>

                <div className="space-y-1.5 mb-5">
                  <div className="w-full h-1 bg-gray-200 dark:bg-white/10 rounded-full" />
                  <div className="w-full h-1 bg-gray-100 dark:bg-white/5 rounded-full" />
                  <div className="w-5/6 h-1 bg-gray-100 dark:bg-white/5 rounded-full" />
                </div>

                {/* Micro floating icon badge */}
                <div className="absolute -bottom-3 -right-3 p-2 bg-gradient-to-tr from-[#f55175] to-[#ff8a65] text-white rounded-full shadow-md shadow-blush/25 group-hover:scale-110 duration-300">
                  <FileText className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Resume facts info text on right */}
            <div className="md:col-span-8">
              <h3 className="font-serif text-2xl font-bold text-navy dark:text-white mb-4">
                Professional Credentials Overview
              </h3>
              
              <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-300 leading-relaxed mb-8">
                Nthabiseng Mohapi is a sales and marketing professional with experience in sales representation, customer engagement, brand activations, administration, market research, and leadership. She has worked in both corporate and university environments and continues to develop her marketing expertise through academic and professional growth.
              </p>

              {/* Highlight summary facts */}
              <div className="space-y-3.5 mb-8">
                {keyFacts.map((fact, idx) => (
                  <div 
                    key={idx} 
                    id={`cv-fact-${idx}`}
                    className="flex gap-3 items-center border-b border-gray-100 dark:border-white/5 pb-2.5"
                  >
                    <div className="p-1.5 rounded-lg bg-gray-50 dark:bg-navy-dark shrink-0">
                      {fact.icon}
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 dark:text-gray-500 block">
                        {fact.label}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-white leading-normal">
                        {fact.val}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action trigger button */}
              <button
                id="download-cv-btn"
                onClick={handleDownload}
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-blush via-coral to-gold text-white font-sans text-sm font-bold tracking-wider hover:shadow-lg hover:shadow-blush/20 cursor-pointer duration-300 transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>Download Full CV (PDF)</span>
              </button>
            </div>

          </div>
        </motion.div>

        {/* Animated Success Notification */}
        <AnimatePresence>
          {downloadSuccess && (
            <motion.div
              id="download-success-toast"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-6 right-6 z-50 p-4.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950 border border-emerald-100 dark:border-emerald-800 flex items-center gap-3 shadow-xl max-w-sm"
            >
              <div className="p-2 bg-emerald-500 rounded-lg text-white">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold font-sans text-emerald-800 dark:text-emerald-300">
                  CV Download Initiated Successfully
                </h4>
                <p className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1">
                  File name: <span className="font-mono">Nthabiseng-Mohapi-CV.pdf</span> is ready.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
