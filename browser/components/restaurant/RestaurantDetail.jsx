import React from 'react';
import { NavLink } from 'react-router-dom';

export default function RestaurantDetail(props){
  const restaurant = props.currentRestaurant
  const url = "/restaurants/" + restaurant.id
  return (
    <div className="restaurant-detail">
      <div className="restaurant-detail-container">
        <h4>{restaurant.name}</h4>
        <p>Price: {restaurant.price_range}</p>
        <p>Address: {restaurant.address}</p>
        <p><button><NavLink to={url} activeClassName="active">See More</NavLink></button></p>
      </div>
    </div>
  );
}
