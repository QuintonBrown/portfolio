import React from 'react' 
import './RestOfProjects.css'
import RestOfProjectsNavBar from '../RestOfProjectsNavBar/RestOfProjectsNavBar.js'
const projects = require('../../data/restofprojects.json')

const RestOfProjects = () => {
    return ( 
        <React.Fragment>
        <RestOfProjectsNavBar />
        <div className="project-content" id="restofprojects">
            <div className="project-header">Check out more of my work!</div>
        <div className="restof-projects-wrapper">
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
            </React.Fragment>
    )}

export default RestOfProjects


