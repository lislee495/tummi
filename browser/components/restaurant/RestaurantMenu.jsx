import React from 'react';
import { connect } from 'react-redux';
import {changeRestaurant, fetchMenu} from '../../redux/restaurants'

class RestaurantMenu extends React.Component {
  componentDidMount() {
    this.props.changeRestaurant(this.props.restaurantId),
    this.props.fetchMenu(this.props.restaurantId)
  }
  render() {
  const currentRestaurant = this.props.currentRestaurant;
  return (
    <div>
      <h4>{currentRestaurant.name}</h4>
      <p>Menu</p>
    </div>)
  }
}
const mapStateToProps = function (state, ownProps) {
  const restaurantId = Number(ownProps.match.params.id);
  return {
    restaurantId,
    currentRestaurant: state.restaurants.currentRestaurant,
    currentMenu: state.restaurants.menu
  };
};
const mapDispatchToProps = (dispatch)=> ({
  changeRestaurant: (id) => dispatch(changeRestaurant(id)),
  fetchMenu: (restaurant) => dispatch(fetchMenu(restaurant))
})
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantMenu);
