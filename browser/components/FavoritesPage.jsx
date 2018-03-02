import React from 'react';
import { connect } from 'react-redux';
import randomColor from 'randomcolor';
import {fetchFavorites, fetchTrends} from '../redux/'

class FavoritesPage extends React.Component {
    componentDidMount(){
        this.props.fetchTrends(this.props.currentUser)
        this.props.fetchFavorites(this.props.currentUser)
    }
    render() {
        const {favorites, trends} = this.props
        return (
            <div className="favorites-page">
                <div className="favorites-content">
                    <h4>Favorites</h4>
                    <hr/>
                    <ul>
                    {favorites.map(dish => {
                        <FavoriteDiv dish={dish} key={dish.id}/>
                    })}
                    </ul>
                    
                    <h4>Past Orders</h4>
                    <hr/>
                    <ul>
                    {trends.map(dish => {
                        <PastOrdersDiv dish={dish} key={dish.id}/>
                    })}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
  return {
    currentUser: state.currentUser,
    favorites: state.user_pref.favorites,
    trends: state.user_pref.trends
  };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchTrends: (currentUser) => dispatch(fetchTrends(currentUser)),
    fetchFavorites: (currentUser) => dispatch(fetchFavorites(currentUser))
})
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
