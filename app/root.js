import React from 'react';
import {
	Router,
	IndexRoute,
	Link,
	Route,
	browserHistory,
	hashHistory
} from 'react-router';

import HeadSearch from './component/headSearch.js';
import HeaderNav from './component/headerNav.js';

import Home from './component/home.js';

let Root = React.createClass({
	componentDidMount() {
		$("#player").jPlayer({
			ready: function() {
				$(this).jPlayer("setMedia", {
					mp3: "http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3"
				}).jPlayer('play');
			},
			supplied: "mp3",
			wmode: "window",
			useStateClassSkin: true
		})
	},
	getInitialState() {
		return ({
			allList: 'music'
		})
	},
	componentWillMoumt() {

	},

	progressChangeHandle(n) {
		console.log(n);
	},

	render() {
		return (

			<div className="rootBody">
				<HeadSearch></HeadSearch>
				<HeaderNav></HeaderNav>
				<Home></Home>
			</div>

		)

	}

})

export default Root;