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

import Home from './home.js';

import MusicList from './musicList.js';

import User from './user.js';



let HeaderNav = React.createClass({
	render() {
		return (
			<div>
				<Router history={hashHistory}>

					<Route path="/" component={App}>
						<Route path="/about" component={Home} />
						<Route path="/about" component={MusicList} />
						<Route path="/about" component={User} />
					</Route>

				</Router>
			</div>
		)
	}

})


let App = React.createClass({
	render() {
		return (
			<div>
				< nav className = "HeaderNav" >
					<li>  <Link to="/Home">排行</Link></li> 
					< li ><Link to="/MusicList">歌单</Link>< /li>  
					< li ><Link to="/User"> 用户</Link>< /li > 
				< /nav>
				 {this.props.children}

			</div>
		)
	}

})



export default HeaderNav;