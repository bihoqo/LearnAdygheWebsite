
import React, { useState } from 'react';
import Footer from '../Footer/Footer.js';
import Question from '../Question/Question.js';

const Questions = (props) => {
    // States 
    const [showAnswerState, setShowAnswerState] = useState(false);
    const [insertedAnswerState, setInsertedAnswerState] = useState('');

    const handleInsertedAnswerValueEventType = (event) => {
        setInsertedAnswerState(event.target.value);
    }

    const handleInsertedAnswerValueStringType = (newAnswerValue) => {
        setInsertedAnswerState(newAnswerValue);
        console.log(newAnswerValue);
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
                answerInputChangedEvent={handleInsertedAnswerValueEventType}
                answerInputClickedEvent={handleInsertedAnswerValueEventType}
                answerInputChangedString={handleInsertedAnswerValueStringType}
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