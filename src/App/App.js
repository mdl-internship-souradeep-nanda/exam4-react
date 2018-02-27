import React from 'react';
import './App.css';

import Header from '../Header/Header';
import LoginContainer from '../LoginContainer/LoginContainer';
import QuizContainer from '../QuizContainer/QuizContainer';
import LeaderboardContainer from '../LeaderboardContainer/LeaderboardContainer';

const App = () => (
  <div className="App" >
    App
    <Header />
    <LoginContainer />
    <QuizContainer />
    <LeaderboardContainer />
  </div>
);

export default App;
