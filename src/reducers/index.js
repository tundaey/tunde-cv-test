import { combineReducers } from 'redux';
import initialState from './initial-state';
import {
	FETCH_ROOT,
	FETCH_ROOTS,
	FETCH_ROOTS_FAILURE,
	FETCH_ROOTS_SUCCESS,
	FETCH_ROOT_FAILURE,
	FETCH_ROOT_SUCCESS,
} from '../constants';

const ACTION_HANDLERS = {
	[FETCH_ROOTS]: state => ({
		...state,
		isLoading: true,
	}),
	[FETCH_ROOTS_FAILURE]: (state, { payload }) => ({
		...state,
		isLoading: false,
		error: payload,
	}),
	[FETCH_ROOTS_SUCCESS]: (state, { payload }) => ({
		...state,
		isLoading: false,
		payload,
	}),
	[FETCH_ROOT]: (state, { root }) => ({
		...state,
		[root]: {
			isLoading: true,
		},
	}),
	[FETCH_ROOT_FAILURE]: (state, { payload, root }) => ({
		...state,
		[root]: {
			isLoading: false,
			error: payload,
		},
	}),
	[FETCH_ROOT_SUCCESS]: (state, { payload, root }) => ({
		...state,
		[root]: {
			isLoading: false,
			payload,
		},
	}),
};

function createReducer() {
	return (state = initialState, action = {}) => {
		const handler = ACTION_HANDLERS[action.type];

		return handler ? handler(state, action) : state;
	};
}

export default combineReducers({
	roots: createReducer(),
	root: createReducer(),
});

