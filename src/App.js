import React from 'react';
import './App.css';
import ContactForm from './Components/ContactForm/ContactForm';
import Profile from './Components/Profile/Profile';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Profile />
      <AboutMe />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default App;
