import React, { useState } from 'react';
import classes from './ToEnglishFreeQuestion.module.css';

const ToEnglishFreeQuestion = (props) => {
    // a funciton that returns the new inserted answer
    const activeChangeAnswerValueEvent = (event) => {
        props.onAnswerChange(event.target.value);
    }

    return (
        <div>
            <textarea
                id='answerInput'
                className={classes.answerInput}
                placeholder="Type in English" rows="6" cols="50"
                onChange={activeChangeAnswerValueEvent}>
            </textarea>
        </div>
    )
}

export default ToEnglishFreeQuestion;