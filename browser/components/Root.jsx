import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import LandingPage from './LandingPage';
import Login from './Login';
import Signup from './Signup';
import Navbar from './Navbar';

import { fetchCurrentUser } from '../redux/auth';

/* -----------------    COMPONENT     ------------------ */

class Root extends Component {
	componentDidMount() {
		this.props.fetchInitialData();
	}
	render () {
		return (
	    <Router>
				<div id="main" className="container-fluid">
			    <Route exact path="/" component={LandingPage} />
			    <Route path="/login" component={Login} />
			    <Route path="/signup" component={Signup} />
			    <Route exact path="/restaurants" component={RestaurantList} />
			    <Route exact path="/restaurants/:id" component={RestaurantDetail} />
			    <Footer />
			  </div>
		  </Router>
		)
	}
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null;

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchCurrentUser());
  }
});

export default connect(mapState, mapDispatch)(Root);
