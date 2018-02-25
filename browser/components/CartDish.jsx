import React from 'react';
import { connect } from 'react-redux';

export default function CartDish(props) {
  const dish = props.dish
  return(
    <li>
      <span>
        <h6>{dish.name}</h6> -
        <h7>{dish.price}</h7>
      </span>
    </li>
  )
}
