import styles from "../../styles/projectPage.module.css"

import arcoVoltaicoCover from "../../media/arco-voltaico-cover.png"

import ProjectPageLayout from "../../collections/projectPageLayout";

const projectDescription = (
    <>
        <p>"Arco Voltaico" is an avant-garde poem by Guillermo de Torre, composed in response to Madrid's rapid industrial
            progress around the 1920s. Out of all the pieces of literature we reviewed for my modern Spanish culture and
            literature class, this one appealed to me by a long shot.</p>
        <p>The poem itself both praises the dazzling nature of electricity while also lamenting the things society has lost
            as a result. Regardless of whether such technology is good or bad, however, the poem emphasizes that these
            changes are here to stay, and that humanity will place technology on a pedestal. This message is especially
            striking in my interpretation of the poem's last line: "S. M. el Día Voltaico" ["S. M. the Voltaic Day"].My
            guess is that "S. M." stands for "Su Majestad", or "Their Majesty" in English. Even though this poem is a century
            old, and technology has long since advanced beyond electric lights, I still find its themes incredibly
            relevant. Time and time again, while I acknowledge the good that technology can do, frequent breaches of ethics
            have increased my disillusionment. However, just like the poem suggests, I know that we cannot get rid of
            certain technologies altogether, which is why I have decided to persist and make a positive impact from within.
            Therefore, this poem really speaks to my motivations as a software developer.
        </p>
        <p>Additionally, as a lover of both the arts and STEM, I am simply in awe of the number of clever references de
            Torre has inserted into the poem. Feel free to reach out if you want to hear more, but some examples include
            describing the fragmentation of time and space due to electricity using scientific vocabulary for crystal
            formations, as well as using the terms for cathode and anode to describe the positive and negative impacts
            of technology.
        </p>
        <p>Therefore, to showcase my love for this poem, I decided to base my final project on it. The original poem had an
            avant-garde style that attempts to showcase movement through static text, so I thought it would be fun to bring
            it a step further and allow the text to actually be moved and affect the changes it describes. Hence, using my
            background in game development and computational photography, I employed <span className={styles["project-skill"]}>Unity C#</span> to create an "interactive poem" -
            by interacting with select text fragments from the original poem, the poem would be able to edit different
            components of <a href="https://pixabay.com/photos/madrid-spain-road-plaza-del-callao-3021998/" target="_blank"
            rel="noreferrer">an image of Madrid</a>. Through this project that blends the arts with technology, I also hoped
            to demonstrate that despite the popularity of Generative AI, there have always been and still are truly
            creative and meaningul ways to combine the two.</p>
        <p>Some examples of how I incorporated computational photography was adjusting the grayscale factor of the image,
            scaling and translating specific layers, as well as isolating bright spots. However, my greatest challenge was
            trying to implement "fragmentation", to showcase the aforementioned crystal effect. Since I wanted to make this
            effect randomized but also stackable on top of the other image effects, I knew I had to use shaders instead of
            traditional image editing techniques. Therefore, through some online research and experimentation, I spent some
            time developing a <span className={styles["project-skill"]}>HLSL</span> shader to achieve my desired effect.</p>
        <iframe className={styles["project-iframe"]} src="https://www.youtube.com/embed/6nQsP32stLw" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        <p>This interactive poem is still currently active on its <a href="https://mireille-t.github.io/ArcoVoltaico/"
            target="_blank" rel="noreferrer">website</a>, so I hope you can have as much fun playing with it as
            I had making it!</p>
    </>
);

export default function ArcoVoltaico() {
    return (
        <ProjectPageLayout
            title="Arco Voltaico"
            img={arcoVoltaicoCover}
            imgAlt="A split-screen with an avant-garde Spanish poem with some text highlighted on the left and an image of Madrid on the right"
            projectLinks={[
                {
                    link:"https://mireille-t.github.io/ArcoVoltaico/",
                    ariaLabel:"Website",
                    iconClass:"fa-solid fa-globe"
                },
                {
                    link:"https://www.youtube.com/watch?v=6nQsP32stLw",
                    ariaLabel:"YouTube",
                    iconClass:"fa-brands fa-youtube"
                }
            ]}
            projectSkills = {["C#", "HLSL", "Unity"]}
            projectDescription={projectDescription}
            lastModifiedDate={"11 May 2025"} />
    );
}