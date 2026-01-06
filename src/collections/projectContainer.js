import { useState } from "react"
import styles from '../styles/home.module.css'
import ProjectPanel from './projectPanel'

export default function ProjectContainer({ projects }) {
    const [currentProjectIdx, setCurrentProjectIdx] = useState(0);

    const projectButtonsItems = projects.map(project =>
        <li key={project.id} className={`${styles["btn-project"]}` + (project.id === currentProjectIdx ? ` ${styles["btn-current-project"]}` : "")}>
            <button onClick={() => {
                setCurrentProjectIdx(project.id)
            }}>{project.title}</button>
        </li>
    );

    const projectPanels = projects.map(project =>
        <ProjectPanel key={project.id} image={project.image} imageAlt={project.imageAlt} title={project.title} subtitle={project.subtitle}
            contributions={project.contributions} links={project.links} currentProject={project.id === currentProjectIdx} />
    );

    return (
        <div id={styles["project-container"]}>
            <ul id={styles["project-highlight-list"]}>{projectButtonsItems}</ul>
            <div id={styles["project-panel-container"]}>{projectPanels}</div>
        </div>
    );
}