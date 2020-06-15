import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const intitialState = {};

const middleware = [thunk];

export default createStore(
	rootReducer,
	intitialState,
	composeWithDevTools(applyMiddleware(...middleware))
);
