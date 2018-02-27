import React from 'react';
import { NavLink } from 'react-router-dom';

export default function RestaurantDetail(props){
  const restaurant = props.currentRestaurant
  const url = "/restaurants/" + restaurant.id
  const image_style= {backgroundImage: 'url(' + restaurant.featured_image + ')'}
  return (
    <div className="restaurant-detail">
      <div className="restaurant-detail-image" style={image_style}>
      </div>
      <div className="restaurant-detail-container">
        <h4>{restaurant.name}</h4>
        <p>Price: {restaurant.price_range}</p>
        <p>Address: {restaurant.address}</p>
        <p>{restaurant.user_rating}({restaurant.votes} user ratings)</p>
        <p><button><NavLink to={url} activeClassName="active">See More</NavLink></button></p>
      </div>
    </div>
  );
}
