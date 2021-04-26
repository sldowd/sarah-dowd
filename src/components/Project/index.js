import React from 'react';
import {Card} from 'react-bootstrap';



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
                <div className="my-2 flex-row space-between" key={project}>
                    <Card className="flex-row spacebetween">
                    <Card.Title title={project.name}></Card.Title>
                    <img className="img" src={project.imgSrc} alt="Screenshot of project"/>
                        <Card.Body>
                        <a href={project.deployedUrl}>Deployed Project | </a>
                        <a href={project.githubUrl}>Github Repository</a>
                        </Card.Body>
                    </Card>
                </div>
            )}
            
        </section>
    );
}

export default Project;