import styles from "../../styles/projectPage.module.css"

import ToTimeZoneCover from "../../media/to-time-zone-cover.png"

import ProjectPageLayout from "../../collections/projectPageLayout";

const projectDescription = (
    <>
        <p>toTimeZone() is a browser extension developed by Raymond Wangsa Putra and myself for the 48-hour Microsoft
            Learn Student Ambassadors' (MLSA) Microsoft Edge Add-on hackathon. Determined to resolve the issue of
            confusion surrounding meeting times in the MLSA community as a result of differing time zones, we decided to
            create a simple yet useful time zone converter. toTimeZone() clinched third place in the hackathon.</p>
        <p>As the frontend developer of the pair, I designed the add-on's UI in <span
                className={styles["project-skill"]}>Figma</span> and implemented it in <span
                className={styles["project-skill"]}>HTML</span> and <span className={styles["project-skill"]}>CSS</span>.</p>
    </>
);

export default function ToTimeZone() {
    return (
        <ProjectPageLayout
            title="toTimeZone()"
            img={ToTimeZoneCover}
            imgAlt="toTimeZone() browser add-on UI"
            projectLinks={[]}
            projectSkills={["CSS", "Figma", "GitHub", "HTML"]}
            projectDescription={projectDescription}
            lastModifiedDate={"27 May 2023"} />
    );
}