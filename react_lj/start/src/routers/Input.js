import React, { useState } from 'react';

const useInput = (initialValue) => {
	const [data, setData] = useState(initialValue);
	
	const onChange = (ev) => {
		const { target: { value } } = ev;
		setData(value);
	};

	return [data, onChange, setData];
};

const Input = () => {
	const [name, onChangeName, setName] = useInput('');
	const [price, onChangePrice, setPrice] = useInput('');

	const insert = () => {
		alert('등록되었습니다');
	}

	return (
		<div>
			<input value={name} onChange={onChangeName} />
			<input value={price} onChange={onChangePrice} />
			<button onClick={insert}>입력</button>
		</div>
	);
};

export default Input;
