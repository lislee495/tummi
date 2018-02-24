import React from 'react';
import { connect } from 'react-redux';

export default function MenuDiv(props) {
  const dish = props.dish
  return(
    <li>
      <div className="dish-div">
        <h6>{dish.name}</h6>
        <h7>{dish.price}</h7>
      </div>
    </li>
  )
}
