import { motion } from "framer-motion";
import { Shield, Zap, Users, Target } from "lucide-react";

const AboutCypel = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity First",
      description: "Transparent, honest, and ethical in every engagement",
    },
    {
      icon: Zap,
      title: "Results-Driven",
      description: "Measurable impact and tangible security improvements",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Work as an extension of your team, not just a vendor",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Leverage AI and modern approaches for scalable security",
    },
  ];

  return (
    <section id="about" className="py-32 relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-20">
            <span className="font-mono text-cyan-400 text-xs uppercase tracking-[0.3em]">// About Cypel</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6 tracking-tight text-white">
              Who We Are
            </h2>
          </div>

          <div className="space-y-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-slate-300 leading-relaxed"
            >
              <p className="mb-6">
                Cypel is a boutique cybersecurity firm specializing in strategic security leadership, GRC, and compliance.
                We work with enterprises and fintechs to build robust security programs that scale with their growth.
              </p>
              <p className="mb-6">
                Founded on the principle that security shouldn't be a barrier to business—it should be an enabler.
                We combine deep technical expertise with business acumen to deliver solutions that protect your organization
                while accelerating your mission.
              </p>
              <p>
                Whether you need a virtual CISO, help achieving SOC 2, or AI security guidance, we bring 15+ years of experience
                and a proven track record of zero-finding audits and measurable risk reduction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="border border-slate-700/40 bg-slate-800/20 backdrop-blur-sm p-6 rounded-lg"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                      <value.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-white">{value.title}</h3>
                  </div>
                  <p className="text-slate-300 text-sm">{value.description}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="border border-slate-700/40 bg-slate-800/20 backdrop-blur-sm p-8 rounded-lg text-center"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-4">Our Approach</h3>
            <p className="text-slate-300">
              We don't believe in one-size-fits-all security. Every organization is unique, and so is our approach.
              We listen, assess, and build tailored solutions that fit your risk tolerance, budget, and business goals.
              Security is a journey, not a destination—and we're here to guide you every step of the way.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCypel;
