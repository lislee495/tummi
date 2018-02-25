import React from 'react';
import { connect } from 'react-redux';
import {checkoutCart, clearCart} from '../redux/cart'

function CartBar(props){
    const {currentUser, cart, cartRestaurant} = props
    return (
      <div className="cart-bar">
        <ul className="cart">
        {cart ?

          ( <span>
            <button onClick={()=>props.handleClear()}>Clear Cart</button>
            <button onClick={()=>props.handleCheckout({cart, currentUser, cartRestaurant})}>Checkout Cart</button>
            </span>
          ) : (<li>No items to show!</li>)
          }
        </ul>
      </div>
    );
  }


/* -----------------    CONTAINER     ------------------ */
const mapStateToProps = function (state, ownProps) {
  return {
    cart: state.cart.dishes,
    currentUser: state.currentUser,
    cartRestaurant: state.cart.restaurant
  };
};
const mapDispatchToProps = (dispatch)=> ({
  handleCheckout: (terms)=>dispatch(checkoutCart(terms)),
  handleClear: ()=>dispatch(clearCart())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartBar);
  // {cart.map(dish => <CartDish dish={dish} key={dish.id}>)}
