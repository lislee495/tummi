import React from 'react';
import { connect } from 'react-redux';
import Map from './Map'
import Navbar from './Navbar'
// import RestaurantList from './restaurant/RestaurantList'

export default class Home extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div className="logged-in">
        <Navbar/>
        <Map/>
      </div>
    )
  }
}
