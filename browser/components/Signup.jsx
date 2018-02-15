import React from 'react';
import { connect } from 'react-redux';
import { signup as signupFromReducer} from '../redux/auth';

class Signup extends React.Component {
  render() {
    return (
      <div className="signin-container">
        <div className="buffer local">
          <form onSubmit={this.onSignupSubmit}>
            <div className="form-group">
              <label>email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="btn btn-block btn-primary">{this.props.message}</button>
          </form>
        </div>
      </div>
    )}
}

const mapState = () => ({ message: 'Signup' });
const mapDispatch = (dispatch, ownProps) => ({
signup: credentials => dispatch(signupFromReducer(credentials, ownProps.history))
});

export default connect(mapState, mapDispatch)(Signup);
