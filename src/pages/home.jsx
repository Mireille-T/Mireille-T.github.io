import React from 'react';
import { Link } from "react-router-dom";

import styles from '../styles/home.module.css'

import PointImage from "../media/POINT-VR.jpg";
import AltoImage from "../media/alto.jpg";
import WVMImage from "../media/walking-virtual-meeting.png";

import PageLayout from '../collections/pageLayout';
import CodeCycle from '../components/codeCycle';
import IconLink from '../components/iconLink';
import ProjectContainer from '../collections/projectContainer';

const projects = [
  {
    id: 0,
    image: PointImage,
    imageAlt: "A VR simulation consisting of a grid deforming around two spheres",
    title: "POINT VR",
    subtitle: "A simulation of General Relativity in Unity C#",
    contributions: [
      { id: 0, description: "UI menu design and implementation" },
      { id: 1, description: "Subtitle and tag-parsing system" },
      { id: 2, description: "HLSL shader development" },
      { id: 3, description: "Tutorial development" },
      { id: 4, description: "Audio and visual asset creation" },
    ],
    links: [
      {
        id: 0,
        link: "https://icasu.illinois.edu/outreach/point-vr",
        ariaLabel: "ICASU project website",
        iconClass: "fa-solid fa-globe"
      },
      {
        id: 1,
        link: "https://github.com/POINT-VR/POINT-VR-Chapter-1",
        ariaLabel: "Project GitHub repository",
        iconClass: "fa-brands fa-github"
      }
    ]
  },
  {
    id: 1,
    image: WVMImage,
    imageAlt: "A person wearing a VR headset while walking outside with a virtual meeting screen in front of them",
    title: "Walking Virtual Meeting",
    subtitle: "DIS '24 Honorable Mention: Exploring Augmented Reality Interface Designs for Virtual Meetings in Real-world Walking Contexts",
    contributions: [
      { id: 0, description: "Simulation of webpage interaction via JavaScript and Unity C#" },
      { id: 1, description: "Faciliation of user studies and paper-writing" }
    ],
    links: [
      {
        id: 0,
        link: "https://doi.org/10.1145/3643834.3661538",
        ariaLabel: "Research paper",
        iconClass: "fa-solid fa-globe"
      },
      {
        id: 1,
        link: "https://github.com/ntu-hci-lab/WalkingVirtualMeeting",
        ariaLabel: "Open-source GitHub project repository",
        iconClass: "fa-brands fa-github"
      }
    ]
  },
  {
    id: 2,
    image: AltoImage,
    imageAlt: "alto browser add-on UI",
    title: "alto Browser Addon",
    subtitle: "Microsoft Imagine Cup 2023 World Finalist: A digital accessibility addon",
    contributions: [
      { id: 0, description: "UI menu design" },
      { id: 1, description: "Implementation of accessible UI" },
      { id: 2, description: "Connection of front-end to Azure APIs" },
    ],
    links: [
      {
        id: 0,
        link: "https://techcommunity.microsoft.com/t5/student-developer-blog/meet-the-2023-imagine-cup-world-finalists/ba-p/3754378",
        ariaLabel: "Microsoft Imagine Cup 2023 finalists website",
        iconClass: "fa-solid fa-globe"
      },
      {
        id: 1,
        link: "https://youtu.be/0HYQcL4rvEU",
        ariaLabel: "YouTube demo video",
        iconClass: "fa-brands fa-youtube"
      },
      {
        id: 2,
        link: "https://github.com/Mireille-T/The-Bigger-Picture",
        ariaLabel: "GitHub project repository",
        iconClass: "fa-brands fa-github"
      }
    ]
  }

]

const pageContent = (
  <div>
    <section>
      <div id={styles["landing"]}>
        <CodeCycle />
        <h1 id={styles["landing-name"]}>Mireille Tan</h1>
        <div id={styles["landing-subtitle"]}>
          Student. Developer. 3D Hobbyist.
        </div>
        <div id={styles["landing-socials"]}>
          <IconLink link="mailto:mireille.tan@gmail.com" ariaLabel="email" iconClass="fa-solid fa-envelope" />
          <IconLink link="https://www.linkedin.com/in/mireille-tan/" ariaLabel="email" iconClass="fa-brands fa-linkedin" />
          <IconLink link="https://github.com/Mireille-T" ariaLabel="GitHub" iconClass="fa-brands fa-github" />
        </div>
      </div>
    </section>
    <section>
      <div id={styles["about"]}>
        <h1 className="outline-text">¡Hola!</h1>
        <p>I am a female Singaporean currently pursuing a B.S. in <span className="highlight">Computer Science</span>
          &nbsp;(with minors in Spanish and Sustainability) at the University
          of Illinois Urbana-Champaign. I like to have fun learning about and improving my skills in <span
            className="highlight">computer graphics</span>, <span className="highlight">human-computer interaction</span>
          &nbsp;and <span className="highlight">digital accessibility</span>! In the future, I hope to contribute to the
          development of sustainable people-centred
          solutions to improve industries!<br/><br/>Outside of coding, I also enjoy 3D modelling in Blender and
          basic workshopping / fabrication! :)
        </p>
        <Link to="/about" className={styles["more-info"]}>More about me →</Link>
      </div>
    </section>
    <section id={styles["projects-section"]}>
      <div id={styles["projects"]}>
        <h1 className="col-pri">Projects</h1>
        <ProjectContainer projects={projects} />
        <Link to="/projects" className={styles["more-info"]}>More projects + 3D models →</Link>
      </div>
    </section>
  </div>
);

export default function Home() {
  return (
    <PageLayout title="Home" currentPageIdx={0} pageContent={pageContent} lastModifiedDate="11 August 2024" blurBackground={false} />
  );
}
