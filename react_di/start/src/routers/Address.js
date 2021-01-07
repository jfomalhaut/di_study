import React, { useState } from 'react';
import Axios from 'axios';

const URL = 'https://www.juso.go.kr/addrlink/addrLinkApi.do';
const KEY = 'devU01TX0FVVEgyMDIxMDEwODA3MzUxNzExMDY0MTY=';
const countPerPage = 10;

const Address = () => {
    const [keyword, setKeyword] = useState("");
    const [list, setList] = useState([]);

    const search = () => {
        Axios.get(`${URL}?confmKey=${KEY}&currentPage=1&countPerPage=${countPerPage}&resultType=json&keyword=${keyword}`).then(res => {
            const {
                data: {
                    results: { common: { totalCount }, juso },
                }
            } = res;
            console.log(totalCount);
            console.log(juso);

            console.log(res);
        }).catch(error => {
            console.log(error);
        });
    };

    const onSearch = (ev) => {
        ev.preventDefault();
        search();
    }
    return (
        <div>
            <form onSubmit={onSearch}>
                <input value={keyword} onChange={(ev) => setKeyword(ev.target.value)} placeholder="검색어를 입력하세요." />
                <button>검색</button>
            </form>
        </div>
    );
};

export default Address;


//숙제
//주소검색을 통해 얻은 데이터를 출력하고
//다음 이전 페이지를 만들어보기.

//페이지 