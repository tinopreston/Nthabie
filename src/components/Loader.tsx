import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Progress calculation
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 4;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const fadeTimeout = setTimeout(() => {
        setShouldRender(false);
        onComplete();
      }, 600);
      return () => clearTimeout(fadeTimeout);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {shouldRender && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-navy text-white px-6 text-center select-none"
        >
          {/* Ambient Glowing Background Blobs */}
          <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] rounded-full blur-[120px] bg-blush/10 pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] rounded-full blur-[140px] bg-coral/10 pointer-events-none" />
          
          <div className="max-w-2xl w-full flex flex-col items-center">
            {/* Pulsing Animated Geometry logo */}
            <motion.div 
              id="loader-logo"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-24 h-24 mb-10 flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-full border border-dashed border-blush/30 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-2 rounded-full border border-double border-gold/40 animate-[spin_14s_linear_infinite_reverse]" />
              <motion.div 
                id="loader-center"
                animate={{ scale: [1, 1.05, 1] }} 
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-16 h-16 rounded-full bg-gradient-to-tr from-blush via-coral to-gold flex items-center justify-center font-serif text-2xl font-bold italic tracking-wider text-navy shadow-lg shadow-blush/25"
              >
                NM
              </motion.div>
            </motion.div>

            {/* Main Text Header */}
            <motion.h1 
              id="loader-title"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white leading-tight"
            >
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blush via-coral to-gold font-serif">Nthabiseng Mohapi’s</span>
              <br />
              <span className="text-xl md:text-2xl font-sans font-light tracking-[0.2em] text-gray-300 uppercase block mt-2">Digital Portfolio</span>
            </motion.h1>

            {/* Subtitle list */}
            <motion.p 
              id="loader-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xs md:text-sm font-sans tracking-[0.15em] text-lavender font-medium uppercase mb-12 flex flex-wrap justify-center gap-x-3 gap-y-1"
            >
              <span>Sales</span> • <span>Marketing</span> • <span>Customer Engagement</span> • <span>Growth</span>
            </motion.p>

            {/* Progress Container */}
            <div className="w-full max-w-sm bg-white/5 h-[3px] rounded-full overflow-hidden relative mb-3">
              <motion.div 
                id="loader-progress-bar"
                className="h-full bg-gradient-to-r from-blush via-coral to-gold rounded-full"
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            
            {/* Numerical Percentage */}
            <motion.span 
              id="loader-percentage"
              className="font-mono text-xs text-gold/80 tracking-widest font-medium"
            >
              {Math.min(Math.round(progress), 100)}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
