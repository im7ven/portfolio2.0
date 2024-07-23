import styled from "styled-components";
import { BlockHeading, sectionBlock } from "../styles.global";
import AnimatedText from "./AnimatedText";
import skills from "./skillsData";
import TechCard from "./TechCard";

const SkillContainer = styled.section`
  ${sectionBlock}
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

const SkillBlock = () => {
  return (
    <SkillContainer>
      <BlockHeading>
        <AnimatedText text="Some of my skills"></AnimatedText>
      </BlockHeading>
      <SkillGrid>
        {skills.map((skill) => (
          <TechCard {...skill} />
        ))}
      </SkillGrid>
    </SkillContainer>
  );
};

export default SkillBlock;
