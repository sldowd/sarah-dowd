
import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import { Grid } from '@material-ui/core';



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
        <section>
            <CardDeck>
            <Grid container spacing={4} justify="center">
            {currentProject.map((project) =>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="card" key={project}>
                    <div>
                    <img className="img" src={project.imgSrc} alt="Screenshot of project"/>
                        <Card.Body>
                        <Card.Title Title={project.name}>{project.name}</Card.Title>
                        <a href={project.deployedUrl}>Deployed Project | </a>
                        <a href={project.githubUrl}>Github Repository</a>
                        </Card.Body>
                    </div>
                    </Card>
                </Grid>
            )}
            </Grid>
            </CardDeck>
            
        </section>
    );
}

export default Project;