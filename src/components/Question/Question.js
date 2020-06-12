import React, { useState } from 'react';
import classes from './Question.module.css';
import QuestionTypes from '../../consts/QuestionTypes.js';
import ToCircassianCompletionQuestion from '../QuestionTypes/ToCircassianCompletionQuestion.js';
import ToEnglishFreeQuestion from '../QuestionTypes/ToEnglishFreeQuestion.js';
import ToEnglishMultichoiceQuestion from '../QuestionTypes/ToEnglishMultichoiceQuestion.js';

const Question = (props) => {
    const displayQuestionType = () => {
        const questionType = props.questionObject.type;
        switch (questionType) {
            case QuestionTypes.ToEnglishFree:
                return toEnglishFreeQuestion();
            case QuestionTypes.ToEnglishMultichoice:
                return toEnglishMultichoiceQuestion();
            case QuestionTypes.ToCircassianCompletion:
                return toCircassianCompletionQuestion();
            default:
                return exceptionQuestion();
        }
    };

    const toEnglishFreeQuestion = () => {
        return (
            <ToEnglishFreeQuestion
                onAnswerChange={props.answerInputChangedString}>
            </ToEnglishFreeQuestion>
        )
    }

    const toEnglishMultichoiceQuestion = () => {
        return (
            <ToEnglishMultichoiceQuestion
                currentValue={props.currentValue}
                selectableOptionsList={props.questionObject.answerOptions}
                onAnswerChange={props.answerInputChangedString}>
            </ToEnglishMultichoiceQuestion>
        )
    }

    const toCircassianCompletionQuestion = () => {
        return (
            <ToCircassianCompletionQuestion
                selectableOptionsList={props.questionObject.answerOptions}
                onAnswerChange={props.answerInputChangedString}>
            </ToCircassianCompletionQuestion>
        )
    }

    const exceptionQuestion = () => {
        return (
            <div>
                <p>Error, invalid question type.</p>
            </div>
        )
    }

    return (
        <div id='content'>
            <div className={classes.divInsideMiddle}>
                <h1 id='taskText'>Write this in English</h1>
                <p>{props.questionObject.questionText}</p>
                {displayQuestionType()}
            </div>
        </div>
    )

}

export default Question;