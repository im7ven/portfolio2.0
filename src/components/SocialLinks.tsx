import React, { ReactNode } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { TbBrandGithubFilled } from "react-icons/tb";
import ProgressFadeIn from "./ProgressFadeIn";
import styled, { css } from "styled-components";

const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  position: absolute;
  z-index: 100;
  top: 15px;
  transform: translatex(-50%);
  left: 50%;

  @media screen and (min-width: 768px) {
    right: 3.5rem;
    left: initial;
    transform: initial;
  }

  @media screen and (min-width: 1250px) {
    flex-direction: column;
    align-items: center;
    bottom: 50px;
    top: initial;
    left: 35px;
    gap: 2rem;
  }
`;

const icon = css`
  color: #fff;
  transition: color 0.15s ease-in;
  font-size: 3rem;

  @media screen and (min-width: 768px) {
    color: var(--body-text);
  }

  &:hover {
    color: #fff;
  }
`;

const IconLink = styled.a`
  text-decoration: none;
`;

const LinkedIn = styled(FaLinkedinIn)`
  ${icon}
`;
const GitHub = styled(TbBrandGithubFilled)`
  ${icon}
`;
const Email = styled(IoIosMail)`
  ${icon}
`;

const SocialLinks = () => {
  const socialIcons: ReactNode[] = [
    <IconLink
      target="_blank"
      href="https://www.linkedin.com/in/justin-alexander-27542522b"
    >
      <LinkedIn />
    </IconLink>,
    <IconLink target="_blank" href="https://github.com/im7ven">
      <GitHub />
    </IconLink>,
    <IconLink href="mailto:alexanderrr416@gmail.com">
      <Email />
    </IconLink>,
  ];
  return (
    <IconWrapper>
      {socialIcons.map((icon, index) => (
        <ProgressFadeIn delay={1} key={index} index={index}>
          {icon}
        </ProgressFadeIn>
      ))}
    </IconWrapper>
  );
};

export default SocialLinks;
