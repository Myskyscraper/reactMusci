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

let HeaderNav = React.createClass({
	render() {
		return (

			< nav className = "HeaderNav" >
			<li>推荐</li> < li > <Link to="/MusicList">歌单 </Link> < /li>  

			< li > <Link to="/User">用户 </Link> < /li > 


			< /nav>


		)
	}


})

export default HeaderNav;