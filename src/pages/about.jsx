import React from 'react';

import styles from '../styles/about.module.css'

import UIUC from "../media/uiuc-block-i.png";
import JTC from "../media/jtc-logo.jpg";
import NTU from "../media/NTU.jpeg";
import MLSA from "../media/mlsa-badge.png";
import Tinkertanker from "../media/tinkertanker-logo.png"
import RI from "../media/ri-logo.jpg"
import RGS from "../media/rgs-logo.jpg"

import PageLayout from '../collections/pageLayout';
import TimelineItem from "../components/timelineItem";

const timelineContents = [
  {
    id: 0,
    title: "B.S. in Computer Science, University of Illinois Urbana-Champaign",
    period: "August 2022 - Present",
    imgUrl: UIUC,
    listItems: [
      {id: 0, text: "POINT VR - VR Production Developer and Task Manager"},
      {id: 1, text: "MedLaunch - 2-year project member and 2024 Marketing Chair"},
      {id: 2, text: "King's Guard - Website designer and developer for the Kingfisher mascot"},
      {id: 3, text: "Engineers Without Borders UIUC Student Chapter - 2023 Marketing Chair"},
      {id: 4, text: "Illini World Taekwondo - Spring 2023 Web Dev Committee Member"}
    ]
  },
  {
    id: 1,
    title: "JTC Corporation",
    period: "May 2024 - August 2024",
    imgUrl: JTC,
    listItems: [
      {id: 0, text: "Software Development Intern in the Smart District Division"},
      {id: 1, text: "Scripted system simulations and analyses in Unity C#"},
    ]
  },
  {
    id: 2,
    title: "National Taiwan University Summer+ Research and Culture",
    period: "June 2023 - August 2023",
    imgUrl: NTU,
    listItems: [
      {id: 0, text: "CHI'24 VeeR: Exploring the Feasibility of Deliberately Designing VR Motion that Diverges from Mundane, Everyday Physical Motion to Create More Entertaining VR Experiences"},
      {id: 1, text: "DIS'24 Exploring Augmented Reality Interface Designs for Virtual Meetings in Real-world Walking Contexts"},
    ]
  },
  {
    id: 3,
    title: "Gold Microsoft Learn Student Ambassador",
    period: "August 2020 - June 2023",
    imgUrl: MLSA,
    listItems: [
      {id: 0, text: 'Microsoft Ignite 2022 Learn Live session "Configure Microsoft Teams meetings and calls for inclusion"; engagement of 1009 live viewers with 94% session value'},
      {id: 1, text: "Co-hosting of Microsoft Student Summit 2022 Americas session with 1000+ live viewers"},
      {id: 2, text: "Organizer of virtual training bootcamp for Azure Cloud Fundamentals exam for 80+ students"}
    ]
  },
  {
    id: 4,
    title: "JTC Corporation",
    period: "May 2022 - June 2022",
    imgUrl: JTC,
    listItems: [
      {id: 0, text: "Software Development Intern in the Smart District Division"},
      {id: 1, text: "Developed UI systems and interactions in Unity C#"},
    ]
  },
  {
    id: 5,
    title: "Tinkertanker Pte. Ltd. (Internship)",
    period: "January 2022 - April 2022",
    imgUrl: Tinkertanker,
    listItems: [
      {id: 0, text: "Development of MakeCode extensions for the BBC micro:bit in TypeScript for v2 compatibility"},
      {id: 1, text: "Development and delivering of curriculum for Unity (C# and Bolt) for secondary school students"},
    ]
  },
  {
    id: 6,
    title: "Raffles Institution",
    period: "January 2020 - December 2021",
    imgUrl: RI,
    listItems: [
      {id: 0, text: "H2 Physics, Mathematics, Chemistry and Spanish"},
      {id: 1, text: "Audio Visual Unit - Vice-Chairperson"},
      {id: 2, text: "The Edusave Awards for Achievement, Good Leadership and Service (EAGLES)"},
      {id: 3, text: "The Lee Kuan Yew Award for Mathematics and Science"}
    ]
  },
  {
    id: 7,
    title: "Tinkertanker Pte. Ltd. (Internship)",
    period: "November 2020 - December 2020",
    imgUrl: Tinkertanker,
    listItems: [
      {id: 0, text: "Research for micro:bit AI, A-Frame WebAR curriculum"},
      {id: 1, text: "Fabrication via 3D printing, laser cutting"},
      {id: 2, text: "Graphic design for Christmas decorations, tags and souvenirs in Inkscape"}
    ]
  },
  {
    id: 8,
    title: "Raffles Girls' School (Secondary)",
    period: "January 2016 - December 2019",
    imgUrl: RGS,
    listItems: [
      {id: 0, text: "Dorothy Buckle Top Mathematics and Science Award (2019)"},
      {id: 1, text: "KS Goh New Media & Technology Award (2019)"},
      {id: 2, text: "RoboCupJunior OnStage League World Finals 2018 in Montréal - SuperTeam Champions, Best OnStage Performance"}
    ]
  },
];

const timelineItems = timelineContents.map(timelineContent =>
  <TimelineItem key={timelineContent.id} id={timelineContent.id} title={timelineContent.title} period={timelineContent.period}
    imgUrl={timelineContent.imgUrl} listItems={timelineContent.listItems}/>
);

const pageContent = (
  <div>
    <section className="blur-background">
      <div id={styles["about"]}>
        <h1 className="col-pri">About Me</h1>
        <p>I am a female Singaporean currently pursuing a B.S. in <span className="highlight">Computer Science</span>
          &nbsp;(with minors in Spanish and Sustainability) at the University
          of Illinois Urbana-Champaign. I like to have fun learning about and improving my skills in <span
            className="highlight">computer graphics</span>, <span className="highlight">human-computer interaction</span>
          &nbsp;and <span className="highlight">digital accessibility</span>! In the future, I hope to contribute to the
          development of sustainable people-centred solutions to improve industries!<br /><br />Outside of coding, I also enjoy 3D modelling in Blender and
          basic workshopping / fabrication! Some clubs I'm involved with on campus include: <a href="https://medlaunch.web.illinois.edu/">MedLaunch</a> and Illini World Taekwondo. :)
        </p>
      </div>
    </section>
    <section id={styles["journey"]} className="blur-background">
      <h1 className="col-pri">My Journey</h1>
      <div className={styles["timeline"]}>
        {timelineItems}
      </div>
    </section>
  </div>
);

export default function About() {
  return (
    <PageLayout title="About" currentPageIdx={1} pageContent={pageContent} lastModifiedDate="12 August 2024" blurBackground={true} />
  );
}