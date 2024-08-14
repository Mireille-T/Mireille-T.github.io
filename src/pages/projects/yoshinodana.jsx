import YoshinodanaCover from "../../media/yoshinodana.jpg"

import ProjectPageLayout from "../../collections/projectPageLayout";

const projectDescription = (
    <>
    <p>A 3D render of a 吉野棚 (yoshino-dana) tea set that I made after attending a tea ceremony by the University of Illinois Urbana-Champaign's Japan House, as part of the Fall 2022 ENG 100 course.</p>
    <p>Thank you to the Japan House staff for allowing me to take reference photos for this project, and to <a href="https://www.instagram.com/p/CnzqOM9Mqi2/" target="_blank" rel="noreferrer">@japanhouseuofi</a> and <a href="https://www.instagram.com/p/Cn0E1_wu84A/" target="_blank" rel="noreferrer">@illinoiscds</a> for the feature on Instagram!</p>
    </>
);

export default function Yoshinodana() {
    return (
        <ProjectPageLayout
            title="吉野棚"
            img={YoshinodanaCover}
            imgAlt="A 3D render of a yoshinodana Japanese tea set"
            projectLinks={[]}
            projectSkills = {["Blender 3D"]}
            projectDescription={projectDescription}
            lastModifiedDate={"26 May 2023"} />
    );
}