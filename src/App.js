import React from 'react';
import './App.css';
import ContactForm from './Components/ContactForm/ContactForm';
import Profile from './Components/Profile/Profile';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Profile />
      <AboutMe />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default App;
