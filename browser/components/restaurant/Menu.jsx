import React from 'react';
import { connect } from 'react-redux';
import MenuDiv from './MenuDiv'

export default class Menu extends React.Component {
  render() {
    const menu=[...this.props.menu]
    return (
      <div className="menu">
        <ul className="menu-ul">
        { menu.map((dish) => {
          return <MenuDiv dish={dish} key={dish.id}/>
        }) }
        </ul>
      </div>
    );
  }
}


/* -----------------    CONTAINER     ------------------ */
// this.props.menu.map(function(dish) {
//   return <h1 key={dish.id}>{dish.name}</h1>
// })
