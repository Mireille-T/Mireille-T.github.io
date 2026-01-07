import styles from "../../styles/projectPage.module.css"

import unRecorridoCover from "../../media/un-recorrido-grid.png"
import unRecorridoPoster from "../../media/un-recorrido-poster.png"

import ProjectPageLayout from "../../collections/projectPageLayout";

const projectDescription = (
    <>
        <p>After the success of <a href="https://mireille-t.github.io/#/projects/arco-voltaico"
        rel="noreferrer">my last creative humanities X tech project from a Spanish class</a>, I wanted to try using
        my background in computer science to elevate my work for yet another Spanish module. This time, the course
        discussed the modernization and the evolution of tourism in Spain - how it has evolved, been influenced by
        various historical events and impacted Spain as a whole. The final project also has an additional constraint:
        it has to be a physical poster. I decided to take advantage of this format, and utilize a technology that
        allows the blending of virtual and physical spaces: augmented reality!</p>
        <p>In fact, my main takeaway from all the cultural materials we reviewed as well as our class discussions
        is that the tourism industry often cultivates a sense of apathy and even disrespect towards local problems;
        in an effort to boost a place's reputation, the tourist experience is prioritized over locals' welfare,
        resulting in damages with respect to the environment, working conditions and more. The two sides - the one
        curated for tourists and the one that locals have to deal with - felt apt to be represented by the physical
        and virtual components of an AR application, with the camera serving as a lens through which one's perspective
        changes.</p>
        <p>First, I designed the poster in <span className={styles["project-skill"]}>Inkscape</span>, referencing
        past popular historical tourism campaigns of Spain. I was partly inspired by <a href="https://dribbble.com/krugli"
        target="_blank" rel="noreferrer">Alex Krugli's</a> travel posters, and attempted to layer the various
        components of the poster. After the poster was completed, I used it as an image marker, and utilized A-Frame
        to implement WebAR on a webpage hosted on GitHub Pages. When this image is detected, an overlay will be placed
        on top of it. This overlay, also created in <span className={styles["project-skill"]}>Inkscape</span>, deviates
        from the stylistic nature of the original poster. Instead, it consists of fragments of real cultural material
        from the same period as the part of poster that it is overlaying. These cultural materials - photographs,
        sketches, etc. - highlight the societal problems surfaced either as a result of tourism, or that went hand-in-hand
        with tourism somehow.</p>
        <img className={styles["project-img"]} src={unRecorridoPoster} alt="A digital version of a poster of icons from Spain's historical tourist campaigns" style={{width: "40%"}} />
        <p>Even without the physical poster, you can still see the intended effect!
            <ol>
                <br />
                <li>Visit the website <a href="https://mireille-t.github.io/SPAN320/" target="_blank" rel="noreferrer">https://mireille-t.github.io/SPAN320/</a>.</li><br />
                <li>Point the camera at the poster above.</li><br />
                <li>See the overlay! Note that results may depend on good lighting and camera quality.</li>
            </ol></p>
    </>
);

export default function UnRecorrido() {
    return (
        <ProjectPageLayout
            title="Un Recorrido por las Épocas"
            img={unRecorridoCover}
            imgAlt="A grid of four images: 1) a digital version of a poster of icons from Spain's historical tourist campaigns 2) the same poster with an overlay consisting of cultural materials showing the negative impacts of tourism 3) a photograph of the original poster 4) a photograph of the original poster with the overlay added via augmented reality"
            projectLinks={[
                {
                    link:"https://mireille-t.github.io/SPAN320/",
                    ariaLabel:"Website",
                    iconClass:"fa-solid fa-globe"
                }
            ]}
            projectSkills = {["Inkscape", "JavaScript"]}
            projectDescription={projectDescription}
            lastModifiedDate={"14 December 2025"} />
    );
}