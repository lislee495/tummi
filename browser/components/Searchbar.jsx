import React from 'react';

export default class Searchbar extends React.Component {

  render(){
    return(
      <form className="form-inline">
        <div className="form-group">
          <input type="text"
          class="form-control"
          onChange={this.handleCategoryChange}
          placeholder="Category"/>
        </div>
        <div className="form-group">
          <input type="text"
          className="form-control"
          onChange={this.handleLocationChange}
          placeholder="Location"/>
        </div>
        <button type="submit" className="btn btn-default">Search</button>
      </form>
    )
  }
}
