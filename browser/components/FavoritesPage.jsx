import React from 'react';
import { connect } from 'react-redux';

class FavoritesPage extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
    )
  }
}

const mapStateToProps = function (state) {
  return {
    currentUser: state.currentUser
  };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
