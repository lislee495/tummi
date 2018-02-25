import axios from 'axios'
import config from '../config'
import Promise from 'bluebird'
import { browserHistory } from 'react-router'


/* -----------------    ACTION TYPES    ------------------ */

const SET_CURRENT_RESTAURANT = "SET_CURRENT_RESTAURANT"
const SEARCH_CATEGORY = "SEARCH_CATEGORY"
const SEARCH_LOCATION = "SEARCH_LOCATION"
const FOUND_RESTAURANTS = "FOUND_RESTAURANTS"
const GET_MENU = "GET_MENU"
const GET_DISHES = "GET_DISHES"
const GET_FAVORITES = "GET_FAVORITES"


/* ------------     ACTION CREATORS      ------------------ */

export const setCurrentRestaurant = restaurant => ({type: SET_CURRENT_RESTAURANT, restaurant})
export const searchCategory = category => ({type: SEARCH_CATEGORY, category})
export const searchLocation = location => ({type: SEARCH_LOCATION, location})
const foundRestaurants = restaurants => ({type: FOUND_RESTAURANTS, restaurants})
export const getMenu = menu => ({ type: GET_MENU, menu})
export const getDishes = dishes => ({type: GET_DISHES, dishes})
export const getFavorites = favorites => ({type: GET_FAVORITES, favorites})


/* ------------          REDUCER         ------------------ */

export default function reducer (restaurants = {
  currentRestaurant: {},
  category: "",
  location: "",
  foundRestaurants: [],
  menu: {},
  dishes: {},
  favorites: []
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
    case GET_MENU:
      return Object.assign({}, restaurants, {menu: action.menu})
    case GET_DISHES:
      return Object.assign({}, restaurants, {dishes: action.dishes})
    case GET_FAVORITES:
      return Object.assign({}, restaurants, {favorites: [...restaurants.favorites, action.favorites]})
    default:
      return restaurants;
  }
}

/* ------------       THUNK CREATORS     ------------------ */
export const favoriteDish = (terms) => (dispatch) => {
  const {currentUser} = terms
  axios.post(`/api/users/${currentUser.id}/favorites`, {terms})
  .then(res => dispatch(getFavorites(res.data)))
}

export const changeRestaurant = (id) => dispatch => {
  axios.get(`/api/restaurants/${id}`)
  .then(restaurant => {
    dispatch(setCurrentRestaurant(restaurant.data))
  })
}

export const fetchMenu = (id) => dispatch => {
  axios.get(`/api/restaurants/${id}/menu`)
  .then((menu) => {
    dispatch(getMenu(menu.data))
  })
}

export const searchMenus = (searchTerms) => dispatch => {
  const {category, location} = searchTerms
  axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?cuisine=${category}&instructionsRequired=false&number=20`, {
    headers: {
      "X-Mashape-Key": config.MASHAPE_KEY,
      "X-Mashape-Host": "spoonacular-recipe-food-nutrition-v1.p.mashape.com"
    }
  }).then(res =>
    {return Promise.map(res.data.results, function(dish) {
      return axios.post('/api/dishes', {dish: dish, category: category.toLowerCase()})
    })
    }).then(res => res.map(ele => ele.data))
    .then(dishes => dispatch(getDishes(dishes)))
}

export const searchRestaurants = (searchTerms, history) => dispatch => {
  axios.post('/api/restaurants', searchTerms)
  .then(restaurants => dispatch(foundRestaurants(restaurants.data)))

}
