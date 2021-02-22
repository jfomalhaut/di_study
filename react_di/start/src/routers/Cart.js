import React, { useReducer } from 'react'
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
                return state.map(item => ({ ...item, quantity: item.quantity + 1 }));
            }
        }
        case 'DELETE_ITEM': {
            return state.filter(item => item.id !== id);
        }

        case 'REMOVE_ALL': {
            return state = [];
        }

        case 'CHANGE_ITEM': {


        }

        default: {
            return state;
        }

        //담기, 삭제, 수량 변경, 전체 삭제, 체크삭제, 심화 : 체크 담기(기존에 담긴 경우)
    }
}



const Cart = () => {
    const [cart, dispatch] = useReducer(CartReducer, []);

    const comma = (num) => {
        return nf.format(num);
    };

    const addToCart = (item) => {
        dispatch(ADDTOCART(item));


    };

    const deleteItem = (item) => {
        dispatch(DELETEITEM(item));
    }

    const removeAll = () => {
        dispatch(REMOVEALL())
    }

    const changeItem = () => {
        dispatch(CHANGEITEM(item));
    }

    return (
        <CartComponent>
            <h1>장바구니: <b>{cart.length}</b>개</h1>
            <ul>
                {Items.map(item => (
                    <li key={`ITEM${item.id}`}>
                        <div>{item.name}</div>
                        <div>{comma(item.price)}원</div>
                        <button onClick={() => addToCart(item)}>담기</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => removeAll()}>전부 삭제</button>

            <div className="cart-items">
                {cart.map(item => (
                    <article key={`CART_ITEM${item.id}`}>
                        <h1>{item.name}</h1>
                        <h1>{comma(item.price)}원</h1>
                        <input
                            min="1"
                            type="number"
                            value={item.quantity}
                        />
                        <button onClick={() => deleteItem(item)}>항목 상제</button>
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