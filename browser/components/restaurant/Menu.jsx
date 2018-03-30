import React from 'react';
import MenuDiv from './MenuDiv'

export default function Menu(props) {
  const menu = [...props.menu]
  const restaurant = props.restaurant
  return (
    <div className="menu">
      <ul className="menu-ul menu-items">
        {menu.map((dish) => {
          return <MenuDiv dish={dish} key={dish.id} restaurant={restaurant} />
        })}
      </ul>
    </div>
  );
}

