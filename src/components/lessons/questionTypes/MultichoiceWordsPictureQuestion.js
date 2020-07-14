import React from 'react';
import classes from './MultichoiceWordsPictureQuestion.module.css';

const MultichoiceWordsPictureQuestion = (props) => {
    const imageFolder = require.context('questionAssets/image/', true);
    const imageFilePath = imageFolder('./' + props.picturesToDisplay[0]);

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
            <img src={imageFilePath}></img>
            <div className={classes.buttonGripContainer}>
            {optionsToChoose}
            </div>
        </div>
    )
}

export default MultichoiceWordsPictureQuestion;