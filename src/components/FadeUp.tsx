import { easeIn, motion } from "framer-motion";
import { ReactNode } from "react";
import styled from "styled-components";

const FadeUpWrapper = styled.div`
  overflow: hidden;
  position: relative;
  padding: 0 0.5rem;

  &.span {
    width: 100%;
    margin: 0 auto;
  }
`;

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
    // <FadeUpWrapper>
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
    // </FadeUpWrapper>
  );
};

export default FadeUp;
