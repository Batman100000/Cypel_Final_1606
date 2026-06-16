import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, MapPin, MessageCircle } from "lucide-react";
import HyperFrame from "./HyperFrame";

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-xs uppercase tracking-[0.3em]">// Get Started</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6 tracking-tight">
              Let's Secure <span className="text-gradient">Your Business</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to strengthen your security posture? Schedule a consultation to discuss
              how I can help protect and enable your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <div className="space-y-4">
              {[
                
                { icon: Phone, label: "Phone", value: "+972 52-837-3362", href: "tel:+972528373362" },
                { icon: MessageCircle, label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/972528373362", external: true },
                { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: "https://www.linkedin.com/in/asaf-apelbaum", external: true },
                { icon: MapPin, label: "Location", value: "Israel · Remote Available" },
              ].map((item) => {
                const Inner = (
                  <div className="flex items-center gap-4 glow-border p-5 group transition-all">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/40 group-hover:to-accent/40 transition-all">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{item.label}</div>
                      <div className="font-semibold text-foreground">{item.value}</div>
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
              <HyperFrame innerClassName="p-8">
                <h3 className="text-2xl font-display font-bold mb-6 text-foreground">Quick Inquiry</h3>
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
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                  />
                  <select className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground">
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
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none text-foreground placeholder:text-muted-foreground"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all"
                  >
                    Send Message
                  </motion.button>
                </form>
              </HyperFrame>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
