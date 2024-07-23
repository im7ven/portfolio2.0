import styled from "styled-components";
import { BlockHeading, sectionBlock } from "../styles.global";
import AnimatedText from "./AnimatedText";
import skills from "./skillsData";
import TechCard from "./TechCard";
import SoftSkillFeature from "./SoftSkillFeature";
import communicationIcon from "../images/communication.png";
import creativityIcon from "../images/creativity.png";
import collaboration from "../images/collaboration.png";
import FadeUp from "./FadeUp";
import { SectionWrapper } from "./Hero";

const SkillContainer = styled.section`
  ${sectionBlock}
  padding-bottom: 6rem;
`;

const SkillGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem 1rem;
  margin: 6rem auto 0;
  max-width: 80rem;
  padding: 0 2.4rem;
`;

const SoftSkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 8rem;
  padding: 0 2.4rem;
`;

const SkillBlock = () => {
  return (
    <SectionWrapper>
      <SkillContainer>
        <BlockHeading>
          <AnimatedText text="Some of my skills"></AnimatedText>
        </BlockHeading>
        <FadeUp>
          <SkillGrid>
            {skills.map((skill) => (
              <TechCard {...skill} />
            ))}
          </SkillGrid>
        </FadeUp>
        <SoftSkillWrapper>
          <FadeUp>
            <SoftSkillFeature icon={communicationIcon} heading="Communication">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              aspernatur aliquid illo voluptatum sed quo dolore consequuntur
              cupiditate earum, nulla maxime a dolorem laboriosam assumenda
              aperiam beatae alias mollitia rerum esse officia asperiores
              doloremque? Nostrum minus rerum molestias quo eum!
            </SoftSkillFeature>
          </FadeUp>
          <FadeUp>
            <SoftSkillFeature icon={creativityIcon} heading="Communication">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              aspernatur aliquid illo voluptatum sed quo dolore consequuntur
              cupiditate earum, nulla maxime a dolorem laboriosam assumenda
              aperiam beatae alias mollitia rerum esse officia asperiores
              doloremque? Nostrum minus rerum molestias quo eum!
            </SoftSkillFeature>
          </FadeUp>
          <FadeUp>
            <SoftSkillFeature icon={collaboration} heading="Communication">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              aspernatur aliquid illo voluptatum sed quo dolore consequuntur
              cupiditate earum, nulla maxime a dolorem laboriosam assumenda
              aperiam beatae alias mollitia rerum esse officia asperiores
              doloremque? Nostrum minus rerum molestias quo eum!
            </SoftSkillFeature>
          </FadeUp>
        </SoftSkillWrapper>
      </SkillContainer>
    </SectionWrapper>
  );
};

export default SkillBlock;
