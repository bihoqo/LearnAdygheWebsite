import React, { useState } from 'react';
import classes from './Question.module.css';
import QuestionTypes from '../../consts/QuestionTypes.js';
import ToCircassianCompletionQuestion from '../QuestionTypes/ToCircassianCompletionQuestion.js';
import ToEnglishFreeQuestion from '../QuestionTypes/ToEnglishFreeQuestion.js';
import ToEnglishMultichoiceQuestion from '../QuestionTypes/ToEnglishMultichoiceQuestion.js';
import ToCircassianMultichoicePictureQuestion from '../QuestionTypes/ToCircassianMultichoicePictureQuestion.js';

const Question = (props) => {
    const displayQuestionType = () => {
        const questionType = props.questionObject.type;
        switch (questionType) {
            case QuestionTypes.ToEnglishFree:
                return getToEnglishFreeQuestion();
            case QuestionTypes.ToEnglishMultichoice:
                return getToEnglishMultichoiceQuestion();
            case QuestionTypes.ToCircassianCompletion:
                return getToCircassianCompletionQuestion();
            case QuestionTypes.ToCircassianMultichoicePictureQuestion:
                return getToCircassianMultichoicePictureQuestion();
            default:
                return exceptionQuestion();
        }
    };

    const getToEnglishFreeQuestion = () => {
        return (
            <ToEnglishFreeQuestion
                onAnswerChange={props.answerInputChangedString}>
            </ToEnglishFreeQuestion>
        )
    }

    const getToEnglishMultichoiceQuestion = () => {
        return (
            <ToEnglishMultichoiceQuestion
                currentValue={props.currentValue}
                selectableOptionsList={props.questionObject.answerOptions}
                onAnswerChange={props.answerInputChangedString}>
            </ToEnglishMultichoiceQuestion>
        )
    }

    const getToCircassianCompletionQuestion = () => {
        return (
            <ToCircassianCompletionQuestion
                selectableOptionsList={props.questionObject.answerOptions}
                onAnswerChange={props.answerInputChangedString}>
            </ToCircassianCompletionQuestion>
        )
    }

    const getToCircassianMultichoicePictureQuestion = () => {
        return (
            <ToCircassianMultichoicePictureQuestion
                currentValue={props.currentValue}
                picturesToDisplay={props.questionObject.pictures}
                selectableOptionsList={props.questionObject.answerOptions}
                onAnswerChange={props.answerInputChangedString}>
            </ToCircassianMultichoicePictureQuestion>
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