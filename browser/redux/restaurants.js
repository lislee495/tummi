import axios from 'axios';

/* -----------------    ACTION TYPES    ------------------ */

const SET_CURRENT_RESTAURANT = "SET_CURRENT_RESTAURANT"
const SEARCH_CATEGORY = "SEARCH_CATEGORY"
const SEARCH_LOCATION = "SEARCH_LOCATION"


/* ------------     ACTION CREATORS      ------------------ */

const set_current_restaurant = restaurant => ({type: SET_CURRENT_RESTAURANT, restaurant})
export const searchCategory = category => ({type: SEARCH_CATEGORY, category})
export const searchLocation = location => ({type: SEARCH_LOCATION, location})


/* ------------          REDUCER         ------------------ */

export default function reducer (restaurants = {
  current_restaurant: {},
  category: "",
  location: ""
}, action) {
  switch (action.type) {
    case SET_CURRENT_RESTAURANT:
      return Object.assign({}, restaurants, {current_restaurant: action.restaurant})
    case SEARCH_CATEGORY:
      return Object.assign({}, restaurants, {category: action.category})
    case SEARCH_LOCATION:
      return Object.assign({}, restaurants, {location: action.location})
    default:
      return restaurants;
  }
}

/* ------------       THUNK CREATORS     ------------------ */

export const searchRestaurants = (searchTerms, history) => dispatch => {
  console.log("checking thunk:", searchTerms);
  //Locu api insert here
}
