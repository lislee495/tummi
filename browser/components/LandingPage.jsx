import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

export class LandingPage extends React.Component {
  render() {
    return(
      <div className="landing-page">
        <div className="banner text-center">
          <h1>Foodie</h1>
          <h2>A foodie's best friend.</h2>
          <span>
            <button><NavLink to="/signup" activeClassName="active">Signup</NavLink></button>
            <button><NavLink to="/login" activeClassName="active">Login</NavLink></button>
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
