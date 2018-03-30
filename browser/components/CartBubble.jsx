import React from 'react';

export default function CartBubble(props) {
  return (
    <div className="cart-badge">
      {props.cart.reduce((acc, curr) => {
        return acc + curr.quantity
      }, 0)}
    </div>
  )
}
