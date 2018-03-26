import React from 'react';
import { connect } from 'react-redux';
import {addDishToCart, clearCart, addRestaurantToCart, favoriteDish, fetchFavorites} from '../../redux'
import Alert from 'react-s-alert';
import Modal from 'react-modal';


const styles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
}
Modal.setAppElement('#main');
class MenuDiv extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  componentDidMount(){
    this.props.fetchFavorites(this.props.currentUser)
  }
  render() {
  const {dish, handleClick, restaurant, currentUser, handleFavorite, favoriteDishes, clearCart} = this.props
    return(
      <li>
        <div className="dish-div shadow" style={{cursor: "pointer"}} onClick={(event)=>{
          if (dish.restaurant.name !== restaurant.name) {
            return(<Modal
              isOpen={true}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={styles}
            >
          <h5>Your cart already has items from a different restaurant. Clear cart?</h5>
          <button onClick={clearCart()}>Yes</button>
          <button onClick={this.closeModal()}>No</button>
        </Modal>)
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
  favoriteDishes: state.restaurants.favorites.filter(ele => ele.restaurant_id === ownProps.restaurant.id)
})
const mapDispatchToProps = (dispatch) => ({
  handleClick: (dish, restaurant) => {
    dispatch(addDishToCart(dish))
    dispatch(addRestaurantToCart(restaurant))},
  handleFavorite: (dish, restaurant, currentUser) => dispatch(favoriteDish({dish, restaurant, currentUser})),
  fetchFavorites: (currentUser) => dispatch(fetchFavorites(currentUser)),
  clearCart: () => dispatch(clearCart())
})
export default connect(mapStateToProps, mapDispatchToProps)(MenuDiv);
