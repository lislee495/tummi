import React from 'react';
import { connect } from 'react-redux';

function RestaurantInfo(props){
  const restaurant = props.currentRestaurant
  return (
    <div className="restaurant-info">
      <div className="restaurant-info-container">
        <h4>{restaurant.name}</h4>
        <p>Price: {Array(restaurant.price_range + 1).join("$")}</p>
        <p>Address: {restaurant.location.address}</p>
      </div>
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    currentRestaurant: state.restaurants.currentRestaurant
  };
};
export default connect(mapStateToProps)(RestaurantInfo);
