import React from 'react';
import { connect } from 'react-redux';
import Map from './Map'
import RestaurantDetail from './restaurant/RestaurantDetail'
import { resetRestaurants, getLocation } from '../redux'

class MapPage extends React.Component {
  componentDidMount() {
    this.props.resetRestaurants()
    this.props.getLocation()
  }

  render() {
    const { currentRestaurant } = this.props;
    return (
      <div>
        <div className="top-items">
          {currentRestaurant.name ? <RestaurantDetail currentRestaurant={currentRestaurant} /> : null}
        </div>
        <Map />
      </div>)
  }
}


const mapStateToProps = (state) => ({
  currentRestaurant: state.restaurants.currentRestaurant
});

const mapDispatchToProps = (dispatch) => ({
  resetRestaurants: () => dispatch(resetRestaurants()),
  getLocation: () => dispatch(getLocation())
});
export default connect(mapStateToProps, mapDispatchToProps)(MapPage)
