import React from 'react';
import { connect } from 'react-redux';
import {checkoutCart, clearCart, removeItem} from '../redux/cart'
import CartDish from './CartDish'

class CartBar extends React.Component {
  // componentWillReceiveProps(){
  //   if (this.props.cart !== nextProps.cart) {

  //   }
  // }
  render(){
    const {currentUser, cart, cartRestaurant, removeItem} = this.props
    return (
      <div className="cart-bar shadow">
        <ul className="cart">
        <h3>My Cart</h3>
          <li><a className="subheader">{cartRestaurant.name}</a></li>
        {cart[0] ?
          (  <div>
              {cart.map(ele => <CartDish ele={ele} key={ele.dish.id} removeItem={removeItem}/>)}
              <li><div className="divider"></div></li>
              Total: $ {cart.total}
              <span> 
              <button onClick={()=>this.props.handleClear()}>Clear Cart</button>
              <button onClick={()=>this.props.handleCheckout({cart, currentUser, cartRestaurant})}>Checkout Cart</button>
              </span>
            </div>
          ) : (<li>No items to show!</li>)
          }
        </ul>
      </div>
    );
  }
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
  removeItem: (dish) => dispatch(removeItem(dish)),
  handleCheckout: (terms)=>dispatch(checkoutCart(terms)),
  handleClear: ()=>dispatch(clearCart())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartBar);
