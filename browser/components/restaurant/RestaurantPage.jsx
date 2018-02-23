import React from 'react';
import { connect } from 'react-redux';
import {changeRestaurant, fetchMenu} from '../../redux/restaurants'

class RestaurantPage extends React.Component {
  componentDidMount() {
    this.props.changeRestaurant(this.props.restaurantId)
  }
  render() {
  const currentRestaurant = this.props.currentRestaurant;

  return (
    <div>
      <h4>{currentRestaurant.name}</h4>
      <p>Price: {currentRestaurant.price_range}</p>
      <p>Address: {currentRestaurant.address}</p>
      <p><button onClick={()=>this.props.handleClick(currentRestaurant)}>Get Menu</button></p>
    </div>)
  }
}

const mapStateToProps = function (state, ownProps) {
  const restaurantId = Number(ownProps.match.params.id);
  return {
    restaurantId,
    currentRestaurant: state.restaurants.currentRestaurant
  };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  changeRestaurant: (id) => dispatch(changeRestaurant(id)),
  handleClick: (restaurant) => {
    // dispatch(fetchMenu(restaurant.id))
    ownProps.history.push(`/restaurants/${restaurant.id}/menu`)
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantPage);
