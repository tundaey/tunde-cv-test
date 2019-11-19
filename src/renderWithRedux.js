import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import {
	applyMiddleware,
	compose,
	createStore,
} from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers';

function renderWithRedux(
	ui,
	{ initialState, store = createStore(reducer, initialState, compose(applyMiddleware(thunk))) } = {},
) {
	return {
		...render(<Provider store={store}>{ui}</Provider>),
		// adding `store` to the returned utilities to allow us
		// to reference it in our tests (just try to avoid using
		// this to test implementation details).
		store,
	};
}

export default renderWithRedux;
