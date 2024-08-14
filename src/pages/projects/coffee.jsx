import CoffeeCover from "../../media/coffee.jpg"

import ProjectPageLayout from "../../collections/projectPageLayout";

export default function Coffee() {
    return (
        <ProjectPageLayout
            title="Coffee"
            img={CoffeeCover}
            imgAlt="A 3D render of a single cup of coffee in an empty café with silhouettes of people outside"
            projectLinks={[]}
            projectSkills = {["Blender 3D"]}
            lastModifiedDate={"27 May 2023"} />
    );
}