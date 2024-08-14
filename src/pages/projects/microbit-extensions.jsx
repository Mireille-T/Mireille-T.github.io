import styles from "../../styles/projectPage.module.css"

import MicrobitExtCover from "../../media/microbit-ext-cover.jpg"
import MicrobitExts from "../../media/microbit-exts.jpg"

import ProjectPageLayout from "../../collections/projectPageLayout";

const projectDescription = (
    <>
        <p>During my internship at Tinkertanker Pte. Ltd., one of my tasks included the upgrading of the company's
            current published extensions for the BBC micro:bit for compatibility with the micro:bit v2. These extensions
            allow users of the MakeCode block editor to program the micro:bit for solutions involving specific sensors
            and actuators, that would otherwise require higher-level understanding of specific pins.</p>
        <p>The particular extensions that I worked on are:</p>
        <img className={styles["project-img"]} src={MicrobitExts} alt="Icons for micro:bit extensions" />
        <p>
            <ol>
                <li><a href="https://github.com/tinkertanker/microDriver_SHT2x" target="_blank" rel="noreferrer">microDriver_SHT2x</a> - for
                    linking up with the SHT20, SHT21, SHT25 temperature and humidity sensors. Coded in <span
                        className={styles["project-skill"]}>TypeScript</span> and icon created in <span
                            className={styles["project-skill"]}>Inkscape</span>.</li><br />
                <li><a href="https://github.com/tinkertanker/pxt-rotary-encoder-ky040" target="_blank" rel="noreferrer">rotary-encoder-ky040</a> - for
                    linking up with the KY-040 rotary encoder. Coded in <span className={styles["project-skill"]}>TypeScript</span>.</li><br />
                <li><a href="https://github.com/tinkertanker/pxt-range-vl53l0x" target="_blank" rel="noreferrer">range-vl53l0x</a> - for
                    linking up with the VL53L0X time-of-flight range sensor. Coded in <span
                        className={styles["project-skill"]}>TypeScript</span> and icon created in <span
                            className={styles["project-skill"]}>Inkscape</span>.</li><br />
                <li><a href="https://github.com/tinkertanker/pxt-alphanumeric-ht16k33" target="_blank" rel="noreferrer">alphanumeric-ht16k33</a> - for
                    linking up with the HT16K33 alphanumeric display. Coded in <span className={styles["project-skill"]}>TypeScript</span>.</li>
            </ol>
        </p>
    </>
);

export default function MicrobitExtensions() {
    return (
        <ProjectPageLayout
            title="micro:bit Extensions"
            img={MicrobitExtCover}
            imgAlt="micro:bit MakeCode editor with blocks from the Rotary Encoder, Rangefinder and SHT2x sensor extensions"
            projectLinks={[]}
            projectSkills={["Inkscape", "TypeScript"]}
            projectDescription={projectDescription}
            lastModifiedDate={"27 May 2023"} />
    );
}