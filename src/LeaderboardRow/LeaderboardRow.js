import React from 'react';

import PropTypes from 'prop-types';
import './LeaderboardRow.css';

const LeaderboardRow = props => (
  <div className="LeaderboardRow" >
    <span
      className={`LeaderboardRow-user ${props.username === props.currentUser ? 'selected' : ''}`}
    >
      {props.username}
    </span>
    <span className="LeaderboardRow-score">
      {props.score}
    </span>
  </div>
);

LeaderboardRow.propTypes = {
  username: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  currentUser: PropTypes.string.isRequired,
};

export default LeaderboardRow;
