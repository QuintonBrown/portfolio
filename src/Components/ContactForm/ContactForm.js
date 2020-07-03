import React from 'react';
import './ContactForm.css'


const ContactForm = () => {
 
        return (
         
            <div className="contact-wrapper">
                <div className="contact-container">
        <div className="contact-form-data">
                        <form name="contact" method="POST" data-netlify="true">
                            <h1 className="contact-form-title">Thanks for taking the time to checkout my portfolio! Please leave a comment or just say hello :)</h1>
                            <input type="hidden" name="form-name" value="contact" />
                <input type="text" name="name" placeholder="First and Last name" required/>
                <input type="text" name="email" placeholder="Email" required />
                            <textarea className="textarea" type="text" name="message" placeholder="Thoughts?" required />
                            <button className="contact-form-btn" type="submit">Submit</button>
                            
            
           
                        </form>
                       
    </div>
            </div>
           
            </div>
                
          
        )
    }

export default ContactForm