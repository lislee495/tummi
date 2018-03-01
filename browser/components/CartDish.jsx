import React from 'react';
import { connect } from 'react-redux';

export default function CartDish(props) {
  const quantity = props.ele.quantity
  const dish = props.ele.dish
  const removeItem = props.removeItem
  return(
    <li>
      <span>
        {quantity}| <h6>{dish.name}</h6> | <h7>{dish.price * quantity}</h7> <button onClick={()=> removeItem(dish)}>X</button>
      </span>
    </li>
  )
}
