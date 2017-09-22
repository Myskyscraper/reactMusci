import React from 'react';
import ReactDOM from 'react-dom';
import '../style/style.less';

import {
	Router,
	IndexRoute,
	Link,
	Route,
	browserHistory,
	hashHistory
} from 'react-router';


import MusicList from './musicList.js';

import User from './user.js';


let testRouter = React.createClass({
	render() {
		return (

			<div className="testRouter">
				
				<Router history={hashHistory}>

					<Route path="/" component={App}>
						<Route path="about" component={About} />
						<Route path="inbox" component={Inbox} />
					</Route>

				</Router>
			</div>
		)
	}
})


// 这个是现实的列表

const App = React.createClass({
	render() {
		return (
			<div>
		        <ul>
		          <li><Link to="/about">About</Link></li>
		          <li><Link to="/inbox">Inbox</Link></li>
		        </ul>

		        {this.props.children}
      		</div>
		)
	}
})

// 这个是显示1；

const About = React.createClass({
	render() {
		return <h3>我是About</h3>
	}
})

// 这个是显示2；

const Inbox = React.createClass({
	render() {
		return (
			<div>
				<h2>我是Inbox</h2>
			</div>
		)
	}
})



export default testRouter;