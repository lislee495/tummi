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



// /* ------------     ACTION CREATORS      ------------------ */

export const addLike = like => ({type: ADD_LIKE, like})
export const deleteLike = likeInd => ({type: DELETE_LIKE, likeInd})
export const deleteDislike = dislikeInd => ({type: DELETE_DISLIKE, dislikeInd})
export const addDislike = dislike => ({type: ADD_DISLIKE, dislike})
export const resetPref = () => ({type: RESET_PREF})


// /* ------------          REDUCER         ------------------ */

export default function reducer (user_pref = {
  like: [],
  dislike: []
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
    default:
      return user_pref;
  }
}

// /* ------------       THUNK CREATORS     ------------------ */

