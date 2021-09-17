//  Provider will Keep the redux store, by using connect function react component can access the store 
//  Create store function takes reducers and return redux store 

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';


ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
    ,
    document.querySelector('#root')
);