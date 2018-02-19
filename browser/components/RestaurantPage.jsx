import React from 'react';
import { connect } from 'react-redux';

function RestaurantPage(props) {
  const currentRestaurant = props.currentRestaurant;
  return (
    <div>
      <h4>{currentRestaurant.name}</h4>
      <p>Price: {Array(currentRestaurant.price_range + 1).join("$")}</p>
      <p>Address: {currentRestaurant.location.address}</p>
    </div>)
}
const mapStateToProps = function (state) {
  return {
    currentRestaurant: state.restaurants.currentRestaurant
  };
};
export default connect(mapStateToProps)(RestaurantPage);
