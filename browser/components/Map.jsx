import React from 'react';
import mapboxgl from 'mapbox-gl';

class Map extends React.Component {
  render(){
    mapboxgl.accessToken = config.MAPBOX_KEY;
    const map = new mapboxgl.Map({
        container: '<App/>',
        style: 'mapbox://styles/mapbox/streets-v9'
    });
    return (
      {map}
    )
  }
}
