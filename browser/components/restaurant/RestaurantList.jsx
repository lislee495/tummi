import React from 'react';
import { connect } from 'react-redux';
import RestaurantDiv from './RestaurantDiv'
import {setCurrentRestaurant, foundRestaurantIndex} from '../../redux/restaurants'

function RestaurantList(props) {
  const {foundRestaurants, selectRestaurant, foundRestaurantIndex, handleBack, handleNext} = props
  let showRestaurants = foundRestaurants.slice(foundRestaurantIndex, foundRestaurantIndex+5)
  return(
    <div className='restaurant-list'>
      <h5>Found {foundRestaurants.length} results:</h5>
      <ul>
      {showRestaurants.map(ele => {
        return(
          <div className="restaurant-div" onClick={() => selectRestaurant(ele)} key={ele.id}
          style={{cursor: "pointer"}}>
            <RestaurantDiv restaurant={ele}/>
          </div>
        )
        })}
      </ul>
      <span>
        <button onClick={()=>handleNext()}>Next</button></span>
      <button onClick={()=>handleBack()}>Back</button>
    </div>
  )
}

/* -----------------    CONTAINER     ------------------ */
const mapStateToProps = state => ({
  foundRestaurants: state.foundRestaurants,
  foundRestaurantIndex: state.foundRestaurantIndex
})

const mapDispatchToProps = (dispatch) => ({
  selectRestaurant: restaurant => dispatch(setCurrentRestaurant(restaurant)),
  handleBack: ()=> dispatch(foundRestaurantIndex(-4)),
  handleNext: ()=> dispatch(foundRestaurantIndex(4))
})
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList)
// onClick={(restaurant)=> (selectRestaurant(restaurant))}
