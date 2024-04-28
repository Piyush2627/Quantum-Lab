import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface AnimateLeftProps {
  children: string | JSX.Element | JSX.Element[];
  Animationdelay?: number;
  className?: string;
}

function AnimateLeft({
  children,
  Animationdelay,
  className,
}: AnimateLeftProps) {
  const ref = useRef(null);
  const inInView = useInView(ref, { once: true });
  const animationControl = useAnimation();
  useEffect(() => {
    if (inInView) {
      animationControl.start("visible");
    }
  }, [inInView]);
  return (
    <div ref={ref} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 30 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={animationControl}
        transition={{ duration: 0.5, delay: Animationdelay }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default AnimateLeft;
