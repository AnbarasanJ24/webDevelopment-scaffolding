//  Provider will Keep the redux store, by using connect function react component can access the store 
//  Create store function takes reducers and return redux store 

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

// Create store takes reducers and applyMiddleware as parameter 
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnchancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.querySelector('#root')
);