import React, { Fragment, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Items from '../../jsons/items.json';
import styled from 'styled-components';
import { CartAction } from '../../actions';
import { Context } from '../../contexts';
import { useLocation } from 'react-router';

const List = () => {
	const dispatch = useDispatch();
	const { enableLoading, disableLoading, isLoading } = useContext(Context);

	const trans = (type) => {
		switch(type) {
			case 1: return '수산물';
			case 2: return '야채';
			case 3: return '청과';
		}
	};

	const waiting = (time) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(true);
			}, time * 1000);
		});
	};

	const initiailize = async () => {
		const result = await waiting(5);
		console.log('done');
		if (result) {
			disableLoading();
		}
	};

	const addToCart = (item) => {
		dispatch(CartAction.addToCart(item));
	};

	useEffect(() => {
		enableLoading();
		initiailize();
	}, []);


	useEffect(() => {
		console.log(isLoading);
	}, [isLoading])

	return (
		<ListContainer>
			<h1>상품 리스트</h1>
			<ul style={{ opacity: isLoading ? 0 : 1 }}>
				{Items.map(item => (
					<Fragment key={`ITEMS${item.id}`}>
						<li>
							<article>{trans(item.type)}</article>
							<h1>{item.name}</h1>
							<h1>{item.price}원</h1>
							<button onClick={() => addToCart(item)}>담기</button>
						</li>
					</Fragment>
				))}
			</ul>
		</ListContainer>
	);
};

export default List;

const ListContainer = styled.div`
	width: 1000px;
	margin: 100px auto;
	* { padding: 0; margin: 0;}
	ul {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 20px;
		opacity: 0;
		transition: .5s;

		li {
			list-style: none;
			padding: 20px 20px;
			border: 1px solid #ddd;
			button {
				width: 100%;
				padding: 5px 0;
			}
		}
	}
`;