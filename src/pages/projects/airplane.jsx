import AirplaneCover from "../../media/airplane.jpg"

import ProjectPageLayout from "../../collections/projectPageLayout";

export default function Airplane() {
    return (
        <ProjectPageLayout
            title="Airplane"
            img={AirplaneCover}
            imgAlt="A 3D render of a model airplane facing an open window"
            projectLinks={[]}
            projectSkills = {["Blender 3D"]}
            lastModifiedDate={"27 May 2023"} />
    );
}