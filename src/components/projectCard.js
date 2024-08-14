import { Link } from "react-router-dom";

import styles from '../styles/projects.module.css'

export default function ProjectCard({ project, index }) {
    var classNames = project.tags;
    var classes = "";
    for (var i = 0; i < classNames.length; ++i) {
        classes += " " + classNames[i];
    }

    return (
        <Link id={project.id} to={"/projects/" + project.id} className={styles["project-card"] + classes} style={{backgroundImage: `url(${project.img})`}}>
            <div className={styles["card-desc-container"]}>
                <div className={styles["card-title-container"] + " " + (index % 2 === 0 ? styles["flipx"] : styles["flipy"])}>
                    <div className={styles["card-title"]}>
                        <h3>{project.title}</h3>
                        <hr />
                        <p>{project.subtitle}</p>
                    </div>
                </div>
            </div>
        </Link>

    );
}