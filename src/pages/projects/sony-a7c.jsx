import styles from "../../styles/projectPage.module.css"

import SonyA7CCover from "../../media/sony-a7c.jpg"
import SonyA7CNoLens from "../../media/sony-a7c-no-lens.jpg"
import SonyA7CBack from "../../media/sony-a7c-back.jpg"
import SonyA7CBackOpen from "../../media/sony-a7c-back-open.jpg"
import SonyA7CTop from "../../media/sony-a7c-top.jpg"

import ProjectPageLayout from "../../collections/projectPageLayout";

const projectDescription = (
    <>
        <img className={styles["project-img"]} src={SonyA7CNoLens} alt="A 3D render of the Sony a7C camera without lens" />
        <img className={styles["project-img"]} src={SonyA7CBack} alt="A 3D render of the back of the Sony a7C camera" />
        <img className={styles["project-img"]} src={SonyA7CBackOpen} alt="A 3D render of the back of the Sony a7C camera opened" />
        <img className={styles["project-img"]} src={SonyA7CTop} alt="A 3D render of the top of the Sony a7C camera" />
    </>
);

export default function SonyA7C() {
    return (
        <ProjectPageLayout
            title="Sony a7C"
            img={SonyA7CCover}
            imgAlt="A 3D render of the Sony a7C camera with lens"
            projectLinks={[]}
            projectSkills={["Blender 3D"]}
            projectDescription={projectDescription}
            lastModifiedDate={"27 May 2023"} />
    );
}