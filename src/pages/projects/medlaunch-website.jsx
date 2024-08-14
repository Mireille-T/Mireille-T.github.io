import styles from "../../styles/projectPage.module.css"

import MedLaunchCover from "../../media/medlaunch-web-cover.png"

import ProjectPageLayout from "../../collections/projectPageLayout";

const projectDescription = (
    <>
        <p>
            MedLaunch UIUC is a registered student organisation that focuses on designing and implementing year-long projects together with people
            with disabilities and/or their caretakers, to help improve the accessibility space within the community.
            <br /><br />
            While our previous website (built using pure HTML, CSS and JavaScript with a friend) had more complex and unique elements, in 2024 the
            concern was raised that future website leads without web dev experience may not be able to easily edit the website information. As a
            result, I decided to redesign and migrate our website over to <span className={styles["project-skill"]}>WordPress</span> with
            minimal <span className={styles["project-skill"]}>HTML</span> elements, with a special emphasis on mobile responsiveness!
        </p>
    </>
);

export default function MedLaunchWebsite() {
    return (
        <ProjectPageLayout
            title="MedLaunch UIUC Website"
            img={MedLaunchCover}
            imgAlt="A landing site with text 'MedLaunch UIUC, Designing the Future of Healthcare' with multiple photographs of projects and members"
            projectLinks={[
                {
                    link: "https://medlaunch.web.illinois.edu/",
                    ariaLabel: "Website",
                    iconClass: "fa-solid fa-globe"
                }
            ]}
            projectSkills={["HTML", "WordPress"]}
            projectDescription={projectDescription}
            lastModifiedDate={"14 August 2024"} />
    );
}