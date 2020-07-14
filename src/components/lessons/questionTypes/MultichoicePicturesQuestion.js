import React from 'react';
import classes from './MultichoicePicturesQuestion.module.css';

const MultichoicePicturesQuestion = (props) => {
    const imageFolder = require.context('questionAssets/image/', true);

    // a funciton that returns the new inserted answer
    const activeChangeAnswerValueEvent = (newAnswer) => {
        props.onAnswerChange(newAnswer);
    }

    // make each answer option to selectable rectangle button
    const optionsToChoose = props.selectableOptionsList.map((optionValue, index) => {
        let buttonCssAttributes = [classes.buttonItem];
        if (props.currentValue === optionValue) {
            buttonCssAttributes.push(classes.selectedButtonItem);
        }

        let imageFilePath = imageFolder('./' + props.picturesToDisplay[index]);
        return <button
            className={buttonCssAttributes.join(' ')}
            onClick={() => activeChangeAnswerValueEvent(optionValue)}
            value={optionValue}>
            <img src={imageFilePath}></img>
            {optionValue}
        </button>
    });

    return (
        <div>
            <div className={classes.buttonGripContainer}>
                {optionsToChoose}
            </div>
        </div>
    )
}

export default MultichoicePicturesQuestion;