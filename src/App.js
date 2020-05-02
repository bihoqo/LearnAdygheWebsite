
import React, { Component } from 'react';
import Questions from './components/Questions/Questions.js';
import './App.css';

class App extends Component {
  state = {
    questionIndexState: 0
  };

  // Questions
  questions = [
    {
      type: 'toEnglishMultichoice',
      questionText: 'What is кӏалэ',
      answerOptions: ['boy', 'man', 'woman', 'girl'],
      correntAnswers: [
        'boy'
      ]
    },
    {
      type: 'toEnglishFree',
      questionText: '1+1',
      answerOptions: null,
      correntAnswers: [
        '2'
      ]
    },
    {
      type: 'toEnglishFree',
      questionText: '1*1',
      answerOptions: null,
      correntAnswers: [
        '1'
      ]
    },
    {
      type: 'toEnglishFree',
      questionText: 'к1алэр унэм ихьагъ',
      answerOptions: null,
      correntAnswers: [
        'the boy entered the house',
        'the boy went inside the house'
      ]
    },
    {
      type: 'toEnglishFree',
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
        <Questions
          questionObject={this.questions[this.state.questionIndexState]}
          nextQuestionOnClickButton={this.showNextQuestion}>
        </Questions>
      </div>
    );
  };
}

export default App;