import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-slate-700/40 py-8 mt-12 bg-gradient-to-b from-slate-900 to-slate-950">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
      <p>© {new Date().getFullYear()} Cypel. All rights reserved.</p>
      <nav className="flex items-center gap-6">
        <Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Note</Link>
        <Link to="/accessibility" className="hover:text-cyan-400 transition-colors">הצהרת נגישות</Link>
      </nav>
    </div>
  </footer>
);

export default Footer;
