import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './LessonPage.css';

const LessonPage = (props) => {
    const lessonTitle = props.location.state.lessonTitle; // get lesson name (excercise header title)
    const lessonSubtitle = props.location.state.lessonSubtitle; // get lesson subtitle name
    const lessonExcercises = props.location.state.lessonExcercises; // get all current lesson's exercises
    const lessonPagePath = props.location.state.lessonPagePath; // get file path that contains lesson explnation

    const LessonInfoComponent = lazy(() => import(`../../../lessons/${lessonPagePath}.js`));

    const buttonsForLessonExcercises = lessonExcercises.map((excercise, index) => {
        return (
            <div>
                <Link to={{ pathname: `/exercise`, state: { questions: excercise } }}>
                    <Button>Start excercise {index + 1}</Button>
                </Link>
            </div>
        );
    });

    return (
        <div id='lessonPageDiv'>
            <h1>{lessonTitle}</h1>
            <h3>{lessonSubtitle}</h3>
            <div>
                <Link to='/lessonsHome'>
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