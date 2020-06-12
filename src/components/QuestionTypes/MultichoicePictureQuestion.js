import React, { useState } from 'react';
import classes from './MultichoicePictureQuestion.module.css';

const MultichoicePictureQuestion = (props) => {
    // a funciton that returns the new inserted answer
    const activeChangeAnswerValueEvent = (event) => {
        props.onAnswerChange(event.target.value);
    }

    // make each answer option to selectable rectangle button
    const optionsToChoose = props.selectableOptionsList.map((optionValue) => {
        let buttonCssAttributes = [classes.buttonItem];
        if (props.currentValue === optionValue) {
            buttonCssAttributes.push(classes.selectedButtonItem);
        }
        return <button
            className={buttonCssAttributes.join(' ')}
            onClick={activeChangeAnswerValueEvent}
            value={optionValue}
        >{optionValue}</button>
    });

    return (
        <div>
            <img src={props.picturesToDisplay[0]}></img>
            <div className={classes.buttonGripContainer}>
            {optionsToChoose}
            </div>
        </div>
    )
}

export default MultichoicePictureQuestion;