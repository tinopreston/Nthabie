import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProfileTiles from "./components/ProfileTiles";
import ExperienceTimeline from "./components/ExperienceTimeline";
import EducationTimeline from "./components/EducationTimeline";
import SkillsGalaxy from "./components/SkillsGalaxy";
import PortfolioGrid from "./components/PortfolioGrid";
import AchievementsSection from "./components/AchievementsSection";
import JourneyGrid from "./components/JourneyGrid";
import CVSection from "./components/CVSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true); // Dark mode is default for that rich luxury aesthetic

  useEffect(() => {
    // Document level dark class toggle for Tailwind v4 support
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-white text-navy-dark dark:bg-navy dark:text-gray-100 transition-colors duration-400 font-sans selection:bg-blush/20 selection:text-blush">
      
      {/* Loading Overlay */}
      <Loader onComplete={() => setLoading(false)} />

      {/* Main Website Wrapper */}
      {!loading && (
        <div className="relative animate-[fadeIn_0.8s_ease_out_both]">
          
          {/* Header Navigation Bar */}
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          {/* Core Content Modules */}
          <main>
            <Hero />
            
            {/* Elegant wavy divider or curved line separations between main segments */}
            <div className="relative h-1 w-full bg-gradient-to-r from-transparent via-gray-200/40 dark:via-white/5 to-transparent" />
            <About />
            
            <div className="relative h-1 w-full bg-gradient-to-r from-transparent via-gray-200/40 dark:via-white/5 to-transparent" />
            <ProfileTiles />
            
            <div className="relative h-1 w-full bg-gradient-to-r from-transparent via-gray-200/40 dark:via-white/5 to-transparent" />
            <ExperienceTimeline />
            
            <div className="relative h-1 w-full bg-gradient-to-r from-transparent via-gray-200/40 dark:via-white/5 to-transparent" />
            <EducationTimeline />
            
            <div className="relative h-1 w-full bg-gradient-to-r from-transparent via-gray-200/40 dark:via-white/5 to-transparent" />
            <SkillsGalaxy />
            
            <div className="relative h-1 w-full bg-gradient-to-r from-transparent via-gray-200/40 dark:via-white/5 to-transparent" />
            <PortfolioGrid />
            
            <div className="relative h-1 w-full bg-gradient-to-r from-transparent via-gray-200/40 dark:via-white/5 to-transparent" />
            <AchievementsSection />
            
            <div className="relative h-1 w-full bg-gradient-to-r from-transparent via-gray-200/40 dark:via-white/5 to-transparent" />
            <JourneyGrid />
            
            <div className="relative h-1 w-full bg-gradient-to-r from-transparent via-gray-200/40 dark:via-white/5 to-transparent" />
            <CVSection />
            
            <div className="relative h-1 w-full bg-gradient-to-r from-transparent via-gray-200/40 dark:via-white/5 to-transparent" />
            <ContactForm />
          </main>

          {/* Global Branding Footer */}
          <Footer />

        </div>
      )}
    </div>
  );
}
