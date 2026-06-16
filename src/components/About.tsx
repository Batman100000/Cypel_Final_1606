import { motion } from "framer-motion";
import { Shield, FileCheck, Users, Brain, Scale, Lock, UserCheck, BadgeCheck, ClipboardList, Bot, FileQuestion, Sparkles, Cpu, Globe, Fish, Presentation } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: Shield,
      title: "vCISO Services",
      description: "Strategic security leadership on-demand. Develop security roadmaps, manage risk posture, and provide executive-level guidance.",
    },
    {
      icon: FileCheck,
      title: "GRC & Compliance",
      description: "Navigate complex regulatory frameworks including SOC 2, ISO 27001, PCI DSS, NIST, SOX ITGC, and NYDFS with zero-finding audits.",
    },
    {
      icon: BadgeCheck,
      title: "Security Certifications",
      description: "End-to-end readiness and audit support for SOC 2 Type 2, ISO 27001/27017/27018, PCI DSS, and HIPAA — from gap analysis to certification.",
    },
    {
      icon: ClipboardList,
      title: "Risk Assessment",
      description: "Structured risk assessments aligned with NIST, ISO 31000, and industry frameworks — quantifying exposure and prioritizing remediation.",
    },
    {
      icon: UserCheck,
      title: "DPO Services",
      description: "Outsourced Data Protection Officer for GDPR, CCPA, and Israeli Privacy Law compliance — privacy programs, DPIAs, and data subject rights.",
    },
    {
      icon: Users,
      title: "Third-Party Risk Management",
      description: "Build and lead enterprise TPRM programs from the ground up, achieving significant cost savings and risk reduction.",
    },
    {
      icon: Brain,
      title: "Security Awareness Training",
      description: "Design and implement innovative awareness programs that achieve measurable results — up to 80% phishing risk reduction.",
    },
    {
      icon: Scale,
      title: "Risk & Security Strategy",
      description: "Strategic recommendations aligned with business objectives and growth plans, translating risk into board-level decisions.",
    },
    {
      icon: Lock,
      title: "AI Security",
      description: "Navigate the evolving landscape of AI security, ensuring your organization leverages AI safely and compliantly.",
    },
    {
      icon: Bot,
      title: "Security AI Agents",
      description: "Design, deploy, and govern AI agents for security operations — automating triage, compliance evidence, threat analysis, and risk workflows.",
    },
    {
      icon: FileQuestion,
      title: "DDQ & Security Questionnaires",
      description: "Expert handling of Due Diligence Questionnaires, RFPs, and vendor security assessments — accurate, timely responses that accelerate sales cycles.",
    },
    {
      icon: Sparkles,
      title: "Secure AI Engineering",
      description: "Rapid, AI-assisted product development — turning ideas into working software in days, not months, with security baked in from day one.",
    },
    {
      icon: Cpu,
      title: "AI Agents",
      description: "Custom AI agents that automate workflows, handle repetitive tasks, and scale your team — designed, deployed, and governed responsibly.",
    },
    {
      icon: Globe,
      title: "Secure Websites",
      description: "Beautiful, modern websites — landing pages, portfolios, and marketing sites that convert, with security and performance built in.",
    },
    {
      icon: Fish,
      title: "AI Phishing Campaigns",
      description: "Realistic, AI-powered phishing simulations that adapt to your team — measure exposure, train in the moment, and shrink risk over time.",
    },
    {
      icon: Presentation,
      title: "Security Awareness Sessions",
      description: "Engaging live sessions and workshops for teams and leadership — practical, story-driven, and tailored to your industry and threats.",
    },
  ];

  return (
    <section id="services" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="font-mono text-primary text-xs uppercase tracking-[0.3em]">// What I Offer</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6 tracking-tight">
            Cybersecurity <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive security solutions tailored for enterprises and fintechs,
            backed by proven results and deep industry expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative glow-border p-8 transition-all duration-500"
            >
              {/* corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/40 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:from-primary/40 group-hover:to-accent/40 transition-all">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-glow transition-colors" />
                <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
