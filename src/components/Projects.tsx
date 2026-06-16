import { motion } from "framer-motion";
import { TrendingDown, DollarSign, Award, Building2, Briefcase } from "lucide-react";
import HyperFrame from "./HyperFrame";

const Projects = () => {
  const achievements = [
    {
      metric: "80%",
      label: "Phishing Risk Reduction",
      description: "Through innovative security awareness programs",
      icon: TrendingDown,
    },
    {
      metric: "$350K",
      label: "Annual Cost Savings",
      description: "Via strategic TPRM program implementation",
      icon: DollarSign,
    },
    {
      metric: "$5M+",
      label: "Budget Management",
      description: "Security investments with measurable ROI",
      icon: Briefcase,
    },
    {
      metric: "Zero",
      label: "Audit Findings",
      description: "Compliance audits with perfect records",
      icon: Award,
    },
  ];

  const experience = [
    { company: "Crypto & Digital Assets", period: "Enterprise Engagements" },
    { company: "Fintech & Trading Platforms", period: "Multi-Year Programs" },
    { company: "Banking & Financial Services", period: "Regulated Environments" },
    { company: "SaaS & Technology", period: "Growth-Stage Partners" },
  ];

  const certifications = ["SOC 2 Type 2", "ISO 27001/17/18", "PCI DSS Level 1", "CISO Certified"];

  return (
    <section id="results" className="py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="font-mono text-accent text-xs uppercase tracking-[0.3em]">// Track Record</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6 tracking-tight">
            Proven <span className="text-gradient">Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Measurable business impact through strategic security leadership.
          </p>
        </motion.div>

        {/* Metrics Grid with HyperFrame on featured */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((item, index) => {
            const Card = (
              <div className="text-center h-full flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                  {item.metric}
                </div>
                <div className="font-semibold text-foreground mb-1">{item.label}</div>
                <div className="text-sm text-muted-foreground">{item.description}</div>
              </div>
            );

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {index === 0 || index === 3 ? (
                  <HyperFrame innerClassName="p-6 h-full">{Card}</HyperFrame>
                ) : (
                  <div className="glow-border p-6 h-full">{Card}</div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Experience & Certifications */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glow-border p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">Industries Served</h3>
            </div>
            <div className="space-y-1">
              {experience.map((exp, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-border/40 last:border-0 group">
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">{exp.company}</span>
                  <span className="text-sm text-muted-foreground font-mono">{exp.period}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glow-border p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">Certifications & Compliance</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert, index) => (
                <span
                  key={index}
                  className="border border-accent/30 bg-accent/5 text-accent-glow px-4 py-2 rounded-full text-sm font-medium font-mono hover:bg-accent/10 transition-colors"
                >
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
