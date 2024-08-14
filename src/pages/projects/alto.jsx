import styles from "../../styles/projectPage.module.css"

import altoCover from "../../media/alto-cover.jpg"
import altoUI from "../../media/alto-wide.png"

import ProjectPageLayout from "../../collections/projectPageLayout";

const projectDescription = (
    <>
        <p>alto is a browser add-on that automatically generates alt text for images on a webpage as a means of addressing the <a
            href="https://webaim.org/projects/million/#alttext">60%+ of online images lacking alt text</a>, and
            making the Internet a more inclusive place for screen reader users.</p>
        <p>As the developers of alto, The Bigger Picture - a team consisting of Thomas Tai, Raymond Ma and myself -
            managed to earn the title of <a
                href="https://imaginecup.microsoft.com/en-US/Member/WinnerCertificate?userid=EULWDq8TCS998uhwmyOHlQ%253d%253d&compId=d6eyg4hwXs7WbP0sXtsOIg%253d%253d&teamId=SfW3z2TKGuhxauSyp25UIg%253d%253d"
                target="_blank" rel="noreferrer">2023 Microsoft Imagine Cup Americas World Finalists</a>!</p>
        <img className={styles["project-img"]} src={altoUI} alt="alto browser add-on UI" />
        <p>As the team's frontend developer, I translated the add-on design from Figma to <span
            className={styles["project-skill"]}>HTML</span> and <span className={styles["project-skill"]}>CSS</span>. In particular, special
            care was taken to ensure that the toggles in the add-on were accessible to keyboard
            navigation and screen readers, with the use of wrappers around a HTML checkbox and ARIA labels. This ensures
            a pleasant yet inclusive UI.</p>
        <iframe className={styles["project-iframe"]} src="https://www.youtube.com/embed/0HYQcL4rvEU" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        <p>Additionally, I handled
            various features involving user interaction via <span className={styles["project-skill"]}>JavaScript</span>,
            ensuring that the relevant <span className={styles["project-skill"]}>Azure</span> API was called, and that the response is
            returned according to user settings (e.g. language).</p>
    </>
);

export default function Alto() {
    return (
        <ProjectPageLayout
            title="alto"
            img={altoCover}
            imgAlt="alto - a browser add-on for digital accessibility | The Bigger Picture"
            projectLinks={[
                {
                    link:"https://youtu.be/0HYQcL4rvEU",
                    ariaLabel:"YouTube",
                    iconClass:"fa-brands fa-youtube"
                },
                {
                    link:"https://github.com/Mireille-T/The-Bigger-Picture",
                    ariaLabel:"GitHub",
                    iconClass:"fa-brands fa-github"
                }
            ]}
            projectSkills = {["Azure", "CSS", "GitHub", "HTML", "JavaScript"]}
            projectDescription={projectDescription}
            lastModifiedDate={"26 May 2023"} />
    );
}