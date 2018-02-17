import axios from 'axios';
import config from '../config'

/* -----------------    ACTION TYPES    ------------------ */

const SET_CURRENT_RESTAURANT = "SET_CURRENT_RESTAURANT"
const SEARCH_CATEGORY = "SEARCH_CATEGORY"
const SEARCH_LOCATION = "SEARCH_LOCATION"
const FOUND_RESTAURANTS = "FOUND_RESTAURANTS"


/* ------------     ACTION CREATORS      ------------------ */

const setCurrentRestaurant = restaurant => ({type: SET_CURRENT_RESTAURANT, restaurant})
export const searchCategory = category => ({type: SEARCH_CATEGORY, category})
export const searchLocation = location => ({type: SEARCH_LOCATION, location})
const foundRestaurants = restaurants => ({type: FOUND_RESTAURANTS, restaurants})


/* ------------          REDUCER         ------------------ */

export default function reducer (restaurants = {
  current_restaurant: {},
  category: "",
  location: "",
  foundRestaurants: []
}, action) {
  switch (action.type) {
    case SET_CURRENT_RESTAURANT:
      return Object.assign({}, restaurants, {current_restaurant: action.restaurant})
    case SEARCH_CATEGORY:
      return Object.assign({}, restaurants, {category: action.category})
    case SEARCH_LOCATION:
      return Object.assign({}, restaurants, {location: action.location})
    case FOUND_RESTAURANTS:
      return Object.assign({}, restaurants, {foundRestaurants: action.restaurants})
    default:
      return restaurants;
  }
}

/* ------------       THUNK CREATORS     ------------------ */

export const searchRestaurants = (searchTerms, history) => dispatch => {
  const {category, location} = searchTerms
  axios.get(`https://developers.zomato.com/api/v2.1/search?count=10&q=${category}`, {
    headers: {'user-key': config.ZOMATO_KEY}
  })
  .then(res => res.data)
  .then(restaurants => dispatch(foundRestaurants(restaurants)))
  //count=20&lat=41.928074&lon=-87.654666&radius=500"
  //Locu api insert here
}
