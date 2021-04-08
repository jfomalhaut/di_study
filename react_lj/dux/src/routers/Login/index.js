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
			const { status, data: { token, user } } = await Axios.post(`http://localhost:4000/api/signin`, info, { withCredentials: true });
			localStorage.setItem('token', token);
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

	const checkAuthorization = async () => {

		try {
			 const result = await Axios.get('http://localhost:4000/api/test', {
				  headers: {
						'Authorization': `Bearer ${localStorage.getItem('token')}`,
				  },
				  withCredentials: true
			 });
			 console.log(result);
		} catch {
			 alert('실패');
		}

  }

	return (
		<div>
			<form onSubmit={onSubmit2}>
				<input type="text" name="username" value={username} onChange={onChangeValue}/>
				<input type="password" name="password" value={password} onChange={onChangeValue}/>
				<button>Login!</button>
			</form>
			<button onClick={checkAuthorization}>checkAuthorization</button>
		</div>
	);
};

export default Login;