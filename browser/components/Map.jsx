import React from 'react';
import mapboxgl from 'mapbox-gl';
import config from '../config';
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken = config.MAPBOX_KEY
export default class Map extends React.Component {
  constructor(){
    super()
    this.state = {
      lat: 41.928074,
      lng: -87.654666,
      zoom: 15
    }
  }
  componentDidMount(){
    const { lat, lng, zoom } = this.state;
    const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: "mapbox://styles/mapbox/streets-v10",
        center: [lng, lat],
        zoom: zoom,
    })

    map.on('move', () => {
      const { lng, lat } = map.getCenter();
      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }
  componentWillUnmount() {
    this.map.remove();
  }
  render(){
    const { lat, lng, zoom } = this.state;
    const style = {
      position: 'absolute',
      top: 100,
      bottom: 0,
      width: '90%'
    };
    return (
      <div>
        <div>
          <div>{`Latitude: ${lat} Longitude: ${lng} Zoom: ${zoom}`}</div>
        </div>
        <div ref={el => this.mapContainer = el} style={style}/>
      </div>
    )
  }
}
