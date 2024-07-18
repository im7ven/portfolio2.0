import { motion, useInView, useAnimation, easeIn } from "framer-motion";
import { ReactNode, useRef, useEffect } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
  width?: "fit-content" | "100%";
  overflow?: "hidden" | "visible";
}

const RevealWrapper = styled(motion.div)<Props>`
  position: relative;
  overflow: ${(props) => props.overflow};
  width: ${(props) => props.width};

  &.avatar {
    overflow: visible;
  }
`;

const Slider = styled(motion.div)`
  position: absolute;
  top: 4px;
  bottom: 4px;
  left: 0;
  right: 0;
  z-index: 7;
  background: var(--accent-color);
`;

const RevealAnimation = ({
  children,
  width = "fit-content",
  overflow = "hidden",
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);
  return (
    <RevealWrapper ref={ref} width={width} overflow={overflow}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <Slider
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: easeIn }}
      />
    </RevealWrapper>
  );
};

export default RevealAnimation;
