//  Action creator are responsible for creating ation with type and payload (optional) object 


//  Named Import 
export const actionCreatorName = (payload) => {
    return {
        type: 'TYPE_NAME',
        payload: payload
    }
}

// Action creator is responsible for Making API call
// If action creator return function then same will be handled by redxu thunk 

export const apiCall = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/posts');
    dispatch({
        type: 'ACTION NAME',
        payload: response
    })
}

export const apiCall = () => {

    return async function (dispatch, getState) {
        const response = await jsonPlaceHolder.get('/posts');
        dispatch({
            type: 'ACTION NAME',
            payload: response
        })
    }
}

// Example
export const fetchPost = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/posts');
    dispatch({
        type: 'FETCH POSTS',
        payload: response
    })
}
