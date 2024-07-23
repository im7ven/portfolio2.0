import { ReactNode } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiGit,
  SiHtml5,
  SiCss3,
  SiStyledcomponents,
  SiChakraui,
  SiTailwindcss,
} from "react-icons/si";
import { PiFramerLogoFill } from "react-icons/pi";

export interface Skill {
  icon: ReactNode;
  label: string;
}

const skills: Skill[] = [
  {
    icon: <SiReact size="40px" color="#16F8B6" />,
    label: "React",
  },
  { icon: <SiNextdotjs size="40px" color="#16F8B6" />, label: "Next Js" },
  { icon: <SiTypescript size="40px" color="#16F8B6" />, label: "TypeScript" },
  { icon: <SiJavascript size="40px" color="#16F8B6" />, label: "JavaScript" },
  { icon: <SiGit size="40px" color="#16F8B6" />, label: "Git" },
  {
    icon: <SiStyledcomponents size="40px" color="#16F8B6" />,
    label: "Styled-components",
  },
  { icon: <SiChakraui size="40px" color="#16F8B6" />, label: "Chakra UI" },
  {
    icon: <PiFramerLogoFill size="40px" color="#16F8B6" />,
    label: "Framer Motion",
  },
  {
    icon: <SiTailwindcss size="40px" color="#16F8B6" />,
    label: "Tailwind Css",
  },
  { icon: <SiHtml5 size="40px" color="#16F8B6" />, label: "Html" },
  { icon: <SiCss3 size="40px" color="#16F8B6" />, label: "Css" },
];

export default skills;
