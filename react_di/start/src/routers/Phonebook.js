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



    return (
        <div>
            <input value={name} onChange={onChangeName} placeholder="이름" />
            <input value={job} onChange={onChangeJob} placeholder="직업" />
            <input value={phonenumber} onChange={onChangePhone} placeholder="전화번호" />
            <button>등록</button>

            <div>
                <h1>Name: {name}</h1>
                <h1>Job: {job}</h1>
                <h1>Phone: {phonenumber}</h1>
            </div>

        </div>
    );
};

export default Phonebook;