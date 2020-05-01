import React from 'react';
import classes from './Question.module.css';

const Question = (props) => {
    return (
        <div id='content'>
            <div className={classes.DivInsideMiddle}>
                <h1 id='taskText'>Write this in English</h1>
                <p>{props.questionObject.questionText}</p>
                <textarea
                    id='answerInput'
                    className={classes.AnswerInput}
                    placeholder="Type in English" rows="6" cols="50"
                    onChange={props.answerInputChanged}
                    value={props.currentValue}>
                </textarea>
            </div>
        </div>
    )

}

export default Question;