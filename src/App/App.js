import React from 'react';
import axios from 'axios';

import './App.css';

import Header from '../Header/Header';
import LoginContainer from '../LoginContainer/LoginContainer';
import QuizContainer from '../QuizContainer/QuizContainer';
import LeaderboardContainer from '../LeaderboardContainer/LeaderboardContainer';

import externals from '../externals.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.PAGES = {
      LOGIN: 'LOGIN',
      QUIZ: 'QUIZ',
      LEADERBOARD: 'LEADERBOARD',
    };
    this.state = {
      currentPage: this.PAGES.LOGIN,
      username: '',
    };
    this.totalQuestions = 0;
  }

  loginContainerJsx = () => (
    <LoginContainer
      onLogin={(username) => {
        axios.post(externals.login, { username });
        this.setState({
          currentPage: this.PAGES.QUIZ,
          username,
        });
      }}
    />
  )

  quizContainerJsx = () => (
    <QuizContainer
      username={this.state.username}
      setTotalQuestions={(totalQuestions) => { this.totalQuestions = totalQuestions; }}
      onSubmit={() => {
        this.setState({
          currentPage: this.PAGES.LEADERBOARD,
        });
      }}
    />
  )

  leaderboardContainerJsx = () => (
    <LeaderboardContainer
      username={this.state.username}
      totalQuestions={this.totalQuestions}
      backToLogin={
        () => {
          this.setState({
            currentPage: this.PAGES.LOGIN,
            username: '',
          });
        }
      }
    />
  )

  render() {
    const bodyJsx = {
      [this.PAGES.LOGIN]: this.loginContainerJsx(),
      [this.PAGES.QUIZ]: this.quizContainerJsx(),
      [this.PAGES.LEADERBOARD]: this.leaderboardContainerJsx(),
    }[this.state.currentPage];

    return (
      <div className="App" >
        <Header username={this.state.username} />
        {bodyJsx}
      </div>
    );
  }
}

export default App;
