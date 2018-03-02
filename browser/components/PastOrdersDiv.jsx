import React from 'react';

export default function PastOrdersDiv(props) {
    const {dish} = props
    return(
        <li>
            <div className="past-orders">
                {dish.name}
                {dish.price}
                
            </div>
        </li>
    )
}