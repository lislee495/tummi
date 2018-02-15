import React from 'react';
import { connect } from 'react-redux';
import Map from './Map'
import Navbar from './Navbar'
import RestaurantList from '..restaurant/RestaurantList'

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="logged-in">
        <Navbar/>
        <Map/>
      <div>
    );
  }


/* -----------------    CONTAINER     ------------------ */
