import styled, { css } from "styled-components";
import { grid1x2, sectionBlock } from "../styles.global";
import avatar from "../images/avatar.webp";
import "../font.css";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";

const HeroWrapper = styled.section`
  ${sectionBlock}
  ${grid1x2}
  padding: 0 2rem;

  @media screen and (min-width: 1200px) {
    max-width: 140rem;
    margin: 0 auto;
  }
`;

const HeroDetails = styled.div`
  text-align: center;

  @media screen and (min-width: 1024px) {
    // text-align: left;
  }
`;

const headingStyles = css`
  line-height: 4.5rem;
  font-family: myFont, sans-sherif;
  font-size: 5rem;
  font-weight: normal;
  transition: 0.3s ease-in-out;

  @media screen and (min-width: 480px) {
    font-size: 6rem;
    line-height: 5.5rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 7rem;
    line-height: 7.5rem;
  }
`;

const H1 = styled.h1`
  ${headingStyles}
  font-size: 5rem;
  color: #fff;
`;

const H2 = styled.h2`
  ${headingStyles}
  font-size: 5rem;
  color: var(--secondary-color);
`;

const Avatar = styled.img`
  border-radius: 50%;
  grid-row: 1;
  max-width: 30rem;
  box-shadow: 0 10px 2px 0 #000;
  width: 100%;
  padding: 0 0.5rem;
  position: relative;

  @media screen and (min-width: 500px) {
    max-width: 40rem;
  }
  @media screen and (min-width: 768px) {
    box-shadow: 0 15px 2px 0 #000;
    grid-column: 2;
    max-width: 55rem;
  }
`;

const HorizontalLine = styled.hr`
  margin: 2rem 0;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

const Greeting = styled.p`
  font-family: myFont;
  font-size: 3rem;
  color: var(--primary-color);
  font-size: 3rem;
`;

const AboutLink = styled.button`
  border-radius: var(--border-radius);
  margin-left: 1rem;
  padding: 0.8rem 2rem;
  font-size: 1.8rem;
  color: #fff;
  border: 0;
  background-color: var(--accent-color);
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroDetails>
        <Greeting>Hello, my name is</Greeting>
        <H1>Justin Alexander</H1>
        <H2>Frontend Developer</H2>
        <HorizontalLine></HorizontalLine>
        <IconWrapper>
          <TbBrandGithubFilled size="30px" color="#fff" />
          <FaLinkedinIn size="30px" color="#fff" />
          <AboutLink>View Bio</AboutLink>
        </IconWrapper>
      </HeroDetails>
      <Avatar src={avatar} alt="" />
    </HeroWrapper>
  );
};

export default Hero;
