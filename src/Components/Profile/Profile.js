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
            </div>
            
            {/* <a className="chevron"></a> */}
        </div>
            <button className="arrow"><img src="https://cdn.iconscout.com/icon/free/png-256/down-arrow-8-458425.png" alt="chevron"/></button>
            </React.Fragment>
    )
}

export default Profile