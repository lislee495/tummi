import React from 'react';
import { connect } from 'react-redux';
import {changeRestaurant, fetchMenu} from '../../redux/restaurants'
import Menu from './Menu'

class RestaurantMenu extends React.Component {
  componentDidMount() {
    this.props.changeRestaurant(this.props.restaurantId),
    this.props.fetchMenu(this.props.restaurantId)
  }
  render() {
  const {currentRestaurant, menu, restaurantId} = this.props;
  return (
    <div>
      <h4>{currentRestaurant.name}</h4>
      <p>Menu</p>
      {menu ? <Menu menu={menu} restaurant={currentRestaurant}/> : ""}
    </div>)
  }
}
const mapStateToProps = function (state, ownProps) {
  const restaurantId = Number(ownProps.match.params.id);
  return {
    restaurantId,
    currentRestaurant: state.restaurants.currentRestaurant,
    menu: state.restaurants.menu
  };
};
const mapDispatchToProps = (dispatch)=> ({
  changeRestaurant: (id) => dispatch(changeRestaurant(id)),
  fetchMenu: (id) => dispatch(fetchMenu(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantMenu);
