import axios from 'axios'
import config from '../config'
import Promise from 'bluebird'
import { browserHistory } from 'react-router'


/* -----------------    ACTION TYPES    ------------------ */

const ADD_DISH = "ADD_DISH"
const CLEAR_CART = "CLEAR_CART"
const SHOW_CART = "SHOW_CART"
const ADD_RESTAURANT = "ADD_RESTAURANT"
const REMOVE_ITEM = "REMOVE_ITEM"


/* ------------     ACTION CREATORS      ------------------ */

export const addDishToCart = dish => ({type: ADD_DISH, dish})
export const addRestaurantToCart = restaurant => ({type: ADD_RESTAURANT, restaurant})
export const clearCart = () => ({ type: CLEAR_CART, cart: ""})
export const showCart = () => ({type: SHOW_CART})
export const removeItem = dish => ({ type: REMOVE_ITEM, dish})

/* ------------          REDUCER         ------------------ */

export default function reducer (cart = {
  dishes: [],
  showCart: false,
  restaurant: {},
  price: {}
}, action) {
  switch (action.type) {
    case ADD_DISH:
      return Object.assign({}, cart, {dishes: [...cart.dishes, action.dish]})
    case CLEAR_CART:
      return Object.assign({}, cart, {dishes: []})
    case SHOW_CART:
      return Object.assign({}, cart, {showCart: !cart.showCart})
    case ADD_RESTAURANT:
      return Object.assign({}, cart, {restaurant: action.restaurant})
    case REMOVE_ITEM:
      return Object.assign({}, cart, {dishes: cart.dishes.filter(item => item.id !== action.dish.id)})
    default:
      return cart;
  }
}

/* ------------       THUNK CREATORS     ------------------ */
export const checkoutCart = (terms) => (dispatch) => {
  const {currentUser, cart, cartRestaurant} = terms
  axios.post(`/api/users/${currentUser.id}/orders`, {terms})
  .then(res => dispatch(clearCart()))
}
