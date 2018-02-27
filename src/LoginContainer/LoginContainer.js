import React from 'react';
import PropTypes from 'prop-types';

import './LoginContainer.css';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }
  render() {
    return (
      <div className="LoginContainer" >
        <input onChange={
          (evt) => {
            this.setState({ username: evt.target.value });
          }
        }
        />
        <button onClick={() => this.props.onLogin(this.state.username)}>
          LOGIN
        </button>
      </div>);
  }
}


LoginContainer.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginContainer;
