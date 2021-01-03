import React, { useState } from 'react';

const Phonebook = () => {
	const [name, setName] = useState("");
	const [job, setJob] = useState("");
	const [phonenumber, setPhonenumber] = useState("");

	const onChangeName = (ev) => {
		const { target: { value } } = ev;
		setName(value);
	};

	return (
		<div>
			<input value={name} onChange={onChangeName} placeholder="이름" />
			<input placeholder="직업" />
			<input placeholder="전화번호" />
			<button>등록</button>
			
			<h1>name: {name}</h1>
		</div>
	);
};

export default Phonebook;