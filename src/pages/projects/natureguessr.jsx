import styles from "../../styles/projectPage.module.css"

import NatureGuessrCover from "../../media/natureguessr.png"
import NatureGuessrUI from "../../media/natureguessr-ui.png"

import ProjectPageLayout from "../../collections/projectPageLayout";

const projectDescription = (
    <>
        <p>For my databases class (CS 411) in Fall 2025, our team was tasked with creating a fully functioning website
            that ties frontend with backend. Given my involvement in many sustainability-related groups on campus as
            well as my love for some of the native species around the area, I suggested a website that could increase
            knowledge and awareness of the importance of native species and the damage done by invasive species. The
            team agreed, and that is how we ended up developing NatureGuessr - a platform which consists of a game
            (inspired by GeoGuessr) where players have to guess a location within the United States based on a list of
            species found there, as well as other forms of visualizations based on a community repository of observation
            data.
        </p>
        <img className={styles["project-img"]} src={NatureGuessrUI} alt="NatureGuessr UI drafts" />
        <p>My notable contributions included:
            <ol>
                <br />
                <li>Designing the user interface of different screens in <span className={styles["project-skill"]}>Figma</span></li><br />
                <li>Implementing the entire frontend (including displaying of backend query results) using <span className={styles["project-skill"]}>React</span> and <span className={styles["project-skill"]}>TypeScript</span></li><br />
                <li>Converting data from frontend interactions to pseudocode backend queries</li><br />
                <li>Connecting NatureServe API, Google Maps API and MUI X for data visualization and supplementation</li>
            </ol></p>
    </>
);

export default function NatureGuessr() {
    return (
        <ProjectPageLayout
            title="NatureGuessr"
            img={NatureGuessrCover}
            imgAlt="A webpage with a map and a list of flora and fauna on the right"
            projectLinks={[]}
            projectSkills={["CSS", "Figma", "GitHub", "HTML", "React", "TypeScript"]}
            projectDescription={projectDescription}
            lastModifiedDate={"07 December 2025"} />
    );
}