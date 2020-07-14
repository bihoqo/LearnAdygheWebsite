import React, { useState } from 'react';
import classes from './MultichoiceQuestion.module.css';

const MultichoiceQuestion = (props) => {
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
        <div className={classes.buttonGripContainer}>
            {optionsToChoose}
        </div>
    )
}

export default MultichoiceQuestion;