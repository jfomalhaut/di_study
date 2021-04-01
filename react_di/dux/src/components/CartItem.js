import React from 'react'
import { CartAction } from '../actions'
import { comma } from '../customs/index';
import { useDispatch } from 'react-redux';

const CartItem = ({ item: { id, name, price, qty } }) => {
	const dispatch = useDispatch();

	const onChangeHandler = (ev) => {
		const { target: { value } } = ev;
		dispatch(CartAction.adjustQty({id, value}));
	};

	const removeItem = (id) => {
		dispatch(CartAction.removeItem(id))
	};

	return (
		<li key={`CART_ITEM${id}`} style={{ padding: '2rem' }}>
			<h1>{name}</h1>
			<h1>{comma(price)}원</h1>
			<input
					min="1"
					type="number"
					value={qty}
					onChange={onChangeHandler}
			/>개

			<span>총합: {comma(qty * price)}</span>
			<button onClick={() => removeItem(id)}>삭제</button>
		</li>
	)
}

export default CartItem
