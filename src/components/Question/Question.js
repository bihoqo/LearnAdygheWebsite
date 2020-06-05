import React from 'react';
import classes from './Question.module.css';
import QuestionTypes from '../../consts/QuestionTypes.js';

const Question = (props) => {
    const displayQuestionType = () => {
        const questionType = props.questionObject.type;
        switch (questionType) {
            case QuestionTypes.ToEnglishFree:
                return toEnglishFreeQuestion();
            case QuestionTypes.ToEnglishMultichoice:
                return toEnglishMultichoiceQuestion();
            default:
                return exceptionQuestion();
        }
    };

    const toEnglishFreeQuestion = () => {
        return (
            <div>
                <textarea
                    id='answerInput'
                    className={classes.AnswerInput}
                    placeholder="Type in English" rows="6" cols="50"
                    onChange={props.answerInputChanged}
                    value={props.currentValue}>
                </textarea>
            </div>
        )
    }

    const toEnglishMultichoiceQuestion = () => {
        const optionsToChoose = props.questionObject.answerOptions.map((optionValue) => {
            let buttonCssAttributes = [classes.buttonItem];
            if (props.currentValue === optionValue) {
                buttonCssAttributes.push(classes.selectedButtonItem);
            }
            return <button
                className={buttonCssAttributes.join(' ')}
                onClick={props.answerInputClicked}
                value={optionValue}
            >{optionValue}</button>
        });
        return (
            <div className={classes.buttonGripContainer}>
                {optionsToChoose}
            </div>
        )
    }

    const exceptionQuestion = () => {
        return (
            <div>
            </div>
        )
    }

    return (
        <div id='content'>
            <div className={classes.DivInsideMiddle}>
                <h1 id='taskText'>Write this in English</h1>
                <p>{props.questionObject.questionText}</p>
                {displayQuestionType()}
            </div>
        </div>
    )

}

export default Question;