import React from 'react';
import { connect } from 'react-redux';
import Map from './Map'
import Navbar from './Navbar'
import RestaurantList from './restaurant/RestaurantList'

function Home(props) {
  const foundRestaurants = props.foundRestaurants
  return (
    <div className="logged-in">
      <Navbar/>
      { foundRestaurants && <RestaurantList foundRestaurants={foundRestaurants}/>}
    </div>)
}
const mapStateToProps = function (state) {
  return {
    foundRestaurants: state.restaurants.foundRestaurants.restaurants
  };
};
export default connect(mapStateToProps)(Home)
