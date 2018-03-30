import React from 'react';

export default function CartDish(props) {
  const quantity = props.ele.quantity
  const dish = props.ele.dish
  const removeItem = props.removeItem
  return (
    <li>
      <div className="cart item">
        <div className="cart dish">{quantity} {dish.name}
        </div>
        <div className="cart price">
          ${dish.price * quantity}
          <button className="cart-btn" onClick={() => removeItem(dish)}>
            <img src="/images/x.png" className="x-btn" alt="Delete Item" />
          </button>
        </div>
      </div >
    </li >
  )
}
