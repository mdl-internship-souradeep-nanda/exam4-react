import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

const Header = props => (
  <div className="Header" >
    {props.username.length ? `Hello ${props.username}` : ''}
  </div>
);

Header.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Header;
