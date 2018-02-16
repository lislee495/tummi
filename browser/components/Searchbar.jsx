import React from 'react';
import { connect } from 'react-redux';

export default class Searchbar extends React.Component {
  render(){
    return(
      <form className="form-inline">
        <div className="form-group">
          <label for="category">Category</label>
          <input type="text" class="form-control" placeholder="Category"/>
        </div>
        <div className="form-group">
          <label for="location">Location</label>
          <input type="text" className="form-control" placeholder="Location"/>
        </div>
        <button type="submit" className="btn btn-default">Send invitation</button>
      </form>
    )
  }
