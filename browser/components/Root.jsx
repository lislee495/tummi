import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import LandingPage from './LandingPage';
import Login from './Login';
import Signup from './Signup';
import Navbar from './Navbar';

import { fetchCurrentUser } from '../redux/auth';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

/* -----------------    COMPONENT     ------------------ */

class Root extends Component {
	componentDidMount() {
		// this.props.fetchInitialData();
	}
	render () {
		return (
	    <Router>
				<div id="main" className="container-fluid">
			    <Route exact path="/" component={LandingPage} />
			    <Route path="/login" component={Login} />
			    <Route path="/signup" component={Signup} />
			  </div>
		  </Router>
		)
	}
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null;

// const mapDispatch = dispatch => ({
//   fetchInitialData: () => {
//     dispatch(fetchCurrentUser());
//   }
// });

export default connect(mapState)(Root);
/* //<Route exact path="/restaurants" component={RestaurantList} />
 // <Route exact path="/restaurants/:id" component={RestaurantDetail} /> */
