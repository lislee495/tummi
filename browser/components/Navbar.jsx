import React from 'react';

export class Navbar extends React.Component {
  render() {
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center">Logo</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
            <form>
              <div className="input-field">
                <input id="search" type="search" required/>
                <label className="label-icon" for="search"><i class="material-icons">search</i></label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
    )
  }
}
