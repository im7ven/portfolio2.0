import styled from "styled-components";
import { bodyText, btn, secondaryHeading } from "../styles.global";
import { Project } from "./ProjectData";
import Badge from "./Badge";
import { BsLink45Deg } from "react-icons/bs";
import { TbBrandGithubFilled } from "react-icons/tb";
import FadeUp from "./FadeUp";

const Card = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--background-secondary);
  border-radius: 5px;
  gap: 2rem;
  width: 100%;
  overflow: hidden;
  border-width: 0.1rem;
  border-color: rgba(245, 243, 255, 0.15);
  border-style: solid;
  max-width: 50rem;
  transition: all 0.3s;

  &:hover {
    border-color: rgba(245, 243, 255, 0.3);
  }
`;

const CardImage = styled.img`
  width: 100%;
  max-width: 50rem;
`;

const CardHeading = styled.h3`
  ${secondaryHeading}
  color: #fff;
  margin-bottom: 1.5rem;
`;

const CardBody = styled.div`
  padding: 1rem 2.4rem 2rem;
  /* min-height: 40.9rem; */
  box-sizing: border-box;
`;

const CardDescription = styled.p`
  ${bodyText}
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin: 1.5rem 0 0;

  @media screen and (min-width: 380px) {
    flex-direction: row;
  }
`;

const CardBtn = styled.button`
  ${btn}
  border: 1px solid white;
  width: 100%;
`;

const LinkWrapper = styled.a`
  text-decoration: none;
`;

const BadgeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Overline = styled.p`
  color: var(--accent-color);
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  margin-bottom: 0.5rem;
`;

const ProjectCard = ({ ...project }: Project) => {
  return (
    <FadeUp>
      <Card>
        <CardImage src={project.image} />
        <CardBody>
          <Overline>{project.overline}</Overline>
          <CardHeading>{project.title}</CardHeading>
          <BadgeWrapper>
            {project.tech.map((item) => (
              <Badge label={item} />
            ))}
          </BadgeWrapper>
          <CardDescription>{project.description}</CardDescription>
          <BtnWrapper>
            <LinkWrapper target="_blank" href={project.repoPath}>
              <CardBtn>
                <TbBrandGithubFilled size="20px" />
                Repository
              </CardBtn>
            </LinkWrapper>
            <LinkWrapper target="_blank" href={project.sitePath}>
              <CardBtn className="primaryBtn">
                <BsLink45Deg size="20px" />
                Live Site
              </CardBtn>
            </LinkWrapper>
          </BtnWrapper>
        </CardBody>
      </Card>
    </FadeUp>
  );
};

export default ProjectCard;
