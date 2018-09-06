import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const post = {
	title: "Dinosaurs Are Awesome",
	author: "Stealthy Stegasaurus",
	body: "Check out this hot body!",
	comments: ["First", "Great Post!", "Love the bod!"]
	
}

ReactDOM.render(<App 
	title={post.title}
	/>, document.getElementById('root'));
registerServiceWorker();
