
import React from 'react';
import { Card } from 'react-bootstrap';



function Project(props) {

    const currentProject = [
        {
            name: "Dungeon Masters Guide",
            imgSrc: "./assets/DMG-screenshot.png",
            deployedUrl: "https://dungeon-masters-guide.herokuapp.com/",
            githubUrl: "https://github.com/RaeStichter/initiate-dnd"
        },
        {
            name: "Project Tracker",
            imgSrc: "./assets/project-tracker-image.png",
            deployedUrl: "https://sldowd.github.io/kanban-board/",
            githubUrl: "https://github.com/sldowd/kanban-board"
        },
        {
            name: "Paranormal Tourism Database",
            imgSrc: "./assets/PTDB-screenshot.png",
            deployedUrl: "http://paranormal-tourism.herokuapp.com/",
            githubUrl: "https://github.com/RaeStichter/paranormal-tourism"
        },
        {
            name: "Readme Generator",
            imgSrc: "./assets/readmegen-screenshot.png",
            deployedUrl: "https://sldowd.github.io/readme-generator/",
            githubUrl: "https://github.com/sldowd/readme-generator"
        },
        {
            name: "Regular Expression Tutorial",
            imgSrc: "./assets/gist-screenshot.png",
            deployedUrl: "https://gist.github.com/sldowd/9c2d0a3780020b12101b78f833f21659",
            githubUrl: "https://github.com/sldowd"
        },
]

    return (
        <section className='flex-row space-between'>
            {currentProject.map((project) =>
                    <Card className="card my-5" key={project}>
                    <div>
                        <Card.Body>
                        <img className="img" src={project.imgSrc} alt="Screenshot of project"/>
                        <Card.Title Title={project.name}>{project.name}</Card.Title>
                        <a href={project.deployedUrl}>Deployed Project | </a>
                        <a href={project.githubUrl}>Github Repository</a>
                        </Card.Body>
                    </div>
                    </Card>
            )}
        </section>
    );
}

export default Project;