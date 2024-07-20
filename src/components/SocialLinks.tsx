import React, { ReactNode } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { TbBrandGithubFilled } from "react-icons/tb";
import ProgressFadeIn from "./ProgressFadeIn";
import styled from "styled-components";

const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  position: absolute;
  z-index: 100;
  top: 15px;
  right: 1.5rem;

  @media screen and (min-width: 768px) {
    right: 3.5rem;
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

const SocialLinks = () => {
  const socialIcons: ReactNode[] = [
    <FaLinkedinIn size="28px" color="#fff" />,
    <TbBrandGithubFilled size="28px" color="#fff" />,
    <IoIosMail size="28px" color="#fff" />,
  ];
  return (
    <IconWrapper>
      {socialIcons.map((icon, index) => (
        <ProgressFadeIn key={index} index={index}>
          {icon}
        </ProgressFadeIn>
      ))}
    </IconWrapper>
  );
};

export default SocialLinks;
