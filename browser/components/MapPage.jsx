import React from 'react';
import { connect } from 'react-redux';
import Map from './Map'
import RestaurantDetail from './restaurant/RestaurantDetail'
import RestaurantList from './restaurant/RestaurantList'

function MapPage(props) {
  const {foundRestaurants, currentRestaurant} = props;
  return (
    <div>
      { foundRestaurants[1] && <RestaurantList foundRestaurants={foundRestaurants}/>}
      { currentRestaurant.name && <RestaurantDetail currentRestaurant={currentRestaurant}/>}
      <Map/>
    </div>)
}
const mapStateToProps = function (state) {
  return {
    foundRestaurants: state.restaurants.foundRestaurants,
    currentRestaurant: state.restaurants.currentRestaurant
  };
};
export default connect(mapStateToProps)(MapPage)
