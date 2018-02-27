import React from 'react';
import { connect } from 'react-redux';
import RestaurantDiv from './RestaurantDiv'
import {setCurrentRestaurant} from '../../redux/restaurants'

class RestaurantList extends React.Component {
  constructor(){
    super()
    this.state = {
      showRestaurants = []
    }
  }
  render() {
    const {foundRestaurants, selectRestaurant} = this.props
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
}

/* -----------------    CONTAINER     ------------------ */

const mapDispatchToProps = (dispatch) => ({
  selectRestaurant: restaurant => dispatch(setCurrentRestaurant(restaurant))
})
export default connect(null, mapDispatchToProps)(RestaurantList)
// onClick={(restaurant)=> (selectRestaurant(restaurant))}
