export const SET_CART = '@cart/SET_CART'
export const SET_NEW_PROD = '@cart/SET_NEW_PROD'
export const UPDATE_NEW_PROD = '@cart/UPDATE_NEW_PROD'
export const REMOVE_PROD = '@cart/REMOVE_PROD'




export const setCart = (cart) => ({
    type: SET_CART,
    payload: {
        cart
    },
});


export const setNewProdInCart = (product) => ({
    type: SET_NEW_PROD,
    payload: {
        product
    },
});

export const updateNewProdInCart = (product) => ({
    type: UPDATE_NEW_PROD,
    payload: {
        product
    },
});
export const removeProdInCart = (product) => ({
    type: REMOVE_PROD,
    payload: {
        product
    },
});