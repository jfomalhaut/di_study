import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import Items from '../../../items.json'
import styled from 'styled-components'
import { CartAction } from '../../actions'


const List = () => {
    const dispatch = useDispatch();


    const trans = (type) => {
        switch (type) {
            case 1: return '수산물';
            case 2: return '야채';
            case 3: return '청과';
        }
    };

    const addToCart = (item) => {
        dispatch(CartAction.addToCart(item));

    }

    return (
        <ListContainer>
            <h1>상품 리스트</h1>
            <ul>
                {Items.map(item => (
                    <Fragment key={`ITEMS${item.id}`}>
                        <li>
                            <article>{trans(item.type)}</article>
                            <h1>{item.name}</h1>
                            <h1>{item.price}원</h1>
                            <button
                                onClick={() => addToCart(item)}
                            >담기</button>
                        </li>
                    </Fragment>
                ))}
            </ul>
        </ListContainer>
    )
}

export default List


const ListContainer = styled.div`
ul {
    display: grid;
    width: 1000px;
    margin: 100px auto;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
}


`;