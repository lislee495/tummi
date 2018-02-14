import axios from 'axios';

/* -----------------    ACTION TYPES    ------------------ */

const SET_CURRENT_RESTAURANT = "SET_CURRENT_RESTAURANT"
const SEARCH_RESTAURANT = "SEARCH_RESTAURANT"


/* ------------     ACTION CREATORS      ------------------ */

const set_current_restaurant = restaurant => ({type: SET_CURRENT_RESTAURANT, restaurant})
const search_restaurant = restaurant => ({type: SEARCH_RESTAURANT, restaurant})


/* ------------          REDUCER         ------------------ */

export default function reducer (state = {
  current_restaurant: {},
  search_restaurant: ""
}, action) {
  switch (action.type) {
    case SET_CURRENT_RESTAURANT:
      return Object.assign({}, state, {current_restaurant: action.restaurant})
    case SEARCH_RESTAURANT:
      return Object.assign({}, state, {search_restaurant: action.restaurant})
    default:
      return current_restaurant;
  }
}

/* ------------       THUNK CREATORS     ------------------ */

// export const login = (credentials, history) => dispatch => {
//   axios.put("/auth/local/login", credentials)
//        .then(user => dispatch(set_current(user)))
//        .catch(err => console.error(`User not found`, err));
// };
