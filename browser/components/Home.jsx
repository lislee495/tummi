import React from 'react';
import { connect } from 'react-redux';
import Map from './Map'
import Navbar from './Navbar'
import RestaurantDetail from './restaurant/RestaurantDetail'
import RestaurantList from './restaurant/RestaurantList'

function Home(props) {
  const {foundRestaurants, currentRestaurant} = props;
  return (
    <div className="logged-in">
      <Navbar/>
      { foundRestaurants && <RestaurantList foundRestaurants={foundRestaurants}/>}
      { currentRestaurant.name && <RestaurantDetail currentRestaurant={currentRestaurant}/>}
      <Map/>
    </div>)
}
const mapStateToProps = function (state) {
  return {
    foundRestaurants: state.restaurants.foundRestaurants.restaurants,
    currentRestaurant: state.restaurants.current_restaurant
  };
};
export default connect(mapStateToProps)(Home)
