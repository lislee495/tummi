import axios from 'axios'
import config from '../config'
import Promise from 'bluebird'
import { browserHistory } from 'react-router'

/* -----------------    ACTION TYPES    ------------------ */

const SET_CURRENT_RESTAURANT = "SET_CURRENT_RESTAURANT"
const SEARCH_CATEGORY = "SEARCH_CATEGORY"
const SEARCH_LOCATION = "SEARCH_LOCATION"
const FOUND_RESTAURANTS = "FOUND_RESTAURANTS"


/* ------------     ACTION CREATORS      ------------------ */

export const setCurrentRestaurant = restaurant => ({type: SET_CURRENT_RESTAURANT, restaurant})
export const searchCategory = category => ({type: SEARCH_CATEGORY, category})
export const searchLocation = location => ({type: SEARCH_LOCATION, location})
const foundRestaurants = restaurants => ({type: FOUND_RESTAURANTS, restaurants})


/* ------------          REDUCER         ------------------ */

export default function reducer (restaurants = {
  currentRestaurant: {},
  category: "",
  location: "",
  foundRestaurants: []
}, action) {
  switch (action.type) {
    case SET_CURRENT_RESTAURANT:
      return Object.assign({}, restaurants, {currentRestaurant: action.restaurant})
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
export const changeRestaurant = (id) => dispatch => {
  axios.get(`/api/restaurants/${id}`)
    // .then(res => console.log(res))
  .then(restaurant => {
    dispatch(setCurrentRestaurant(restaurant.data))
  })
}

export const searchRestaurants = (searchTerms, history) => dispatch => {
  const {category, location} = searchTerms
  // location = location.split(" ").join("+")
  // axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${config.GOOGLE_GEOCODE_API_KEY}`)
  // .then(result => )
  axios.get(`https://developers.zomato.com/api/v2.1/search?count=10&q=${category}`, {
    headers: {'user-key': config.ZOMATO_KEY}
  })
  .then(res => res.data)
  .then(data => {
    return Promise.map(data.restaurants, function(restaurant) {
      return axios.post('/api/restaurants', restaurant)
    })
    }).then(res => res.map(ele => ele.data))
    .then(restaurants => {
      dispatch(foundRestaurants(restaurants))
      })
}
