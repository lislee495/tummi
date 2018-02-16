import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Searchbar from './Searchbar'
import { connect } from 'react-redux';
import {logout} from '../redux/auth'
//fix search bar, two fields, find near ...
class Navbar extends React.Component {
  render() {
    const name = this.props.currentUser.email
    return(
      <nav>
        <div className="nav-wrapper">
          <div className="brand-logo center">Foodie</div>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
              <li><NavLink to="/favorites" activeClassName="active">Favorites</NavLink></li>
              <li><NavLink to="/trends" activeClassName="active">Trends</NavLink></li>
              <li><NavLink to="/logout" onClick={this.props.logout}>Logout</NavLink></li>
            </ul>
              <div className="right">
                <Searchbar/>
              </div>
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
