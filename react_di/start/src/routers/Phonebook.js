import React, { useState } from 'react';

const Phonebook = () => {
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [phonenumber, setPhonenumber] = useState("");

    //job, phone number 등록 할떄 뜰수록 구동하기 숙제!!!!!!

    const onChangeName = (ev) => {
        const { target: { value } } = ev;
        setName(value);

    }

    const onChangeJob = (ev) => {
        const { target: { value } } = ev;
        setJob(value);
    }

    const onChangePhone = (ev) => {
        const { target: { value } } = ev;
        setPhonenumber(value);
    }

    const register = () => {
        const active = document.querySelector('.active');
        const profile = `
        <h1>name: ${name}</h1>
        <h1>job: ${job}</h1>
        <h1>phone: ${phonenumber}</h1>
         `;
        active.innerHTML = profile;
    }




    return (
        <div>
            <input value={name} onChange={onChangeName} placeholder="이름" />
            <input value={job} onChange={onChangeJob} placeholder="직업" />
            <input value={phonenumber} onChange={onChangePhone} placeholder="전화번호" />
            <button onClick={register}>등록</button>

            <div className="active">

            </div>

        </div>
    );
};

export default Phonebook;