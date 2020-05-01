
import React, { Component } from 'react';
import Question from './components/Questions/Questions.js';
import './App.css';

class App extends Component {
  state = {
    questionIndexState: 0
  };

  // Questions
  questions = [
    {
      type: 'toEnglish',
      questionText: '1+1',
      answerOptions: null,
      correntAnswers: [
        '2'
      ]
    },
    {
      type: 'toEnglish',
      questionText: '1*1',
      answerOptions: null,
      correntAnswers: [
        '1'
      ]
    },
    {
      type: 'toEnglish',
      questionText: 'к1алэр унэм ихьагъ',
      answerOptions: null,
      correntAnswers: [
        'the boy entered the house',
        'the boy went inside the house'
      ]
    },
    {
      type: 'toEnglish',
      questionText: 'к1алэр унэм икӏыгъ',
      answerOptions: null,
      correntAnswers: [
        'the boy exited the house',
        'the boy went out the house'
      ]
    }
  ];

  showNextQuestion = () => {
    const currentIndex = this.state.questionIndexState;
    this.setState({
      questionIndexState: currentIndex + 1
    })
  }

  render() {
    return (
      <div id='app'>
        <div id='header'>
          <h1>Question {this.state.questionIndexState + 1}</h1>
        </div>
        <Question
          questionObject={this.questions[this.state.questionIndexState]}
          nextQuestionOnClickButton={this.showNextQuestion}>
        </Question>
      </div>
    );
  };
}

export default App;