import React from 'react';
import Exercise from './components/Exercise/Exercise.js';
import { exerciseQuesitons_1, exerciseQuesitons_2 } from './consts/QuestionPack.js';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div id='app'>
        <Route path='/' exact component={Home} />
        <Route path='/exercise1' component={Exercise} />
        <Route path='/exercise2' component={Exercise} />
      </div>
    </BrowserRouter>
  );
}

const ExerciseButtonLink = (props) => {
  return (
    <Link to={{ pathname: `/${props.pathName}`, state: { questions: props.questionsObj } }}>
      <section className='exerciseButtonStyle'>
        <li className={props.colorStyle}>
          <a><span>{props.exerciseName}</span></a>
        </li>
      </section>
    </Link>
  )
}

const Home = () => (
  <div id='exercisesContainer'>
    <h1>Exercises</h1>
    <ExerciseButtonLink pathName='exercise1' exerciseName='Exercise 1'
      colorStyle='colorBlue' questionsObj={exerciseQuesitons_1} />
    <ExerciseButtonLink pathName='exercise2' exerciseName='Exercise 2'
      colorStyle='colorYellow' questionsObj={exerciseQuesitons_2} />
    <ExerciseButtonLink pathName='exercise2' exerciseName='Exercise 3'
      colorStyle='colorOrange' questionsObj={exerciseQuesitons_2} />
    <ExerciseButtonLink pathName='exercise2' exerciseName='Exercise 4'
      colorStyle='colorRed' questionsObj={exerciseQuesitons_2} />
    <ExerciseButtonLink pathName='exercise2' exerciseName='Exercise 5'
      colorStyle='colorGreen' questionsObj={exerciseQuesitons_2} />
  </div>
);


export default App;