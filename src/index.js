import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './frontend/index.css';
import App from './frontend/App';
import UserStore from './frontend/store/UserStore';
import ProductStore from './frontend/store/ProductStore';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        product: new ProductStore()
        }}>
    <App />
    </Context.Provider>
);


