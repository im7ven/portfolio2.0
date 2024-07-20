import styled from "styled-components";
import { secondaryHeading, subHeading, bodyText } from "../styles.global";
import { IoReturnUpForwardOutline } from "react-icons/io5";
import RevealAnimation from "./RevealAnimation";

const AboutWrapper = styled.section`
  grid-column: span 2;
  max-width: 800px;
  margin: 0 auto;
  padding: 10rem 0;
`;

const AboutHeading = styled.h2`
  ${secondaryHeading};
  color: #fff;
`;

const SubHeading = styled.p`
  ${subHeading}display: inline;
`;

const ParagraphBody = styled.p`
  ${bodyText}
  display: inline;

  &.block {
    display: block;
    margin-top: 1.5rem;
  }
`;

const HideAboutBtn = styled.button`
  display: flex;
  gap: 1rem;
  font-weight: 400;
  align-items: center;
  font-size: 1.5rem;
  background: 0;
  outline: 0;
  cursor: pointer;
  border: 0;
  color: var(--secondary-color);
  transition: all 0.15s ease-in;

  &:hover {
    transform: translate(0, 0.2rem);
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  margin: 0 0 1.5rem 0;
`;

interface Props {
  onHideAbout: () => void;
}

const AboutMe = ({ onHideAbout }: Props) => {
  return (
    <AboutWrapper>
      <RevealAnimation>
        <HeadingContainer>
          <AboutHeading>About Me</AboutHeading>
          <HideAboutBtn onClick={onHideAbout}>
            <IoReturnUpForwardOutline size="25px" color="#fff" />
            Close About
          </HideAboutBtn>
        </HeadingContainer>
        <SubHeading>Here is my story, </SubHeading>
        <ParagraphBody>
          I have always been drawn to food and food services. My professional
          background lies within the food industry. However, once I stumbled
          upon coding and unlocked a new passion, it was clear what I wanted to
          pursue as a career.
        </ParagraphBody>
      </RevealAnimation>
      <RevealAnimation>
        <ParagraphBody className="block">
          Ever since, I have developed this eagerness and willingness to learn
          and develop new skills in the tech industry. I spend most of my spare
          hours exploring the latest trends, crafting projects, and leveling up
          my skill set. I embrace every opportunity to expand my knowledge with
          a focus towards frontend development. Although, I enjoy exploring
          other facets of the tech world, from backend to design and more.
        </ParagraphBody>
      </RevealAnimation>
      <RevealAnimation>
        <ParagraphBody className="block">
          Beyond coding, I like to spend my time exercising, playing video game,
          crafting culinary delights, and cherishing quality moments with
          friends and family. I genuinely enjoy meeting new people and fostering
          meaningful connections.
        </ParagraphBody>
      </RevealAnimation>
    </AboutWrapper>
  );
};

export default AboutMe;
