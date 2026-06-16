import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import cypelLogo from "@/assets/cypel-logo.png";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services", submenu: true },
  { href: "#results", label: "Results" },
  { href: "#contact", label: "Contact" },
];

const serviceOptions = [
  "vCISO Services",
  "GRC & Compliance",
  "Security Certifications",
  "Risk Assessment",
  "DPO Services",
  "Third-Party Risk Management",
  "Security Awareness Training",
  "AI Security",
  "Security AI Agents",
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 h-24 flex items-center justify-between">
        <a href="#" className="flex items-center gap-4 group">
          <motion.div className="relative w-16 h-16 md:w-20 md:h-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-8px] rounded-full border border-dashed border-cyan-500/40"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-12px] rounded-full border border-cyan-400/20"
            />
            <img
              src={cypelLogo}
              alt="Cypel logo"
              width={64}
              height={64}
              className="w-full h-full object-cover rounded-full ring-2 ring-cyan-500/40 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            />
          </motion.div>
          <span className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight hidden sm:inline">
            Cypel<span className="text-cyan-400">.</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.label} className="relative group">
              {l.submenu ? (
                <>
                  <button
                    onClick={() => setServiceOpen(!serviceOpen)}
                    className="relative text-sm font-medium text-slate-300 hover:text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-1"
                  >
                    {l.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute left-0 mt-0 w-56 bg-slate-800/95 backdrop-blur-sm border border-slate-700/50 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {serviceOptions.map((service) => (
                      <a
                        key={service}
                        href="#services"
                        className="block px-4 py-3 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-700/30 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        {service}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a
                  href={l.href}
                  className="relative text-sm font-medium text-slate-300 hover:text-white px-4 py-2 rounded-lg transition-colors"
                >
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:shadow-[0_0_25px_hsl(var(--primary)/0.5)] transition-all"
        >
          Book a Call
        </a>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-slate-800/95 backdrop-blur-xl border-b border-slate-700/50"
          >
            <ul className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.label}>
                  {l.submenu ? (
                    <>
                      <button
                        onClick={() => setServiceOpen(!serviceOpen)}
                        className="block py-2 text-slate-300 hover:text-cyan-400 transition-colors font-medium flex items-center gap-2 w-full"
                      >
                        {l.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${serviceOpen ? "rotate-180" : ""}`} />
                      </button>
                      {serviceOpen && (
                        <ul className="ml-4 mt-2 flex flex-col gap-2">
                          {serviceOptions.map((service) => (
                            <li key={service}>
                              <a
                                href="#services"
                                onClick={() => {
                                  setOpen(false);
                                  setServiceOpen(false);
                                }}
                                className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                              >
                                {service}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block py-2 text-cyan-400 font-semibold"
                >
                  Book a Call →
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
