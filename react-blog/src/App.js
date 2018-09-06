import React, { Component } from 'react';
import './App.css';

class Post extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <h5>by {this.props.author}</h5>
        <p>{this.props.body}</p>
        <hr></hr>
        <h2>Comments</h2>
        <p>{this.props.comments}</p>

      </div>
    );
  }
}

export default Post;
