import React from 'react';
import { connect } from 'react-redux';
import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';
import {fetchFavoriteDishes, fetchOrders} from '../redux/'

class TrendsPage extends React.Component {
    constructor(){
        super()
        this.state = {
            words: "",
            compromisedWords: []
        }
        this.compileWords = this.compileWords.bind(this)
    }

    componentDidMount(){
        this.props.fetchInitialData(this.props.currentUser)
    }

    compileWords(favoriteDishes, orderDishes){
        let favoritesText = favoriteDishes.map(dish => dish.name + " " + dish.category.join(" ")).join(", ")
        let ordersText = orderDishes.map(dish => dish.name + " " + dish.category.join(" ")).join(", ")
        return ordersText + " " + favoritesText
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.favorites.length !== nextProps.favorites.length) {
            let words = this.compileWords(this.props.favorites, this.props.orders.dishArray)
            let compromisedWords = nlp(words).ngrams({size: 1}).data()
            this.setState({words: words})
            this.setState({compromisedWords: compromisedWords.slice(0, 15)})
        }
    }
    
    render() {
        return (
            <div className="trends-page">
                <div className='app-outer'>
                    <div className='app-inner'>
                    <h1>Trends</h1>
                    <TagCloud 
                        className='tag-cloud'
                        style={{
                        fontFamily: 'sans-serif',
                        //fontSize: () => Math.round(Math.random() * 50) + 16,
                        fontSize: 30,
                        color: () => randomColor({
                            hue: 'blue'
                        }),
                        padding: 5,
                        }}>
                        {this.state.compromisedWords[0] && this.state.compromisedWords.map(
                            ele => {
                            return (
                            <div style={{fontSize: ele.count * 10}} key={ele.normal}>
                                {ele.normal}
                            </div>)
                            })}
                        </TagCloud>
                    </div>
                </div>
            </div>
                
                
                
        )
    }
}

const mapStateToProps = function (state) {
  return {
    currentUser: state.currentUser,
    favorites: state.user_pref.favoriteDishes,
    orders: state.user_pref.orders
  };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchInitialData: (currentUser) => {
        dispatch(fetchOrders(currentUser))
        dispatch(fetchFavoriteDishes(currentUser))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(TrendsPage);


                