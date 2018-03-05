import React from 'react';


export default class PastOrdersDiv extends React.Component {
    render(){
        const {order, dishes, restaurants} = this.props
        return(
            <li>
                <div className="past-orders">
                    Restaurant: {restaurants.find(ele => ele.restaurant_id === order[0].restaurant_id)}
                    When: {order[0].createdAt}

                </div>
            </li>
        )
    }
}