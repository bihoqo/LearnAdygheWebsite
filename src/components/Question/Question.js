import React from 'react';
import classes from './Question.module.css';
import { QuestionTypes } from '../../consts/QuestionPack.js';
import CompletionQuestion from '../QuestionTypes/CompletionQuestion.js';
import OpenQuestion from '../QuestionTypes/OpenQuestion.js';
import MultichoiceQuestion from '../QuestionTypes/MultichoiceQuestion.js';
import MultichoiceWordsPictureQuestion from '../QuestionTypes/MultichoiceWordsPictureQuestion.js';
import OpenPictureQuestion from '../QuestionTypes/OpenPictureQuestion.js';
import MultichoicePicturesQuestion from '../QuestionTypes/MultichoicePicturesQuestion.js';
import MultichoiceAudioQuestion from '../QuestionTypes/MultichoiceAudioQuestion.js';

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
            case QuestionTypes.MultichoiceWordsPicture:
                return getMultichoiceWordsPictureQuestion();
            case QuestionTypes.OpenPicture:
                return getOpenPictureQuestion();
            case QuestionTypes.MultichoicePictures:
                return getMultichoicePicturesQuestion();
            case QuestionTypes.MultichoiceAudio:
                return getMultichoiceAudioQuestion();
            default:
                return exceptionQuestion();
        }
    };

    // a question in which, you insert a full textual answer
    const getOpenQuestion = () => {
        return (
            <OpenQuestion
                onAnswerChange={props.answerInputChangedString}>
            </OpenQuestion>
        )
    }

    // a question in which, you pick from N options what's the correct one
    const getMultichoiceQuestion = () => {
        return (
            <MultichoiceQuestion
                currentValue={props.currentValue}
                selectableOptionsList={props.questionObject.answerOptions}
                onAnswerChange={props.answerInputChangedString}>
            </MultichoiceQuestion>
        )
    }

    // a question with a picture in which, you pick the right sentence strcuture & order by cliking on button words
    const getCompletionQuestion = () => {
        return (
            <CompletionQuestion
                selectableOptionsList={props.questionObject.answerOptions}
                onAnswerChange={props.answerInputChangedString}>
            </CompletionQuestion>
        )
    }

    // a question with a picture in which, you pick from N options what's the correct one
    const getMultichoiceWordsPictureQuestion = () => {
        return (
            <MultichoiceWordsPictureQuestion
                currentValue={props.currentValue}
                picturesToDisplay={props.questionObject.pictures}
                selectableOptionsList={props.questionObject.answerOptions}
                onAnswerChange={props.answerInputChangedString}>
            </MultichoiceWordsPictureQuestion>
        )
    }

    // a question with a picture in which, you insert the word you see in the picture
    const getOpenPictureQuestion = () => {
        return (
            <OpenPictureQuestion
                currentValue={props.currentValue}
                picturesToDisplay={props.questionObject.pictures}
                onAnswerChange={props.answerInputChangedString}>
            </OpenPictureQuestion>
        )
    }

    // a question with in which, you pick the right picture out of N possible answers
    const getMultichoicePicturesQuestion = () => {
        return (
            <MultichoicePicturesQuestion
                currentValue={props.currentValue}
                picturesToDisplay={props.questionObject.pictures}
                selectableOptionsList={props.questionObject.answerOptions}
                onAnswerChange={props.answerInputChangedString}>
            </MultichoicePicturesQuestion>
        )
    }

    // a question with in which, you listen to the audio, then select the right option
    const getMultichoiceAudioQuestion = () => {
        return (
            <MultichoiceAudioQuestion
                currentValue={props.currentValue}
                questionAudioSample={props.questionObject.soundSample}
                selectableOptionsList={props.questionObject.answerOptions}
                onAnswerChange={props.answerInputChangedString}>
            </MultichoiceAudioQuestion>
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
                <h1 id='taskText'>Translate to {props.questionObject.translateTo}</h1>
                <p>{props.questionObject.questionText}</p>
                {displayQuestionType()}
            </div>
        </div>
    )
}

export default Question;