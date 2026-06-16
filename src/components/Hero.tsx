import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Shield, ChevronDown, Sparkles, Lock, Zap } from "lucide-react";
import cypelLogo from "@/assets/cypel-logo.png";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yLogo = useSpring(useTransform(scrollYProgress, [0, 1], [0, -180]), { stiffness: 80, damping: 20 });
  const scaleLogo = useSpring(useTransform(scrollYProgress, [0, 1], [1, 0.55]), { stiffness: 80, damping: 20 });
  const rotateLogo = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const gridScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const stats = [
    { value: "15+", label: "Years" },
    { value: "100+", label: "Projects" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center relative overflow-hidden pt-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(280_40%_20%_/0.15),_transparent_60%)] pointer-events-none" />


      <motion.div style={{ opacity: opacityContent }} className="container mx-auto px-4 relative z-10 flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto -mt-32 md:-mt-20"
        >
          <motion.div style={{ y: yText }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-slate-600/50 bg-slate-800/30 backdrop-blur-sm text-xs font-mono uppercase tracking-[0.2em] text-slate-300"
            >
              DPO · CISO · vCISO · AI Security
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-[1.05] tracking-tight text-white">
              Elite Cybersecurity Services
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Comprehensive security solutions tailored for enterprises and fintechs. Proven expertise, measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="bg-cyan-500 text-slate-950 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:bg-cyan-400"
              >
                Say Hello
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#services"
                className="border border-slate-600 bg-slate-800/30 backdrop-blur-sm text-white hover:bg-slate-800/60 hover:border-slate-500 px-8 py-4 rounded-lg text-lg font-semibold transition-all"
              >
                Learn More
              </motion.a>
            </div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-3 max-w-xl mx-auto"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-slate-700/40 bg-slate-800/20 backdrop-blur-md px-3 py-3 hover:border-slate-600/60 hover:bg-slate-800/30 transition-all"
                >
                  <div className="text-lg md:text-xl font-display font-bold text-cyan-400">{s.value}</div>
                  <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono uppercase tracking-widest text-slate-400"
            >
              <span>ISO 27001</span>
              <span className="opacity-40">·</span>
              <span>SOC 2</span>
              <span className="opacity-40">·</span>
              <span>NIST CSF</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
