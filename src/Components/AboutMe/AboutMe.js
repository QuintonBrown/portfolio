import React from 'react' 
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className="aboutme-wrapper">
            <div className="details">
        <h1 className="aboutme-title" >About Me</h1>
                <p className="aboutme-paragraph">My name is Quinton Brown, I make people’s virtual dreams a reality. I am a sneaker head born and raised in the Queen City. </p>
                </div>
            <img className="aboutme-pic" src="./images/quinton2016.jpg" alt="issa baddie" />
            </div>
    )
}
 export default AboutMe