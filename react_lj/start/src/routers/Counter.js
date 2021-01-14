import React, { useEffect, useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);
	const [change, setChange] = useState('');

	// const increasement = () => {
	// 	setCount(count + 1);
	// };

	const onChangeCount = (ev) => {
		const { target: { value } } = ev;
		setChange(value);
	}

	const increasement = (value) => {
		const increase = count + change * 1;
		setCount(increase);
	};
	
	const decreasement = () => {
		setCount(count - 1);
	};

	// useEffect에 count를 사용한 경우,
	// count가 바뀔 때마다 해당 useEffect는 실행된다.
	useEffect(() => {
		console.log('count가 변경되었습니다.');
		// if (count % 5 === 0) {
		// 	alert('5의 배수입니다');
		// }
	}, [count]);

	// useEffect를 사용하고 배열에 아무것도 쓰지 않으면
	// 처음 페이지가 랜더링이 될 때만 실행이 된다.
	// use가 붙은 것들을 통칭 hook이라고 한다.
	useEffect(() => {
		console.log('first');
		// setCount(100);
	}, []);

	return (
		<div>
			<h1>{count}</h1>
			<input value={change} onChange={onChangeCount} type="number" />
			<button onClick={decreasement}>감소</button>
			<button onClick={increasement}>증가</button>
		</div>
	)
};

export default Counter;

// 문제
// input 태그를 만들고
// 거기에 입력된 값을 count에 더하기

// 문제2
// phonebook 덜 쓴 부분 추가하기