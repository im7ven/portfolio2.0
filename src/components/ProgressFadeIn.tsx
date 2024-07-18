import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  index: number;
  initial?: string;
  animate?: string;
}

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: -30,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.4 + index * 0.1,
    },
  }),
};

const ProgressFadeIn = ({ children, index, initial = "initial" }: Props) => {
  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial={initial}
      animate="animate"
      custom={index}
    >
      {children}
    </motion.div>
  );
};

export default ProgressFadeIn;
