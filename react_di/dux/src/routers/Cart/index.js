import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CartAction } from '../../actions'
import CartItem from '../../components/CartItem';
import { comma } from '../../customs/index';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(({ cart }) => cart.cart);
    console.log(cart)

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    
    
    const removeAll = () => {
        dispatch(CartAction.removeAll())
    };

    useEffect(() => {
        const newItems = cart.reduce((acc, item) => acc + item.qty, 0);
        setTotalItems(newItems)
        const newPrice = cart.reduce((acc, item) => acc + item.qty * item.price, 0);
        setTotalPrice(newPrice)
    }, [cart, totalItems, totalPrice])

    return (
        <div>
            <h1>Cart</h1>
            <h1>총 합계: <b>{totalItems}</b>개</h1>
            <h1>총 개수: <b>{comma(totalPrice)}</b>원</h1>
            <button onClick={() => removeAll()}>전체 삭제</button>
            <ul style={{
                display: 'flex'
            }}>
                {cart.map(item => (
                    <CartItem item={item} key={`CART_ITEM${item.id}`} style={{ padding: '2rem' }} />
                ))}
            </ul>

        </div>
    )
}

export default Cart
