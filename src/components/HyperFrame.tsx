import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HyperFrameProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

/**
 * HyperFrame: animated conic-gradient border wrapper.
 * Use for premium card emphasis.
 */
const HyperFrame = ({ children, className, innerClassName }: HyperFrameProps) => {
  return (
    <div className={cn("hyper-frame", className)}>
      <div className={cn("hyper-frame-inner p-8", innerClassName)}>
        {children}
      </div>
    </div>
  );
};

export default HyperFrame;
