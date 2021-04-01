import React from 'react'
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';

import { Home, List, Detail, Cart } from './routers';

const App = () => {
    return (
        <BrowserRouter>
            {/* <Link to="/home">Home</Link> */}
            <Link to="/list">List</Link>
            {/* <Link to="/detail">Detail</Link> */}
            <Link to="/cart">Cart</Link>
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
