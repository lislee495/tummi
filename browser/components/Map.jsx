import React from 'react';
import mapboxgl from 'mapbox-gl';
import config from '../config';
import 'mapbox-gl/dist/mapbox-gl.css';
import { connect } from 'react-redux';
mapboxgl.accessToken = config.MAPBOX_KEY

class Map extends React.Component {
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
    if (this.props.restaurants) {
      const geojson = {
        "type": "FeatureCollection",
        "features": this.props.restaurants.map(ele => {
          return {
                "type": "Feature",
                "properties": {
                    "message": ele.restaurant.name,
                    "iconSize": [60, 60]
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        ele.restaurant.location.longitude.parseFloat(),
                        ele.restaurant.location.latitude.parseFloat()
                    ]
                }
            }
        })
      };
      geojson.features.forEach(function(marker) {
        // create a HTML element for each feature
        var el = document.createElement('div');
        el.className = 'marker';

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML('<h3>' + marker.properties.message + '</h3>'))
        .addTo(map);
        console.log("Created")
      });
    }
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
const mapStateToProps = (state) => ({
  restaurants: state.restaurants.foundRestaurants.restaurants
})
export default connect(mapStateToProps)(Map);
