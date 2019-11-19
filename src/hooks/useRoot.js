import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoot } from '../actions';

const useRoot = props => {
	const dispatch = useDispatch();
	const root = useSelector(state => state.root[props.type]);

	useEffect(() => {
		if (props.activeTab === props.type) dispatch(fetchRoot(props.type));
	}, [dispatch, props.activeTab, props.type]);

	return [root];
};

export default useRoot;
