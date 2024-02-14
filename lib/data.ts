import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title:
      "Computer Science and Engineering at Pandit Deendayal Energy University",
    location: "Gujarat, Gandhinagar",
    description:
      "I am currently pursuing my B.Tech in Computer Science and Engineering. I am a Full Stack Developer. I am passionate about building scalable and efficient web applications. I am a quick learner and always ready to learn new technologies and tools.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-Present",
  },
  {
    title: "Intern Trainee at Brindley Technologies",
    location: "Mumbai, Maharashtra",
    description:
      "I worked as a front-end developer intern. I made on a project on CRM, CMR (CSS). I used python and Django.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Software Development Engineer at iNav Labs",
    location: "Gujarat, Gandhinagar",
    description:
      "I'm a Software Development Engineer at iNav Labs. I work on React, Next.js, and Tailwind CSS. I also work on the back-end with Node.js, Express, and MongoDB, Also under me I am mentoring interns.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I made this project by my own. In this project users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I only made the front-end for this project. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
