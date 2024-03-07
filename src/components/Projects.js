import React from 'react'
import '../CSS/pet-project.scss';

function Projects({ children }) {

    return (
        <section className="projects" id='projects'>
            <h1 className="g-deep-title">Projects</h1>
            { children }
        </section>
    )
}

export default Projects;
