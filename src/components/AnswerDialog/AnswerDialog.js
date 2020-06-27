

import React from 'react';
import classes from './AnswerDialog.module.css'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button } from '@material-ui/core';

const AnswerDialog = (props) => {
    let backgroundStyle;
    let titleText;
    let trueAnswerParagraph;
    if (props.isAnswerCorrect) {
        titleText = 'Correct answer';
        backgroundStyle = {
            style: {
                backgroundColor: 'lightgreen',
                color: 'white'
            }
        };
    } else {
        titleText = 'Incorrect answer';
        backgroundStyle = {
            style: {
                backgroundColor: 'lightcoral',
                color: 'white'
            }
        };
        trueAnswerParagraph = (<p>Correct answer: {props.correctAnswers[0]}</p>);
    }

    return (
        <Dialog
            className={classes.dialogStyle}
            PaperProps={backgroundStyle}
            open={props.toShow}>
            <h5>{titleText}</h5>
            <div>
                <p>Your answer: {props.insertedAnswer}</p>
                {trueAnswerParagraph}
            </div>
            <Button onClick={props.toHide}>
                Continue
            </Button>
        </Dialog>
    )
}

export default AnswerDialog;