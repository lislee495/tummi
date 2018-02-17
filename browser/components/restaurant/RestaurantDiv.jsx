import React from 'react';
import { connect } from 'react-redux';

export default function RestaurantDiv(props) {
  const restaurant = props.restaurant
  return(
    <li>
      <div className="restaurant-div">
        <h6>{restaurant.name}</h6>
      </div>
    </li>
  )
}
