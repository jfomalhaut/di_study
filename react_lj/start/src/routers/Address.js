import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const URL = 'https://www.juso.go.kr/addrlink/addrLinkApi.do';
const KEY = 'devU01TX0FVVEgyMDIxMDEwODA3MzUxNzExMDY0MTY=';
const countPerPage = 10;

const Address = () => {
	const [keyword, setKeyword] = useState("");
	const [keyword2, setKeyword2] = useState("");
	const [list, setList] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	const params = (obj) => {
		const data = [];
		for (let key in obj) {
			data.push(`${key}=${obj[key]}`);
		}
		return data.join('&');
	};

	const search = () => {
		const payload = params({
			confmKey: KEY,
			currentPage,
			countPerPage,
			resultType: 'json',
			keyword: keyword2
		});

		Axios.get(`${URL}?${payload}`).then(res => {
			const {
				data: {
					results: { juso, common: { totalCount } },
				}
			} = res;
			console.log(totalCount);
			setList(juso);
		}).catch(error => {
			console.log(error);
		});
	};

	const onSearch = (ev) => {
		ev.preventDefault();
		setKeyword2(keyword);
	};

	// 사용자가 검색 버튼을 누른 경우.
	useEffect(() => {
		if (keyword2 !== '') {
			if (currentPage === 1) {
				search();
			} else {
				setCurrentPage(1);
			}
		}
	}, [keyword2]);

	useEffect(() => {
		if (keyword2 !== '') {
			search();
		}
	}, [currentPage]);

	return (
		<div>
			<h1>keyword : {keyword}</h1>
			<h1>keyword2 : {keyword2}</h1>
			<h1>currentPage : {currentPage}</h1>
			<form onSubmit={onSearch}>
				<input value={keyword} onChange={(ev) => setKeyword(ev.target.value)} placeholder="검색어를 입력하세요" />
				<button>검색</button>
			</form>
			<ul>
				{list.map((item, index) => (
					<li key={`ADDRESS${index}`}>{item.roadAddrPart1}</li>
				))}
			</ul>
			<article>
				<button onClick={() => setCurrentPage(prev => prev - 1)}>이전</button>
				<button onClick={() => setCurrentPage(prev => prev + 1)}>다음</button>
			</article>
		</div>
	);
};

export default Address;

// 숙제
// 주소검색을 통해 얻은 데이터를 출력하고
// 다음 이전 페이지를 만들어보기