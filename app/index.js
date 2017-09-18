import React from 'react';
import {
	render
} from 'react-dom';

import {
	appContainer
} from "react-hot-loader";

import Root from './root';


render(
	<appContainer>
			<Root/>
	</appContainer>,
	document.getElementById('root')
)

if (module.hot) {
	module.hot.accept('./root', () => {
		const NewHello = require('./root').default;
		render(
			<appContainer>
				<NewHello/>
			</appContainer>,
			document.getElementById('root')
		)

	})
}