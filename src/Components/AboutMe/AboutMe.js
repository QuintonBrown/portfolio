import React from 'react' 
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className="aboutme-wrapper">
            <div className="details">
        <h1 className="aboutme-title" >About Me</h1>
                <p className="aboutme-paragraph">My name is Quinton Brown, I make people’s virtual dreams a reality. I like to code things from scratch, and enjoy bringing ideas to life in the browser. </p>
                <div className="technologies">
                        <a href="https://www.linkedin.com/in/quintonhbrown/" target="_blank" rel="noopener noreferrer"> <img src="./images/js-logo.png" alt="Javascript logo" /></a>
                        <a href="https://github.com/QuintonBrown" target="_blank" rel="noopener noreferrer"> <img src="./images/react-logo.png" alt="React logo" /></a>
                        <a href="mailto:QuintonBrown8101@gmail.com" target="_blank" rel="noopener noreferrer"> <img src="./images/html5-logo.svg" alt="Gmail logo" /></a>
                        <a href="https://docs.google.com/document/d/1RkJtR46B4rRDgYiTVMgs7jNwFW4tpa0L31yKVwvF9vg/edit" target="_blank" rel="noopener noreferrer"> <img src="./images/css3-logo.png" alt="Resume logo" /></a>
                    </div>
                </div>
            <img className="aboutme-pic" src="./images/quinton2016.jpg" alt="issa baddie" />
            
            </div>
    )
}
 export default AboutMe