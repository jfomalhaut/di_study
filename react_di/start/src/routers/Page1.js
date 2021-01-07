import React, { useState } from 'react';


function Page1(props) {
    const { history } = props;
    //history는 내장 함수
    const [name, setName] = useState("");


    function goPage() {
        history.push('/page2/' + name);
    }

    function onChangeValue(ev) {
        const { target: { value } } = ev;
        setName(value);
    }


    return (
        <div>
            <h1>Page 1 Component</h1>
            <input type="text" value={name} onChange={onChangeValue} />
            <button onClick={goPage}>Page 2로 가기</button>
        </div>

    );
};



//default: 밖으로 빼내는데 기본값
export default Page1;