import React from 'react';
import { connect } from 'react-redux';
import {addDishToCart} from '../../redux/cart'

function DishDiv(props) {
  const {dish} = props
  return(
    <li>
      <div className="dish-div" style={{cursor: "pointer"}} onClick={()=>handleClick(dish)}>
        <h6>{dish.name}</h6>
        <h7>{dish.price}</h7>
      </div>
    </li>
  )
}
const mapDispatchToProps = (dispatch)=> ({
  handleClick: (dish) => dispatch(addDishToCart(dish))
})
export default connect(null, mapDispatchToProps)(MenuDiv);
