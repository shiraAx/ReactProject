export const SET_PRODUCTS='@products/SET_PRODUCTS'
// export const SET_UPDATE_PRODUCT='@products/SET_UPDATE_PRODUCT'
// export const SET_NEW_PRODUCT='@products/SET_NEW_PRODUCT'
// export const GET_PRODUCT='@products/GET_PRODUCT'

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: {
    products
  },
});
// export const uodateProduct = (product) => ({
//     type: SET_UPDATE_PRODUCT,
//     payload: {
//       product
//     },
//   });
//   export const setNewProduct = (product) => ({
//     type: SET_NEW_PRODUCT,
//     payload: {
//       product
//     },
//   });
//   export const getProduct = (id) => ({
//     type: GET_PRODUCT,
//     payload: {
//       id
//     },
//   });
  
  
  