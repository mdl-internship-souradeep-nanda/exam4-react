import React from 'react';
// import axios from 'axios';

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
  }

  loginContainerJsx = () => (
    <LoginContainer
      onLogin={(username) => {
        // axios({
        //   method: 'POST',
        //   url: externals.login,
        //   crossdomain: true,
        // });

        fetch(externals.login, {
          body: JSON.stringify({ username }),
          headers: {
            'content-type': 'application/json',
          },
          method: 'POST',
          mode: 'no-cors',
        }).then(res => res.text().then(console.log));

        this.setState({
          currentPage: this.PAGES.QUIZ,
          username,
        });
      }}
    />
  )

  quizContainerJsx = () => (
    <QuizContainer />
  )

  leaderboardContainerJsx = () => (
    <LeaderboardContainer />
  )

  render() {
    const bodyJsx = {
      [this.PAGES.LOGIN]: this.loginContainerJsx(),
      [this.PAGES.QUIZ]: this.quizContainerJsx(),
      [this.PAGES.LEADERBOARD]: this.leaderboardContainerJsx(),
    }[this.state.currentPage];

    return (
      <div className="App" >
        App
        <Header username={this.state.username} />
        {bodyJsx}
      </div>
    );
  }
}

export default App;
