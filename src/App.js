import React from 'react';
import ExercisePage from './components/ExercisePage/ExercisePage.js';
import InfoPage from './components/InfoPage/InfoPage.js';
import { exerciseQuesitons_1, exerciseQuesitons_2 } from './consts/QuestionPack.js';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div id='app'>
        <Route path='/' exact component={Home} />
        <Route path='/exerciseQuestions1' component={ExercisePage} />
        <Route path='/exerciseQuestions2' component={ExercisePage} />
        <Route path='/exerciseInfo' component={InfoPage} />
      </div>
    </BrowserRouter>
  );
}

const ExerciseButtonLink = (props) => {
  const infoPageParameters = {
    questionsObj: props.questionsObj,
    excercisePagePath: props.excercisePagePath,
    exerciseName: props.exerciseName
  };
  return (
    <Link to={{ pathname: `/exerciseInfo`, state: infoPageParameters }}>
      <section className='exerciseButtonStyle'>
        <li className={props.colorStyle}>
          <span>{props.exerciseName}</span>
        </li>
      </section>
    </Link>
  )
}

const Home = () => (
  <div id='exercisesContainer'>
    <h1>Exercises</h1>
    <ExerciseButtonLink excercisePagePath='exerciseQuestions1'
      exerciseName='Exercise 1' colorStyle='colorBlue' questionsObj={exerciseQuesitons_1} />
    <ExerciseButtonLink excercisePagePath='exerciseQuestions2'
      exerciseName='Exercise 2' colorStyle='colorYellow' questionsObj={exerciseQuesitons_2} />
  </div>
);


export default App;