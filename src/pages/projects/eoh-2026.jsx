import styles from "../../styles/projectPage.module.css"

import eoh2026 from "../../media/eoh2026.png"

import ProjectPageLayout from "../../collections/projectPageLayout";

const projectDescription = (
    <>
        <p>The University of Illinois Urbana-Champaign's annual Engineering House (EOH) is the nation's largest student-run STEM
            (Science, Technology, Engineering, and Math) fair, where participants have the opportunity to showcase
            independent engineering projects and innovations. Having volunteered and led my student organizations' booths
            every year since freshmen year, I wanted to see if I could make a greater contribution to the College of
            Engineering's largest annual event, while also putting my art skills to the test.</p>
        <p>For that reason, I decided to take my shot at the logo design contest for the final EOH of my undergraduate
            career, based on theme "Forging the Future". Inspired by the aesthetic of isometric designs, I created my
            submission in <span className={styles["project-skill"]}>Inkscape</span>. In my design, I tried to incorporate
            elemets of multiple forms of engineering - some based on my own experiences and coursework - while also reflecting
            the theme and making the most of the provided color scheme. It is a great honor to have my submission be chosen
            as the winning logo design!
        </p>
    </>
);

export default function ArcoVoltaico() {
    return (
        <ProjectPageLayout
            title="Engineering Open House 2026 Logo"
            img={eoh2026}
            imgAlt="UIUC Engineering Open House 2026 logo"
            projectLinks={[]}
            projectSkills = {["Inkscape"]}
            projectDescription={projectDescription}
            lastModifiedDate={"19 September 2025"} />
    );
}