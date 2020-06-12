import React from 'react';
import classes from './OpenPictureQuestion.module.css';

const OpenPictureQuestion = (props) => {
    // a funciton that returns the new inserted answer
    const activeChangeAnswerValueEvent = (event) => {
        props.onAnswerChange(event.target.value);
    }

    return (
        <div>
            <img src={props.picturesToDisplay[0]}></img>
            <input type="text"
                onChange={activeChangeAnswerValueEvent}
                value={props.currentValue}></input>
        </div>
    )
}

export default OpenPictureQuestion;