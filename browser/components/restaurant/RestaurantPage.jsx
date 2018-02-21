import React from 'react';
import { connect } from 'react-redux';
import {changeRestaurant} from '../../redux/restaurants'

class RestaurantPage extends React.Component {
  componentDidMount() {
    this.props.changeRestaurant(this.props.restaurantId)
  }
  render() {
  const currentRestaurant = this.props.currentRestaurant;

  return (
    <div>
      <h4>{currentRestaurant.name}</h4>
      <p>Price: {"$".repeat(parseInt(currentRestaurant.price_range))}</p>
      <p>Address: {currentRestaurant.address}</p>

    </div>)
  }
}
// <p><button onClick={fetchMenu(currentRestaurant)}>Get Menu</button></p>
const mapStateToProps = function (state, ownProps) {
  const restaurantId = Number(ownProps.match.params.id);
  return {
    restaurantId,
    currentRestaurant: state.restaurants.currentRestaurant
  };
};
const mapDispatchToProps = (dispatch)=> ({
  changeRestaurant: (id) => dispatch(changeRestaurant(id)),
  // fetchMenu: (restaurant) => dispatch(fetchMenu(restaurant))
})
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantPage);
