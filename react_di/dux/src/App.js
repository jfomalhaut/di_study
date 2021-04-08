import React from 'react'
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';

import { Home, List, Detail, Cart } from './routers';

import styled, { css, keyframes } from 'styled-components'

const App = () => {
    return (
        <BrowserRouter>
            {/* <Link to="/home">Home</Link> */}
            <Link to="/list">List</Link>
            {/* <Link to="/detail">Detail</Link> */}
            <Link to="/cart">Cart</Link>
            {/* <LoadingWrapper>
                <figure />
                <article />
            </LoadingWrapper> */}
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/list" exact component={List} />
                <Route path="/detail" component={Detail} />
                <Route path="/cart" component={Cart} />
                <Redirect to="/list" />
            </Switch>
        </BrowserRouter>
    )
}

export default App

const rotate = keyframes`
0%{ transform: rotate(0);}
100%{transform: rotate(360deg);}
`;

const animate = css`
animation-name: ${rotate};
animation-duration: 1s;
animation-iteration-count: infinite;
animation-timing-function: linear;

`

const LoadingWrapper = styled.div`
display:flex;
figure {
    position: fixed;
    left: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    background: rgba(0, 0, 0, .5)
}

article {
    ${animate}
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate()( -50%, -50%);
    margin: auto;
    z-index: 200;
    border: 7px solid #f0f0f0;
    border-right: 7px solid dodgerblue;
    border-top: 7px solid dodgerblue;
    border-radius: 50%;
    width: 40px;
    height: 40px;
}

`;


const Loading = styled.div`
border: 7px solid #f0f0f0;
border-right: 7px slid dodgerblue;
border-top: 7px solid dodgerblue;
border-radius: 50%;
width: 40px;
height: 40px;


`;