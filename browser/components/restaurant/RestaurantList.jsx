import React from 'react';
import { connect } from 'react-redux';
import RestaurantDiv from './RestaurantDiv'
import {setCurrentRestaurant} from '../../redux/restaurants'

function RestaurantList(props) {
  const {foundRestaurants, selectRestaurant} = props
  return(
    <div className='restaurant-list'>
      <h5>Found {foundRestaurants.length} results:</h5>
      <ul>
      {foundRestaurants.map(ele => {
        return(
          <div className="restaurant-div" onClick={() => selectRestaurant(ele)} key={ele.id}
          style={{cursor: "pointer"}}>
            <RestaurantDiv restaurant={ele}/>
          </div>
        )
        })}
      </ul>
    </div>
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapDispatchToProps = (dispatch) => ({
  selectRestaurant: restaurant => dispatch(setCurrentRestaurant(restaurant))
})
export default connect(null, mapDispatchToProps)(RestaurantList)
// onClick={(restaurant)=> (selectRestaurant(restaurant))}
