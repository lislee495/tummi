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
            console.log(compromisedWords)
        }
    }
    
    render() {
        return (
            <div className="trends-page">
                <h4>Trends</h4>
                <hr/>
                <TagCloud 
                style={{
                fontFamily: 'sans-serif',
                fontSize: 30,
                fontWeight: 'bold',
                fontStyle: 'italic',
                color: () => randomColor(),
                padding: 5,
                width: '100%',
                height: '100%'
                }}>
                {/* {this.state.compromisedWords[0] && this.state.compromisedWords.map(
                    ele => {
                    return (
                    <div style={{fontSize: ele.count * 6}} key={ele.normal}>
                        {ele.normal}
                    </div>)
                    }
                )} */}
                <div style={{fontFamily: 'courier'}}>He man</div>
                <div style={{fontSize: 30}}>World trigger</div>
                <div style={{fontStyle: 'italic'}}>Avengers</div>
                <div style={{fontWeight: 200}}>Family Guy</div>
                <div style={{color: 'green'}}>American Dad</div>
                </TagCloud>
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
