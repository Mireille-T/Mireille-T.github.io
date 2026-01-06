import styles from "../../styles/projectPage.module.css"

import CMNCover from "../../media/cmn-cover.jpg"
import CMNVector from "../../media/cmn-inkscape.jpg"

import ProjectPageLayout from "../../collections/projectPageLayout";

const projectDescription = (
    <>
        <p>CMN Table is a project under <a href="https://medlaunch.web.illinois.edu/" target="_blank" rel="noreferrer">MedLaunch UIUC</a> - a Registered Student Organization that aims to design for
            accessibility. Over the 2022 - 2023 school year, our project team designed and built a wheelchair-accessible
            playtable for a children's hospital.</p>
        <p>As a team, we decided on the Block I shape since the reduced width in the centre of the table would allow for
            easier collaboration. Additionally, we wanted to make the playtable as engaging as possible through the
            provision of a wide variety of games and activities to engage kids with different interests!</p>
        <img className={styles["project-img"]} src={CMNVector} alt="Vector graphics of table designs with dimensions" />
        <p>One of my main contributions came in the form of creating several drafts of the table designs in <span
            className={styles["project-skill"]}>Inkscape</span>, for easier visualisation. The choice of vector graphics was in
            order to make full use of an isometric grid to allow for accurate proportions at a clear three-quarters
            angle.</p>
        <p>Afterwards, I also provided 3D visualisations in <span className={styles["project-skill"]}>Blender</span> (for generic structure) and <span className={styles["project-skill"]}>Fusion 360</span> (for the assembly of specific 80/20 aluminium extrusions).</p>
        <p>For the final product, I helped out mainly with the physical assembly of the aluminium frame and side panels, but through the process I have also gotten trained and used the tablesaw, bandsaw and other tools for prototyping!</p>
        <p>Shoutout to the amazing CMN Table project team and MedLaunch UIUC for making my experience here such a fun and meaningful one! :D</p>
    </>
);

export default function CMNTable() {
    return (
        <ProjectPageLayout
            title="CMN Table"
            img={CMNCover}
            imgAlt="A block-I shaped table consisting of a wooden top, aluminium frame and activities on side panels"
            projectLinks={[]}
            projectSkills={["Blender 3D", "Inkscape", "Fabrication", "Fusion 360"]}
            projectDescription={projectDescription}
            lastModifiedDate={"26 May 2023"} />
    );
}