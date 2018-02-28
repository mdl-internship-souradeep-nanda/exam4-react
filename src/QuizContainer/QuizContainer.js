import React from 'react';
import axios from 'axios';

import PropTypes from 'prop-types';

import './QuizContainer.css';

import QuestionContainer from '../QuestionContainer/QuestionContainer';

import externals from '../externals.json';

class QuizContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: {},
      questions: {},
      ids: {},
    };
  }

  componentDidMount = () => {
    axios.get(externals.fetchQuestions)
      .then(questions => this.setState({ questions: questions.data }))
      .then(() => {
        axios.get(`${externals.getSavedState}?username=${this.props.username}`)
          .then(res => res.data)
          .then(this.reformatFetchedAnswers)
          .then(answers => this.setState({ answers }));
      });
  }

  getQuestionsJsx = () => Object.keys(this.state.questions)
    .map((key, index) => {
      const indexId = `Question ${index + 1}`;
      const question = this.state.questions[key];
      return (<QuestionContainer
        id={indexId}
        key={question.id}
        question={question.question}
        options={this.makeOptionsArray(question)}
        answer={this.state.answers[question.questionId] || 'NONE'}
        onCheckedChanged={this.setAnswer(question.questionId)}
      />);
    })

  setAnswer = questionId => (evt) => {
    const { value } = evt.target;
    this.setState({
      answers: {
        ...this.state.answers,
        [questionId]: value,
      },
    });
  }

  makeOptionsArray = (question) => {
    const patt = /option/;
    return Object.keys(question)
      .filter(key => patt.test(key))
      .map(key => question[key]);
  }

  allAnswersChecked = () => {
    const answerCount = Object.keys(this.state.answers).length;
    const questionCount = Object.keys(this.state.questions).length;
    return answerCount === questionCount;
  }

  submitAnswers = () => {
    // console.log(this.state.answers);
    const reformattedPayload = Object.keys(this.state.answers)
      .map(key => ({
        id: this.state.ids[key],
        username: this.props.username,
        questionid: key,
        answer: this.state.answers[key],
      }));
    if (this.allAnswersChecked()) {
      // console.log(reformattedPayload);
      axios.post(
        externals.postAnswers,
        reformattedPayload,
      );
      this.props.onSubmit();
    }
  }

  reformatFetchedAnswers = (answers) => {
    // console.log(answers);
    const answersObj = {};
    answers.map((answer) => {
      answersObj[answer.questionid] = answer.answer;
      this.setState({
        ids: {
          ...this.state.ids,
          [answer.questionid]: answer.id,
        },
      });
      return null;
    });

    // console.log(answersObj);
    return answersObj;
  }

  render() {
    // console.log(this.state.ids);
    const questionsJsx = this.getQuestionsJsx();
    return (
      <div className="QuizContainer" >
        {questionsJsx}
        <button
          className="QuizContainer-submit"
          onClick={this.submitAnswers}
          disabled={!this.allAnswersChecked()}
        >
          SUBMIT
        </button>
      </div>
    );
  }
}

QuizContainer.propTypes = {
  username: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default QuizContainer;
