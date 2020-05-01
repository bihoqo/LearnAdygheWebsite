
import React, { useState } from 'react';
import classes from './Footer.module.css';

const Footer = (props) => {
    const [answerClassState, setAnswerClassState] = useState('');
    const [answerTextState, setAnswerTextState] = useState('');

    //Parameters
    let footerDiv;

    const clickOnCheck = () => {
        const isAnswerCorrent = props.checkButtonClicked();
        if (isAnswerCorrent) {
            setAnswerClassState(classes.CorrectAnswerDiv);
            setAnswerTextState('You are correct');
        } else {
            setAnswerClassState(classes.WrongAnswerDiv);
            setAnswerTextState('You are incorrect');
        }
    }
    
    if (props.showAnswer) {
        // Corrent or incorrent answer div
        footerDiv = (
            <div className={answerClassState}>
                <p>{answerTextState}</p>
                <button onClick={props.continueButtonClicked}>Continue</button>
            </div>
        );
    } else {
        footerDiv = (
            <div>
                <div className={classes.CheckButtonDiv}>
                    <button onClick={clickOnCheck}>Check</button>
                </div>
            </div>
        );
    }
    
    return (
        <div id='footer'>
            {footerDiv}
        </div>
    )
}

export default Footer;