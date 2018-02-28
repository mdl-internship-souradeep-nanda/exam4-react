import React from 'react';

import PropTypes from 'prop-types';
import './LeaderboardRow.css';

const LeaderboardRow = props => (
  <div className="LeaderboardRow" >
    {props.username} {props.username === props.currentUser ? '<' : ''}
    {props.score}
  </div>
);

LeaderboardRow.propTypes = {
  username: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  currentUser: PropTypes.string.isRequired,
};

export default LeaderboardRow;
