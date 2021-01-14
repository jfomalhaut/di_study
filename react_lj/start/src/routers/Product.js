import React, { useEffect, useState } from 'react';
import Items from '../jsons/items.json';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const nf = new Intl.NumberFormat();

const Menu = [
	{ id: 1, path: 'all', label: '전체' },
	{ id: 2, path: 'seafood', label: '수산물' },
	{ id: 3, path: 'fruit', label: '청과' },
	{ id: 4, path: 'vegetable', label: '야채' }
];

const Product = ({ match: { params: { type } }, location: { pathname } }) => {
	const [list, setList] = useState([]);

	const transType = (value) => {
		switch(value) {
			case 'seafood': return 1;
			case 'fruit': return 2;
			case 'vegetable': return 3;
		}
	};

	useEffect(() => {
		if (type === 'all') {
			setList(Items);
		} else {
			const getType = transType(type);
			const newList = Items.filter(item => item.type === getType );
			setList(newList);
		}
	}, [type]);

	return (
		<div>
			<h1>Product Component</h1>
			<Nav>
				{Menu.map(item => (
					<Link 
						style={{ color: item.path === type ? 'blue': '#999' }}
						key={`MENU${item.id}`} 
						to={`/product/${item.path}`}
					>{item.label}</Link>
				))}
			</Nav>
			<List>
				{list.map(item => (
					<Item key={`ITEM${item.id}`} color={item.type}>
						<figure />
						<h1>
							<span/>
							{item.name}
						</h1>
						<div>{nf.format(item.price)}원</div>
					</Item>
				))}
			</List>
		</div>
	);
};

export default Product;

const Nav = styled.nav`
	width: 1000px; margin: 0 auto; line-height: 50px;
	a {
		font-size: 25px; margin: 0 10px 0 0; text-decoration: none; color: #999;
		&:link, &:visited { color: #999; }
		&:hover { color: blue; }
	}
`;


const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 20px;
	width: 1000px;
	margin: 50px auto;
`;

const Item = styled.li`
	border: 1px solid #ddd;
	padding-bottom: 10px;
	box-shadow: 0 0 15px rgba(0, 0, 0, .2);
	transition: .2s;

	&:hover {
		transform: scale(1.05);
	}

	figure {
		height: 120px;
		background-color: ${props => (
			props.color === 1 ? '#0071B3' :
			props.color === 2 ? '#C9242B' :
			props.color === 3 ? '#198942' : '#ddd'
		)};
	}
	h1, div {
		padding: 5px 10px;
	}

	h1 {
		display: flex;
		align-items: center;
		span {
			padding: 0 5px;
			margin-right: 5px;
			font-size: 18px;
			border-width: 1px;
			border-style: solid;
			border-color: ${props => (
				props.color === 1 ? '#0071B3' :
				props.color === 2 ? '#C9242B' :
				props.color === 3 ? '#198942' : '#ddd'
			)};
			color: ${props => (
				props.color === 1 ? '#0071B3' :
				props.color === 2 ? '#C9242B' :
				props.color === 3 ? '#198942' : '#ddd'
			)};
			&:before {
				content: '${props => (
					props.color === 1 ? '수산물' :
					props.color === 2 ? '청과' :
					props.color === 3 ? '야채' : 'none'
				)}';
			}
		}
	}
`;