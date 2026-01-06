import styles from "../../styles/projectPage.module.css"

import EWBUIUCCover from "../../media/ewb-web-cover.png"
import EWBUIUCProjects from "../../media/ewb-web-projects.png"

import ProjectPageLayout from "../../collections/projectPageLayout";

const projectDescription = (
    <>
        <p>
            One of my duties as the 2023 Marketing Chair of the Engineers Without Borders UIUC Student Chapter was to maintain our chapter's website.
            Since the website was formally based on a WordPress template without much modification, I decided to redesign it to give it a more unique
            and professional look!
        </p>
        <img className={styles["project-img"]} src={EWBUIUCProjects} alt="A grid of buttons with basic project information on them, and the background showcasing the physical site" />
        <p>
            To ensure that future marketing leads without experience in web development would still be able to easily maintain the website, we decided to
            stick with <span className={styles["project-skill"]}>WordPress</span>, but customise the templates and add minimal <span className={styles["project-skill"]}>HTML</span> elements
            so that the entire website would stand out more. Another primary consideration was the inclusion of photos highlighting the impact of our work as well as our chapter events,
            since these were major reasons for recruitment and calls for donations!
        </p>
    </>
);

export default function EWBUIUCWebsite() {
    return (
        <ProjectPageLayout
            title="EWB-UIUC Website"
            img={EWBUIUCCover}
            imgAlt="A landing site with text 'Building a better world, one community at a time'"
            projectLinks={[
                {
                    link: "https://ewbuiuc.org/",
                    ariaLabel: "Website",
                    iconClass: "fa-solid fa-globe"
                }
            ]}
            projectSkills={["HTML", "WordPress"]}
            projectDescription={projectDescription}
            lastModifiedDate={"14 August 2024"} />
    );
}