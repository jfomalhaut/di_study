import React, { useState } from 'react';
// import { AddressList } from '../components';
import Axios from 'axios';

const URL = 'https://www.juso.go.kr/addrlink/addrLinkApi.do';
const KEY = 'devU01TX0FVVEgyMDIxMDEwODA3MzUxNzExMDY0MTY=';
const countPerPage = 10;

// const field = {
//     roadAddr: '',
// }
const Address = () => {
    const [keyword, setKeyword] = useState('');
    //const [list, setList] = useState([]);
    //const { roadAddr } = keyword;

    const search = () => {
        Axios.get(`${URL}?confmKey=${KEY}&currentPage=1&countPerPage=${countPerPage}&resultType=json&keyword=${keyword}`)
            .then(res => {
                const {
                    data:
                    {
                        results: { common: { totalCount }, juso } }
                } = res;

                console.log("totalCount", totalCount);
                console.log("주소", juso);
                console.log(res);


            }).catch(error => {
                console.log(error);
            });
    };




    const onSearch = (ev) => {
        ev.preventDefault();
        search();
        setList([...list, keyword]);
        setKeyword(field);


    }

    const onChangeKeyword = (ev) => {
        setKeyword(ev.target.value);
    }
    return (
        <div>
            <form onSubmit={onSearch}>
                <input value={keyword} onChange={onChangeKeyword} placeholder="검색어를 입력하세요." />
                <button>검색</button>
            </form>

            <section>


                {/* {list.map((item, idx) => (
                    <AddressList item={item} key={`ADDRESS${idx}`} />
                ))} */}

            </section>
        </div>

    );
};

export default Address;


//숙제
//주소검색을 통해 얻은 데이터를 출력하고
//다음 이전 페이지를 만들어보기.

//페이지 