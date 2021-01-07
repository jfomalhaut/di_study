import React, { useState } from 'react';
import { PhonebookItem } from '../components';

const field = {
    name: '',
    job: '',
    phonenumber: '',
}

const Phonebook = () => {
    // const [name, setName] = useState("");
    // const [job, setJob] = useState("");
    // const [phonenumber, setPhonenumber] = useState("");

    const [info, setInfo] = useState(field);
    const [list, setList] = useState([]);
    const { name, job, phonenumber } = info;
    //job, phone number 등록 할떄 뜰수록 구동하기 숙제!!!!!!

    const onChangeValue = (ev) => {
        const { target: { value, name } } = ev;
        //setName(value);
        const newInfo = {
            ...info,
            [name]: value
        };
        setInfo(newInfo);

    };

    // const onChangeJob = (ev) => {
    //     const { target: { value } } = ev;
    //     setJob(value);
    // }

    // const onChangePhone = (ev) => {
    //     const { target: { value } } = ev;
    //     setPhonenumber(value);
    // }

    // const register = () => {
    //     const active = document.querySelector('.active');
    //     const profile = `
    //     <h1>name: ${name}</h1>
    //     <h1>job: ${job}</h1>
    //     <h1>phone: ${phonenumber}</h1>
    //      `;
    //     active.innerHTML = profile;
    // }

    const register = (ev) => {
        ev.preventDefault();
        setList([...list, info]);
        //또는 이방식setList(list.concant(info)); 
        setInfo(field);
    }

    // map을 쓸때는 무조건 key값 쓰기

    return (
        <div>
            <form onSubmit={register}>
                <input value={name} name="name" onChange={onChangeValue} placeholder="이름" />
                <input value={job} name="job" onChange={onChangeValue} placeholder="직업" />
                <input value={phonenumber} name="phonenumber" onChange={onChangeValue} placeholder="전화번호" />
                <button>등록</button>
            </form>



            <section>
                {list.map((item, idx) => (
                    <PhonebookItem item={item} key={`PHONEBOOK${idx}`} />
                ))}

            </section>

        </div >
    );
};

export default Phonebook;


