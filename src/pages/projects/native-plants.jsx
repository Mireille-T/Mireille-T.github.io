import NativePlantsCover from "../../media/native-plants-cover.jpg"

import ProjectPageLayout from "../../collections/projectPageLayout";

const projectDescription = (
    <>
        <p>Native Plants Illinois is a website I made as my final project for UIUC's Fall 2022 ENG 177: Introduction to
            Sustainability course. One of the prompts was to create a piece of media to educate a target audience on a
            certain environmental issue, and given my involvement with the Registered Student Organization <a href="https://publish.illinois.edu/redbisonuiuc/" target="_blank" rel="noreferrer">Red Bison</a>, I
            decided to pick advocacy for native plant species as my topic. The <a href="https://mireille-t.github.io/Illinois-Native-Plants-Advocacy/" target="_blank" rel="noreferrer">website</a> was made from scratch (excluding assets) in about less than a week, and is hosted using GitHub Pages.</p>
    </>
);

export default function NativePlants() {
    return (
        <ProjectPageLayout
            title="Native Plants Illinois Website"
            img={NativePlantsCover}
            imgAlt="A landing site with text 'We are past the point of no return' against the background of a prairie"
            projectLinks={[
                {
                    link: "https://mireille-t.github.io/Illinois-Native-Plants-Advocacy/",
                    ariaLabel: "Website",
                    iconClass: "fa-solid fa-globe"
                }
            ]}
            projectSkills={["CSS", "Figma", "GitHub", "HTML"]}
            projectDescription={projectDescription}
            lastModifiedDate={"27 May 2023"} />
    );
}