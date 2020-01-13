import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

import {createStore,applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import reducer from "./store/reducer";
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'

const store = createStore(reducer,applyMiddleware(thunkMiddleware));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>

);

ReactDOM.render(app, document.getElementById('root'));
