import TeahouseCover from "../../media/teahouse.jpg"

import ProjectPageLayout from "../../collections/projectPageLayout";

export default function Teahouse() {
    return (
        <ProjectPageLayout
            title="Teahouse"
            img={TeahouseCover}
            imgAlt="A 3D render of a clay Chinese tea set surrounded by sakura"
            projectLinks={[]}
            projectSkills = {["Blender 3D"]}
            lastModifiedDate={"27 May 2023"} />
    );
}