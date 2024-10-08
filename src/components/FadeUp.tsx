import { easeIn, motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const FadeUp = ({ children }: Props) => {
  const defaultAnimations = {
    hidden: {
      y: 60,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={defaultAnimations}
      initial="hidden"
      animate="hidden"
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: easeIn }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
