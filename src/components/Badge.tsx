import styled from "styled-components";

const BadgeWrapper = styled.div`
  background: #fff;
  border-radius: 4px;
  display: inline-block;
  padding: 0.2rem 1rem;
`;

const BadgeLabel = styled.p`
  font-size: 1.5rem;
`;

const Badge = ({ label }: { label: string }) => {
  return (
    <BadgeWrapper>
      <BadgeLabel>{label}</BadgeLabel>
    </BadgeWrapper>
  );
};

export default Badge;
