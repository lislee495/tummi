import React from 'react';
import { connect } from 'react-redux';
import Map from './Map'
import Navbar from './Navbar'
import RestaurantList from './restaurant/RestaurantList'

function Home (props) {
  const foundRestaurants = props.foundRestaurants
    return(
      <div className="logged-in">
        <Navbar/>
        {if (foundRestaurants) <RestaurantList foundRestaurants={foundRestaurants}/>}
        <Map/>
      </div>
    )
}
mapStateToProps = state => {foundRestaurants: state.restaurants.foundRestaurants}
export default connect(mapStateToProps)(Home);
