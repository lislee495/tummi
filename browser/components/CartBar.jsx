import React from 'react';
import { connect } from 'react-redux';
import { checkoutCart, clearCart, removeItem } from '../redux/cart'
import CartDish from './CartDish'

function CartBar(props) {
  const { currentUser, cartRestaurant, removeItem, cart } = props
  const dishes = props.cart.dishes
  return (
    <div className="cart-page">
      <div className="modal-background" />
      <div className="cart-bar shadow">
        <ul className="cart">
          <h3>My Cart</h3>
          <div className="divider" style={{ margin: "1rem" }} />
          <li><span className="sub-header">{cartRestaurant.name}</span></li>
          <br />
          {dishes[0] ?
            (<div>
              <div className="cart-content left-align">
                {dishes.map(ele => <CartDish ele={ele} key={ele.dish.id} removeItem={removeItem} />)}
              </div>
              <div className="h_line" style={{ color: 'white' }} />
              <li> Total: $ {cart.total.toFixed(2)} </li>
              <br />
              <div className="divider" />
              <br />
              <div className="cart buttons">
                <button className="cart gen-btn" onClick={() => props.handleClear()}>Clear Cart</button>
                <button className="cart gen-btn" onClick={() => props.handleCheckout({ dishes, currentUser, cartRestaurant })}>Checkout Cart</button>
              </div>
            </div>
            ) : (<li>No items to show!</li>)
          }
        </ul>
      </div>
    </div>

  );
}

/* -----------------    CONTAINER     ------------------ */
const mapStateToProps = function (state) {
  return {
    cart: state.cart,
    currentUser: state.currentUser,
    cartRestaurant: state.cart.restaurant
  };
};
const mapDispatchToProps = (dispatch) => ({
  removeItem: (dish) => dispatch(removeItem(dish)),
  handleCheckout: (terms) => dispatch(checkoutCart(terms)),
  handleClear: () => dispatch(clearCart())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartBar);
