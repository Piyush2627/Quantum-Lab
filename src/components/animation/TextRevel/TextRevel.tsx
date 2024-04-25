import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface TextRevelProps {
  children: string | JSX.Element | JSX.Element[];
  Animationdelay?: number;
}

function TextRevel({ children, Animationdelay }: TextRevelProps) {
  const ref = useRef(null);
  const inInView = useInView(ref, { once: true });
  const animationControl = useAnimation();
  useEffect(() => {
    if (inInView) {
      animationControl.start("visible");
    }
  }, [inInView]);
  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
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

export default TextRevel;
