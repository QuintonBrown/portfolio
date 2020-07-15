import React from 'react' 
import './RestOfProjectsNavBar.css';
    
import { NavLink } from 'react-router-dom'

const RestOfProjectsNavBar = () => {
    return (
        <NavLink exact to="/" className="RestOfProjectsNavBar">
                <button>Home</button>
            </NavLink>
    )
}

export default RestOfProjectsNavBar; 