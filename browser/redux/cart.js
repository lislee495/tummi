import axios from 'axios'

/* -----------------    ACTION TYPES    ------------------ */

const ADD_DISH = "ADD_DISH"
const CLEAR_CART = "CLEAR_CART"
const SHOW_CART = "SHOW_CART"
const ADD_RESTAURANT = "ADD_RESTAURANT"
const REMOVE_ITEM = "REMOVE_ITEM"
const RESET_CART = "RESET_CART"

/* ------------     ACTION CREATORS      ------------------ */

export const addDishToCart = dish => ({type: ADD_DISH, payload: {quantity: 1, dish: dish}})
export const addRestaurantToCart = restaurant => ({type: ADD_RESTAURANT, restaurant})
export const clearCart = () => ({ type: CLEAR_CART})
export const showCart = () => ({type: SHOW_CART})
export const removeItem = dish => ({ type: REMOVE_ITEM, dish})
export const resetCart = () => ({ type: RESET_CART})

/* ------------          REDUCER         ------------------ */

export default function reducer (cart = {
  dishes: [],
  showCart: false,
  restaurant: {},
  total: 0
}, action) {
  switch (action.type) {
    case ADD_DISH:
      var dishIndex = cart.dishes.findIndex(ele => ele.dish.id === action.payload.dish.id)
      if (dishIndex > -1) {
        cart.dishes[dishIndex].quantity += 1;
        return Object.assign({}, cart, {total: cart.total + action.payload.dish.price}) 
      } else {
      return Object.assign({}, cart, {dishes: [...cart.dishes, action.payload], total: cart.total + action.payload.dish.price})}
    case CLEAR_CART:
      return Object.assign({}, cart, {dishes: [], restaurant: {}, total: 0})
    case SHOW_CART:
      return Object.assign({}, cart, {showCart: !cart.showCart})
    case ADD_RESTAURANT:
      return Object.assign({}, cart, {restaurant: action.restaurant})
    case REMOVE_ITEM:
      var dishIndex = cart.dishes.findIndex(ele => ele.dish.id === action.dish.id)
      cart.dishes[dishIndex].quantity -= 1
      return Object.assign({}, cart, {dishes: cart.dishes.filter(ele => ele.quantity !== 0), total: cart.total - action.dish.price})
    default:
      return cart;
  }
}

/* ------------       THUNK CREATORS     ------------------ */
export const checkoutCart = (terms) => (dispatch) => {
  axios.post(`/api/users/${terms.currentUser.id}/orders`, {terms})
  .then(res => dispatch(clearCart()))
}
