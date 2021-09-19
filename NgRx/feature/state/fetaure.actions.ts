/*
For Action, we can use create action function which takes first paremeter as action name and second as action payload


import { createAction, props } from "@ngrx/store";


export const actionCreatorName = createAction(
    [FeatureName] ACTION NAME,
    props<{payloadKey : payload}> ()

)

Examples

export const toggleProductCode = createAction(
    '[Product] Toggle Product Code'
);

export const setCurrentProduct = createAction(
    '[Product] Set Current Product',
    props<{ currentProductId: number }>()
)

export const clearCurrentProduct = createAction(
    '[Product] Clear Current Product'
)

export const initilalizeCurrentProduct = createAction(
    '[Product] Initialize Current Product'
)

export const loadProducts = createAction(
    '[Product] Load'
)

export const loadProductSuccess = createAction(
    '[Product] Load Sucess',
    props<{products: Product[]}>()
)

export const loadProductsFail = createAction(
    '[Product] Load Fail',
    props<{error:string}>()
)


export const updateProduct = createAction(
    '[Product] Update Product',
    props<{product:Product}>()
)

export const updateProductSuccess = createAction(
    '[Product] Update Product Sucess',
    props<{product : Product}>()
)

export const updateProductFail = createAction(
    '[Product] Update Product Fail',
    props<{error : string}>()
)




*/