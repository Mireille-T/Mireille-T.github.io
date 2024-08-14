import ExplorerCover from "../../media/explorer.jpg"

import ProjectPageLayout from "../../collections/projectPageLayout";

export default function Explorer() {
    return (
        <ProjectPageLayout
            title="Explorer"
            img={ExplorerCover}
            imgAlt="A 3D render of a kerosene lamp, a journal with a glowing red pendant on it and a golden compass on a wooden desk in front of a map"
            projectLinks={[]}
            projectSkills = {["Blender 3D"]}
            lastModifiedDate={"27 May 2023"} />
    );
}