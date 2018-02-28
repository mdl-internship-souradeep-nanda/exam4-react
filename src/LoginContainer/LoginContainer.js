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
        <div className="LoginContainerCard">
          <div className="LoginContainerCardLeft">
            <span className="LoginContainerWelcomeTo">Welcome to</span>
            <span className="LoginContainerQuizzy">Quizzy!</span>
          </div>
          <div className="LoginContainerCardRight">
            <div className="LoginContainerLoginLabel">
              Login
            </div>
            <div className="LoginContainerInputTextBlock">
              <div className="LoginContainerInputTextLabel">
                Username
              </div>
              <input
                className="LoginContainerInputField"
                onChange={
                  (evt) => {
                    this.setState({ username: evt.target.value });
                  }
                }
              />
            </div>
            <div className="LoginContainerButtonWrapper">
              <button
                className="LoginContainerButton"
                onClick={() => this.props.onLogin(this.state.username)}
              >
                Login
              </button>
            </div>
          </div>
        </div>

      </div>);
  }
}


LoginContainer.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginContainer;
