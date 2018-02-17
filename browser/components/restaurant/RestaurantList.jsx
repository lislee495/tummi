import React from 'react';
import { connect } from 'react-redux';
import RestaurantDiv from './RestaurantDiv'
import setCurrentRestaurant from '../redux/restaurants'

function RestaurantList(props) {
  const foundRestaurants = props.foundRestaurants
  return(
    <div className="restaurant-list">
      <h3>Found {foundRestaurants.length} results:</h3>
      <ul>
      {foundRestaurants.map(restaurant => {
        return (
          <li key={restaurant.id}>
          <RestaurantDiv restaurant={restaurant} onClick={props.selectRestaurant(restaurant)}/>
          </li>
        )})}
      </ul>
    </div>
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapDispatchToProps = (dispatch) => {
  selectRestaurant: (restaurant) => dispatch(setCurrentRestaurant(restaurant))
}
export default connect(null, mapDispatchToProps)(RestaurantList)
