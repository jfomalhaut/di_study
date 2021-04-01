import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CartAction } from '../../actions'

const Cart = () => {

    const nf = new Intl.NumberFormat();


    const cart = useSelector(({ cart }) => cart.cart);
    console.log(cart)

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [input, setInput] = useState(item.qty);

    const dispatch = useDispatch();

    const removeItem = (id) => {
        dispatch(CartAction.removeItem(id))
    }


    const removeAll = () => {
        dispatch(CartAction.removeAll())
    }

    const adjustQty = () => {
        dispatch(CartAction.adjustQty(id, value))
    }

    const comma = (num) => {
        return nf.format(num);
    };


    const onChangeHandler = (e) => {
        setInput(e.target.value);
        adjustQty(item.id, e.target.value);
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
                    <li key={`CART_ITEM${item.id}`} style={{ padding: '2rem' }}>
                        <h1>{item.name}</h1>
                        <h1>{comma(item.price)}원</h1>
                        <input
                            min="1"
                            type="number"
                            value={input}
                            onChange={onChangeHandler}
                        />개

                        <span>총합: {comma(item.qty * item.price)}</span>
                        <button onClick={() => removeItem(item.id)}>삭제</button>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Cart
