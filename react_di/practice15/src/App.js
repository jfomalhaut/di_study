import React, { useEffect, useState } from 'react'
import Items from './items.json'
import { Container, Cart, CartHeader, CartList, CartItem, ItemTotal, Products, Product } from './AppElements';

const NumberRegex = /[0-9]$/;

const nf = new Intl.NumberFormat();

const App = () => {
    const [list, setList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    const comma = (num) => {
        return nf.format(num);
    };


    const onAdd = (id) => {
        const selectedItem = Items.filter(item => item.id === id)[0]
        let ids = list.map(item => item.id);
        if (ids.indexOf(id) === -1) {
            const newCart = list.concat({ ...selectedItem, quantity: 1 });
            setList(newCart)
        } else {
            const newCart = list.map(item => item.id === id ? ({ ...selectedItem, quantity: item.quantity + 1 }) : item);
            setList(newCart)
        }
    };

    const onDeleteItem = (id) => {
        const deleteItem = list.filter(item => item.id !== id);
        setList(deleteItem)
    };

    const onDeleteAll = () => {
        setList([])
    };

    useEffect(() => {
        const price = list.reduce((acc, cur, idx) => (acc + cur.price * cur.quantity), 0);
        setTotalPrice(price);

        const items = list.reduce((acc, cur, idx) => (acc + cur.quantity * 1), 0)
        setTotalItems(items);
    }, [list]);

    // useEffect(() => {
    //     let items = 0;
    //     let price = 0;

    //     cart.forEach((item) => {
    //         items += item.quantity;
    //         price += item.quantity * item.price;
    //     });

    //     setTotalItems(items);
    //     setTotalPrice(price);
    // }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

    const onChangeHandler = (e, id) => {
        const { target: { value } } = e;
        if (!NumberRegex.test(value * 1)) return;
        const newList = list.map(item => item.id === id ? ({ ...item, quantity: value }) : item);
        setList(newList);
    };

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
                                    onChange={(ev) => onChangeHandler(ev, item.id)}
                                />
                                <b>개</b>
                            </div>
                            <h3>총 {comma(item.price * item.quantity)}원</h3>
                            <p>(개당 {comma(item.price)}원)</p>
                            <div className="buttonBox">
                                <button onClick={() => onDeleteItem(item.id)}>현재 항목 삭제</button>
                            </div>
                        </CartItem>
                    ))}
                </CartList>
                <ItemTotal>
                    <div className="totalBox">
                        <h2>총 합계: {totalItems} 개</h2>
                        <h2>총 액수: {comma(totalPrice)} 원</h2>
                        <button onClick={() => onDeleteAll()}>전체 삭제</button>
                    </div>

                </ItemTotal>
            </Cart>
            <Products>
                {Items.map(item => (
                    <Product key={item.id}>
                        <h1>{item.name}</h1>
                        <p>{comma(item.price)}원</p>
                        <button onClick={() => onAdd(item.id)}>1개 담기</button>
                    </Product>
                ))}
            </Products>

        </Container>
    )
}

export default App
