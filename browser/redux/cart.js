import axios from 'axios'
import config from '../config'
import Promise from 'bluebird'
import { browserHistory } from 'react-router'


/* -----------------    ACTION TYPES    ------------------ */

const ADD_DISH = "ADD_DISH"
const CLEAR_CART = "CLEAR_CART"


/* ------------     ACTION CREATORS      ------------------ */

export const addDishToCart = dish => ({type: ADD_DISH, dish})
export const clearCart = () => ({ type: CLEAR_CART, cart: ""})

/* ------------          REDUCER         ------------------ */

export default function reducer (cart = [], action) {
  switch (action.type) {
    case ADD_DISH:
      return [...cart, action.dish]
    case CLEAR_CART:
      return []
    default:
      return cart;
  }
}

/* ------------       THUNK CREATORS     ------------------ */
export const checkoutCart = (cart) => (dispatch) => { 
  axios.post('/api/cart', cart)
  .then(res => dispatch(clearCart()))
}
