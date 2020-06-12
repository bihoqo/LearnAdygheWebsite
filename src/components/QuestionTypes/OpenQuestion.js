import React, { useState } from 'react';
import classes from './OpenQuestion.module.css';

const OpenQuestion = (props) => {
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

export default OpenQuestion;