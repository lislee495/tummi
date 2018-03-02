import React from 'react';

export default function FavoriteDiv(props) {
  return(
    <li>
      <span>
        {quantity}| <h6>{dish.name}</h6> | <h7>{dish.price * quantity}</h7> <button onClick={()=> removeItem(dish)}>X</button>
      </span>
    </li>
  )
}