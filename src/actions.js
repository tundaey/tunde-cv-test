import { getRoot, getRoots } from './api';
import {
	FETCH_ROOT,
	FETCH_ROOTS,
	FETCH_ROOTS_FAILURE,
	FETCH_ROOTS_SUCCESS,

	FETCH_ROOT_FAILURE,
	FETCH_ROOT_SUCCESS,
} from './constants';

export const fetchRoots = () => dispatch => {
	dispatch({ type: FETCH_ROOTS });

	const request = getRoots();

	return request.then(
		resp => dispatch({ type: FETCH_ROOTS_SUCCESS, payload: resp }),
		error => dispatch({ type: FETCH_ROOTS_FAILURE, payload: error }),
	);
};

export const fetchRoot = root => dispatch => {
	dispatch({ type: FETCH_ROOT, root });

	const request = getRoot(root);

	return request.then(
		resp => dispatch({ type: FETCH_ROOT_SUCCESS, payload: resp, root }),
		error => dispatch({ type: FETCH_ROOT_FAILURE, payload: error, root }),
	);
};
