/*
Reducer have access to existing state and current action using those details it will update the state
On function will take action type and action hander with (state, action)

Steps to set up Reducers
    1. create state for reducer using extending parent state
    2. Initialize model for the feature state
    3. Create initial state for the model

import * as AppState from '../../state/app.state';
import * as ProductActions from './product.actions'



export interface State extends AppState.State{
    featureKey : featureState
}

export interface featureState{
    key1: Type,
    key2: Type
}

const initialState: featureState = {
    key1: value1,
    key2: value2
}

export const featureReducer = createReducer(
    initialState,
    on(actionName, (state,action) =>{
        return {
            ...state,
            key : action.payload
        }
    })
)
export const featureReducer = createReducer(
    initialState,
    on(actionName1,actionName2,actionName3, (state,action) =>{
        return {
            ...state,
            key : action.payload
        }
    })
)


Examples

export interface State extends AppState.State{
    products : ProductState
}

export interface ProductState{
    showProductCode: boolean,
    currentProductId : number | null,
    products : Product[],
    error : string
}

const initialState : ProductState = {
    showProductCode: true,
    currentProductId : null,
    products : [],
    error : ''
}

export const productReducer = createReducer(
    initialState,
    on(ProductActions.toggleProductCode, (state) => {
        return {
            ...state,
            showProductCode: !state.showProductCode
        };
    }),
    on(ProductActions.setCurrentProduct, (state,action)=>{
        return {
            ...state,
            currentProductId : action.currentProductId
        }
    }),
    on(ProductActions.clearCurrentProduct, (state:ProductState):ProductState =>{
        return {
            ...state,
            currentProductId : null
        }
    }),
    on(ProductActions.initilalizeCurrentProduct, (state):ProductState =>{
        return {
            ...state,
            currentProductId : 0

        }
    }),
    on(ProductActions.loadProductSuccess, (state,action):ProductState=>{
        return {
            ...state,
            products : action.products,
            error : ''
        }
    }),
    on(ProductActions.loadProductsFail, (state,action): ProductState=>{
        return {
            ...state,
            error : action.error
        }
    }),
    on(ProductActions.updateProductSuccess, (state,action)=>{
        const updateProduct = state.products.map(
            product => product.id === action.product.id ? action.product : product
        )
        return {
            ...state,
            products: updateProduct,
            currentProductId : action.product.id,
            error :''
        }
    }),
    on(ProductActions.updateProductFail , (state,action)=>{
        return {
            ...state,
            error : action.error
        }
    })
)






*/