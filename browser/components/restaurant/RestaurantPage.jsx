import React from 'react';
import { connect } from 'react-redux';
import {changeRestaurant} from '../../redux/restaurants'

class RestaurantPage extends React.Component {
  componentDidMount() {
    this.props.changeRestaurant(this.props.restaurantId)
  }
  render() {
  const currentRestaurant = this.props.currentRestaurant;
  const image_style= {background: 'linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(' + this.props.currentRestaurant.featured_image + ')'}
  return (
    <div className="restaurant-page">
      <div className="restaurant-page-banner" style={image_style}>
      <div className="restaurant-page-banner header">{currentRestaurant.name}</div>
      </div>
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
    ownProps.history.push(`/restaurants/${restaurant.id}/menu`)
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantPage);
