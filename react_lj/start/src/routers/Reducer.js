import React, { useReducer, useState } from 'react';

const REGEX_ONLY_NUMBER = /[0-9]$/;

const CounterReducer = (state, action) => {
	switch (action.type) {
		case 'INCREASEMENT': {
			return state + 1;
		}
		case 'DECREASEMENT': {
			return state - 1;
		}
		case 'INPUT': {
			return state + action.addNumber * 1;
		}
		default: {
			return state;
		}
	}
};

const Counter2 = () => {
	const [count, dispatch] = useReducer(CounterReducer, 0);
	const [add, setAdd] = useState('');

	const addInputNumber = () => {
		dispatch({ type: 'INPUT', addNumber: add });
	};

	const increasement = () => {
		dispatch({ type: 'INCREASEMENT' });
	};

	const onChangeNumber = (ev) => {
		const { target: { value } } = ev;
		if (!REGEX_ONLY_NUMBER.test(value)) return;
		setAdd(value);
	};

	return (
		<div>
			<h1>{count}</h1>
			<input value={add} onChange={onChangeNumber} />
			<button onClick={increasement}>increasement</button>
			<button onClick={addInputNumber}>addInputNumber</button>
		</div>
	);
};

export default Counter2;
