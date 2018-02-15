import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {logout} from '../redux/auth'
//fix search bar, two fields, find near ...
class Navbar extends React.Component {
  render() {
    const name = this.props.currentUser.email
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center">Foodie</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>Welcome {name}</li>
              <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
              <li><NavLink to="/favorites" activeClassName="active">Favorites</NavLink></li>
              <li><NavLink to="/logout" onClick={this.props.logout}>Logout</NavLink></li>
            </ul>
            <form>
              <div className="input-field right">
                <input id="search" type="search" required/>
                <label className="label-icon"><i className="material-icons">search</i></label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
    )
  }
}
const mapState = ({currentUser}) => ({ currentUser });


const mapDispatch = (dispatch, ownProps) => ({
  logout: () => {
    dispatch(logout(ownProps.history));
  }
});

export default withRouter(connect(mapState, mapDispatch)(Navbar));
