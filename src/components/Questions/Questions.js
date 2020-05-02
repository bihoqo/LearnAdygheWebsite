
import React, { useState } from 'react';
import Footer from '../Footer/Footer.js';
import Question from '../Question/Question.js';

const Questions = (props) => {
    // States 
    const [showAnswerState, setShowAnswerState] = useState(false);
    const [insertedAnswerState, setInsertedAnswerState] = useState('');

    const handleAnswerInputChangeValue = (event) => {
        setInsertedAnswerState(event.target.value);
    }

    const showNextQuestion = () => {
        props.nextQuestionOnClickButton();
        setShowAnswerState(false);
        setInsertedAnswerState('');
    }

    const checkQuestionAndShowAnswer = () => {
        let isAnswerCorrent = false;
        if (insertedAnswerState) {
            props.questionObject.correntAnswers.map((answer) => {
                if (insertedAnswerState.toLowerCase() === answer.toLowerCase()) {
                    isAnswerCorrent = true;
                }
            });
        }
        setShowAnswerState(!showAnswerState);
        return isAnswerCorrent;
    }

    return (
        <div>
            <Question
                questionObject={props.questionObject}
                answerInputChanged={handleAnswerInputChangeValue}
                answerInputClicked={handleAnswerInputChangeValue}
                currentValue={insertedAnswerState}>
            </Question>
            <Footer
            showAnswer={showAnswerState}
            checkButtonClicked={checkQuestionAndShowAnswer}
            continueButtonClicked={showNextQuestion}>
            </Footer>
        </div>
    )
}

export default Questions;