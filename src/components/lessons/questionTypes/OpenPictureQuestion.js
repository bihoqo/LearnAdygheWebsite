import React from 'react';
import classes from './OpenPictureQuestion.module.css';

const OpenPictureQuestion = (props) => {
    const imageFolder = require.context('questionAssets/image/', true);
    const imageFilePath = imageFolder('./' + props.picturesToDisplay[0]);

    // a funciton that returns the new inserted answer
    const activeChangeAnswerValueEvent = (event) => {
        props.onAnswerChange(event.target.value);
    }

    return (
        <div>
            <img src={imageFilePath}></img>
            <input type="text"
                onChange={activeChangeAnswerValueEvent}
                value={props.currentValue}></input>
        </div>
    )
}

export default OpenPictureQuestion;