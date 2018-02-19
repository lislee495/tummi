import React from 'react';
import { connect } from 'react-redux';

function RestaurantPage(props) {
  const currentRestaurant = props.currentRestaurant;
  return (
    <div>
      <h4>{restaurant.name}</h4>
      <p>Price: {Array(restaurant.price_range + 1).join("$")}</p>
      <p>Address: {restaurant.location.address}</p>
    </div>)
}
const mapStateToProps = function (state) {
  return {
    currentRestaurant: state.restaurants.currentRestaurant
  };
};
export default connect(mapStateToProps)(RestaurantPage);
