
import React from 'react';
import { exercises_1, exercises_2 } from '../../../questions/QuestionPack.js';
import { Link } from 'react-router-dom';

const LessonsHomepage = () => (
    <div id='exercisesContainer'>
        <h1>Lessons</h1>
        <LessonButtonLink lessonPagePath='Lesson_1' lessonTitle='Lesson 1'
            lessonSubtitle='Demo 1' colorStyle='colorBlue' lessonExcercises={exercises_1} />
        <LessonButtonLink lessonPagePath='Lesson_2' lessonTitle='Lesson 2'
            lessonSubtitle='Demo 2' colorStyle='colorYellow' lessonExcercises={exercises_2} />
    </div>
);

const LessonButtonLink = (props) => {
    const infoPageParameters = {
        lessonExcercises: props.lessonExcercises,
        lessonTitle: props.lessonTitle,
        lessonSubtitle: props.lessonSubtitle,
        lessonPagePath: props.lessonPagePath
    };
    return (
        <Link to={{ pathname: `/lesson`, state: infoPageParameters }}>
            <section className='exerciseButtonStyle'>
                <li className={props.colorStyle}>
                    <h3>{props.lessonTitle}</h3>
                    <span>{props.lessonSubtitle}</span>
                </li>
            </section>
        </Link>
    )
}

export default LessonsHomepage