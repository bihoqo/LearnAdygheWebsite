import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './LessonPage.css';

const LessonPage = (props) => {
    const exerciseName = props.location.state.exerciseName; // get excercise name (excercise header title)
    const excercisePagePath = props.location.state.excercisePagePath; // get current exercise page path
    const questionsObj = props.location.state.questionsObj; // get the current exercise questions
    const lessonPagePath = props.location.state.lessonPagePath;

    const LessonInfoComponent = lazy(() => import(`../../lessons/${lessonPagePath}.js`));

    return (
        <div id='lessonPageDiv'>
            <h3>{exerciseName}</h3>
            <Link to='/excercisesHome'>
                <Button>Go back</Button>
            </Link>
            <Link to={{ pathname: `/${excercisePagePath}`, state: { questions: questionsObj } }}>
                <Button>Start practice</Button>
            </Link>
            <hr />
            <Suspense fallback={<div>Loading...</div>}>
                <LessonInfoComponent />
            </Suspense>
        </div>
    );
}

export default LessonPage;