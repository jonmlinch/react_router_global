import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Main from './Main';
import Food from './Food';
import Movie from './Movie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <Link to="/" className="link">Home</Link>
              <Link to="/about" className="link">About Me</Link>
              <Link to="/main" className="link">Main Blog</Link>
              <Link to="/food" className="link">Favorite Foods</Link>
              <Link to="/movie" className="link">Favorite Movie</Link>
            </nav>

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/main" component={Main} />
            <Route path="/food" component={Food} />
            <Route path="/movie" component={Movie} />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
