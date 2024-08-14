import styles from "../../styles/projectPage.module.css"

import KingfisherCover from "../../media/kingfisher-web-cover.png"

import ProjectPageLayout from "../../collections/projectPageLayout";

const projectDescription = (
    <>
        <p>
            The Belted Kingfisher is UIUC's (as of now) unofficial mascot! Having just joined the team, I volunteered to redesign the website
            from scratch on <span className={styles["project-skill"]}>WordPress</span> (platform chosen due to the team's hosting plan as well as our
            desire to use WooCommerce for e-Commerce purposes).
        </p>
        <p>
            To achieve certain functional and aesthethic effects outside of the original Astra template, I also added some
            custom <span className={styles["project-skill"]}>HTML</span>, <span className={styles["project-skill"]}>CSS </span>
            and <span className={styles["project-skill"]}>JavaScript</span> to the website without compromising
            ease of website management for future team members.
        </p>
    </>
);

export default function KingfisherWebsite() {
    return (
        <ProjectPageLayout
            title="Kingfisher UIUC Website"
            img={KingfisherCover}
            imgAlt="A landing site with text 'Naturally true to the orange and blue' with a photograph of the Kingfisher mascot as a background"
            projectLinks={[
                {
                    link: "https://kingfisheruiuc.org/",
                    ariaLabel: "Website",
                    iconClass: "fa-solid fa-globe"
                }
            ]}
            projectSkills={["CSS", "HTML", "JavaScript", "WordPress"]}
            projectDescription={projectDescription}
            lastModifiedDate={"14 August 2024"} />
    );
}