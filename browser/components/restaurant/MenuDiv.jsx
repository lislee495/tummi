import React from 'react';
import { connect } from 'react-redux';
import {addDishToCart, addRestaurantToCart} from '../../redux/cart'

function MenuDiv(props) {
  const {dish, handleClick, restaurant} = props
  return(
    <li>
      <div className="dish-div" style={{cursor: "pointer"}} onClick={()=>handleClick(dish, restaurant)}>
        <h6>{dish.name}</h6>
        <h7>{dish.price}</h7>
      </div>
    </li>
  )
}
const mapDispatchToProps = (dispatch)=> ({
  handleClick: (dish, restaurant) => {
    dispatch(addDishToCart(dish))
    dispatch(addRestaurantToCart(restaurant))}
})
export default connect(null, mapDispatchToProps)(MenuDiv);
