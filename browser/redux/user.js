import axios from 'axios'
import config from '../config'
import Promise from 'bluebird'
import { browserHistory } from 'react-router'


// /* -----------------    ACTION TYPES    ------------------ */

const RESET_PREF = "RESET_PREF"
const ADD_LIKE = "ADD_LIKE"
const ADD_DISLIKE = "ADD_DISLIKE"



// /* ------------     ACTION CREATORS      ------------------ */

export const addLike = like => ({type: ADD_LIKE, like})
export const addDislike = dislike => ({type: ADD_DISLIKE, dislike})
export const resetPref = () => ({type: RESET_PREF})


// /* ------------          REDUCER         ------------------ */

export default function reducer (user_pref = {
  like: [],
  dislike: []
}, action) {
  switch (action.type) {
    case ADD_LIKE:
      return Object.assign({}, user_pref, {like: action.like})
    case ADD_DISLIKE:
      return Object.assign({}, user_pref, {dislike: action.dislike})
    case RESET_PREF:
      return Object.assign({}, user_pref, {like: [], dislike: []})
    default:
      return user_pref;
  }
}

// /* ------------       THUNK CREATORS     ------------------ */

