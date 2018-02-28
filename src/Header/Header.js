import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

const Header = props => (
  <div className="Header" >
    <span className="HeaderQuizzy">Quizzy</span>
    <span className="HeaderGreet">
      {props.username.length ? `Hello ${props.username}` : ''}
    </span>
  </div>
);

Header.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Header;
