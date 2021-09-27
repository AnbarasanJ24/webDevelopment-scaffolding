// Reducer is pure function with takes existing state and action 
// Based on action type, reducer will update the store 

import { combineReducer } from 'redux';
import reducer1 from './reducer1';

const ReducerName1 = (InitialState = null, action) => {
    switch (action.type) {

        case 'TYPE_NAME':
            return action.payload;

        default:
            return InitialState;

    }
}

export default combineReducer({
    key1: reducer1,
    key2: ReducerName1
})