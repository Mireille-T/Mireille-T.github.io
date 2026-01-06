import styles from "../../styles/projectPage.module.css"

import WVMCover from "../../media/wvm-hero.png"

import ProjectPageLayout from "../../collections/projectPageLayout";

const projectDescription = (
    <>
        <p>
            Over the summer of 2023, I had the pleasure of going to the National Taiwan University
            Human-Computer Interaction Lab (<a href="https://ntuhci.org/" target="_blank" rel="noreferrer">NTU HCI Lab</a>)
            as part of the NTU Plus Academy Summer+ Research and Culture exchange program!
        </p>
        <p>
            One of the papers of which I co-authored is "Exploring Augmented Reality Interface Designs for Virtual Meetings
            in Real-world Walking Contexts", awared Honorable Mention at the 2024 Designing Interactive Systems Conference
            in Copenhagen, Denmark. The paper explores augmented reality (AR) interface design for virtual meetings in
            real-world walking conditions.
        </p>
        <p>
            My main contributions to the paper include:
            <ol>
            <br/>
                <li>Simulating webpage interaction in AR via <span className={styles["project-skill"]}>JavaScript</span> and <span className={styles["project-skill"]}>Unity C#</span></li><br/>
                <li>Assisting with the facilitation of user studies</li><br/>
                <li>Finding and consolidating related works as part of paper-writing</li>
            </ol>
        </p>
    </>
);

export default function WalkingVirtualMeeting() {
    return (
        <ProjectPageLayout
            title="Walking Virtual Meeting"
            img={WVMCover}
            imgAlt="A diagram with three sections, each containing a person with AR goggles walking in: A) a park with an less translucent virtual meeting UI, B) an alley with a more translucent virtual meeting UI, C) a street crossing with no UI"
            projectLinks={[
                {
                    link: "https://doi.org/10.1145/3643834.3661538",
                    ariaLabel: "Research-Article",
                    iconClass: "fa-solid fa-book-open"
                }
            ]}
            projectSkills={["JavaScript", "Research", "Unity"]}
            projectDescription={projectDescription}
            lastModifiedDate={"14 August 2024"} />
    );
}