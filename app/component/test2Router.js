import React from 'react';
import ReactDOM from 'react-dom';

import {
	Router,
	IndexRoute,
	Link,
	Route,
	browserHistory,
	hashHistory
} from 'react-router';

import Home from './home.js';

import MusicList from './musicList.js';

import User from './user.js';



let test2Router = React.createClass({
	render() {
		return (
			<div>

				<Router history={hashHistory}>

					<Route path="/about" component={Home}></Route>

					<Route path='/about' component={User} />

				</Router>

			</div>

		)
	}
})

export default test2Router;