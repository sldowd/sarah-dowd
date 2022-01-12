// import { CardContent } from '@material-ui/core';
import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import { Grid } from '@material-ui/core';



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
        {
            name: "Project Tracker",
            imgSrc: "./assets/project-tracker-image.png",
            deployedUrl: "https://sldowd.github.io/kanban-board/",
            githubUrl: "https://github.com/sldowd/kanban-board"
        },
        {
            name: "Dungeon Masters Guide",
            imgSrc: "./assets/DMG-screenshot.png",
            deployedUrl: "https://dungeon-masters-guide.herokuapp.com/",
            githubUrl: "https://github.com/RaeStichter/initiate-dnd"
        }
]

    return (
        <section>
            <CardDeck>
            <Grid container spacing={1} justify="center">
            {currentProject.map((project) =>
                <Grid item xs={12} sm={6} md={6}>
                    <Card className="card" key={project}>
                    <div>
                    <Card.Title title={project.name}></Card.Title>
                    <img className="img" src={project.imgSrc} alt="Screenshot of project"/>
                        <Card.Body>
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