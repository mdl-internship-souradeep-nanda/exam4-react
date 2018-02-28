import React from 'react';
import axios from 'axios';

import PropTypes from 'prop-types';

import externals from '../externals.json';

import './LeaderboardContainer.css';

import LeaderboardRow from '../LeaderboardRow/LeaderboardRow';

class LeaderboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: [],
    };
  }

  componentDidMount() {
    axios.get(externals.getLeaderboard)
      .then(res => res.data)
      // .then(this.reformatScores)
      .then((scores) => {
        this.setState({ scores });
      });
  }

  getAllRows = currentUser => this.state.scores.map(score => (
    <LeaderboardRow
      key={score.id}
      username={score.username}
      score={score.score}
      currentUser={currentUser}
    />
  ))

  render() {
    // console.log(this.state.scores);
    return (
      <div className="LeaderboardContainer" >
        {this.getAllRows(this.props.username)}
      </div>
    );
  }
}

LeaderboardContainer.propTypes = {
  username: PropTypes.string.isRequired,
};

export default LeaderboardContainer;
