import styles from "../../styles/projectPage.module.css"

import PointCover from "../../media/point-vr-cover.jpg"
import PointFigma from "../../media/point-vr-figma.jpg"
import PointInkscape from "../../media/point-vr-inkscape.jpg"

import ProjectPageLayout from "../../collections/projectPageLayout";

const projectDescription = (
    <>
        <p>Physics Outreach and Instruction through New Technologies (POINT) is an Illinois Center for Advanced Studies
            of the Universe (ICASU) project aimed at generating interest in physics for middle school and high school
            students through virtual reality.</p>
        <p>Since Fall 2022, I have been a member of the VR Production Team,
            which aims to develop further simulations to explain the fundamental physics of gravity and general
            relativity, using Unity.</p>
        <p>Using <span className={styles["project-skill"]}>C#</span> scripting in <span className={styles["project-skill"]}>Unity</span>, I developed several features for the simulation, most
            notably:
            <ol>
                <br />
                <li>A subtitling system that takes in a .srt file as an input and parses tags to generate captions in
                    the appropriate language</li><br />
                <li>A UI manager for the handling of menu interactions</li><br />
                <li>A tutorial for new users (via coroutines)</li><br />
                <li>A natural throwing mechanic in VR</li><br />
                <li>(Together with <span className={styles["project-skill"]}>HLSL</span> shader language) An animated visualisation of infinite 3D space</li>
            </ol></p>
        <img className={styles["project-img"]} src={PointFigma} alt="UI design for menus in Figma interface" />
        <p>With <span className={styles["project-skill"]}>Figma</span>, I designed the current UI for the tutorial and menu, for
            clarity and easy interactability in VR. Subsequently, I implemented these designs in <span
                className={styles["project-skill"]}>Unity</span>.</p>
        <img className={styles["project-img"]} src={PointInkscape} alt="controls graphic in Inkscape interface" />
        <p>I also contributed through the creation of several 2D assets in <span className={styles["project-skill"]}>Inkscape</span>,
            namely the controls graphic and a clock for demonstration of how matter affects spacetime. Vector graphics
            were used to ensure high resolution and ease of editing for future uses.</p>
        <p>Finally, as the VR Production Team's Task Manager since Fall 2023, I have been working with the head of the team lead
            to maintain a high-level overview of the VR Production Team's goals and create and assign tasks to members accordingly.
        </p>
        <p>Some of our work has been presented at the 2023 American Society for Engineering Education (ASEE) conference as part of the
            paper "GR in VR: Using Immersive Virtual Reality as a Learning Tool for General Relativity".
        </p>
    </>
);

export default function Point() {
    return (
        <ProjectPageLayout
            title="POINT VR"
            img={PointCover}
            imgAlt="A VR simulation consisting of a grid deforming around two spheres"
            projectLinks={[
                {
                    link: "https://icasu.illinois.edu/outreach/point-vr",
                    ariaLabel: "Website",
                    iconClass: "fa-solid fa-globe"
                },
                {
                    link: "https://github.com/POINT-VR/POINT-VR-Chapter-1",
                    ariaLabel: "GitHub",
                    iconClass: "fa-brands fa-github"
                },
                {
                    link: "https://doi.org/10.18260/1-2--43815",
                    ariaLabel: "Research-Article",
                    iconClass: "fa-solid fa-book-open"
                }
            ]}
            projectSkills={["C#", "Figma", "GitHub", "HLSL", "Inkscape", "Unity"]}
            projectDescription={projectDescription}
            lastModifiedDate={"14 August 2024"} />
    );
}