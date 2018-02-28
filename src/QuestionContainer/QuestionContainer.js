import React from 'react';

import PropTypes from 'prop-types';

import './QuestionContainer.css';

const getHeader = id => (
  <div className="QuestionContainer-header">
    <h1> {id} </h1>
  </div>
);

const getQuestionDiv = question => (
  <div className="QuestionContainer-question">
    <p> {question} </p>
  </div>
);

const getOptionsDiv = (id, options, selected, onCheckedChanged) => options
  .filter(option => option !== null)
  .map((option) => {
    const isChecked = option === selected;
    const key = `${option}`;
    return (
      <div key={key} className="QuestionContainer-options">
        <input
          type="radio"
          name={`question${id}`}
          value={option}
          checked={isChecked}
          onChange={onCheckedChanged}
        />
        <span>{option}</span>
      </div>
    );
  });

const QuestionContainer = props => (
  <div className="QuestionContainer" >
    {getHeader(props.id)}
    {getQuestionDiv(props.question)}
    {getOptionsDiv(
      props.id,
      props.options,
      props.answer,
      props.onCheckedChanged,
    )}
  </div>
);

QuestionContainer.propTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  answer: PropTypes.string.isRequired,
  onCheckedChanged: PropTypes.func.isRequired,
};

export default QuestionContainer;
