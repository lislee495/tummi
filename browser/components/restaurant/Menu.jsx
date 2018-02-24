import React from 'react';
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
