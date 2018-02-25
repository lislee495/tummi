import axios from 'axios'
import config from '../config'
import Promise from 'bluebird'
import { browserHistory } from 'react-router'


/* -----------------    ACTION TYPES    ------------------ */

const ADD_DISH = "ADD_DISH"
const CLEAR_CART = "CLEAR_CART"
const SHOW_CART = "SHOW_CART"


/* ------------     ACTION CREATORS      ------------------ */

export const addDishToCart = dish => ({type: ADD_DISH, dish})
export const clearCart = () => ({ type: CLEAR_CART, cart: ""})
export const showCart = () => ({type: SHOW_CART})

/* ------------          REDUCER         ------------------ */

export default function reducer (cart = {
  dishes: [],
  showCart: false
}, action) {
  switch (action.type) {
    case ADD_DISH:
      return Object.assign({}, cart, {dishes: [...cart.dishes, action.dish]})
    case CLEAR_CART:
      return Object.assign({}, cart, {dishes: []})
    case SHOW_CART:
      return Object.assign({}, cart, {showCart: !cart.showCart})
    default:
      return cart;
  }
}

/* ------------       THUNK CREATORS     ------------------ */
export const checkoutCart = (terms) => (dispatch) => {
  const {currentUser, cart} = terms
  axios.post(`/api/users/${currentUser.id}/orders`, {cart})
  .then(res => dispatch(clearCart()))
}
