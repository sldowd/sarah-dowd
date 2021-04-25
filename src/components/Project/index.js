import React from 'react';



function Project(props) {

    const currentProject = [
        {
            name: "Paranormal Tourism Database",
            imgSrc: "./assets/PTDB-screenshot.png",
            deployedUrl: "http://paranormal-tourism.herokuapp.com/",
            githubUrl: "https://github.com/RaeStichter/paranormal-tourism"
        },
        {
            name: "Dungeon Masters Guide",
            imgSrc: "./assets/DMG-screenshot.png",
            deployedUrl: "https://dungeon-masters-guide.herokuapp.com/",
            githubUrl: "https://github.com/RaeStichter/initiate-dnd"
        },
]

    return (
        <section>
            {currentProject.map((project) =>
                <div key={project}>
                    <h3>{project.name}</h3>
                    <img src={project.imgSrc} alt="Screenshot of project"/>
                    <a href={project.deployedUrl}>Deployed Project | </a>
                    <a href={project.githubUrl}>Github Repository</a>
                </div>
            )}
        </section>
    );
}

export default Project;