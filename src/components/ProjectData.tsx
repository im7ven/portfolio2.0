import ageCalc from "../images/agecalculator.webp";
import audiophile from "../images/audiophile1.webp";
import coffeeRoasters from "../images/coffeeroasters.webp";
import gameHub from "../images/gamehub.webp";
import kbBoard from "../images/kbboard.webp";
import pep from "../images/pep.webp";
import shippudenHub from "../images/shippudenhub.webp";
import xpenseTracker from "../images/xpensetracker.webp";
import designo from "../images/designo.png";
import watchers from "../images/watchersCover.png";

export type Project = {
  title: string;
  description: string;
  overline: string;
  tech: string[];
  image: string;
  repoPath: string;
  sitePath: string;
};

export const projectData: Project[] = [
  {
    title: "Kanban Board",
    description:
      "Featuring a user-friendly design, this full-stack kanban board utilizes an array of powerful technologies such as Prisma, Next Auth, React Query, Zod, Zustand, and React hook form.",
    overline: "Task Management",
    tech: [
      "Next Js",
      "TypeScript",
      "React Query",
      "Zustand",
      "Next Auth",
      "React Hook Form",
      "Zod",
    ],
    image: kbBoard,
    repoPath: "https://github.com/im7ven/KB-Board/tree/main",
    sitePath: "https://kb-board-eight.vercel.app/",
  },
  {
    title: "Watchers",
    description:
      "A mobile-friendly movie app that allows users to explore, review, and save their favorite films and series, featuring detailed information on ratings casts, and more.",
    overline: "Movie Discovery",
    tech: [
      "Next Js",
      "TypeScript",
      "React Query",
      "MongoDb",
      "Next Auth",
      "RadixUI",
      "Zod",
    ],
    image: watchers,
    repoPath: "https://github.com/im7ven/watchers",
    sitePath: "https://watchers-app.vercel.app/",
  },
  {
    title: "AudioPhile e-Commerce",
    description:
      "Completed this 'Guru' ranked challenge from Frontend Mentor. It showcases an e-commerce platform. Managing a pixel perfect design, while leveraging local storage and the context API to create a seamless cart management system.",
    overline: "E-commerce",
    tech: ["React", "TypeScript", "Styled-Components", "Figma"],
    image: audiophile,
    repoPath: "https://github.com/im7ven/Audiophile-e-commerce",
    sitePath: "https://audiophile-e-commerce-rho.vercel.app/",
  },
  {
    title: "Preceptor Education Program",
    description:
      "This project involved redesigning and rebuilding the Western University's PEP team website. Collaborating with the team, I created a user-friendly and appealing design, ensuring easy access to PEP’s learning modules for students.",
    overline: "Online Learning",
    tech: ["Html", "Css", "JavaScript", "Adobe Illustrator"],
    image: pep,
    repoPath: "https://github.com/im7ven/preceptor-education-program",
    sitePath: "https://preceptor.ca/",
  },
  {
    title: "GameHub",
    description:
      "This project is a video game integration app using the RAWG API, allowing users to explore thousands of games and their details. It features dynamic game searches, detailed information pages, and a user-friendly interface.",
    overline: "Game Discovery",
    tech: ["React", "TypeScript", "Chakra UI", "Zustand", "React Query"],
    image: gameHub,
    repoPath: "https://github.com/im7ven/Game-Hub",
    sitePath: "https://game-hub-im7ven.vercel.app/",
  },

  {
    title: "Shippuden Hub",
    description:
      "This project involved creating a Naruto Shippuden character API using MongoDB and developing a Next.js application to showcase it. The app features character details and provides a seamless browsing experience for fans.",
    overline: "Character API",
    tech: ["Next Js", "TypeScript", "Mongo Db", "Tailwind Css"],
    image: shippudenHub,
    repoPath: "https://github.com/im7ven/shippudenHub",
    sitePath: "https://shippuden-hub.vercel.app/",
  },
  {
    title: "Designo",
    description:
      "Another 'Guru' ranked challenge completed from Frontend Mentor. A responsive multipage web application where I leveraged SSR in Next Js to enhance performance.",
    overline: "Multipage",
    tech: ["Next Js", "TypeScript", "Tailwind Css", "Google Maps API", "Figma"],
    image: designo,
    repoPath: "https://github.com/im7ven/designo",
    sitePath: "https://designo-five-amber.vercel.app/",
  },
  {
    title: "Xpense Tracker",
    description:
      "Built an expense tracker app with Firebase, empowering users to manage their expenses effortlessly. Users can log expenses, visualize data through Chart.js, and create personalized budget plans for better financial control.",
    overline: "Expense Manager",
    tech: ["React", "TypeScript", "Firebase", "Chakra UI", "Chart Js"],
    image: xpenseTracker,
    repoPath: "https://github.com/im7ven/Expense-Tracker",
    sitePath: "https://expense-tracker-im7ven.vercel.app/",
  },
  {
    title: "Coffee roasters",
    description:
      "This project is a challenge from Frontend Mentor, featuring a coffee subscription website. Leveraging the Context API, I built an intuitive user experience for managing subscriptions, ensuring a smooth interface for coffee enthusiasts.",
    overline: "Subscription service",
    tech: ["React", "TypeScript", "Styled-components", "Figma"],
    image: coffeeRoasters,
    repoPath: "https://coffeeroasters-black.vercel.app/",
    sitePath: "https://preceptor.ca/",
  },
  {
    title: "Age Calculator",
    description:
      "This project is a Frontend Mentor challenge, showcasing an age calculator app. Utilizing user input, I developed a responsive interface that computes and presents ages in years, months, and days.",
    overline: "Calculator",
    tech: ["Html", "Css", "JavaScript"],
    image: ageCalc,
    repoPath: "https://github.com/im7ven/Age-Calculatorm",
    sitePath: "https://age-calculator-justinalexander.netlify.app/",
  },
];
