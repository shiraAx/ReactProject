import * as productsActions from "../actions/products.actions";
import * as usersActions from "../actions/users.actions";
import * as cartActions from "../actions/cart.actions";
import React from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const initialState = {
  users: [

  ],
  products: [

  ],
  cart: [

  ]
};
function reducer(state, action) {
  switch (action.type) {

    // case productsActions.GET_PRODUCT:
    //   return state.find((p) => p.id === action.payload);

    // case productsActions.SET_UPDATE_PRODUCT:
    //   let arr = state.products.filter((p) => p.id !== action.payload.id);
    //   return { ...state, products: [arr, action.payload] };

    case productsActions.SET_PRODUCTS:
      return { ...state, products: action.payload };

    // case productsActions.SET_NEW_PRODUCT:
    //   return { state, products: [...state.products, action.payload] };


    /////////////////////// users///////////////////////////////////
    case usersActions.SET_USERS:
      return { ...state, users: action.payload };
    case usersActions.SET_NEW_USER:
      {
        console.log(" usersActions.SET_NEW_USER:", state)
        state.users.users.push(action.payload)
      }
    // case usersActions.REMOVE_PROD:
    //   {
    //     console.log(" usersActions.REMOVE_PROD:", state)
    //     let index= 
    //     state.users.users.(action.payload)
    //   }

    //return { state, users: [...state, action.payload] }
    // case usersActions.ADD_USER:
    //   return { state, users: [...state.users ,action.payload] };

    // case usersActions.GET_ALL_USERS:
    //   return state.users;




    case cartActions.SET_CART:
      {
        //console.log("SET_CART", state)
        return { ...state, cart: action.payload};
     
      }
      case cartActions.SET_NEW_PROD:
        {
          console.log(" cartActions.SET_NEW_PROD::", state)
          state.cart.cart.push(action.payload)
        }
    // case cartActions.SET_NEW_PROD:
    //   {
    //     console.log("cartActions.SET_NEW_PROD:", state)
    //     // return { state, cart: [...state.cart ,action.payload] };
    //    //return state.cart?.cart?.push(action.payload)
    //     // return {cart:state.push([...state.cart,action.payload])}
    //   }
    // case cartActions.REMOVE_PROD:
    //   {
    //     let arr = state.cart.cart?.filter((p) => p.id !== action.payload.id);
    //     return { ...state, cart: [arr, action.payload] };
    //   }
    //{ state.cart.push(action.payload) }
    default:
      return state;
  }
}
// export const appStore = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(thunk))
// );
export const appStore = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

