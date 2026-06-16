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
        style={{ y: y1 }}
        className="absolute -top-40 -left-40 w-[55vw] h-[55vw] rounded-full bg-cyan-500/8 blur-[120px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/3 -right-40 w-[50vw] h-[50vw] rounded-full bg-cyan-400/5 blur-[120px]"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-0 left-1/3 w-[40vw] h-[40vw] rounded-full bg-slate-600/5 blur-[120px]"
      />
    </div>
  );
};

export default ScrollFX;
