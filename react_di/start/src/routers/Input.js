import React, { useState } from 'react';


//Custom hook의 종류...
const useInput = (intialValue) => {
    const [data, setData] = useState(intialValue);

    const onChange = (ev) => {
        const { target: { value } } = ev;
        setData(value);
    };

    return [data, onChange, setData];
};

const Input = () => {
    const [name, onChangeName, setName] = useInput('');
    const [price, onChangePrice, setPrice] = useInput('');

    const insert = () => {
        alert('등록되었습니다');
        //input 값을 비워주는 기능
        setName('');
        setPrice('');



    }


    return (
        <div>
            <input value={name} onChange={onChangeName} />
            <input value={price} onChange={onChangePrice} />
            <button onClick={insert}>입력</button>
        </div>
    )
}

export default Input;




{/* <script>
// 바닐라 자바스크립트에서 나오는 useState기능
    const [number, addNumber] =add(100);
    function add(value) {
        return [value, value +5];
    }
</script> */}