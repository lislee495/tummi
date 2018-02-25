import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import CartBar from './CartBar'
import LandingPage from './LandingPage';
import Login from './Login';
import Signup from './Signup';
import MapPage from './MapPage'
import Navbar from './Navbar'
import RestaurantPage from './restaurant/RestaurantPage'
import RestaurantMenu from './restaurant/RestaurantMenu'

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
// {showCart ? <CartBar/> : ""}
	render () {
    const {currentUser, showCart} = this.props
		return (
	    <Router>
				<div id="main" className="container-fluid">
          {currentUser.id ?
             (
              <div className="logged-in">
                <Navbar/>
                {showCart ? <CartBar/> : ""}
                  <Switch>
                    <Route exact path="/" component={MapPage} />
                    <Route path="/restaurants/:id/menu" component={RestaurantMenu} />
                    <Route path="/restaurants/:id" component={RestaurantPage} />
                  </Switch>
              </div>) :
            (
              <div>
                <Switch>
                <Route exact path="/" component={LandingPage} />
      			    <Route path="/login" component={Login} />
      			    <Route path="/signup" component={Signup} />
                </Switch>
              </div>
            )
          }
			  </div>

		  </Router>
		)
	}
}

/* -----------------    CONTAINER     ------------------ */

const mapState = state => ({
    currentUser: state.currentUser,
    showCart: state.cart.showCart
});

const mapDispatch = dispatch => ({
  fetchInitialData: () => dispatch(fetchCurrentUser())
});

export default connect(mapState, mapDispatch)(Root);
