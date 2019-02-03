import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/CustomNavbar';
import Feedback from './components/Feedback';

import About from './components/About';
import Voting from './components/Voting';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/Feedback" component={Feedback} />
          <Route path="/Voting" component={Voting} />

          <Route path="/About" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
