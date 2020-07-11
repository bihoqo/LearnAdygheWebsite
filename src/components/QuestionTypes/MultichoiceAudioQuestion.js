import React from 'react';
import classes from './MultichoiceAudioQuestion.module.css';
import { Button } from 'react-bootstrap';

const MultichoiceAudioQuestion = (props) => {
    let audioPlayer;
    const audioFolder = require.context('questionAssets/audio/', true);
    const audioFilePath = audioFolder('./' + props.questionAudioSample);

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
        return <button
            className={buttonCssAttributes.join(' ')}
            onClick={() => activeChangeAnswerValueEvent(optionValue)}
            value={optionValue}>
            {optionValue}
        </button>
    });

    const playSoundSample = () => {
        if (audioPlayer != null) {
            audioPlayer.pause();
        }
        audioPlayer = new Audio(audioFilePath);
        audioPlayer.play();
    }

    return (
        <div>
            <Button className={classes.audioPlayer} onClick={playSoundSample}>&#9658;</Button>
            <div className={classes.buttonGripContainer}>
                {optionsToChoose}
            </div>
        </div>
    )
}

export default MultichoiceAudioQuestion;