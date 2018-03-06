import React from 'react';


export default class PastOrdersDiv extends React.Component {
    render(){
        const date = new Date()
        date.format('dddd, mmmm dS, yyyy, h:MM:ss TT')
        const {order, dishes, restaurants} = this.props
        return(
            <li>
                <div className="past-orders">
                    Restaurant: {restaurants.find(ele => ele.id === order[0].restaurant_id).name}
                    When: {date(`${order[0].createdAt}`)}
                    Dishes: <ul>{order.map(ele => 
                        <li>{dishes.find(item=>item.id === ele.dish_id).name}</li>
                    )}</ul>
                </div>
                <hr/>
            </li>
            
        )
    }
}