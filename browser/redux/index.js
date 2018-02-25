import { combineReducers } from 'redux';
import currentUser from './auth';
import restaurants from './restaurants'
import cart from './cart'

export default combineReducers({ currentUser, restaurants, cart });

export * from './auth';
export * from './restaurants'
export * from './cart'
