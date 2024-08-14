import styles from "../../styles/projectPage.module.css"

import EllyCover from "../../media/elly-cover.jpg"
import EllyDemo from "../../media/elly-demo.jpg"

import ProjectPageLayout from "../../collections/projectPageLayout";

const projectDescription = (
    <>
        <p>Elly is a browser extension developed by a global all-female team of four Microsoft Learn Student
            Ambassadors, that generates alt text for images and acts as an accessibility checker for draft Tweets.
            Currently, a beta version has been published to the Chrome Web Store and Edge Add-ons pages.</p>
        <img className={styles["project-img"]} src={EllyDemo} alt="Captioning a photograph of a fox with Elly extension" />
        <p>As one of the team's frontend developers, I translated our UI designer's mockup in Figma to <span
            className={styles["project-skill"]}>HTML</span> and <span className={styles["project-skill"]}>CSS</span>.</p>
        <p>Additionally, several features I developed in <span className={styles["project-skill"]}>JavaScript</span> include:
            <ol>
                <br/>
                <li>Reading of DOM to extract and convert images in draft Tweets to suitable input for Azure Computer Vision API</li><br />
                <li>Calling on and handling response of Bing Spell Check API to check for lack of camel cases in Twitter hashtags</li><br />
                <li>Handling of Javascript promises during checking of accessibility errors</li>
            </ol>
        </p>
    </>
);

export default function Elly() {
    return (
        <ProjectPageLayout
            title="Elly"
            img={EllyCover}
            imgAlt="elly - your accessibility assistant"
            projectLinks={[
                {
                    link: "https://chrome.google.com/webstore/detail/elly-beta/mpoldliplbfhnphlgggnidcpajlfpkbn",
                    ariaLabel: "Chrome Web Store",
                    iconClass: "fa-brands fa-chrome"
                },
                {
                    link: "https://microsoftedge.microsoft.com/addons/detail/elly-beta/lclhlnhljimghnlcagccfdmdlifkpcfh",
                    ariaLabel: "Edge Add-ons",
                    iconClass: "fa-brands fa-edge"
                },
                {
                    link: "https://x.com/EllyOrg",
                    ariaLabel: "X / Twitter",
                    iconClass: "fa-brands fa-x-twitter"
                },
                {
                    link: "https://www.youtube.com/watch?v=Pvu7xTNwh9g",
                    ariaLabel: "YouTube",
                    iconClass: "fa-brands fa-youtube"
                }
            ]}
            projectSkills={["Azure", "CSS", "GitHub", "HTML", "JavaScript"]}
            projectDescription={projectDescription}
            lastModifiedDate={"27 May 2023"} />
    );
}