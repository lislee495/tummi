import React from 'react';
import { connect } from 'react-redux';
import {changeRestaurant} from '../../redux/restaurants'

class RestaurantPage extends React.Component {
  componentDidMount() {
    this.props.changeRestaurant(this.props.restaurantId)
  }
  //
  // componentWillReceiveProps(nextProps){
  //   if (nextProps.currentRestaurant !== this.props.currentRestaurant) {
  //     this.props.changeRestaurant(nextProps.currentRestaurant.id)
  //   }
  // }
  render() {
  const currentRestaurant = this.props.currentRestaurant;

  return (
    <div>
      <h4>{currentRestaurant.name}</h4>
      <p>Price: {currentRestaurant.price_range}</p>
      <p>Address: {currentRestaurant.address}</p>
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
const mapDispatchToProps = (dispatch)=> ({
  changeRestaurant: (id) => dispatch(changeRestaurant(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantPage);
