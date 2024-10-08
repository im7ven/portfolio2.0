import { useState } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import styled from "styled-components";
import { BlockHeading, sectionBlock } from "../styles.global";
import AnimatedText from "./AnimatedText";
import { SectionWrapper } from "./Hero";
import ProjectCard from "./ProjectCard";
import { projectData } from "./ProjectData";

const BlockContainer = styled.section`
  ${sectionBlock}
  position: relative;
  padding-bottom: 6rem;
`;

const ProjectGrid = styled.div`
  position: relative;
  margin-top: 12rem;
  display: grid;
  justify-content: center;
  gap: 6rem;
  padding: 1rem 2.4rem;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, auto);
  }
`;

const ProjectToggle = styled.button`
  color: var(--secondary-color);
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  border: 0;
  background: 0;
  outline: 0;
  font-size: 2rem;
  margin: 5rem auto 0;
  display: block;
  transition: all 0.2s ease-in;

  &:hover {
    letter-spacing: 0.4rem;
  }
`;

const ToggleIcon = styled(MdKeyboardDoubleArrowDown)<{ isExpanded: boolean }>`
  transform: ${(props) => (props.isExpanded ? "rotate(180deg)" : "")};
  font-size: "30px";
  color: var(--secondary-color);
  transition: transform 0.2s ease-in;
`;

const ProjectBlock = () => {
  const [isShowAllProjects, setIsShowAllProjects] = useState(false);
  const defaultProjects = projectData.filter((_, index) => index < 4);

  const projects = isShowAllProjects ? projectData : defaultProjects;

  const toggleProjects = () => {
    setIsShowAllProjects(!isShowAllProjects);
  };

  return (
    <SectionWrapper>
      <BlockContainer id="project">
        <BlockHeading>
          <AnimatedText text="Project Showcase"></AnimatedText>
        </BlockHeading>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </ProjectGrid>
        <ProjectToggle onClick={toggleProjects}>
          {isShowAllProjects ? "View Less" : "View More"}
          <ToggleIcon isExpanded={isShowAllProjects} />
        </ProjectToggle>
      </BlockContainer>
    </SectionWrapper>
  );
};

export default ProjectBlock;
