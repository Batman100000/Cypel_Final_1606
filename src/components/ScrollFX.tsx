import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Global scroll-reactive background effects: drifting aurora blobs
 * and a slow rotating conic glow that respond to page scroll.
 */
const ScrollFX = () => {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const hue = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ y: y1, filter: useTransform(hue, (h) => `hue-rotate(${h}deg)`) }}
        className="absolute -top-40 -left-40 w-[55vw] h-[55vw] rounded-full bg-primary/15 blur-[120px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/3 -right-40 w-[50vw] h-[50vw] rounded-full bg-accent/15 blur-[120px]"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-0 left-1/3 w-[40vw] h-[40vw] rounded-full bg-fuchsia-500/10 blur-[120px]"
      />
      <motion.div
        style={{ rotate }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vw] opacity-[0.07]"
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, hsl(var(--primary)) 0%, transparent 20%, hsl(var(--accent)) 50%, transparent 70%, hsl(var(--primary)) 100%)",
          }}
        />
      </motion.div>
    </div>
  );
};

export default ScrollFX;
