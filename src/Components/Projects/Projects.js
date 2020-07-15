import React from 'react' 
import './Projects.css'
import { NavLink } from 'react-router-dom'

const projects = require('../../data/projects.json')

const Projects = () => {
    return (
        <div className="project-content" id="projects">
            <div className="project-header">Highlights of my work!</div>
        <div className="highlight-projects-wrapper">
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
            <NavLink exact to="/MoreProjects" className="projects">
                <button>See more</button>
            </NavLink>
            </div>
    )}

export default Projects


