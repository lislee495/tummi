import {
    combineReducers
} from 'redux';
import currentUser from './auth';
import restaurants from './restaurants'
import cart from './cart'
import userPref from './user'

export default combineReducers({
    currentUser,
    restaurants,
    cart,
    userPref
});

export * from './auth';
export * from './restaurants'
export * from './cart'
export * from './user'