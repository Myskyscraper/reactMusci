import React from 'react';
import ReactDOM from 'react-dom';
import '../style/style.less';

import MusicList from './musicList.js';

import User from './user.js';

let HeaderNav = React.createClass({
	render() {
		return (

			< nav className = "HeaderNav" >
			<li>推荐</li> < li > 歌单 < /li>  < li > 我的 < /li > < /nav>


		)
	}


})

export default HeaderNav;