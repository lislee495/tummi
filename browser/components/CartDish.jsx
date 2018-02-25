import React from 'react';
import { connect } from 'react-redux';

export default function CartDish(props) {
  const dish = props.dish
  const removeItem = props.removeItem
  return(
    <li>
      <span>
        <h6>{dish.name}</h6> - <h7>{dish.price}</h7> <button onClick={()=> removeItem(dish)}>X</button>
      </span>
    </li>
  )
}
