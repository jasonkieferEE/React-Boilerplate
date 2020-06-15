import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import App from './components/App';

// SCSS Framework
import './assets/scss/index.scss';

// Bootstrap
import 'bootstrap-css-only/css/bootstrap.css';

if (module.hot) module.hot.accept();

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('app')
);
