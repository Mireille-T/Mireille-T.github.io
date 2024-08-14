import { useEffect } from 'react';
import { Link } from "react-router-dom";

import styles from "../styles/projectPage.module.css"

import IconLink from "../components/iconLink";
import { SetDarkMode, MiscButtons } from './miscButtons';
import Footer from "./footer";

export default function ProjectPageLayout({ title, img, imgAlt, projectLinks, projectSkills, projectDescription, lastModifiedDate }) {
    useEffect(() => {
        SetDarkMode(window.sessionStorage.getItem("data-theme"));
    });
    
    document.title = "Projects | " + title;

    const links = projectLinks.map((projectLink, index) =>
        <IconLink key={index} link={projectLink.link} ariaLabel={projectLink.ariaLabel} iconClass={projectLink.iconClass} />
    );

    const skills = projectSkills.map((projectSkill, index) =>
        <span key={index}>{projectSkill}</span>
    );

    return (
        <>
            <Link id={styles["back-btn"]} to="/projects">
                <i className="fa-solid fa-arrow-left"></i>
                <p>Back to Projects</p>
            </Link>
            <section className={styles["project-section"]}>
                <img className={styles["cover-image"] + " " + styles["project-img"]} src={img}
                    alt={imgAlt} />
                <h1 className="outline-text">{title}</h1>
                {projectLinks.length > 0 ? <div className={styles["project-links"]}>{links}</div> : <></>}
                <div className={styles["project-skills"]}>{skills}</div>
                {projectDescription}
            </section>
            <MiscButtons includeAnimation={false} />
            <Footer lastModifiedDate={lastModifiedDate} />
        </>
    );
}