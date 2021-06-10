import React, { useState } from 'react';
import { Search } from '../api';
import moment from 'moment';
import styled from 'styled-components';

const field = {
	target: '',
	keyword: '',
	orderby: '',
};

function Art() {
	const [info, setInfo] = useState(field);
	const [list, setList] = useState([]);
	const { target, keyword, orderby } = info;

	const onChangeHandler = (ev) => {
		const { target: { value, name } } = ev;
		setInfo({
			...info,
			[name]: value
		});
		if (name === 'target' && value === '') {
			setInfo({
				...info,
				target: '',
				keyword: ''
			});
		}
	};

	const onSearch = (ev) => {
		ev.preventDefault();
		search();
	};

	const search = async () => {
		try {
			const { data } = await Search(info);
			setList(data);
		} catch (error) {
			console.log(error);
			alert('Network error');
		}
	};


	return (
		<Container>
			<nav>
				<form onSubmit={onSearch}>
					<select value={target} name="target" onChange={onChangeHandler}>
						<option value="">전체</option>
						<option value="artist">작가이름</option>
						<option value="paiting_title">작품이름</option>
						<option value="year">제작년도</option>
						<option value="artist_origin">국적</option>
					</select>
					<input readOnly={target === ''} value={keyword} name="keyword" onChange={onChangeHandler} />
					<div>
						<label>
							<input type="radio" name="orderby" checked={orderby === 'artist'} value="artist" onChange={onChangeHandler} />
							<span>이름 오름차순</span>
						</label>
						<label>
							<input type="radio" name="orderby" checked={orderby === 'artist DESC'} value="artist DESC" onChange={onChangeHandler} />
							<span>이름 내림차순</span>
						</label>
						<label>
							<input type="radio" name="orderby" checked={orderby === 'year'} value="year" onChange={onChangeHandler} />
							<span>년도 오름차순</span>
						</label>
						<label>
							<input type="radio" name="orderby" checked={orderby === 'year DESC'} value="year DESC" onChange={onChangeHandler} />
							<span>년도 내림차순</span>
						</label>
					</div>
					<button>검색</button>
				</form>
			</nav>
			<ul>
				<li>
					<span>Paiting Image</span>
					<span>Paiting Name</span>
					<span>Artist</span>
					<span>Year</span>
					<span>Sales Date</span>
				</li>
				{list.map(item => (
					<li key={`PAINTING${item.list_id}`}>
						<span>
							<img src={item.painting_image} />
						</span>
						<span>{item.painting_title}</span>
						<span>{item.artist}</span>
						<span>{item.year}</span>
						<span>{moment(item.sales_date).format('YYYY/MM/DD')}</span>
					</li>
				))}
			</ul>
		</Container>
	);
}

export default Art;

const Container = styled.div`
	nav {
		form {
			div {
				label {
					margin-right: 20px;
				}
			}
		}
	}

	ul {
		li {
			display: flex;
			padding: 10px 0;
			&:first-child {
				background: rgb(33, 103, 243) !important;
				text-align: center;
				color: #fff;
				font-weight: 600;
			}
			&:nth-child(odd) {
				background: #f0f0f0;
			}
			&:not(:last-child) {
				${'' /* border-bottom: 1px solid #ddd; */}
			}
			span {
				flex-shrink: 0;
				&:nth-of-type(1) { width: 200px; }
				&:nth-of-type(2) { flex-grow: 1; }
				&:nth-of-type(3) { width: 200px; text-align: center; }
				&:nth-of-type(4) { width: 200px; text-align: center; }
				&:nth-of-type(5) { width: 200px; text-align: center; }
			}
		}
	}
`;