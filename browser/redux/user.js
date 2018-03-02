import axios from 'axios'
import config from '../config'
import Promise from 'bluebird'
import { browserHistory } from 'react-router'



// /* -----------------    ACTION TYPES    ------------------ */

const RESET_PREF = "RESET_PREF"
const ADD_LIKE = "ADD_LIKE"
const ADD_DISLIKE = "ADD_DISLIKE"
const DELETE_DISLIKE = "DELETE_DISLIKE"
const DELETE_LIKE = "DELETE_LIKE"
const SET_TRENDS = "SET_TRENDS"
const SET_FAVORITES = "SET_FAVORITES"




// /* ------------     ACTION CREATORS      ------------------ */

export const addLike = like => ({type: ADD_LIKE, like})
export const deleteLike = likeInd => ({type: DELETE_LIKE, likeInd})
export const deleteDislike = dislikeInd => ({type: DELETE_DISLIKE, dislikeInd})
export const addDislike = dislike => ({type: ADD_DISLIKE, dislike})
export const resetPref = () => ({type: RESET_PREF})
export const setFavorites = favorites => ({type: SET_FAVORITES, favorites})
export const setTrends = trends => ({type: SET_TRENDS, trends})


// /* ------------          REDUCER         ------------------ */

export default function reducer (user_pref = {
  like: [],
  dislike: [],
  favorites: [],
  trends: []
}, action) {
  switch (action.type) {
    case ADD_LIKE:
      return Object.assign({}, user_pref, {like: [...user_pref.like, {id: user_pref.like.length + 1, text: action.like}]})
    case ADD_DISLIKE:
      return Object.assign({}, user_pref, {dislike: [...user_pref.dislike, {id: user_pref.dislike.length + 1, text: action.dislike}]})
    case DELETE_LIKE:
      return Object.assign({}, user_pref, {like: [...user_pref.like].splice(action.likeInd, 1)})
    case DELETE_DISLIKE:
      return Object.assign({}, user_pref, {dislike:  [...user_pref.dislike].splice(action.dislikeInd, 1)})
    case RESET_PREF:
      return Object.assign({}, user_pref, {like: [], dislike: []})
    case SET_FAVORITES:
      return Object.assign({}, user_pref, {favorites: action.favorites})
    case SET_TRENDS: 
      return Object.assign({}, user_pref, {trends: action.trends})
    default:
      return user_pref;
  }
}

// /* ------------       THUNK CREATORS     ------------------ */

export const fetchTrends = currentUser => dispatch => {
  const {currentUser} = currentUser
  axios.get(`/api/users/${currentUser.id}/orders`)
  .then(trends => [...trends.body].map(ele => ele.dish_id))
  .then(dishIds => Promise.map(dishIds, (dishId)=> {
    return axios.get(`/api/dishes/${dishId}`)
  })).then(result => result.map(ele => ele.data))
  .then(dishes => dispatch(setTrends(dishes)))
}

export const fetchFavorites = currentUser => dispatch => {
  const {currentUser} = currentUser
  axios.get(`/api/users/${currentUser.id}/favorites`)
  .then(favorites => [...favorites.data].map(ele => ele.dish_id))
  .then(dishIds => Promise.map(dishIds, (dishId)=> {
    return axios.get(`/api/dishes/${dishId}`)
  })).then(result => result.map(ele => ele.data))
  .then(dishes => dispatch(setFavorites(dishes)))
}