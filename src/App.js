import React from 'react';
import ExercisePage from './components/ExercisePage/ExercisePage.js';
import LessonPage from './components/LessonPage/LessonPage.js';
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
        <Route path='/exerciseInfo' component={LessonPage} />
      </div>
    </BrowserRouter>
  );
}

const ExerciseButtonLink = (props) => {
  const infoPageParameters = {
    questionsObj: props.questionsObj,
    excercisePagePath: props.excercisePagePath,
    exerciseName: props.exerciseName,
    lessonPagePath: props.lessonPagePath
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
    <ExerciseButtonLink lessonPagePath='Lesson_1' excercisePagePath='exerciseQuestions1'
      exerciseName='Exercise 1' colorStyle='colorBlue' questionsObj={exerciseQuesitons_1} />
    <ExerciseButtonLink lessonPagePath='Lesson_2' excercisePagePath='exerciseQuestions2'
      exerciseName='Exercise 2' colorStyle='colorYellow' questionsObj={exerciseQuesitons_2} />
  </div>
);


export default App;