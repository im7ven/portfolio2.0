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

  @media screen and (min-width: 768px) {
    padding-bottom: 12rem;
  }
`;

const SkillGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem 1rem;
  margin: 6rem auto 0;
  max-width: 85rem;
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
      <SkillContainer id="skills">
        <BlockHeading>
          <AnimatedText text="Some of my skills"></AnimatedText>
        </BlockHeading>
        <FadeUp>
          <SkillGrid>
            {skills.map((skill, index) => (
              <TechCard key={index} {...skill} />
            ))}
          </SkillGrid>
        </FadeUp>
        <SoftSkillWrapper>
          <FadeUp>
            <SoftSkillFeature icon={communicationIcon} heading="Communication">
              I firmly believe that effective communication is a vital aspect of
              success. Throughout my experiences, I have consistently
              demonstrated strong communication skills. I believe in actively
              listening to others, valuing diverse perspectives, and I am eager
              to transition my communication skills to a development team.
            </SoftSkillFeature>
          </FadeUp>
          <FadeUp>
            <SoftSkillFeature icon={creativityIcon} heading="Creativity">
              I find joy in exploring innovative approaches to frontend
              development. I am able to bring unique perspective to my
              development by blending technical and artistic mindsets. I often
              gather the materials I have learned, and combine them to achieve
              impactful results.
            </SoftSkillFeature>
          </FadeUp>
          <FadeUp>
            <SoftSkillFeature icon={collaboration} heading="Collaboration">
              I thrive in collaborative environments where teamwork fuels
              success. I enjoy sharing ideas, learning from others, and tackling
              challenges as a team. I value clear communication and enjoy
              sharing knowledge, being part of a team means learning from each
              other and achieving great results together.
            </SoftSkillFeature>
          </FadeUp>
        </SoftSkillWrapper>
      </SkillContainer>
    </SectionWrapper>
  );
};

export default SkillBlock;
