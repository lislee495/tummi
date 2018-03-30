import React from 'react';
import { checkoutCart } from '../redux/'
import { connect } from 'react-redux';

function PastOrdersDiv(props) {
    const { order, dishes, restaurants, currentUser, checkoutCart } = props
    const date = new Date(Date.parse(order[0].createdAt))
    return (
        <li >
            <div className="past-orders container">
                <div className="past-orders">
                    Restaurant: <b>{restaurants.find(ele => ele.id === order[0].restaurant_id).name}</b> <br />
                    When: <b>{date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}, {date.toLocaleString('en-us', { month: "long" })} {date.getDate()}, {date.getFullYear()}</b> <br />
                    Total: ${order[0].total}
                    <ul>Dishes: {order.map(ele =>
                        <em><li key={ele.dish_id}>{dishes.find(item => item.id === ele.dish_id).name}</li></em>
                    )}</ul>

                </div>
                <button className="gen-btn" onClick={() => checkoutCart(order, currentUser)}>Order Again</button>
            </div>
            <hr />
        </li>

    )
}

const mapStateToProps = function (state) {
    return {
        currentUser: state.currentUser,
    };
};
const mapDispatchToProps = (dispatch) => ({
    checkoutCart: (terms) =>
        dispatch(checkoutCart(terms))

})
export default connect(mapStateToProps, mapDispatchToProps)(PastOrdersDiv);