import styles from "../../styles/projectPage.module.css"

import WagashiCover from "../../media/dango.jpg"
import Kingyoku from "../../media/kingyoku.jpg"
import Nerikiri from "../../media/nerikiri.jpg"

import ProjectPageLayout from "../../collections/projectPageLayout";

const projectDescription = (
    <>
        <img className={styles["project-img"]} src={Kingyoku} alt="A 3D render of kingyoku" />
        <img className={styles["project-img"]} src={Nerikiri} alt="A 3D render of nerikiri" />
        <p>Thank you to the Japan House staff for the feature on the <a href="https://www.instagram.com/p/CqgEnksM1pW/?img_index=1" target="_blank" rel="noreferrer">@japanhouseuofi</a> Instagram!</p>
    </>
);

export default function Wagashi() {
    return (
        <ProjectPageLayout
            title="Wagashi"
            img={WagashiCover}
            imgAlt="A 3D render of mitarashi dango"
            projectLinks={[]}
            projectSkills={["Blender 3D"]}
            projectDescription={projectDescription}
            lastModifiedDate={"27 May 2023"} />
    );
}