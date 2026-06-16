import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Cypel transformed our security posture from reactive to strategic. His ability to translate complex risk into board-level decisions is unmatched.",
    name: "Sarah Levin",
    role: "CTO, Fintech Scale-up",
  },
  {
    quote:
      "Working with Cypel, we passed SOC 2 Type 2 with zero findings. He built our GRC program with precision and clarity.",
    name: "David Cohen",
    role: "VP Engineering, Payments Co.",
  },
  {
    quote:
      "Our phishing click rate dropped by over 70% within months. Cypel's awareness program actually engages employees instead of boring them.",
    name: "Maya Rosen",
    role: "Head of People Ops",
  },
  {
    quote:
      "A rare blend of deep technical expertise and business acumen. Cypel delivers measurable ROI — not security theater.",
    name: "Jonathan Mor",
    role: "CEO, Crypto Infrastructure",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 relative">
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-accent/10 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="font-mono text-primary text-xs uppercase tracking-[0.3em]">
            // Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6 tracking-tight">
            Trusted by <span className="text-gradient">Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What executives and engineering leaders say about working together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="glow-border p-8 relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/15 group-hover:text-primary/30 transition-colors" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground/90 text-lg leading-relaxed mb-6">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-border/40">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-display font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground font-mono">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
