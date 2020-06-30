import React from 'react';
import Exercise from './components/Exercise/Exercise.js';
import {exerciseQuesitons_1, exerciseQuesitons_2} from './consts/QuestionPack.js';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div id='app'>
        <Route path='/' exact component={Home} />
        <Route path='/excersie1' component={Exercise} />
        <Route path='/excersie2' component={Exercise} />
      </div>
    </BrowserRouter>
  );
}

const Home = () => (
  <div>
    <h1>Exercises</h1>
    <Link to={{pathname: '/excersie1', state: {questions: exerciseQuesitons_1}}}>
      <p>Exercise 1</p>
    </Link>
    <Link to={{pathname: '/excersie2', state: {questions: exerciseQuesitons_2}}}>
      <p>Exercise 2</p>
    </Link>
  </div>
);

export default App;