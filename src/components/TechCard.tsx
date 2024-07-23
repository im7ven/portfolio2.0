import styled from "styled-components";
import { Skill } from "./skillsData";

const Card = styled.div`
  border-color: var(--border-color);
  border-width: 0.1rem;
  border-style: solid;
  border-radius: 6px;
  display: inline-block;
  background-color: var(--background-secondary);
  max-width: 12rem;
  flex-grow: 1;
  position: relative;
`;

const LightContainer = styled.div`
  display: flex;
  transform: translateY(-1.5px);
  justify-content: center;
`;

const LightWrapper = styled.div`
  width: 75%;
`;

const Light = styled.div`
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgb(76, 207, 175),
    rgba(0, 0, 0, 0)
  );
  height: 2px;
`;

const ContentWrapper = styled.div`
  padding: 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.5rem;
  position: relative;
`;

const Label = styled.p`
  color: #fff;
  font-size: 1.4rem;
  text-transform: uppercase;
`;

const TechCard = ({ icon, label }: Skill) => {
  return (
    <Card>
      <LightContainer>
        <LightWrapper>
          <Light />
        </LightWrapper>
      </LightContainer>
      <ContentWrapper>
        {icon}
        <Label>{label}</Label>
      </ContentWrapper>
    </Card>
  );
};

export default TechCard;
