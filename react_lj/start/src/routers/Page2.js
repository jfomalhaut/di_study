import React from 'react';

// 함수형 컴퍼넌트
function Page2({ match: { params: { name } } }) {
	return (
		<h1>Page2 Component. {name}</h1>
	);
};

export default Page2;
