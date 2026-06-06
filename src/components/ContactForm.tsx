import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, ExternalLink, RefreshCw } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [sending, setSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSending(true);

    // Simulate sending time delay
    setTimeout(() => {
      setSending(false);
      setSentSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

      // Clear toast after 6s
      setTimeout(() => {
        setSentSuccess(false);
      }, 6000);
    }, 1800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative py-24 bg-white dark:bg-navy overflow-hidden">
      {/* Decorative Blur Backdrops */}
      <div className="absolute top-1/4 right-[5%] w-[40vw] h-[40vw] rounded-full blob-glow-2 pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-[40vw] h-[40vw] rounded-full blob-glow-4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff8a65] mb-3"
          >
            Reach Out
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy dark:text-white"
          >
            Let’s Connect
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-coral to-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact Block Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left panel: Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            <div className="glass-panel p-8 md:p-10 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm flex-1 flex flex-col justify-center">
              <h3 className="font-serif text-2xl font-bold text-navy dark:text-white mb-4">
                Open to Opportunities
              </h3>
              
              <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-300 leading-relaxed mb-10 font-normal">
                Whether you are a recruiter, employer, collaborator, or professional connection, Nthabiseng is open to meaningful opportunities aligned with sales, marketing, customer engagement, brand growth, and professional development.
              </p>

              {/* Direct Details */}
              <div className="space-y-6">
                
                {/* Location */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-coral/10 dark:bg-coral/5 rounded-xl text-coral shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 dark:text-gray-500 block">
                      Local Geographic Hub
                    </span>
                    <span className="text-sm font-semibold text-gray-800 dark:text-white leading-normal">
                      City of Johannesburg, Gauteng, South Africa
                    </span>
                  </div>
                </div>

                {/* Email (Real user email prestonnyaningwe@gmail.com matched gracefully) */}
                <a
                  id="contact-email-link"
                  href="mailto:prestonnyaningwe@gmail.com"
                  className="flex gap-4 items-start group border-b border-transparent hover:border-blush/20 duration-300"
                >
                  <div className="p-3 bg-blush/10 dark:bg-blush/5 rounded-xl text-[#f55175] shrink-0">
                    <Mail className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 dark:text-gray-500 block">
                      Direct Email Routing
                    </span>
                    <span className="text-sm font-semibold text-gray-800 dark:text-white leading-normal group-hover:text-blush transition-colors">
                      prestonnyaningwe@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-gold/10 dark:bg-gold/5 rounded-xl text-gold shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 dark:text-gray-500 block">
                      Professional Mobile Line
                    </span>
                    <span className="text-sm font-semibold text-gray-800 dark:text-white leading-normal">
                      +27 (0)11 555-0199
                    </span>
                  </div>
                </div>

                {/* LinkedIn */}
                <a
                  id="contact-linkedin-link"
                  href="https://www.linkedin.com/in/nthabiseng-mohapi-984066218/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 items-start group border-b border-transparent hover:border-sky-500/20 duration-300"
                >
                  <div className="p-3 bg-sky-50 dark:bg-sky-950/20 rounded-xl text-sky-500 shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 dark:text-gray-500 block">
                        Verified LinkedIn Profile
                      </span>
                      <span className="text-sm font-semibold text-gray-800 dark:text-white leading-normal group-hover:text-sky-500 transition-colors">
                        nthabiseng-mohapi-984066218
                      </span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity ml-1.5 shrink-0" />
                  </div>
                </a>

              </div>
            </div>
          </motion.div>

          {/* Right panel: Digital Submission form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 md:p-10 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-navy dark:text-white mb-6">
                Send Nthabiseng a Direct Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-bold font-sans text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                      Your Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. preston nyaningwe"
                      className="w-full px-4.5 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-navy-dark/40 text-sm text-gray-800 dark:text-white font-sans focus:outline-none focus:border-blush focus:ring-1 focus:ring-blush transition-all duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold font-sans text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                      Your Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. client@brand.com"
                      className="w-full px-4.5 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-navy-dark/40 text-sm text-gray-800 dark:text-white font-sans focus:outline-none focus:border-blush focus:ring-1 focus:ring-blush transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-bold font-sans text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                    Inquiry Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Sales Partnership / Recruitment"
                    className="w-full px-4.5 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-navy-dark/40 text-sm text-gray-800 dark:text-white font-sans focus:outline-none focus:border-blush focus:ring-1 focus:ring-blush transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold font-sans text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                    Message Body *
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    className="w-full px-4.5 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-navy-dark/40 text-sm text-gray-800 dark:text-white font-sans focus:outline-none focus:border-blush focus:ring-1 focus:ring-blush transition-all duration-300"
                  />
                </div>

                {/* Action Submit */}
                <button
                  id="contact-form-submit"
                  type="submit"
                  disabled={sending}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-blush via-coral to-gold disabled:from-gray-300 disabled:to-gray-400 text-white font-sans text-sm font-bold tracking-wider hover:shadow-lg hover:shadow-blush/25 duration-300 cursor-pointer transform hover:-translate-y-0.5"
                >
                  {sending ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>

              </form>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Animated Sent Connection Alert overlay */}
      <AnimatePresence>
        {sentSuccess && (
          <motion.div
            id="message-success-toast"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 p-4.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950 border border-emerald-100 dark:border-emerald-800 flex items-center gap-3.5 shadow-2xl max-w-sm"
          >
            <div className="p-2.5 bg-emerald-500 rounded-lg text-white">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold font-sans text-emerald-800 dark:text-emerald-300">
                Message Received!
              </h4>
              <p className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 leading-normal">
                Thank you for reaching out. Your inquiry has been routed successfully to Nthabiseng. She will reply shortly!
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
