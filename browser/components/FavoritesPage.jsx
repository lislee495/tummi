import React from 'react';
import { connect } from 'react-redux';
import randomColor from 'randomcolor';
import {fetchFavoriteDishes, fetchOrders} from '../redux/'

class FavoritesPage extends React.Component {
    componentDidMount(){
        this.props.fetchOrders(this.props.currentUser)
        this.props.fetchFavoriteDishes(this.props.currentUser)
    }
    render() {
        const {favorites, trends} = this.props
        return (
            <div className="favorites-page">
                <div className="favorites-content">
                    <h4>Favorites</h4>
                    <hr/>
                    {/* <ul>
                    {favorites.map(dish => {
                        <FavoriteDiv dish={dish} key={dish.id}/>
                    })}
                    </ul>
                    
                    <h4>Past Orders</h4>
                    <hr/>
                    <ul>
                    {trends.map(order => {
                        <PastOrdersDiv order={order} key={dish.id}/>
                    })}
                    </ul> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
  return {
    currentUser: state.currentUser,
    favoriteDishes: state.user_pref.favoriteDishes,
    trends: state.user_pref.trends
  };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchOrders: (currentUser) => dispatch(fetchOrders(currentUser)),
    fetchFavoriteDishes: (currentUser) => dispatch(fetchFavoriteDishes(currentUser))
})
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
