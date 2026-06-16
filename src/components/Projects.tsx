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
    <section id="results" className="py-32 relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="font-mono text-cyan-400 text-xs uppercase tracking-[0.3em]">// Results</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6 tracking-tight text-white">
            Proven Results
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Measurable business impact through strategic security leadership.
          </p>
        </motion.div>

        {/* Metrics Grid with HyperFrame on featured */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((item, index) => {
            const Card = (
              <div className="text-center h-full flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold text-cyan-400 mb-2">
                  {item.metric}
                </div>
                <div className="font-semibold text-white mb-1">{item.label}</div>
                <div className="text-sm text-slate-300">{item.description}</div>
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
                <div className="border border-slate-700/40 bg-slate-800/20 backdrop-blur-sm p-6 h-full rounded-lg hover:border-slate-600/60 hover:bg-slate-800/30 transition-all">{Card}</div>
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
            className="border border-slate-700/40 bg-slate-800/20 backdrop-blur-sm p-8 rounded-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-xl font-display font-bold text-white">Industries Served</h3>
            </div>
            <div className="space-y-1">
              {experience.map((exp, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-slate-700/30 last:border-0 group">
                  <span className="font-medium text-slate-200 group-hover:text-cyan-400 transition-colors">{exp.company}</span>
                  <span className="text-sm text-slate-400 font-mono">{exp.period}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border border-slate-700/40 bg-slate-800/20 backdrop-blur-sm p-8 rounded-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-xl font-display font-bold text-white">Certifications & Compliance</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert, index) => (
                <span
                  key={index}
                  className="border border-slate-600/50 bg-slate-800/30 text-slate-200 px-4 py-2 rounded-full text-sm font-medium font-mono hover:border-slate-500 hover:bg-slate-800/50 transition-colors"
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
