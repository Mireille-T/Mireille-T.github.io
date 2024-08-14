import React from 'react';

import styles from '../styles/projects.module.css'

import POINT from "../media/POINT-VR.jpg"
import WVM from "../media/walking-virtual-meeting.png"
import VeeR from "../media/veer.png"
import Kingfisher from "../media/kingfisher-web.png"
import MedLaunch from "../media/medlaunch-web.png"
import alto from "../media/alto-square.jpg"
import CMN from "../media/cmn.jpg"
import EWB from "../media/ewb-web.png"
import NativePlants from "../media/native-plants-cover.jpg"
import Yoshinodana from "../media/yoshinodana.jpg"
import Elly from "../media/elly-square.png"
import ToTimeZone from "../media/to-time-zone.jpg"
import microbitExt from "../media/microbit-ext-sht2x.png"
import Coffee from "../media/coffee.jpg"
import Teahouse from "../media/teahouse.jpg"
import Sonya7c from "../media/sony-a7c.jpg"
import Wagashi from "../media/dango.jpg"
import IceSkates from "../media/ice-skates.jpg"
import Explorer from "../media/explorer.jpg"
import Airplane from "../media/airplane.jpg"

import PageLayout from '../collections/pageLayout';
import ProjectCard from '../components/projectCard';

export const projectList = [
  {
    id: "point",
    title: "POINT VR",
    subtitle: "Unity C#",
    img: POINT,
    tags: [
      "Figma",
      "Inkscape",
      "Unity",
      "C#",
      "HLSL",
      "GitHub"
    ]
  },
  {
    id: "walking-virtual-meeting",
    title: "Walking Virtual Meeting",
    subtitle: "Unity",
    img: WVM,
    tags: [
      "Unity"
    ]
  },
  {
    id: "veer",
    title: "VeeR",
    subtitle: "Unity",
    img: VeeR,
    tags: [
      "Unity"
    ]
  },
  {
    id: "kingfisher-website",
    title: "Kingfisher",
    subtitle: "WordPress",
    img: Kingfisher,
    tags: [
      "WordPress",
      "HTML",
      "CSS",
      "JavaScript"
    ]
  },
  {
    id: "medlaunch-website",
    title: "MedLaunch",
    subtitle: "WordPress",
    img: MedLaunch,
    tags: [
      "WordPress",
      "HTML"
    ]
  },
  {
    id: "alto",
    title: "alto",
    subtitle: "HTML, CSS, JS, Azure",
    img: alto,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Azure",
      "GitHub"
    ]
  },
  {
    id: "cmn-table",
    title: "CMN Table",
    subtitle: "Fabrication",
    img: CMN,
    tags: [
      "Inkscape",
      "Blender3D",
      "Fabrication",
      "Fusion360"
    ]
  },
  {
    id: "ewb-uiuc-website",
    title: "EWB UIUC",
    subtitle: "WordPress",
    img: EWB,
    tags: [
      "WordPress",
      "HTML"
    ]
  },
  {
    id: "native-plants",
    title: "Native Plants",
    subtitle: "HTML, CSS, JS",
    img: NativePlants,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Figma"
    ]
  },
  {
    id: "yoshinodana",
    title: "吉野棚",
    subtitle: "Blender3D",
    img: Yoshinodana,
    tags: [
      "Blender3D"
    ]
  },
  {
    id: "elly",
    title: "Elly",
    subtitle: "HTML, CSS, JS, Azure",
    img: Elly,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Azure",
      "GitHub"
    ]
  },
  {
    id: "to-time-zone",
    title: "toTime-Zone()",
    subtitle: "HTML, CSS",
    img: ToTimeZone,
    tags: [
      "HTML",
      "CSS",
      "Inkscape",
      "Figma",
      "GitHub"
    ]
  },
  {
    id: "microbit-extensions",
    title: "micro:bit Extensions",
    subtitle: "TypeScript",
    img: microbitExt,
    tags: [
      "TypeScript",
      "Inkscape"
    ]
  },
  {
    id: "coffee",
    title: "Coffee",
    subtitle: "Blender3D",
    img: Coffee,
    tags: [
      "Blender3D"
    ]
  },
  {
    id: "teahouse",
    title: "Teahouse",
    subtitle: "Blender3D",
    img: Teahouse,
    tags: [
      "Blender3D"
    ]
  },
  {
    id: "sony-a7c",
    title: "Sony a7C",
    subtitle: "Blender3D",
    img: Sonya7c,
    tags: [
      "Blender3D"
    ]
  },
  {
    id: "wagashi",
    title: "Wagashi",
    subtitle: "Blender3D",
    img: Wagashi,
    tags: [
      "Blender3D"
    ]
  },
  {
    id: "ice-skates",
    title: "Ice Skates",
    subtitle: "Blender3D",
    img: IceSkates,
    tags: [
      "Blender3D"
    ]
  },
  {
    id: "explorer",
    title: "Explorer",
    subtitle: "Blender3D",
    img: Explorer,
    tags: [
      "Blender3D"
    ]
  },
  {
    id: "airplane",
    title: "Airplane",
    subtitle: "Blender3D",
    img: Airplane,
    tags: [
      "Blender3D"
    ]
  },
]

const projectCards = projectList.map((project, index) =>
  <ProjectCard key={index} project={project} index={index} />
);

const codeFilter = ["HTML", "CSS", "TypeScript", "Azure", "Unity", "C#", "GitHub", "WordPress"];
const designFilter = ["Inkscape", "Figma", "WordPress"];
const modelFilter = ["Blender3D", "Fusion360"];
function filterProjects(evt) {
  document.getElementsByClassName(styles["current-filter"])[0].classList.toggle(styles["current-filter"]);
  evt.target.classList.toggle(styles["current-filter"]);
  let currentFilter = evt.target.innerHTML;
  let projectCards = document.getElementsByClassName(styles["project-card"]);
  if (currentFilter === "All") {
      for (let i = 0; i < projectCards.length; i++) {
          projectCards[i].style.display = "block";
      }
  } else if (currentFilter === "Code") {
      for (let i = 0; i < projectCards.length; i++) {
          projectCards[i].style.display = (Array.from(projectCards[i].classList).filter(x => codeFilter.indexOf(x) !== -1).length > 0) ? "block" : "none";
      }
  } else if (currentFilter === "Design") {
      for (let i = 0; i < projectCards.length; i++) {
          projectCards[i].style.display = (Array.from(projectCards[i].classList).filter(x => designFilter.indexOf(x) !== -1).length > 0) ? "block" : "none";
      }
  } else if (currentFilter === "3D Models") {
      for (let i = 0; i < projectCards.length; i++) {
          projectCards[i].style.display = (Array.from(projectCards[i].classList).filter(x => modelFilter.indexOf(x) !== -1).length > 0) ? "block" : "none";
      }
  }
}

const pageContent = (
  <section id={styles["projects"]} className="blur-background">
    <h1 className="col-pri">My Projects</h1>
    <div id={styles["filter"]}>
      <button type="button" onClick={filterProjects} className={styles["current-filter"]}>All</button>
      <button type="button" onClick={filterProjects}>Code</button>
      <button type="button" onClick={filterProjects}>Design</button>
      <button type="button" onClick={filterProjects}>3D Models</button>
    </div>
    <div id={styles["project-gallery"]}>{projectCards}</div>
    <p>... and unseen: a whole ton of "high-effort memes" for friends in GIMP and Inkscape! ;)</p>
  </section>
);

export function Projects() {
  return (
    <PageLayout title="Projects" currentPageIdx={2} pageContent={pageContent} lastModifiedDate="13 August 2024" blurBackground={true} />
  );
}
