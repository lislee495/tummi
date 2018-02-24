import React from 'react';
import { connect } from 'react-redux';
import {searchCategory, searchLocation, searchRestaurants, searchMenus} from '../redux/restaurants'

function Searchbar(props) {
  const {location, category, handleLocationChange, handleCategoryChange, handleSubmit} = props
    return(
      <form className="form-inline" onSubmit={evt => handleSubmit(category, location, evt)}>
        <div className="form-group">
          <input type="text"
          className="form-control"
          onChange={handleCategoryChange}
          value={category}
          placeholder="Category"
          required/>
        </div>
        <div className="form-group">
          <input type="text"
          className="form-control"
          value={location}
          onChange={handleLocationChange}
          placeholder="Location"
          required/>
        </div>
        <button type="submit" className="btn btn-default">Search</button>
      </form>
    )
}
const mapStateToProps = function (state) {
  return {
    location: state.restaurants.location,
    category: state.restaurants.category,
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleCategoryChange (evt) {
      dispatch(searchCategory(evt.target.value));
    },
    handleLocationChange(evt) {
      dispatch(searchLocation(evt.target.value));
    },
    handleSubmit (category, location, evt) {
      evt.preventDefault();
      dispatch(searchRestaurants({ category: category, location: location }));
      dispatch(searchMenus({ category: category, location: location }));
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
