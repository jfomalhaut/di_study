import React, { useState } from 'react';
import { PhonebookItem } from '../components';


//정보가 들어가야할 field 구성
const field = {
    name: '',
    job: '',
    phonenumber: '',
}


const Phonebook = () => {
    const [info, setInfo] = useState(field); //info를 field형식으로 넣고, setInfo를 통해서 filed의 빈값 채워주기
    const [list, setList] = useState([]); // list를 배열([])형식으로 useState이용해서 setList 로 list 변경해주기.
    const { name, job, phonenumber } = info; // input의 value값에 새겨질 것들를 info로 묶어준다.

    //job, phone number 등록 할떄 뜰수록 구동하기 숙제!!!!!!

    const onChangeValue = (ev) => {
        const { target: { value, name } } = ev;
        //setName(value);
        const newInfo = { ...info, [name]: value };
        setInfo(newInfo);
    };

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


