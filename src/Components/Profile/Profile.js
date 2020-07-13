import React from 'react';
import './Profile.css'

const Profile = () => {
    return (
        <React.Fragment>
        <div className="profile-wrapper" id="profile">
            <div className="details">
            {/* <div className="profile-pic"><img src="./images/Selfie.png" alt="Quinton Selfie"/></div> */}
            <h1 className="profile-title">Quinton Brown</h1>
                <h2 className="profile-text-ital">Front End Developer</h2>
                    <h2 className="profile-text-ital">Charlotte, NC</h2>
                    <div className="resume">
                        <a href="https://docs.google.com/document/d/1RkJtR46B4rRDgYiTVMgs7jNwFW4tpa0L31yKVwvF9vg/edit" target="_blank" rel="noopener noreferrer"> <img src="./images/resume2.png" alt="Resume logo" /></a>
                       
                    </div>
            </div>
            
            {/* <a className="chevron"></a> */}
        </div>
           
            </React.Fragment>
    )
}

export default Profile