import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './LessonPage.css';

const LessonPage = (props) => {
    const exerciseName = props.location.state.exerciseName; // get excercise name (excercise header title)
    const excercisePagePath = props.location.state.excercisePagePath; // get current exercise page path
    const lessonExcercises = props.location.state.lessonExcercises; // get all current lesson's exercises
    const lessonPagePath = props.location.state.lessonPagePath; // get file path that contains lesson explnation

    const LessonInfoComponent = lazy(() => import(`../../../lessons/${lessonPagePath}.js`));

    const buttonsForLessonExcercises = lessonExcercises.map((excercise, index) => {
        return (
            <div>
                <Link to={{ pathname: `/${excercisePagePath}`, state: { questions: excercise } }}>
                    <Button>Start excercise {index + 1}</Button>
                </Link>
            </div>
        );
    });

    return (
        <div id='lessonPageDiv'>
            <h3>{exerciseName}</h3>
            <div>
                <Link to='/exercisesHome'>
                    <Button>Go back</Button>
                </Link>
            </div>
            {buttonsForLessonExcercises}
            <hr />
            <Suspense fallback={<div>Loading...</div>}>
                <LessonInfoComponent />
            </Suspense>
        </div>
    );
}

export default LessonPage;