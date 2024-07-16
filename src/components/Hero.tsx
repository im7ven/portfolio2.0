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
  max-width: 125rem;
  margin: 0 auto;
`;

const HeroDetails = styled.div`
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

const AuthorHeading = styled.h1`
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

const Avatar = styled.img`
  align-self: end;
  border-radius: 50%;
  grid-row: 1;
  max-width: 30rem;
  box-shadow: 0 10px 2px 0 #000;
  width: 100%;
  padding: 0 0.5rem;
  position: relative;

  @media screen and (min-width: 500px) {
    // max-width: 40rem;
  }

  @media screen and (min-width: 768px) {
    align-self: center;
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
  align-items: center;
`;

const Greeting = styled.p`
  font-family: myFont;
  font-size: 3rem;
  color: var(--primary-color);
  font-size: 2.5rem;
`;

const ButtonHover = styled.span`
  transition: all 0.1s ease-in;

  &:hover {
    transform: translatey(-0.2rem);
  }
`;

const AboutLink = styled.button`
  border-radius: var(--border-radius);
  margin-left: 1rem;
  padding: 0.8rem 3rem;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 1.8rem;
  color: #fff;
  border: 1px solid white;
  background: 0;
`;

const AuthorWrapper = styled.div`
  color: #fff;

  &.author {
    color: var(--secondary-color);
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroDetails>
        <Greeting>Hello, my name is</Greeting>
        <AuthorHeading className="author">
          <AuthorWrapper>Justin</AuthorWrapper>
          <AuthorWrapper>Alexander</AuthorWrapper>
          <AuthorWrapper className="author">Frontend</AuthorWrapper>
          <AuthorWrapper className="author">Developer</AuthorWrapper>
        </AuthorHeading>
        <HorizontalLine></HorizontalLine>
        <IconWrapper>
          <ButtonHover>
            <TbBrandGithubFilled size="30px" color="#fff" />
          </ButtonHover>

          <ButtonHover>
            <FaLinkedinIn size="30px" color="#fff" />
          </ButtonHover>
          <ButtonHover>
            <AboutLink>View Bio</AboutLink>
          </ButtonHover>
        </IconWrapper>
      </HeroDetails>
      <Avatar src={avatar} alt="" />
    </HeroWrapper>
  );
};

export default Hero;
