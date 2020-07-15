import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import RestOfProjects from './Components/RestOfProjects/RestOfProjects';
import Home from './Components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/MoreProjects" component={RestOfProjects} />
          </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
