import React from 'react';
import mapboxgl from 'mapbox-gl';
import config from '../server/config'

export default class Map extends React.Component {
  componentDidMount(){
    mapboxgl.accessToken = config.MAPBOX_KEY;
    this.map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v9'
    })
  }

  componentWillUnmount() {
    this.map.remove();
  }
  render(){
    return <div ref={el => this.mapContainer = el} />
    )
  }
}
