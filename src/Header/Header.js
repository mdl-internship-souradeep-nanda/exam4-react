import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

const Header = props => (
  <div className="Header" >
    <span>Quizzy</span>
    <span className="Header-greet">
      {props.username.length ? `Hello ${props.username}` : ''}
    </span>
  </div>
);

Header.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Header;
