
import React from 'react';
import { exercises_1, exercises_2 } from '../consts/QuestionPack';
import { Link } from 'react-router-dom';

const ExercisesHomepage = () => (
    <div id='exercisesContainer'>
        <h1>Exercises</h1>
        <LessonButtonLink lessonPagePath='Lesson_1' excercisePagePath='exerciseQuestions1'
            exerciseTitle='Lesson 1' exerciseSubtitle='Demo 1' colorStyle='colorBlue' lessonExcercises={exercises_1} />
        <LessonButtonLink lessonPagePath='Lesson_2' excercisePagePath='exerciseQuestions2'
            exerciseTitle='Lesson 2' exerciseSubtitle='Demo 2' colorStyle='colorYellow' lessonExcercises={exercises_2} />
    </div>
);

const LessonButtonLink = (props) => {
    const infoPageParameters = {
        lessonExcercises: props.lessonExcercises,
        excercisePagePath: props.excercisePagePath,
        exerciseTitle: props.exerciseTitle,
        exerciseSubtitle: props.exerciseSubtitle,
        lessonPagePath: props.lessonPagePath
    };
    return (
        <Link to={{ pathname: `/lesson`, state: infoPageParameters }}>
            <section className='exerciseButtonStyle'>
                <li className={props.colorStyle}>
                    <h3>{props.exerciseTitle}</h3>
                    <span>{props.exerciseSubtitle}</span>
                </li>
            </section>
        </Link>
    )
}

export default ExercisesHomepage