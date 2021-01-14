import React, { useState, useEffect } from 'react';
import Items from '../jsons/items.json';
import styled from 'styled-components';
import { Link } from 'react-router-dom';




const Menu = [
    { id: 1, path: 'all', label: '전체' },
    { id: 2, path: 'seafood', label: '전체' },
    { id: 3, path: 'fruit', label: '전체' },
    { id: 4, path: 'vegetable', label: '전체' },
]

const Product = ({ match: { params: { type } }, location: { pathname } }) => {
    const [path, setPath] = useState("");
    const [list, setList] = useState([]);

    const transType = (value) => {
        switch (value) {
            case 'seafood': return 1;
            case 'fruit': return 2;
            case 'vegetable': return 3;
        }
    }

    useEffect(() => {
        if (type === 'all') {
            setList(Items);
        } else {
            const getType = transType(type);
            const newList = Items.filter(item => item.type === getType);
            setList(newList);
        }
    }, [type]);




    console.log(Items);
    return (
        <div>
            <h1>Product Component</h1>
            <Nav>
                {Menu.map(item => (
                    <Link
                        style={{ color: item.path === type ? 'blue' : '#999' }}
                        key={`MENU${item.id}`}
                        to={`/product/${item.path}`}
                    >{item.lable}</Link>
                ))}
                <Link to='/product/all'>전체</Link>
                <Link to='/product/seafood'>수산물</Link>
                <Link to='/product/fruit'>청과</Link>
                <Link to='/product/vegetable'>야채</Link>
            </Nav>
            <List>
                {list.map(item => (
                    <Item key={`ITEMS${item.id}`} color={item.type}>
                        <figure />
                        <h1>
                            [<span />]
                            {item.name}

                        </h1>
                        <div>{item.price} 원</div>
                    </Item>
                ))}
            </List>
        </div>

    );
};


export default Product;


const Nav = styled.nav`
width: 1000px; margin: 0 auto ; line-height: 50px;

a {
    font-size: 25px; margin: 0 10px 0 0; text-decoration: none; color: #999;
    &:link, &::visited { color: #999; }
    &:hover {color: blue;}
}
`;

const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 1000px;
    margin: 50px auto;
`;

const Item = styled.li`
   
    border: 1px solid #ddd;
    padding-bottom: 10px;
    transition: .2s;
    
    figure {
        height: 120px;
        background: #ddd;
        background-color: ${props => (
        props.color === 1 ? '#0071B3' :
            props.color === 2 ? '#C9242B' :
                props.color === 3 ? '#198942' : '#ddd'

    )}
    }

    h1, div {
        padding: 5px 10px;
    }

    h1 {
        span {
            &:before {
                content: '${props => (
        props.color === 1 ? '수산물' :
            props.color === 1 ? '청과' :
                props.color === 1 ? '야채' : 'none'

    )}':
            }
        }
    }

`;