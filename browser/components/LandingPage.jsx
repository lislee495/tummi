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
          <button>Sign in</button>
          <button>Log in</button>
        </div>
        <div className="about">
        </div>
      </div>
    )
  }
}
export LandingPage;
