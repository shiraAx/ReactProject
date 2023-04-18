// import * as productsActions from '../actions/products.actions'
// export const productsInitialState = {
//   products: null,
// };

//   export default function productsReducer(state , action) {
//   switch (action.type) {
//     case productsActions.GET_PRODUCT:
//       return state.find(p=>p.id===action.payload);
//     case productsActions.SET_UPDATE_PRODUCT:
//         let arr=state.products.filter(p=>p.id!==action.payload.id)
//         return { ...state, products:[arr,action.payload]};
//         case productsActions.SET_PRODUCTS:
//         return{...state,products: action.payload}
//         case productsActions.SET_NEW_PRODUCT:
//             return{state,products:[...state.products,action.payload]}
//     default:
//       return state;
//   }
// }
