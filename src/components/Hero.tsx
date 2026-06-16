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
    <section ref={ref} className="min-h-screen flex items-center relative overflow-hidden pt-20 bg-[radial-gradient(ellipse_at_top,_hsl(220_35%_14%)_0%,_hsl(222_47%_5%)_55%,_hsl(230_40%_4%)_100%)]">
      {/* Mature dark grid with parallax */}
      <motion.div
        style={{
          y: gridY,
          scale: gridScale,
          backgroundImage: [
            "linear-gradient(hsl(220 30% 22% / 0.5) 1px, transparent 1px)",
            "linear-gradient(90deg, hsl(220 30% 22% / 0.5) 1px, transparent 1px)",
          ].join(","),
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 25%, transparent 80%)",
          opacity: 0.35,
        }}
        className="absolute inset-0"
      />

      {/* Subtle vignette depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(222_47%_5%_/0.6)_70%,_hsl(222_47%_5%)_100%)]" />

      {/* Refined ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle_at_center,_hsl(220_30%_25%_/0.25),_transparent_60%)] blur-3xl" />

      {/* Fine noise texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />


      <motion.div style={{ opacity: opacityContent }} className="container mx-auto px-4 relative z-10 flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto pt-20 md:pt-0"
        >
          <motion.div style={{ y: yText }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm text-xs font-mono uppercase tracking-[0.2em] text-primary"
            >
              <Sparkles className="w-3.5 h-3.5" />
              DPO · CISO · vCISO · AI Security
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-[1.05] tracking-tight">
              <span className="block text-gradient">Elite Cybersecurity Services</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              AI-Driven Security. We make the impossible possible, empowering security teams to scale at the speed of light and defend what matters most.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#contact"
                className="relative group bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.6)]"
              >
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  <Shield className="w-5 h-5" />
                  Say Hello
                </span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#services"
                className="border border-border bg-card/40 backdrop-blur-sm text-foreground hover:bg-card/80 hover:border-accent/50 px-8 py-4 rounded-xl text-lg font-semibold transition-all"
              >
                See How We Help
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
                  className="rounded-lg border border-border/50 bg-card/20 backdrop-blur-md px-3 py-3 hover:border-primary/40 hover:bg-card/40 transition-all"
                >
                  <div className="text-lg md:text-xl font-display font-bold text-gradient">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono uppercase tracking-widest text-muted-foreground/80"
            >
              <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5" /> ISO 27001</span>
              <span className="opacity-30">·</span>
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> SOC 2</span>
              <span className="opacity-30">·</span>
              <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5" /> NIST CSF</span>
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
