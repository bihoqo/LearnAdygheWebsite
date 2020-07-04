
import React from 'react';
import { exerciseQuesitons_1, exerciseQuesitons_2 } from '../consts/QuestionPack';
import { Link } from 'react-router-dom';

const ExcercisesHomepage = () => (
    <div id='exercisesContainer'>
        <h1>Exercises</h1>
        <ExerciseButtonLink lessonPagePath='Lesson_1' excercisePagePath='exerciseQuestions1'
            exerciseName='Exercise 1' colorStyle='colorBlue' questionsObj={exerciseQuesitons_1} />
        <ExerciseButtonLink lessonPagePath='Lesson_2' excercisePagePath='exerciseQuestions2'
            exerciseName='Exercise 2' colorStyle='colorYellow' questionsObj={exerciseQuesitons_2} />
    </div>
);

const ExerciseButtonLink = (props) => {
    const infoPageParameters = {
        questionsObj: props.questionsObj,
        excercisePagePath: props.excercisePagePath,
        exerciseName: props.exerciseName,
        lessonPagePath: props.lessonPagePath
    };
    return (
        <Link to={{ pathname: `/lesson`, state: infoPageParameters }}>
            <section className='exerciseButtonStyle'>
                <li className={props.colorStyle}>
                    <span>{props.exerciseName}</span>
                </li>
            </section>
        </Link>
    )
}

export default ExcercisesHomepage