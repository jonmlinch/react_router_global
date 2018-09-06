import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

const post = {
	title: "Dinosaurs Are Awesome",
	author: "Stealthy Stegasaurus",
	body: "Check out this hot body!",
	comments: ["First", "Great Post!", "Love the bod!"]
	
}

ReactDOM.render(<Post 
	title={post.title}
	author={post.author}
	body={post.body}
	comments={post.comments}
	/>, document.getElementById('root'));
registerServiceWorker();
