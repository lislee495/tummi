import React from 'react';
import { NavLink, withRouter, browserHistory } from 'react-router-dom';
import Searchbar from './Searchbar'
import { connect } from 'react-redux';
import {logout} from '../redux/auth';
import {showCart} from '../redux/cart'
class Navbar extends React.Component {
  render() {
    const name = this.props.currentUser.email
    const handleCartClick = this.props.handleCartClick
    return(
      
        <div className="nav-wrap shadow">
          
            <ul className="left nav-items">
              <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
              <li><NavLink to="/favorites" activeClassName="active">Favorites</NavLink></li>
              <li><NavLink to="/trends" activeClassName="active">Trends</NavLink></li>
              <li><NavLink to="/logout" onClick={this.props.logout}>Logout</NavLink></li>
            </ul>
            <div className="brand-logo center">Tummi</div>
            <ul className="right nav-items">
             <li><Searchbar history={this.props.history}/></li>
              <li><button class="cart-btn" onClick={()=>handleCartClick()}>
              <i class="material-icons">shopping_cart</i></button></li>
            </ul>
          </div>
        
    )
  }
}
const mapState = ({currentUser}) => ({ currentUser });
//

const mapDispatch = (dispatch, ownProps) => ({
  logout: () => dispatch(logout(ownProps.history)),
  handleCartClick: () => {
    dispatch(showCart());
  }
});
export default withRouter(connect(mapState, mapDispatch)(Navbar));
