import React from 'react';
import { connect } from 'react-redux';
import {addDishToCart, addRestaurantToCart, favoriteDish} from '../../redux'

function MenuDiv(props) {
  const {dish, handleClick, restaurant, currentUser, handleFavorite} = props
  return(
    <li>
      <div className="dish-div" style={{cursor: "pointer"}} onClick={()=>handleClick(dish, restaurant)}>
        <h6>{dish.name}</h6>
        <h7>{dish.price}</h7>
        <button onClick={()=>handleFavorite(dish, restaurant, currentUser)}>Favorite</button>
      </div>
    </li>
  )
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser
})
const mapDispatchToProps = (dispatch)=> ({
  handleClick: (dish, restaurant) => {
    dispatch(addDishToCart(dish))
    dispatch(addRestaurantToCart(restaurant))},
  handleFavorite: (dish, restaurant, currentUser) => {
    dispatch(favoriteDish({dish, restaurant, currentUser}))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(MenuDiv);
