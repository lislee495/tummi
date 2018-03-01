import React from 'react';
import { connect } from 'react-redux';
import {changeRestaurant, fetchMenu, addLike, addDislike} from '../../redux'
import Menu from './Menu'
import {ReactSelectize, SimpleSelect, MultiSelect} from 'react-selectize';
import { WithContext as ReactTags } from 'react-tag-input';



class RestaurantMenu extends React.Component {
  componentDidMount() {
    this.props.changeRestaurant(this.props.restaurantId),
    this.props.fetchMenu(this.props.restaurantId)
    this.handleLikeDelete = this.handleLikeDelete.bind(this);
    this.handleLikeAddition = this.handleLikeAddition.bind(this);
    this.handleDislikeDelete = this.handleDislikeDelete.bind(this);
    this.handleDislikeAddition = this.handleDislikeAddition.bind(this);
    this.filterOut = this.filterOut.bind(this)
    this.filterIn = this.filterIn.bind(this)
  }
  filterOut(startArr, mustNotHave) {
    let newArr = []
    for (var i =0; i< startArr.length; i ++) {
      let curCat = startArr[i].category;
      if (curCat.every(ele => mustNotHave.indexOf(ele) === -1)) {
      newArr.push(startArr[i])
      }
    }
    return newArr;
  }
  
  filterIn(startArr, mustHave){
    for (var i =0; i< startArr.length; i ++) {
      startArr[i].hasTrait = 0
      let currentInfo = startArr[i].category.join() + startArr[i].name
      mustHave.forEach(ele => {
        if (currentInfo.includes(ele)) {
          startArr[i].hasTrait++
        }
      })
    }
    return startArr.sort(function (a, b) {
    return b.hasTrait - a.hasTrait;
    })
  }

  handleLikeDelete(i) {
    let likes = this.props.likes;
    likes.splice(i, 1);
    this.props.handleLikeChange(likes)
}
  handleLikeAddition(like) {
      let likes = this.props.likes;
      likes.push({
          id: likes.length + 1,
          text: like
      });
      this.props.handleLikeChange(likes)
  }

  handleDislikeDelete(i) {
    let dislikes = this.props.dislikes;
    dislikes.splice(i, 1);
    this.props.handleDislikeChange(dislikes)
}
  handleDislikeAddition(dislike) {
      let dislikes = this.props.dislikes;
      dislikes.push({
          id: dislikes.length + 1,
          text: dislike
      });
      this.props.handleDislikeChange(dislikes)
  }

  // handleDrag(like, currPos, newPos) {
  //     let likes = this.props.likes;
  //     // mutate array
  //     likes.splice(currPos, 1);
  //     likes.splice(newPos, 0, like);
  //     handleLikeChange(likes)
  // }

  render() {
  const {currentRestaurant, menu, restaurantId, handleLikeChange, handleDislikeChange} = this.props;
  let filteredMenu = this.filterIn(this.filterOut(this.props.menu, this.props.dislikes), this.props.likes)
  return (
    <div className="menu-page">
      <h4>{currentRestaurant.name}</h4>
      <hr/>
      <div className="filter-inputs">
      <ReactTags 
        tags={this.props.likes}
        suggestions={["spicy", "vegetarian", "gluten-free", "dairy"]}
        handleDelete={this.handleLikeDelete}
        handleAddition={this.handleLikeAddition}
        placeholder={"Likes"}
        />
      <ReactTags 
      tags={this.props.dislikes}
      suggestions={["spicy", "vegetarian", "nut", "dairy"]}
      handleDelete={this.handleDislikeDelete}
      handleAddition={this.handleDislikeAddition}
      placeholder={"Dislikes"}
      />
      </div>
      <h5>Menu</h5>
      {filteredMenu[0] ? <Menu menu={filteredMenu} restaurant={currentRestaurant}/> : 
    <Menu menu={menu} restaurant={currentRestaurant}/>}
    </div>)
  }
}
const mapStateToProps = function (state, ownProps) {
  const restaurantId = Number(ownProps.match.params.id);
  return {
    restaurantId,
    currentRestaurant: state.restaurants.currentRestaurant,
    menu: state.restaurants.menu,
    likes: state.user_pref.like,
    dislikes: state.user_pref.dislike
  };
};
const mapDispatchToProps = (dispatch)=> ({
  changeRestaurant: (id) => dispatch(changeRestaurant(id)),
  fetchMenu: (id) => dispatch(fetchMenu(id)),
  handleLikeChange: (value) => dispatch(addLike(value)),
  handleDislikeChange: (value) => dispatch(addDislike(value))

})
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantMenu);