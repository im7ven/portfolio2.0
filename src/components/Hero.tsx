import { motion } from "framer-motion";
import { useState } from "react";
import { BiSolidUserDetail } from "react-icons/bi";
import { IoMdDownload } from "react-icons/io";
import styled, { css } from "styled-components";
import "../font.css";
import avatar from "../images/avatar.webp";
import { grid1x2, sectionBlock } from "../styles.global";
import AboutMe from "./AboutMe";
import RevealAnimation from "./RevealAnimation";

const HeroWrapper = styled.section`
  ${sectionBlock}
  ${grid1x2}
  padding: 0 2rem;
  max-width: 125rem;
  margin: 0 auto;
`;

const HeroDetails = styled.div`
  text-align: center;
  grid-row: 2;

  @media screen and (min-width: 768px) {
    text-align: left;
    grid-row: 1;
  }
`;

const AuthorHeading = css`
  line-height: 4.5rem;
  font-family: myFont, sans-sherif;
  font-size: 5rem;
  font-weight: normal;
  transition: 0.3s ease-in-out;

  @media screen and (min-width: 768px) {
    font-size: 7rem;
    line-height: 6rem;
    max-width: 45rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 9rem;
    line-height: 7.5rem;
  }
`;

const H1 = styled.h1`
  ${AuthorHeading}
  color: #fff;
`;

const Title = styled.h2`
  ${AuthorHeading}
  color: var(--secondary-color);
`;

const AvatarWrapper = styled(motion.div)`
  grid-row: 1;
  align-self: end;

  @media screen and (min-width: 768px) {
    align-self: center;
    grid-column: 2;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  grid-row: 1;
  max-width: 30rem;
  width: 100%;
  padding: 0 0.5rem;
  box-shadow: 0 8px 2px 0 #000;

  @media screen and (min-width: 768px) {
    grid-column: 2;
    max-width: 60rem;
  }
`;

const Greeting = styled.p`
  font-family: myFont;
  font-size: 3rem;
  color: var(--primary-color);
  font-size: 2.5rem;
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: start;
    gap: 1.5rem;
  }
`;

const AboutBtn = styled.button`
  border-radius: var(--border-radius);
  display: flex;
  gap: 0.6rem;
  align-items: center;
  margin: 2rem 0 0 0;
  font-weight: 300;
  font-size: 1.7rem;
  color: #fff;
  border: 1px solid white;
  background: 0;
  padding: 0.8rem 1.5rem;

  @media screen and (min-width: 768px) {
    padding: 0.8rem 2rem;
  }
`;

const ResumeBtn = styled(AboutBtn)`
  background: var(--primary-color);
  border: 0;
`;

const Hero = () => {
  const [showAbout, setShowAbout] = useState(false);

  const toggleShowAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    <HeroWrapper>
      {!showAbout ? (
        <>
          <HeroDetails>
            <RevealAnimation>
              <Greeting>Hello, my name is</Greeting>
            </RevealAnimation>
            <RevealAnimation>
              <H1>Justin Alexander</H1>
            </RevealAnimation>
            <RevealAnimation>
              <Title>Frontend Developer</Title>
            </RevealAnimation>
            <RevealAnimation>
              <BtnWrapper>
                <AboutBtn onClick={toggleShowAbout}>
                  <BiSolidUserDetail size="26px" />
                  View About
                </AboutBtn>
                <ResumeBtn>
                  <IoMdDownload size="26px" />
                  Resume
                </ResumeBtn>
              </BtnWrapper>
            </RevealAnimation>
          </HeroDetails>
          <AvatarWrapper animate>
            <RevealAnimation overflow="visible">
              <Avatar src={avatar} alt="Avatar" />
            </RevealAnimation>
          </AvatarWrapper>
        </>
      ) : (
        <div style={{ gridColumn: "span 2" }}>
          <AboutMe onHideAbout={toggleShowAbout} />
        </div>
      )}
    </HeroWrapper>
  );
};

export default Hero;
