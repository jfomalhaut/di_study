import React, { useState } from 'react';

function Page1(props) {
	const { history } = props;
	const [name, setName] = useState("");

	function goPage() {
		history.push('/page2/' + name);
	}

	function onChangeValue(ev) {
		const { target: { value } } = ev;
		setName(value);
	};

	return (
		<div>
			<h1>Page1 Component</h1>
			<input type="text" value={name} onChange={onChangeValue}/>
			<button onClick={goPage}>Page2로 가기</button>
		</div>
	);
};

export default Page1;