import React, { Component } from 'react';
import Questionnaire from './components/Questionnaire/Questionnaire.js';
import QuestionTypes from './consts/QuestionTypes.js';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './App.css';

class App extends Component {
  state = {
    currentQuestionIndexState: 0
  };

  questionOrder = [0, 1, 2, 3];
  currentQuestionIndex = 0;

  // Questions
  questions = [
    {
      type: QuestionTypes.Multichoice,
      questionText: 'What is 0',
      answerOptions: ['1', '2', '3', '4', '5', '0'],
      correctAnswers: ['0'],
      translateTo: 'English'
    },
    {
      type: QuestionTypes.Multichoice,
      questionText: 'What is 1',
      answerOptions: ['1', '2', '3', '4', '5', '6'],
      correctAnswers: ['1'],
      translateTo: 'Circassian'
    },
    {
      type: QuestionTypes.Multichoice,
      questionText: 'What is 2',
      answerOptions: ['1', '2', '3', '4', '5', '6'],
      correctAnswers: ['2'],
      translateTo: 'English'
    },
    {
      type: QuestionTypes.Multichoice,
      questionText: 'What is 3',
      answerOptions: ['1', '2', '3', '4', '5', '6'],
      correctAnswers: ['3'],
      translateTo: 'Turkish'
    }
  ];

  currentLoadingBarPercentage = (this.currentQuestionIndex + 1) / this.questions.length * 100;

  showNextQuestion = (wasQuestionPassed) => {
    if (wasQuestionPassed) {
      this.currentQuestionIndex++;
      this.currentLoadingBarPercentage = (this.currentQuestionIndex + 1) / this.questions.length * 100;
    } else {
      const failedQuesitonIndex = this.questionOrder[this.currentQuestionIndex];
      const lastQuestionIndex = this.questionOrder[this.questionOrder.length - 1];
      this.questionOrder[this.currentQuestionIndex] = lastQuestionIndex;
      this.questionOrder[this.questionOrder.length - 1] = failedQuesitonIndex;
    }
    this.setState({
      currentQuestionIndexState: this.questionOrder[this.currentQuestionIndex]
    })
  }

  render() {
    return (
      <div id='app'>
        <div id='headerDiv'>
          <div id='myProgress'>
            <ProgressBar now={this.currentLoadingBarPercentage}/>
          </div>
        </div>
        <Questionnaire
          questionObject={this.questions[this.state.currentQuestionIndexState]}
          nextQuestionOnClickButton={this.showNextQuestion}>
        </Questionnaire>
      </div>
    );
  };
}

export default App;