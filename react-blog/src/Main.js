import React, { Component } from 'react';
import './App.css';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <p>{this.props.author}</p>

      </div>
    );
  }
}

export default Main;
