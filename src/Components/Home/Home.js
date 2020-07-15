import React from 'react';
import './Home.css';
import ContactForm from '../ContactForm/ContactForm';
import Profile from '../Profile/Profile';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import NavBar from '../NavBar/NavBar';

function Home() {
  return (
    <div className="App">
      <NavBar />
      <Profile />
      <Projects />
      <AboutMe />
      <ContactForm />
    </div>
  );
}

export default Home;
