import React, { useEffect, useState } from 'react'
import Items from './items.json'

import { Container, Cart, CartHeader, CartList, CartItem, ItemTotal, Products, Product } from './AppElements';

const App = () => {

    const [cart, setCart] = useState([]);
    const [list, setList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    // const [input, setInput] = useState(item.quantity);


    const onAdd = (id) => {
        const selectedItem = Items.filter(item => item.id === id)[0]
        let ids = cart.map(item => item.id);
        if (ids.indexOf(id) === -1) {
            const newCart = cart.concat({ ...selectedItem, quantity: 1 });
            setCart(newCart)
            setList(newCart)
        } else {
            const newCart = cart.map(item => item.id === id ? ({ ...selectedItem, quantity: item.quantity + 1 }) : item);
            setCart(newCart)
            setList(newCart)
        }
    }

    // const onChangeHandler = (e) => {
    //     setInput(e.target.value);


    // };

    const onDeleteItem = (id) => {
        const deleteItem = cart.filter(item => item.id !== id);
        setCart(deleteItem)
        setList(deleteItem)
    }

    const onDeleteAll = () => {
        setCart([])
        setList([])
    }

    useEffect(() => {


        console.log(cart)
        // console.log(list)
    }, [cart, list])


    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach((item) => {
            items += item.quantity;
            price += item.quantity * item.price;
        });

        setTotalItems(items);
        setTotalPrice(price);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);




    return (
        <Container>
            <Cart>
                <CartHeader>
                    <h1>장바구니</h1>
                </CartHeader>
                <CartList>
                    {list.map(item => (
                        <CartItem key={item.id}>
                            <h2>{item.name}</h2>
                            <div className="inputBox">
                                <input
                                    min="1"
                                    type="number"
                                    value={item.quantity}
                                // onChange={onChangeHandler}
                                />
                                <b>개</b>
                            </div>
                            <h3>총 {item.price}원</h3>
                            <p>(개당 {item.price}원)</p>
                            <div className="buttonBox">
                                <button onClick={() => onDeleteItem(item.id)}>현재 항목 삭제</button>
                            </div>
                        </CartItem>
                    ))}
                </CartList>
                <ItemTotal>
                    <h2>총 합계: {totalItems} 개</h2>
                    <h2>총 액수: {totalPrice} 원</h2>
                    <button onClick={() => onDeleteAll()}>전체 삭제</button>

                </ItemTotal>
            </Cart>
            <Products>
                {Items.map(item => (
                    <Product key={item.id}>
                        <h1>{item.name}</h1>
                        <p>{item.price}원</p>
                        <button onClick={() => onAdd(item.id)}>1개 담기</button>
                    </Product>
                ))}
            </Products>

        </Container>
    )
}

export default App
