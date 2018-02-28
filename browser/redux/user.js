// import axios from 'axios'
// import config from '../config'
// import Promise from 'bluebird'
// import { browserHistory } from 'react-router'


// /* -----------------    ACTION TYPES    ------------------ */

// // const reset_pref
// // const like 
// // const dislike 



// /* ------------     ACTION CREATORS      ------------------ */

// export const addDishToCart = dish => ({type: ADD_DISH, dish})
// export const addRestaurantToCart = restaurant => ({type: ADD_RESTAURANT, restaurant})


// /* ------------          REDUCER         ------------------ */

// export default function reducer (user_pref = {
//   like: [],
//   dislike: []
// }, action) {
//   switch (action.type) {
//     case ADD_DISH:
//       return Object.assign({}, cart, {dishes: [...cart.dishes, action.dish]})
//     case CLEAR_CART:
//       return Object.assign({}, cart, {dishes: []})
//     case SHOW_CART:
//       return Object.assign({}, cart, {showCart: !cart.showCart})
//     case ADD_RESTAURANT:
//       return Object.assign({}, cart, {restaurant: action.restaurant})
//     case REMOVE_ITEM:
//       return Object.assign({}, cart, {dishes: cart.dishes.filter(item => item.id !== action.dish.id)})
//     default:
//       return cart;
//   }
// }

// /* ------------       THUNK CREATORS     ------------------ */

