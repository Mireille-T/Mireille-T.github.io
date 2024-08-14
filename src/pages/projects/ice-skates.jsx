import IceSkatesCover from "../../media/ice-skates-full.jpg"

import ProjectPageLayout from "../../collections/projectPageLayout";

export default function IceSkates() {
    return (
        <ProjectPageLayout
            title="Ice Skates"
            img={IceSkatesCover}
            imgAlt="A 3D render of ice skates"
            projectLinks={[]}
            projectSkills = {["Blender 3D"]}
            lastModifiedDate={"27 May 2023"} />
    );
}