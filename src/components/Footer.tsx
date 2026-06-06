import { Link } from "lucide-react";
import { Linkedin, Mail, FileText, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer
      id="main-footer"
      className="bg-navy-dark text-white border-t border-white/5 py-16 relative overflow-hidden"
    >
      {/* Background ambient circular highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full blur-[150px] bg-gradient-to-r from-blush/5 to-coral/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-white/5">
          
          {/* Logo Brand on left */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blush via-coral to-gold flex items-center justify-center font-serif text-base font-bold text-navy shadow-inner shadow-white/30">
                NM
              </div>
              <span className="font-serif text-xl font-bold tracking-tight">
                Nthabiseng <span className="text-blush italic">Mohapi</span>
              </span>
            </div>

            <p className="text-xs text-gray-400 font-sans tracking-wide uppercase font-semibold">
              Sales S.A. Professional & Marketing Specialist
            </p>

            <p className="text-xs text-gray-500 leading-relaxed font-sans max-w-sm font-normal">
              An award-winning graduate and representative dedicated to driving revenue growth, understanding customer engagement, and representing leading consumer brands with strategic confidence.
            </p>
          </div>

          {/* Quick links on middle */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-[#f76c8c]">
              Portfolio Index
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 font-sans font-medium">
              <button onClick={() => handleScrollTo("home")} className="hover:text-white transition-colors cursor-pointer text-left">Home</button>
              <button onClick={() => handleScrollTo("about")} className="hover:text-white transition-colors cursor-pointer text-left">About</button>
              <button onClick={() => handleScrollTo("profile")} className="hover:text-white transition-colors cursor-pointer text-left">Profile</button>
              <button onClick={() => handleScrollTo("experience")} className="hover:text-white transition-colors cursor-pointer text-left">Experience</button>
              <button onClick={() => handleScrollTo("education")} className="hover:text-white transition-colors cursor-pointer text-left">Education</button>
              <button onClick={() => handleScrollTo("skills")} className="hover:text-white transition-colors cursor-pointer text-left">Skills & Strengths</button>
              <button onClick={() => handleScrollTo("portfolio")} className="hover:text-white transition-colors cursor-pointer text-left">Portfolio</button>
              <button onClick={() => handleScrollTo("achievements")} className="hover:text-white transition-colors cursor-pointer text-left">Achievements</button>
            </div>
          </div>

          {/* Contact coordinates on right */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-[#ff8a65]">
              Core Connect
            </h4>
            
            <div className="flex flex-col gap-3">
              <a
                id="footer-linkedin-link"
                href="https://www.linkedin.com/in/nthabiseng-mohapi-984066218/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-sky-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 shrink-0 text-sky-500" />
                <span>Nthabiseng Mohapi</span>
              </a>

              <a
                id="footer-email-link"
                href="mailto:prestonnyaningwe@gmail.com"
                className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-[#f76c8c] transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0 text-[#f76c8c]" />
                <span>prestonnyaningwe@gmail.com</span>
              </a>

              <button
                id="footer-download-btn"
                onClick={() => handleScrollTo("download-cv-section")}
                className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-[#d4af37] transition-colors text-left cursor-pointer"
              >
                <FileText className="w-4 h-4 shrink-0 text-[#d4af37]" />
                <span>Download CV Summary</span>
              </button>
            </div>
          </div>

        </div>

        {/* Copyrights and Back-to-Top section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-[10px] md:text-xs text-gray-500 font-sans font-medium whitespace-pre-line leading-relaxed">
              © {new Date().getFullYear()} Nthabiseng Mohapi. All Rights Reserved.
              {"\n"}Digital Portfolio | Resume | Personal Brand Website
            </p>
          </div>

          {/* Back to top */}
          <button
            id="totopo-footer-btn"
            onClick={() => handleScrollTo("home")}
            className="p-3 bg-navy rounded-xl hover:bg-gradient-to-tr hover:from-[#f55175] hover:to-[#ff8a65] border border-white/5 text-gray-400 hover:text-white transition-all cursor-pointer shadow-tiny"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
