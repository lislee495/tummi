import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

export default class LandingPage extends React.Component {
  render() {

    return(
      <div className="landing-page">
        <div className="image-wrapper">
        <img className="responsive-img" src="/images/pexels-photo-710916.jpeg"/>
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
          <p> BLAH BLAH BLAH
          </p>
        </div>
      </div>
    )
  }
}
