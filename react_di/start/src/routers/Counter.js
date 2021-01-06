import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [change, setChange] = useState(0);

    //useState의 0은 초깃값

    //useState 사용하기.

    const onChangeCount = (ev) => {
        const { target: { value } } = ev;
        setChange(value);
    }

    const increasement = () => {
        const increase = count + change;
        setCount(increase);

    };

    const decreasement = () => {
        const decrease = count - change;
        setCount(decrease);
    };




    //숙제: Input창 만들기 더하기.
    //UseEffect에 count를 사용한 경우,
    //count가 바뀔때 해당 UseEffect는 실행된다.
    useEffect(() => {
        console.log('count가 변경되었습니다.');
        //    if (count % 5 === 0) {
        //        alert('5의 배수입니다.');
        //    }

    }, [count]);

    // useEffect 를 사용하고 배열에 아무것도 쓰지 않으면
    //처음 페이지가 랜더링이 될때만 실행이 된다.
    // use 가 붙은것들을 통칭 hook이라고 한다.
    useEffect(() => {
        console.log('first');
        setCount(100);//초기값 100
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