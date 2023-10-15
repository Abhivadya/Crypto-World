import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'antd/dist/antd.js';
import { Provider } from 'react-redux';
import store from './app/store';


const root = ReactDom.createRoot(document.getElementById('root'));
root.render (
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
    
)

