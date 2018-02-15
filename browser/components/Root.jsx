import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import LandingPage from './LandingPage';
import Login from './Login';
import Signup from './Signup';
import Main from './Main';

import { fetchCurrentUser } from '../redux/auth';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

/* -----------------    COMPONENT     ------------------ */

class Root extends Component {
	componentDidMount() {
		this.props.fetchInitialData();
	}

	render () {
		return (
	    <Router>
				<div id="main" className="container-fluid">
        {this.props.currentUser.id ? <Route exact path="/" component={Main} /> :
        <Route exact path="/" component={LandingPage} />}
			    <Route path="/login" component={Login} />
			    <Route path="/signup" component={Signup} />
			  </div>
		  </Router>
		)
	}
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({currentUser}) => ({ currentUser });

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchCurrentUser());
  }
});

export default connect(mapState, mapDispatch)(Root);
/* //<Route exact path="/restaurants" component={RestaurantList} />
 // <Route exact path="/restaurants/:id" component={RestaurantDetail} /> */
