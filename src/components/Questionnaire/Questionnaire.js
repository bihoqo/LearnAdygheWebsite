
import React, { useState } from 'react';
import Question from '../Question/Question.js';
import AnswerDialog from '../AnswerDialog/AnswerDialog.js'

const Questionnaire = (props) => {
    // States 
    const [showAnswerDialogState, setShowAnswerDialogState] = useState(false);
    const [insertedAnswerState, setInsertedAnswerState] = useState('');
    const [insertedAnswerCorrectnessState, setInsertedAnswerCorrectnessState] = useState(false);

    const handleInsertedAnswerValueStringType = (newAnswerValue) => {
        console.log(newAnswerValue);
        setInsertedAnswerState(newAnswerValue);
    }

    const showNextQuestion = () => {
        props.nextQuestionOnClickButton();
        setShowAnswerDialogState(false);
        setInsertedAnswerState('');
    }

    const checkQuestionAndShowAnswer = () => {
        let isAnswerCorrent = false;
        // check if one of the possible correct answers matches the user's inserted answer
        if (insertedAnswerState) {
            props.questionObject.correctAnswers.map((answer) => {
                if (insertedAnswerState.toLowerCase() === answer.toLowerCase()) {
                    isAnswerCorrent = true;
                }
            });
        }
        setShowAnswerDialogState(true);
        setInsertedAnswerCorrectnessState(isAnswerCorrent);
    }

    return (
        <div>
            <Question
                questionObject={props.questionObject}
                answerInputChangedString={handleInsertedAnswerValueStringType}
                currentValue={insertedAnswerState}>
            </Question>
            <div id='footer'>
                <button onClick={checkQuestionAndShowAnswer}>Check</button>
                <AnswerDialog
                    toShow={showAnswerDialogState}
                    toHide={showNextQuestion}
                    insertedAnswer={insertedAnswerState}
                    isAnswerCorrect={insertedAnswerCorrectnessState}
                    correctAnswers={props.questionObject.correctAnswers}>
                </AnswerDialog>
            </div>
        </div>
    )
}

export default Questionnaire;