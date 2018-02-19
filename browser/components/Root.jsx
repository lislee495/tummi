import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import LandingPage from './LandingPage';
import Login from './Login';
import Signup from './Signup';
import MapPage from './MapPage'
import Navbar from './Navbar'
import RestaurantPage from './restaurant/RestaurantPage'

import { fetchCurrentUser } from '../redux/auth';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

/* -----------------    COMPONENT     ------------------ */

class Root extends Component {
  constructor(props) {
    super(props);
  }

	componentDidMount() {
		this.props.fetchInitialData();
	}

	render () {
    console.log(this.props.currentUser)
		return (
	    <Router>
				<div id="main" className="container-fluid">
          {this.props.currentUser.id ?
             (
              <div className="logged-in">
                <Navbar/>
                    <Route exact path="/restaurant" component={RestaurantPage} />
                    <Route exact path="/" component={MapPage} />
              </div>) :
            (
              <div>
                <Navbar/>
                <Route exact path="/" component={MapPage} />
      			    <Route path="/login" component={Login} />
      			    <Route path="/signup" component={Signup} />
              </div>
            )
          }
			  </div>

		  </Router>
		)
	}
}

/* -----------------    CONTAINER     ------------------ */

const mapState = state => {
  return {
    currentUser: state.currentUser
  };
};

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchCurrentUser());
  }
});

export default connect(mapState, mapDispatch)(Root);
