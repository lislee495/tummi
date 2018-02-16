import axios from 'axios';

/* -----------------    ACTION TYPES    ------------------ */

const SET_CURRENT_RESTAURANT = "SET_CURRENT_RESTAURANT"
const SEARCH_CATEGORY = "SEARCH_CATEGORY"
const SEARCH_LOCATION = "SEARCH_LOCATION"


/* ------------     ACTION CREATORS      ------------------ */

const set_current_restaurant = restaurant => ({type: SET_CURRENT_RESTAURANT, restaurant})
const search_restaurant_category = category => ({type: SEARCH_RESTAURANT, category})


/* ------------          REDUCER         ------------------ */

export default function reducer (state = {
  current_restaurant: {},
  category: "",
  location: ""
}, action) {
  switch (action.type) {
    case SET_CURRENT_RESTAURANT:
      return Object.assign({}, state, {current_restaurant: action.restaurant})
    case SEARCH_CATEGORY:
      return Object.assign({}, state, {category: action.category})
    case SEARCH_LOCATION:
      return Object.assign({}, state, {location: action.location})
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
