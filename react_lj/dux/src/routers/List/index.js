import React from 'react';
import { useDispatch } from 'react-redux';

const List = () => {
	// 요청
	const dispatch = useDispatch();
	const increasement = () => {
		dispatch({ type: 'INCREASEMENT' });
	};

	return (
		<div>
			<h1>List Component</h1>
			<button onClick={increasement}>increasement</button>
		</div>
	);
};

export default List;
