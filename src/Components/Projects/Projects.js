import React from 'react' 
import './Projects.css'
const projects = require('../../data/projects.json')

const Projects = () => {
    return (
        <div className="project-content">
            <div className="project-header">Check some of my work out!</div>
        <div className="projects-wrapper">
            {projects.map((project) => {
                return (
                    <div className="projects-card-wrapper" key={project.title}>
                    
                        <img className="cover" src={project.cover} alt={project.title} />
                        
                            <div className="middle">
                            <h2 className="title">{project.title}</h2>
                            <p className="description">{project.description}</p>
                            <a className="url" href={project.url}>Website</a>
                            <a className="url" href={project.github}>Github</a>
                            </div>
                        </div>
                  
                )
            }
        
            )
  
            }
    
            </div> 
            </div>
    )}

export default Projects


