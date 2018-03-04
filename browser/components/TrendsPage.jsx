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
                    <h1>react-tag-cloud demo</h1>
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
                        <div
                        style={{
                            fontFamily: 'serif',
                            fontSize: 40,
                            fontStyle: 'italic',
                            fontWeight: 'bold',
                            color: randomColor()
                        }}>Futurama</div>
                        <div style={{fontFamily: 'courier'}}>He man</div>
                        <div style={{fontSize: 30}}>World trigger</div>
                        <div style={{fontStyle: 'italic'}}>Avengers</div>
                        <div style={{fontWeight: 200}}>Family Guy</div>
                        <div style={{color: 'green'}}>American Dad</div>
                        <div>Gobots</div>
                        <div>Thundercats</div>
                        <div>M.A.S.K.</div>
                        <div>GI Joe</div>
                        <div>Inspector Gadget</div>
                        <div>Bugs Bunny</div>
                        <div>Tom & Jerry</div>
                        <div>Cowboy Bebop</div>
                        <div>Evangelion</div>
                        <div>Bleach</div>
                        <div>GITS</div>
                        <div>Pokemon</div>
                        <div>She Ra</div>
                        <div>Fullmetal Alchemist</div>
                        <div>Gundam</div>
                        <div>Uni Taisen</div>
                        <div>Pinky and the Brain</div>
                        <div>Bobs Burgers</div>
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

{/* <h4>Trends</h4>
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
                height: '100%',
                flex: 1
                }}>
                {/* {this.state.compromisedWords[0] && this.state.compromisedWords.map(
                    ele => {
                    return (
                    <div style={{fontSize: ele.count * 6}} key={ele.normal}>
                        {ele.normal}
                    </div>)
                    }
                )} */}
                