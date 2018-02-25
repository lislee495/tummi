import React from 'react';
import {checkoutCart, clearCart} from '../../redux/cart'

function CartBar(props){
    const {currentUser, cart, currentRestaurant} = props
    return (
      <div className="cart-bar">
        <ul className="cart">
          {if (cart) {
            return(
              {cart.map(dish => <CartDish dish={dish} key={dish.id}>)}
              <button onClick={()=>props.handleClear()}>Clear Cart</button>
              <button onClick={()=>props.handleCheckout({cart, currentUser})}>Checkout Cart</button>
            )}
            else {
              return(<li>No items to show!</li>)
            }}
        </ul>
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */
const mapStateToProps = function (state, ownProps) {
  return {
    currentRestaurant: state.restaurants.currentRestaurant,
    cart: state.cart,
    currentUser: state.currentUser
  };
};
const mapDispatchToProps = (dispatch)=> ({
  handleCheckout: (terms)=>dispatch(checkoutCart(terms)),
  handleClear: ()=>dispatch(clearCart())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartBar);
