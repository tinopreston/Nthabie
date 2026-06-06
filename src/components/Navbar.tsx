import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Profile", href: "#profile" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link detection
      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const element = document.getElementById(link.href.substring(1));
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSegment(link.href.substring(1));
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(href.substring(1));
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
      setActiveSegment(href.substring(1));
    }
  };

  return (
    <>
      <nav
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "glass-nav shadow-lg py-3"
            : "background-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <a
            id="brand-logo"
            href="#home"
            className="flex items-center gap-2 group"
            onClick={(e) => handleNavClick(e, "#home")}
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blush via-coral to-gold flex items-center justify-center font-serif text-sm font-bold text-navy shadow-md shadow-blush/10 group-hover:scale-105 transition-transform duration-300">
              NM
            </div>
            <span className="font-serif text-lg font-bold tracking-tight text-navy dark:text-white group-hover:text-blush transition-colors duration-300">
              NM <span className="font-sans font-light text-xs uppercase tracking-widest text-coral ml-1">Portfolio</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSegment === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  id={`navlink-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 text-xs font-medium tracking-wide transition-all duration-300 rounded-md relative ${
                    isActive
                      ? "text-blush font-semibold"
                      : "text-gray-600 hover:text-navy dark:text-gray-300 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-blush to-coral rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Toggle buttons + Mobile trigger */}
          <div className="flex items-center gap-4">
            {/* Dark & Light toggle */}
            <motion.button
              id="theme-toggler"
              onClick={toggleDarkMode}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-full glass-panel text-gray-700 dark:text-gray-300 hover:text-blush dark:hover:text-gold transition-colors duration-300 cursor-pointer shadow-sm border border-black/5 dark:border-white/10"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-gold" /> : <Moon className="w-4 h-4 text-navy" />}
            </motion.button>

            {/* Hamburger mobile menu button */}
            <button
              id="hamburger-btn"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2.5 rounded-full glass-panel text-gray-700 dark:text-gray-300 cursor-pointer shadow-sm border border-black/5 dark:border-white/10"
              aria-label="Open Menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md lg:hidden flex justify-end"
          >
            <motion.div
              id="mobile-drawer-content"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
              className="w-full max-w-sm h-full bg-white dark:bg-navy flex flex-col p-8 shadow-2xl relative"
            >
              {/* Close Drawer Button */}
              <button
                id="drawer-close"
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full border border-gray-100 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-300 cursor-pointer transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-10 mt-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blush via-coral to-gold flex items-center justify-center font-serif text-sm font-bold text-navy">
                  NM
                </div>
                <span className="font-serif text-md font-bold tracking-tight text-navy dark:text-white">
                  Nthabiseng Mohapi
                </span>
              </div>

              {/* Drawer navigation links */}
              <div className="flex flex-col gap-2 overflow-y-auto pr-2">
                {navLinks.map((link, idx) => {
                  const isActive = activeSegment === link.href.substring(1);
                  return (
                    <motion.a
                      key={link.name}
                      id={`mobile-navlink-${link.name.toLowerCase()}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-blush/10 to-coral/10 text-blush font-semibold border-l-4 border-blush/80"
                          : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-navy dark:hover:text-white"
                      }`}
                    >
                      <span className="text-sm font-medium tracking-wide uppercase">{link.name}</span>
                      <span className="text-xs text-coral font-serif">→</span>
                    </motion.a>
                  );
                })}
              </div>

              {/* Bottom Credentials inside drawer */}
              <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/5">
                <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                  Sales S.A. & Marketing Specialist
                </p>
                <p className="text-[10px] text-gray-400/80 dark:text-gray-500/80 mt-1 font-mono">
                  City of Johannesburg, South Africa
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
