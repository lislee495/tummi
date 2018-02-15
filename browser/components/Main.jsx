import React from 'react';
import { connect } from 'react-redux';
// import Map from './Map'
import Navbar from './Navbar'
// import RestaurantList from './restaurant/RestaurantList'

export default class Main extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div className="logged-in">
        <Navbar/>
      </div>
    )
  }
}
