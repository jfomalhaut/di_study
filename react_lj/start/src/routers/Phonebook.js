import React, { useState } from 'react';
import { PhonebookItem } from '../components';

const field = {
	name: '',
	job: '',
	phonenumber: '',
};

const Phonebook = () => {
	const [info, setInfo] = useState(field);
	const [list, setList] = useState([]);
	const { name, job, phonenumber } = info;

	const onChangeValue = (ev) => {
		const { target: { value, name } } = ev;
		const newInfo = {
			...info, 
			[name]: value
		};
		setInfo(newInfo);
	};

	const register = (ev) => {
		ev.preventDefault();
		setList([ ...list, info ]);
		setInfo(field);
		// setList(list.concat(info));
	};

	return (
		<div>
			<form onSubmit={register}>
				<input value={name} name="name" onChange={onChangeValue} placeholder="이름" />
				<input value={job} name="job" onChange={onChangeValue} placeholder="직업" />
				<input value={phonenumber} name="phonenumber" onChange={onChangeValue} placeholder="전화번호" />
				<button>등록</button>
			</form>
			
			<section>
				{list.map((item, idx) => (
					<PhonebookItem item={item} key={`PHONEBOOK${idx}`} />
				))}
			</section>
		</div>
	);
};

export default Phonebook;

