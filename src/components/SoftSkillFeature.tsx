import styled from "styled-components";
import { bodyText, secondaryHeading } from "../styles.global";

const SkillWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 70rem;
  margin: 0 auto;
`;

const SkillHeading = styled.h3`
  ${secondaryHeading}
  color: #fff;
`;

const SkillIcon = styled.img`
  width: 50px;
  border-radius: 50%;
  padding: 0.8rem;
`;

const SkillBody = styled.p`
  ${bodyText}
`;

interface Props {
  heading: string;
  children: string;
  icon: string;
}

const SoftSkillFeature = ({ ...props }: Props) => {
  return (
    <SkillWrapper>
      <SkillIcon src={props.icon} />
      <SkillHeading>{props.heading}</SkillHeading>
      <SkillBody>{props.children}</SkillBody>
    </SkillWrapper>
  );
};

export default SoftSkillFeature;
