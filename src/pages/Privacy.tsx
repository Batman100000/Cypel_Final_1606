import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Privacy = () => (
  <>
    <Helmet>
      <title>Privacy Note — Cypel</title>
      <meta name="description" content="Privacy policy and data practices for Cypel." />
      <link rel="canonical" href="https://cypel.lovable.app/privacy" />
      <meta property="og:title" content="Privacy Note — Cypel" />
      <meta property="og:description" content="Privacy policy and data practices for Cypel." />
      <meta property="og:url" content="https://cypel.lovable.app/privacy" />
      <meta property="og:type" content="website" />
    </Helmet>
    <main className="min-h-dvh container mx-auto px-4 py-24 max-w-3xl">
      <Link to="/" className="text-primary hover:underline text-sm font-mono">← Back</Link>
      <h1 className="text-4xl md:text-5xl font-display font-bold mt-6 mb-8 tracking-tight">
        Privacy <span className="text-gradient">Note</span>
      </h1>
    <div className="space-y-4 text-foreground/90 leading-relaxed">
      <p>
        Cypel respects your privacy. This website does not collect, store, or sell
        personal data beyond what you voluntarily submit through the contact form.
      </p>
      <p>
        Information you provide (name, email, message) is used solely to respond to your inquiry and
        is not shared with third parties. We do not use tracking cookies or analytics that identify
        you personally.
      </p>
      <p>
        You may request access, correction, or deletion of any information you have submitted by
        contacting us via the channels listed on the homepage.
      </p>
      <p className="text-muted-foreground text-sm">Last updated: {new Date().getFullYear()}</p>
    </div>
  </main>
  </>
);

export default Privacy;
