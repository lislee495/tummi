import React from 'react';
import { connect } from 'react-redux';
import {changeRestaurant} from '../redux/restaurants'

class RestaurantPage extends React.Component {
  componentWillMount(){

  }
  render() {
  const currentRestaurant = this.props.match.params || this.props.currentRestaurant;
  return (
    <div>
      <h4>{currentRestaurant.name}</h4>
      <p>Price: {Array(currentRestaurant.price_range + 1).join("$")}</p>
      <p>Address: {currentRestaurant.address}</p>
    </div>)
  }
}
const mapStateToProps = function (state) {
  return {
    currentRestaurant: state.restaurants.currentRestaurant
  };
};
const mapDispatchToProps = (dispatch)=> ({
  changeRestaurant: (id) => dispatch(changeRestaurant(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantPage);
