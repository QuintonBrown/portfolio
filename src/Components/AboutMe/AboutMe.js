import React from 'react' 
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className="aboutme-wrapper">
            <div className="details">
        <h1 className="aboutme-title" >About Me</h1>
                <p className="aboutme-paragraph">My name is Quinton Brown, I make people’s virtual dreams a reality. I like to code things from scratch, and enjoy bringing ideas to life in the browser. I also enjoy being outside and staying active! </p>
                <div className="technologies">
                        <img src="./images/js-logo.png" alt="Javascript logo" />
                        <img src="./images/react-logo.png" alt="React logo" />
                        <img src="./images/html5-logo.svg" alt="HTML 5 logo" />
                        <img src="./images/css3-logo.png" alt="CSS 3 logo" />
                    </div>
                </div>
            <img className="aboutme-pic" src="./images/quintonhiking.jpg" alt="Quinton Brown" />
            
            </div>
    )
}
 export default AboutMe