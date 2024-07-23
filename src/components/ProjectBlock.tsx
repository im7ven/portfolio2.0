import styled from "styled-components";
import {
  secondaryHeading,
  sectionBlock,
  sectionHeading,
} from "../styles.global";
import { projectData } from "./ProjectData";
import ProjectCard from "./ProjectCard";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import { useState } from "react";
import ProgressFadeIn from "./ProgressFadeIn";
import AnimatedText from "./AnimatedText";

const BlockContainer = styled.section`
  ${sectionBlock}
  position: relative;
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

const BlockHeading = styled.h2`
  ${sectionHeading}
  text-align: center;
`;

const ProjectBlock = () => {
  const [isShowAllProjects, setIsShowAllProjects] = useState(false);
  const defaultProjects = projectData.filter((_, index) => index < 4);

  const projects = isShowAllProjects ? projectData : defaultProjects;

  const toggleProjects = () => {
    setIsShowAllProjects(!isShowAllProjects);
  };

  return (
    <BlockContainer>
      <BlockHeading>
        <AnimatedText text="Project Showcase"></AnimatedText>
      </BlockHeading>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard {...project} />
        ))}
      </ProjectGrid>
      <ProjectToggle onClick={toggleProjects}>
        {isShowAllProjects ? "View Less" : "View More"}
        <ToggleIcon isExpanded={isShowAllProjects} />
      </ProjectToggle>
    </BlockContainer>
  );
};

export default ProjectBlock;
