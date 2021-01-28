import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {

    const [scrollTop, setScrollTop] = useState(0);


    const onScroll = (ev) => {
        setScrollTop(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        // 뒷정리 함수.
        //사용하는 이유: 리액트는 가상돔이기 때문에 뒷정리를 해주지 않으면,
        //사용하는 내내 eventListener가 돌게 된다.
        //그래서 reutrn으로 정리해준다.
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, []);


    return (
        <HeaderComponent scrollTop={scrollTop}>
            <Link to="/address">Address</Link>
            <Link to="/counter">Counter</Link>
            <Link to="/temp">Temp</Link>
            <Link to="/phonebook">Phonebook</Link>
            <Link to="/product/all">Product</Link>
            <Link to="/page1">Page1</Link>
            <Link to="/page2/dlwns">Page2</Link>
        </HeaderComponent>
    );
};

export default Header;

const HeaderComponent = styled.header`
    border-bottom: 1px solid;
    position: fixed;
    left: 0; top:0;
    width: 100%;
    background-color: ${props => props.scrollTop > 0 ? '#000' : '#fff'};
    z-index: 10000;
    a {
        color: ${props => props.scrollTop > 0 ? '#fff' : '#000'};
        margin: 0 10px;
        padding: 30px 0;
        display: inline-block;
        font-size: 25px;
    
    }


`;
