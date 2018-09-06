import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

const post = {
	title: "Dinosaurs Are Awesome",
	author: "Stealthy Stegasaurus",
	
}

ReactDOM.render(<Post />, document.getElementById('root'));
registerServiceWorker();
