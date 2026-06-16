import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, MapPin, MessageCircle } from "lucide-react";
import HyperFrame from "./HyperFrame";

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="font-mono text-cyan-400 text-xs uppercase tracking-[0.3em]">// Contact</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6 tracking-tight text-white">
              Let's Secure Your Business
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Ready to strengthen your security posture? Schedule a consultation to discuss how I can help protect and enable your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <div className="space-y-4">
              {[

                { icon: Phone, label: "Phone", value: "+972 52-837-3362", href: "tel:+972528373362" },
                { icon: MessageCircle, label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/972528373362", external: true },
                { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: "https://www.linkedin.com/in/asaf-apelbaum-cybersecurityai/", external: true },
                { icon: MapPin, label: "Location", value: "Israel · Remote Available" },
              ].map((item) => {
                const Inner = (
                  <div className="flex items-center gap-4 border border-slate-700/40 bg-slate-800/20 backdrop-blur-sm p-5 rounded-lg group transition-all hover:border-slate-600/60 hover:bg-slate-800/30">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all">
                      <item.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="font-mono text-xs uppercase tracking-wider text-slate-400">{item.label}</div>
                      <div className="font-semibold text-white">{item.value}</div>
                    </div>
                  </div>
                );

                return item.href ? (
                  <motion.a
                    key={item.label}
                    whileHover={{ x: 6 }}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    {Inner}
                  </motion.a>
                ) : (
                  <div key={item.label}>{Inner}</div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="border border-slate-700/40 bg-slate-800/20 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-2xl font-display font-bold mb-6 text-white">Quick Inquiry</h3>
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.open("https://www.linkedin.com/in/asaf-apelbaum", "_blank", "noopener,noreferrer");
                  }}
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all text-white placeholder:text-slate-400"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all text-white placeholder:text-slate-400"
                  />
                  <select className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all text-white">
                    <option value="">Select Service</option>
                    <option value="vciso">vCISO Services</option>
                    <option value="grc">GRC & Compliance</option>
                    <option value="certifications">Security Certifications (SOC 2, ISO)</option>
                    <option value="risk-assessment">Risk Assessment</option>
                    <option value="dpo">DPO Services</option>
                    <option value="tprm">Third-Party Risk Management</option>
                    <option value="training">Security Awareness Training</option>
                    <option value="ai">AI Security</option>
                    <option value="ai-agents">Security AI Agents</option>
                    <option value="ddq">DDQ & Security Questionnaires</option>
                  </select>
                  <textarea
                    placeholder="Tell me about your security needs..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none text-white placeholder:text-slate-400"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-cyan-500 text-slate-950 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-all"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
