import { combineReducers } from 'redux';
import currentUser from './auth';
import restaurants from './restaurants'

export default combineReducers({ currentUser, restaurants });

export * from './auth';
export * from './restaurants'
