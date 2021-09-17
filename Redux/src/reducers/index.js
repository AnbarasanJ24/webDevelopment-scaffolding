// Reducer is pure function with takes existing state and action 
// Based on action type, reducer will update the store 

import { combineReducer } from 'redux';

const ReducerName1 = (InitialState = null, action) => {
    switch (action.type) {

        case 'TYPE_NAME':
            return action.payload;

        default:
            return InitialState;

    }
}
const ReducerName2 = (InitialState = null, action) => {
    switch (action.type) {

        case 'TYPE_NAME':
            return action.payload;

        default:
            return InitialState;

    }
}

export default combineReducer({
    key1: ReducerName1,
    key2: ReducerName2
})