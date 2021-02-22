import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
	// 구독
	const count = useSelector(({ counter }) => counter.count);
	return (
		<div>
			<h1>Home Component</h1>
			<h1>count: {count}</h1>
		</div>
	);
};

export default Home;