import styles from "../../styles/projectPage.module.css"

import VeeRCover from "../../media/veer-hero.png"

import ProjectPageLayout from "../../collections/projectPageLayout";

const projectDescription = (
    <>
        <p>
            Over the summer of 2023, I had the pleasure of going to the National Taiwan University
            Human-Computer Interaction Lab (<a href="https://ntuhci.org/" target="_blank" rel="noreferrer">NTU HCI Lab</a>)
            as part of the NTU Plus Academy Summer+ Research and Culture exchange program!
        </p>
        <p>
            One of the papers of which I co-authored is "VeeR: Exploring the Feasibility of Deliberately Designing VR Motion
            that Diverges from Mundane, Everyday Physical Motion to Create More Entertaining VR Experiences", presented at the 2024 CHI Conference on Human Factors in Computing Systems
            in Honolulu, Hawaii. The paper uses VR experiences in Unity to explore the feasibility of designing VR motion that
            deliberately diverges from real-world motion for the sake of improving their entertainment value.
        </p>
        <p>
            My main contributions to the paper include:
            <ol>
            <br/>
                <li>Designing and assembling a virtual space scene and the motion path going through it <span className={styles["project-skill"]}>Unity</span></li><br/>
                <li>Finding and consolidating related works as part of paper-writing</li>
            </ol>
        </p>
    </>
);

export default function VeeR() {
    return (
        <ProjectPageLayout
            title="VeeR"
            img={VeeRCover}
            imgAlt="A diagram with two sides: A) Real world, physical motion showing a straight line in a city, and B) VR Motion with Veering showing a curving line in a virtual space scene"
            projectLinks={[
                {
                    link: "https://doi.org/10.1145/3613904.3642064",
                    ariaLabel: "Research-Article",
                    iconClass: "fa-solid fa-book-open"
                }
            ]}
            projectSkills={["Research", "Unity"]}
            projectDescription={projectDescription}
            lastModifiedDate={"14 August 2024"} />
    );
}