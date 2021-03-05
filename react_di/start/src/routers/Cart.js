import React, { useReducer, useEffect, useState } from 'react'
import styles from 'styled-components';


import Items from '../jsons/items.json'
const nf = new Intl.NumberFormat();
const NumberRegex = /[0-9]$/;

const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_ITEM = 'DELETE_ITEM';
const REMOVE_ALL = 'REMOVE_ALL';
const CHANGE_ITEM = 'CHANGE_ITEM';

const ADDTOCART = (item) => ({ type: ADD_TO_CART, item });
const DELETEITEM = (item) => ({ type: DELETE_ITEM, item });
const REMOVEALL = () => ({ type: REMOVE_ALL });
const CHANGEITEM = (item) => ({ tyep: CHANGE_ITEM, item });

const CartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const ids = state.map(item => item.id);
            if (ids.indexOf(action.item.id) === -1) {
                return state.concat({ ...action.item, quantity: 1 });
            } else {
                return state.map(item => item.id === action.item.id ? ({ ...item, quantity: item.quantity + 1 }) : item);
            }
        }
        case 'DELETE_ITEM': {
            return state.filter(item => item.id !== action.item);
        }

        case 'REMOVE_ALL': {
            return state = [];
        }

        case 'CHANGE_ITEM': {
            // const newList = state.map(item => item.id === action.id ? ({ ...item, quantity: action.quantity }) : item);
            // return newList;
            const { target: { value } } = e;
            if (!NumberRegex.test(value * 1))
                return state.map(item => item.id === id ? ({ ...item, quantity: action.value }) : item);


        }

        default: {
            return state;
        }

        //담기, 삭제, 수량 변경, 전체 삭제, 체크삭제, 심화 : 체크 담기(기존에 담긴 경우)
    }
}



const Cart = () => {
    const [cart, dispatch] = useReducer(CartReducer, []);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);


    const comma = (num) => {
        return nf.format(num);
    };

    const addToCart = (item) => {
        dispatch(ADDTOCART(item));


    };

    const deleteItem = (id) => {
        dispatch(DELETEITEM(id));
    }

    const removeAll = () => {
        dispatch(REMOVEALL())
    }

    const onChangeQuantity = (ev, id) => {
        const { target: { value } } = ev;
        console.log(value);
        if (value === '') {
            return;
        }
        if (!NumberRegex.test(value)) return;
        dispatch(CHANGEITEM(id, value));
    }

    useEffect(() => {
        console.log(cart)
    }, [cart])


    useEffect(() => {
        const newItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        setTotalItems(newItems)
        const newPrice = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
        setTotalPrice(newPrice)
    }, [cart, totalItems, totalPrice])

    return (
        <CartComponent>

            <h1>총 합계: <b>{totalItems}</b>개</h1>
            <h1>총 개수: <b>{totalPrice}</b>원</h1>
            <ul>
                {Items.map(item => (
                    <li key={`ITEM${item.id}`}>
                        <div>{item.name}</div>
                        <div>{comma(item.price)}원</div>
                        <button onClick={() => addToCart(item)}>담기</button>
                        <input type="checkbox" />
                    </li>
                ))}
            </ul>
            <button onClick={() => removeAll()}>전부 삭제</button>
            <button >선택항목 담기</button>

            <div className="cart-items">
                {cart.map(item => (
                    <article key={`CART_ITEM${item.id}`}>
                        <h1>{item.name}</h1>
                        <h1>{comma(item.price)}원</h1>
                        <input
                            min="1"
                            type="number"
                            value={item.quantity}
                            onChange={(ev) => onChangeQuantity(ev, item.quantity)}
                        />
                        <button onClick={() => deleteItem(item.id)}>항목 삭제</button>
                    </article>
                ))}
            </div>
        </CartComponent>
    )
}

export default Cart


const CartComponent = styles.div`

ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.cart-items{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}


`;