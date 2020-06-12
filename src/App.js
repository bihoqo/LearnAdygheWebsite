
import React, { Component } from 'react';
import Questionnaire from './components/Questionnaire/Questionnaire.js';
import QuestionTypes from './consts/QuestionTypes.js';
import './App.css';

class App extends Component {
  state = {
    questionIndexState: 0
  };

  // Questions
  questions = [
    {
      type: QuestionTypes.ToCircassianMultichoicePictureQuestion,
      questionText: 'What is in the picture?',
      pictures: ['https://i.ibb.co/6rLFFPr/noun-Woman-1392261.png'],
      answerOptions: ['к1алэ', 'пшъашъэ', 'шъуз', 'л1ы'],
      correctAnswers: ['шъуз']
    },
    {
      type: QuestionTypes.ToEnglishMultichoice,
      questionText: 'What is 1+1',
      answerOptions: ['0', '1', '2', '3', '4', '5'],
      correctAnswers: ['2']
    },
    {
      type: QuestionTypes.ToEnglishFree,
      questionText: 'к1алэр унэм ихьагъ',
      answerOptions: null,
      correctAnswers: ['the boy entered the house', 'the boy went inside the house']
    },
    {
      type: QuestionTypes.ToCircassianCompletion,
      questionText: 'What is к1алэр унэм ихьагъ',
      answerOptions: ['the', 'boy', 'entered', 'the', 'house', 'asd', 'asd2', 'asd3'],
      correctAnswers: ['the boy entered the house']
    },
    {
      type: QuestionTypes.ToEnglishMultichoice,
      questionText: 'What is к1алэ',
      answerOptions: ['boy', 'man', 'woman', 'girl'],
      correctAnswers: ['boy']
    },
    {
      type: QuestionTypes.ToEnglishMultichoice,
      questionText: 'What is пшъашъэ',
      answerOptions: ['boy', 'man', 'woman', 'girl'],
      correctAnswers: ['girl']
    },
    {
      type: QuestionTypes.ToEnglishFree,
      questionText: '1+1',
      answerOptions: null,
      correctAnswers: ['2']
    },
    {
      type: QuestionTypes.ToEnglishFree,
      questionText: '1*1',
      answerOptions: null,
      correntAnswers: ['1']
    },
    {
      type: QuestionTypes.ToEnglishFree,
      questionText: 'к1алэр унэм икӏыгъ',
      answerOptions: null,
      correntAnswers: ['the boy exited the house', 'the boy went out the house']
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
        <div id='headerDiv'>
          <h1>Question {this.state.questionIndexState + 1}</h1>
        </div>
        <Questionnaire
          questionObject={this.questions[this.state.questionIndexState]}
          nextQuestionOnClickButton={this.showNextQuestion}>
        </Questionnaire>
      </div>
    );
  };
}

export default App;