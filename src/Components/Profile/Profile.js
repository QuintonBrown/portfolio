import React from 'react';
import './Profile.css'

const Profile = () => {
    return (
        <React.Fragment>
        <div className="profile-wrapper">
            <img className="profile-pic" src="./images/Selfie.png" alt="Quinton Selfie" />
            <div className="details">
            {/* <div className="profile-pic"><img src="./images/Selfie.png" alt="Quinton Selfie"/></div> */}
            <h1 className="profile-title">Quinton Brown</h1>
                <h2 className="profile-text-ital">Front End Developer</h2>
                    <h2 className="profile-text-ital">Charlotte, NC</h2>
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/quintonhbrown/" target="_blank" rel="noopener noreferrer"> <img src="./images/linkedin.png" alt="LinkedIn logo" /></a>
                        <a href="https://github.com/QuintonBrown" target="_blank" rel="noopener noreferrer"> <img src="./images/github.png" alt="Github logo" /></a>
                        <a href="mailto:QuintonBrown8101@gmail.com" target="_blank" rel="noopener noreferrer"> <img src="./images/gmail.png" alt="Gmail logo" /></a>
                        <a href="https://docs.google.com/document/d/1RkJtR46B4rRDgYiTVMgs7jNwFW4tpa0L31yKVwvF9vg/edit" target="_blank" rel="noopener noreferrer"> <img src="./images/resume.png" alt="Resume logo" /></a>
                    </div>
            </div>
            
            {/* <a className="chevron"></a> */}
        </div>
            <button className="arrow"><img src="https://cdn.iconscout.com/icon/free/png-256/down-arrow-8-458425.png" alt="chevron"/></button>
            </React.Fragment>
    )
}

export default Profile