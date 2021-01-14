import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Page1 from './routers/Page1';
import Page2 from './routers/Page2';
import Counter from './routers/Counter';
import Phonebook from './routers/Phonebook';
import Address from './routers/Address';
import Product from './routers/Product';
import { createGlobalStyle } from 'styled-components';

function App() {
    return (
        <Router>
            <GlobalStyles />
            <header>
                <Link to="/address">Address</Link>
                <Link to="/counter">Counter</Link>
                <Link to="/phonebook">Phonebook</Link>
                <Link to="/product/all">Product</Link>
                <Link to="/page1">Page1</Link>
                <Link to="/page2/dlwns">Page2</Link>


            </header>
            <Switch>
                <Route path="/address" component={Address} />
                <Route path="/phonebook" component={Phonebook} />
                <Route path="/product/:type" component={Product} />
                <Route path="/counter" component={Counter} />
                <Route path="/page1" render={(props) => (
                    <Page1 history={props.history} />
                )} />
                <Route path="/page2/:name" component={Page2} />

            </Switch>
        </Router >

    );
};

export default App;

const GlobalStyles = createGlobalStyle`
* { margin: 0; padding: 0; box-sizing: border-box; list-style: none;}
body {background-color: #f9f9f9;}
`