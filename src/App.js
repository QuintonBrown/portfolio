import React from 'react';
import './App.css';
import ContactForm from './Components/ContactForm/ContactForm';
import Profile from './Components/Profile/Profile';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Profile />
      <Projects />
      <AboutMe />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
