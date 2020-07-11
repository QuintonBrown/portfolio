import React from 'react' 
import './Projects.css'
const projects = require('../../data/projects.json')

const Projects = () => {
    return (
        <div className="project-content" id="projects">
            <div className="project-header">Check out some of my work!</div>
        <div className="projects-wrapper">
            {projects.map((project) => {
                return (
                    <div className="projects-card-wrapper" key={project.title}>
                    
                        <img className="cover" src={project.cover} alt={project.title} />
                        
                            <div className="middle">
                            <h2 className="title">{project.title}</h2>
                            <p className="description">{project.description}</p>
                            <a className="url" href={project.url} target="_blank" rel="noopener noreferrer">Website</a>
                            <a className="url" href={project.github} target="_blank" rel="noopener noreferrer">Github</a>
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


