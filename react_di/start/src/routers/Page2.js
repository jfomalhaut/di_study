import React from 'react';

// 함수형 컴퍼넌트
function Page2({ match: { params: { name } } }) {

    //match는 받을떄 히스토리는 보낼때 
    return (
        <h1>Page2 Component. {name}</h1>
    );
};

export default Page2;
