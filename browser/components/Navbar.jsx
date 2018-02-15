import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
//fix search bar, two fields, find near ...
export default class Navbar extends React.Component {
  render() {
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center">Foodie</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
              <li><NavLink to="/favorites" activeClassName="active">Favorites</NavLink></li>
              <li><NavLink to="/logout" activeClassName="active">Logout</NavLink></li>
            </ul>
            <form>
              <div className="input-field">
                <input id="search" type="search" required/>
                <label className="label-icon" for="search"><i class="material-icons">search</i></label>
                <i className="material-icons">close</i>
              </div>
              <div className="input-field">
                <input id="search" type="search" required/>
                <label className="label-icon" for="search"><i class="material-icons">search</i></label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
    )
  }
}
