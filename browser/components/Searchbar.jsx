import React from 'react';
import { connect } from 'react-redux';
import {searchCategory, searchLocation} from './redux/restaurants'

function Searchbar(props) {
  render(){
    return(
      <form className="form-inline" onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text"
          class="form-control"
          onChange={handleCategoryChange}
          value={category}
          placeholder="Category"/>
        </div>
        <div className="form-group">
          <input type="text"
          className="form-control"
          value={location}
          onChange={handleLocationChange}
          placeholder="Location"/>
        </div>
        <button type="submit" className="btn btn-default">Search</button>
      </form>
    )
  }
}
const mapStateToProps = function (state) {
  return {
    location: state.location,
    category: state.category,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleCategoryChange (evt) {
      dispatch(search_category(evt.target.value));
    },
    handleLocationChange(evt) {
      dispatch(search_location(evt.target.value));
    },
    handleSubmit (category, location, evt) {
      evt.preventDefault();
      dispatch(findRestaurants({ category, location }));
      dispatch(search_category(''));
      dispatch(search_location(''));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Searchbar);
