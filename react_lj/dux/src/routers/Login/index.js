import React, { useState } from 'react';
import Axios from 'axios';

const Login = () => {
	const [info, setInfo] = useState({ username: '', password: '' });
	const { username, password } = info;

	const onSubmit = async (ev) => {
		ev.preventDefault();
		try {
			const { data: { userinfo } } = await Axios.get(`http://localhost:4000/api/signin/${username}/${password}`);
			console.log(userinfo);
		} catch (error) {
			console.log('error: ' + error)
			console.log('fail!');
		}
	};

	const onSubmit2 = async (ev) => {
		ev.preventDefault();
		try {
			const { data: { userinfo } } = await Axios.post(`http://localhost:4000/api/login`, info);
			console.log(userinfo);
		} catch (error) {
			console.log('error: ' + error)
			console.log('fail!');
		}
	};

	const onChangeValue = (ev) => {
		const { target: { value, name } } = ev;
		setInfo({
			...info,
			[name]: value
		});
	};

	return (
		<form onSubmit={onSubmit2}>
			<input type="text" name="username" value={username} onChange={onChangeValue}/>
			<input type="password" name="password" value={password} onChange={onChangeValue}/>
			<button>Login!</button>
		</form>
	);
};

export default Login;