import React from 'react';
import { connect } from 'react-redux';
import {changeRestaurant, fetchMenu, addLike, addDislike} from '../../redux'
import Menu from './Menu'
import {ReactSelectize, SimpleSelect, MultiSelect} from 'react-selectize';
import { WithContext as ReactTags } from 'react-tag-input';



class RestaurantMenu extends React.Component {
  componentDidMount() {
    this.props.changeRestaurant(this.props.restaurantId),
    this.props.fetchMenu(this.props.restaurantId)
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);

  }

  handleDelete(i) {
    let likes = this.props.likes;
    likes.splice(i, 1);
    this.props.handleLikeChange(likes)
}
  handleAddition(like) {
      let likes = this.props.likes;
      likes.push({
          id: likes.length + 1,
          text: like
      });
      this.props.handleLikeChange(likes)
  }

  // handleDrag(like, currPos, newPos) {
  //     let likes = this.props.likes;
  //     // mutate array
  //     likes.splice(currPos, 1);
  //     likes.splice(newPos, 0, like);
  //     handleLikeChange(likes)
  // }

  render() {
  const {currentRestaurant, menu, restaurantId, handleLikeChange} = this.props;
  return (
    <div className="menu-page">
      <h4>{currentRestaurant.name}</h4>
      <ReactTags 
        tags={this.props.likes}
        suggestions={["spicy", "vegetarian", "gluten-free", "dairy"]}
        handleDelete={this.handleDelete}
        handleAddition={this.handleAddition}
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

// <MultiSelect
// placeholder = "Likes"
// options = {["spicy", "vegetarian", "gluten-free", "dairy"].map(
//   like => ({label: like, value: like})
// )}
// onValuesChange = {value => handleLikeChange(value)}
// />