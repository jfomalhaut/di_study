import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Context } from '../../contexts/index';

const Cart = () => {
	const { killingtime } = useContext(Context);
	const cart = useSelector(({ cart }) => cart.cart);

	useEffect(() => {
		killingtime();
	}, []);

	return (
		<div>
			<h1>Cart</h1>
			<ul>
				{cart.map((item) => (
					<li key={`CART_ITEM${item.id}`}>
						<h1>{item.name}</h1>
						<h1>{item.price}KRW</h1>
						<h1>{item.qty}EA</h1>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Cart;
