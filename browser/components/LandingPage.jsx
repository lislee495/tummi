import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

class LandingPage extends React.Component {
  render() {
    return(
      <div className="landing-page">
        <div className="banner text-center">
          <h1>Foodie</h1>
          <h2>A foodie's best friend.</h2>
          <span>
            <NavLink to="/signup" activeClassName="active">Signup</NavLink>
            <NavLink to="/login" activeClassName="active">Login</NavLink>
          </span>
        </div>
        <div className="about">
          <p> BLAH BLAH BLAH
          </p>
        </div>
      </div>
    )
  }
}
export LandingPage;
