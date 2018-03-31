import React from 'react';
import { connect } from 'react-redux';
import {
  searchCategory, searchLocation, searchRestaurants, searchMenus,
  resetRestaurauntIndex
} from '../redux/restaurants'

function Searchbar(props) {
  function combine(location) {
    return `${location.lat} ${location.long}`
  }
  const { currentLocation, location, category, handleLocationChange, handleCategoryChange, handleSubmit } = props
  return (
    <form className="form-inline nav-bar" onSubmit={evt => handleSubmit(category, location, evt)}>
      <div className="form-group nav-bar">
        <input type="text"
          className="form-control nav-bar"
          onChange={handleCategoryChange}
          value={category}
          placeholder="Category"
          required />
      </div>
      <div className="form-group nav-bar">
        <input type="text"
          className="form-control nav-bar"
          value={location}
          onChange={handleLocationChange}
          placeholder="Location"
          list={currentLocation.lat ? "nearme" : null}
          required />
        <datalist id="nearme">
          <option data-value={combine(currentLocation)} value="Near Me" />
        </datalist>
      </div>
      <button type="submit" className="search"><i className="material-icons">search</i></button>
    </form>
  )
}

const mapStateToProps = function (state) {
  return {
    location: state.restaurants.location,
    category: state.restaurants.category,
    currentLocation: state.userPref.currentLocation
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleCategoryChange(evt) {
      dispatch(searchCategory(evt.target.value));
    },
    handleLocationChange(evt) {
      dispatch(searchLocation(evt.target.value));
    },
    handleSubmit(category, location, evt) {
      evt.preventDefault();
      if (location === 'Near Me') {
        const option = document.getElementsByTagName('option')[0]
        const newLoc = option.getAttribute('data-value');
        location = newLoc
      }
      dispatch(searchRestaurants({ category: category, location: location }));
      dispatch(searchMenus({ category: category }));
      dispatch(searchCategory(''));
      dispatch(searchLocation(''));
      ownProps.history.push('/')
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Searchbar);
