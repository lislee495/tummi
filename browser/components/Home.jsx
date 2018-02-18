import React from 'react';
import MapPage from './MapPage'
import RestaurantInfo from './restaurant/RestaurantInfo'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar'

export default function Home(props) {
  return (
    <div className="logged-in">
      <Navbar/>
        <Route path="/home" component={MapPage} />
        <Route path="/restaurant/info" component={RestaurantInfo} />
    </div>)
}
