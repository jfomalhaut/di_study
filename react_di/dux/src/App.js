import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Home, List, Detail } from './routers';

const App = () => {
    return (
        <BrowserRouter>
            <Link to="/home">Home</Link>
            <Link to="/list">Home</Link>
            <Link to="/detail">Detail</Link>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/list" component={List} />
                <Route path="/detail" component={Detail} />
            </Switch>

        </BrowserRouter>
    )
}

export default App
