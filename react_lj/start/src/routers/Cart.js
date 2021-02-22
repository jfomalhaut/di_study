import React, { useReducer, useState } from 'react'
import styled from 'styled-components'
import Items from '../jsons/items.json';
const nf = new Intl.NumberFormat();

const ADD_TO_CART = 'ADD_TO_CART';
const AddToCart = (item) => ({ type: ADD_TO_CART, item });

const CartReducer = (state, action) => {
	switch(action.type) {
		case ADD_TO_CART: {
			const ids = state.map(item => item.id);
			if (ids.indexOf(action.item.id) === -1) {
				return state.concat({ ...action.item, quantity: 1 });
			} else {
				return state.map(item => ({ ...item, quantity: item.quantity + 1 }));
			}
		}
		default: {
			return state;
		}
	}

	// 담기, 삭제, 수량 변경, 전체삭제, 체크삭제, 
	// 심화) 체크 담기(A,B가 담긴 상태에서 B,C,D를 담을 때, C,D는 추가 B는 변경)
};

const Cart = () => {
	const [cart, dispatch] = useReducer(CartReducer, []);

	const comma = (num) => {
		return nf.format(num);
	};

	const addToCart = (item) => {
		dispatch(AddToCart(item));
	};

	return (
		<CartComponent>
			<ul>
				{Items.map(item => (
					<li key={`ITEM${item.id}`}>
						<div>{item.name}</div>
						<div>${comma (item.price)}</div>
						<button onClick={() => addToCart(item)}>담기</button>
					</li>
				))}
			</ul>
			<h1>장바구니: <b>{cart.length}</b>개</h1>
			<div>
				{cart.map(item => (
					<article key={`CART_ITEM${item.id}`}>
						<h1>{item.name} ({item.quantity})</h1>
						<h1>${comma(item.price)}</h1>
					</article>
				))}
			</div>
		</CartComponent>
	)
}

export default Cart

const CartComponent = styled.main`
	padding: 100px 30%;
	background: #f0f0f0;
	* {
		font-size: 20px;
	}
	ul {
		display: flex;
		margin: 0; padding: 0;
		flex-wrap: wrap;
		li {
			margin: 0; padding: 0;
			list-style: none;
			width: calc((100% - 40px) / 3);
			background: #fff;
			padding: 20px;
			box-sizing: border-box;
			margin-bottom: 20px;
			box-shadow: 0 0 15px rgba(0, 0, 0, .15);
			margin-left: 20px;
			&:nth-child(3n + 1) {
				margin-left: 0;
			}
			button {
				width: 100%;
				padding: 3px 0;
			}
		}
	}
`;