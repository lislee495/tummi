import React from 'react';
import { connect } from 'react-redux';

export default function MapMarker(props) {
  const restaurant = props.restaurant
  return(
    <div className="flex-parent-inline flex-parent--center-cross flex-parent--column absolute bottom">
      <div className="flex-child px12 py12 bg-gray-dark color-white shadow-darken10 round txt-s w240 clip txt-truncate">
        {restaurant.name}
      </div>
      <span className="flex-child color-gray-dark triangle triangle--d"></span>
    </div>
  )
}
