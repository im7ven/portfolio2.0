import styled, { css } from "styled-components";
import "../font.css";
import avatar from "../images/avatar.webp";
import { grid1x2, sectionBlock } from "../styles.global";
import RevealAnimation from "./RevealAnimation";
import { BiSolidUserDetail } from "react-icons/bi";
import { IoMdDownload } from "react-icons/io";

const HeroWrapper = styled.section`
  ${sectionBlock}
  ${grid1x2}
  padding: 0 2rem;
  max-width: 125rem;
  margin: 0 auto;
`;

const HeroDetails = styled.div`
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

const AuthorHeading = css`
  line-height: 4.5rem;
  font-family: myFont, sans-sherif;
  font-size: 5rem;
  font-weight: normal;
  transition: 0.3s ease-in-out;

  @media screen and (min-width: 768px) {
    font-size: 9rem;
    line-height: 7.5rem;
    max-width: 45rem;
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

const AvatarWrapper = styled.div`
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
    max-width: 55rem;
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
  gap: 2rem;
`;

const AboutBtn = styled.button`
  border-radius: var(--border-radius);
  display: flex;
  gap: 0.6rem;
  align-items: center;
  margin: 2rem 0 0 0;
  padding: 0.8rem 2rem;
  // text-transform: uppercase;
  font-weight: 300;
  font-size: 1.7rem;
  color: #fff;
  border: 1px solid white;
  background: 0;
`;

const ResumeBtn = styled(AboutBtn)`
  background: var(--primary-color);
  border: 0;
`;

const Hero = () => {
  return (
    <HeroWrapper>
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
            <AboutBtn>
              <BiSolidUserDetail size="26px" />
              View Bio
            </AboutBtn>
            <ResumeBtn>
              <IoMdDownload size="26px" />
              Resume
            </ResumeBtn>
          </BtnWrapper>
        </RevealAnimation>
      </HeroDetails>
      <AvatarWrapper>
        <RevealAnimation overflow="visible">
          <Avatar src={avatar} alt="Avatar" />
        </RevealAnimation>
      </AvatarWrapper>
    </HeroWrapper>
  );
};

export default Hero;
