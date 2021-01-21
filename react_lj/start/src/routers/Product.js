import React, { useEffect, useState } from 'react';
import Items from '../jsons/items.json';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductItem } from '../components';

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

	const onCheck = (id) => {
		const newList = list.map(item => item.id === id ? ({ ...item, check: !item.check }) : item);
		setList(newList);
	};

	const onDelete = (id) => {
		const newList = list.filter(item => item.id !== id);
		setList(newList);
	};

	useEffect(() => {
		if (type === 'all') {
			const newList = Items.map(item => ({ ...item, check: false }));
			setList(newList);
		} else {
			const getType = transType(type);
			const newList = Items.filter(item => item.type === getType ).map(item => ({ ...item, check: false }));
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
					<ProductItem item={item} key={`ITEM${item.id}`} onCheck={onCheck} onDelete={onDelete}/>
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