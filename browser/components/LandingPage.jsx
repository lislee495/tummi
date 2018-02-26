import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

export default class LandingPage extends React.Component {
  render() {

    return(
      <div className="landing-page">
        <div className="image-wrapper">
        </div>
        <div className="banner text-center">
          <h1 className="logo">Tummi</h1>
          <h5>A stomach's best friend.</h5>
          <br/>
          <br/>
          <span>
            <button className="landing-page"><NavLink to="/signup" activeClassName="active landing-page">Signup</NavLink></button>
            <button className="landing-page"><NavLink to="/login" activeClassName="active landing-page">Login</NavLink></button>
          </span>
        </div>
        <div className="about">
          <div className="about-paragraph">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis omnis quia ut voluptates quas, eligendi qui laborum, corporis ipsam maxime, sed sunt dolore asperiores. Aspernatur nam quo possimus ea alias!
              </p>
          </div>
          <div className="about-image">
          </div>
        </div>
      </div>
    )
  }
}
