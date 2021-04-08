import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './store'
import Login from './routers/Login'
ReactDOM.render(

    <Provider store={store}>
        <Login />
    </Provider>,
    document.getElementById('root'));