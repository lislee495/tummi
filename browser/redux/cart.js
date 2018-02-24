import axios from 'axios'
import config from '../config'
import Promise from 'bluebird'
import { browserHistory } from 'react-router'


/* -----------------    ACTION TYPES    ------------------ */

const ADD_DISH = "ADD_DISH"


/* ------------     ACTION CREATORS      ------------------ */

export const addDishToCart = dish => ({type: ADD_DISH, dish})

/* ------------          REDUCER         ------------------ */

export default function reducer (cart = [], action) {
  switch (action.type) {
    case SET_CART:
      return [...cart, action.dish]
    default:
      return cart;
  }
}

/* ------------       THUNK CREATORS     ------------------ */
