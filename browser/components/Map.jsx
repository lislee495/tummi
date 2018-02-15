import React from 'react';
import mapboxgl from 'mapbox-gl';

export default class Map extends React.Component {
  componentDidMount(){
    this.map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v9'
    })
  }

  componentWillUnmount() {
    this.map.remove();
  }
  render(){
    mapboxgl.accessToken = config.MAPBOX_KEY;

    return <div ref={el => this.mapContainer = el} />
    )
  }
}
