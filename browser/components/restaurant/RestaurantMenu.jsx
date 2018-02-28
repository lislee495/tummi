import React from 'react';
import { connect } from 'react-redux';
import {changeRestaurant, fetchMenu, addLike, addDislike} from '../../redux'
import Menu from './Menu'
import React, {Component} from 'react';
import {ReactSelectize, SimpleSelect, MultiSelect} from 'react-selectize';



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
      <MultiSelect
          placeholder = "Likes"
          options = {["spicy", "vegetarian", "gluten-free", "dairy"].map(
            like => ({label: like, value: like})
          )}
          onValuesChange = {value => handleLikeChange(value)}
      />
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
    menu: state.restaurants.menu,
    likes: state.user_pref.like
  };
};
const mapDispatchToProps = (dispatch)=> ({
  changeRestaurant: (id) => dispatch(changeRestaurant(id)),
  fetchMenu: (id) => dispatch(fetchMenu(id)),
  handleLikeChange: (value) => dispatch(addLike(value))
})
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantMenu);
