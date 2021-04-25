import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

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
                <div className="flex-row" key={project}>
                    <Card background="none">
                    <CardHeader title={project.name}></CardHeader>
                    <img src={project.imgSrc} alt="Screenshot of project"/>
                        <CardContent>
                        <a href={project.deployedUrl}>Deployed Project | </a>
                        <a href={project.githubUrl}>Github Repository</a>
                        </CardContent>
                    </Card>
                </div>
            )}
        </section>
    );
}

export default Project;