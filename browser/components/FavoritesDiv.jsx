import React from 'react';

export default function FavoriteDiv(props) {
    const { dish } = props
    return (
        <li>
            <div className="favorites-div">
                <div>
                    <b>{dish.name}</b>
                </div>
                <div>
                    <em>{dish.category.join(", ")}</em>
                </div>
            </div>
        </li>
    )
}