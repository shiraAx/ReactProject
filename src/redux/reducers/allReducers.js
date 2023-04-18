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

    case productsActions.SET_PRODUCTS:
      return { ...state, products: action.payload };

    /////////////////////// users///////////////////////////////////
    case usersActions.SET_USERS:
      return { ...state, users: action.payload };
    case usersActions.SET_NEW_USER:
      {
        console.log(" usersActions.SET_NEW_USER:", state)
        state.users.users.push(action.payload)
      }
    /////////////////////cart/////////////////////////////////
    case cartActions.SET_CART:
      {
        //console.log("SET_CART", state)
        return { ...state, cart: action.payload };

      }
    case cartActions.SET_NEW_PROD:
      {
        console.log(" cartActions.SET_NEW_PROD::", state)
        state.cart.cart.push(action.payload)
      }

    default:
      return state;
  }
}
export const appStore = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

