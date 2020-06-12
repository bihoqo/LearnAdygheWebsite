import React from 'react';
import classes from './Question.module.css';
import QuestionTypes from '../../consts/QuestionTypes.js';
import CompletionQuestion from '../QuestionTypes/CompletionQuestion.js';
import OpenQuestion from '../QuestionTypes/OpenQuestion.js';
import MultichoiceQuestion from '../QuestionTypes/MultichoiceQuestion.js';
import MultichoicePictureQuestion from '../QuestionTypes/MultichoicePictureQuestion.js';
import OpenPictureQuestion from '../QuestionTypes/OpenPictureQuestion.js';

const Question = (props) => {
    const displayQuestionType = () => {
        const questionType = props.questionObject.type;
        switch (questionType) {
            case QuestionTypes.Open:
                return getOpenQuestion();
            case QuestionTypes.Multichoice:
                return getMultichoiceQuestion();
            case QuestionTypes.Completion:
                return getCompletionQuestion();
            case QuestionTypes.MultichoicePicture:
                return getMultichoicePictureQuestion();
            case QuestionTypes.OpenPicture:
                return getOpenPictureQuestion();
            default:
                return exceptionQuestion();
        }
    };

    const getOpenQuestion = () => {
        return (
            <OpenQuestion
                onAnswerChange={props.answerInputChangedString}>
            </OpenQuestion>
        )
    }

    const getMultichoiceQuestion = () => {
        return (
            <MultichoiceQuestion
                currentValue={props.currentValue}
                selectableOptionsList={props.questionObject.answerOptions}
                onAnswerChange={props.answerInputChangedString}>
            </MultichoiceQuestion>
        )
    }

    const getCompletionQuestion = () => {
        return (
            <CompletionQuestion
                selectableOptionsList={props.questionObject.answerOptions}
                onAnswerChange={props.answerInputChangedString}>
            </CompletionQuestion>
        )
    }

    const getMultichoicePictureQuestion = () => {
        return (
            <MultichoicePictureQuestion
                currentValue={props.currentValue}
                picturesToDisplay={props.questionObject.pictures}
                selectableOptionsList={props.questionObject.answerOptions}
                onAnswerChange={props.answerInputChangedString}>
            </MultichoicePictureQuestion>
        )
    }

    const getOpenPictureQuestion = () => {
        return (
            <OpenPictureQuestion
                currentValue={props.currentValue}
                picturesToDisplay={props.questionObject.pictures}
                onAnswerChange={props.answerInputChangedString}>
            </OpenPictureQuestion>
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