import React from 'react';
import { connect } from 'react-redux';
import {addDishToCart, clearCart, addRestaurantToCart, favoriteDish, fetchFavorites, showModal} from '../../redux'
import Alert from 'react-s-alert';
import Modal from './MenuModal'

class MenuDiv extends React.Component {
  componentDidMount(){
    this.props.fetchFavorites(this.props.currentUser)
  }
  render() {
  const {dish, handleClick, showModal, restaurant, currentUser, handleFavorite, favoriteDishes, clearCart, cartRestaurant} = this.props
    return(
      <li>
        <div className="dish-div shadow" style={{cursor: "pointer"}} onClick={(event)=>{
          if (cartRestaurant.name && cartRestaurant.name !== restaurant.name) {
            this.props.showModal()
          } else {
          Alert.info('Added dish', {
            timeout: 2000,
            position: 'top-right',
            effect: 'flip',
            beep: false,
            offset: 100
        });
          handleClick(dish, restaurant)}}}> 
          <h6>{dish.name}</h6><br/>
          <em>{dish.category.join(", ")}</em><br/>
          ${dish.price} 
          {favoriteDishes.find(item => item.dish_id === dish.id) ? "Favorited" : 
         <button className="gen-btn" 
         onClick={(event) =>{
           event.stopPropagation();
           handleFavorite(dish, restaurant, currentUser)}}>Favorite</button>}
        </div>
      </li>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.currentUser,
  cartRestaurant: state.cart.restaurant,
  favoriteDishes: state.restaurants.favorites.filter(ele => ele.restaurant_id === ownProps.restaurant.id)
})
const mapDispatchToProps = (dispatch) => ({
  handleClick: (dish, restaurant) => {
    dispatch(addDishToCart(dish))
    dispatch(addRestaurantToCart(restaurant))},
  handleFavorite: (dish, restaurant, currentUser) => dispatch(favoriteDish({dish, restaurant, currentUser})),
  fetchFavorites: (currentUser) => dispatch(fetchFavorites(currentUser)),
  clearCart: () => dispatch(clearCart()),
  showModal: () => dispatch(showModal())
})
export default connect(mapStateToProps, mapDispatchToProps)(MenuDiv);
