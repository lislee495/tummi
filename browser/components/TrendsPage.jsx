import React from 'react';
import { connect } from 'react-redux';
import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';

class TrendsPage extends React.Component {
    componentDidMount(){
        this.props.fetchTrends(this.props.currentUser)
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
                </TagCloud>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
  return {
    currentUser: state.currentUser,
    
  };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchTrends: (currentUser) => dispatch(fetchTrends(currentUser))
})
export default connect(mapStateToProps, mapDispatchToProps)(TrendsPage);
