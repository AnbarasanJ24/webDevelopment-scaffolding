const INITIAL_STATE = {
    key: value
}

const reducer1 = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ACTION 1':
            return { ...state, key: action.payload }
        default:
            return state;
    }
}

export default reducer1;