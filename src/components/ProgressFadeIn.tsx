import { easeIn, easeInOut, motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
  index: number;
  initial?: string;
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
      duration: 0.3,
      delay: 0.4 + index * 0.1,
    },
  }),
};

const fadeInAnimationVariantsLargeScreen = {
  initial: {
    opacity: 0,
    x: -30,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      delay: 0.4 + index * 0.1,
    },
  }),
};

const ProgressFadeIn = ({ children, index, initial = "initial" }: Props) => {
  const [isLargeScreen, setIsLargeScreen] = useState(
    window.matchMedia("(min-width: 1250px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1250px)");
    const handleMediaChange = (e: MediaQueryListEvent) =>
      setIsLargeScreen(e.matches);

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  const variants = isLargeScreen
    ? fadeInAnimationVariantsLargeScreen
    : fadeInAnimationVariants;

  return (
    <motion.div
      variants={variants}
      initial={initial}
      animate="animate"
      custom={index}
    >
      {children}
    </motion.div>
  );
};

export default ProgressFadeIn;
