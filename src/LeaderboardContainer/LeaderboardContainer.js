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
    const self = this.state.scores.filter(score => (score.username === this.props.username))[0];
    return (
      <div className="LeaderboardContainer" >
        <div className="LeaderboardContainerScoreLabel">
          Your score:
        </div>
        <div className="LeaderboardContainerScore">
          <span>
            {self ? self.score : 0}
          </span>
          /
          <small>
            {this.props.totalQuestions}
          </small>
        </div>
        <div className="LeaderboardCentralLabel">
          Leaderboard
        </div>
        {this.getAllRows(this.props.username)}
        <button
          className="LeaderboardContainerButton"
          onClick={this.props.backToLogin}
        >
          Play Again
        </button>
      </div>
    );
  }
}

LeaderboardContainer.propTypes = {
  username: PropTypes.string.isRequired,
  backToLogin: PropTypes.func.isRequired,
  totalQuestions: PropTypes.number.isRequired,
};

export default LeaderboardContainer;
