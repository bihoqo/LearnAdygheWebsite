import React from 'react';
import classes from './Question.module.css';

const Question = (props) => {

    const displayQuestionType = () => {
        const questionType = props.questionObject.type;
        if (questionType === 'toEnglishFree') {
            return (
                <div>
                    <textarea
                        id='answerInput'
                        className={classes.AnswerInput}
                        placeholder="Type in English" rows="6" cols="50"
                        onChange={props.answerInputChanged}
                        value={props.currentValue}>
                    </textarea>
                </div>
            )
        } else if (questionType === 'toEnglishMultichoice') {
            return (
                <div className={classes.gridContainer}>
                    <div className={classes.gridItem}>1</div>
                    <div className={classes.gridItem}>2</div>
                    <div className={classes.gridItem}>3</div>
                    <div className={classes.gridItem}>4</div>
                    <div className={classes.gridItem}>5</div>
                    <div className={classes.gridItem}>6</div>
                </div>
            )
        } else {
            return (
                <div>
                </div>
            )
        }
    };

    return (
        <div id='content'>
            <div className={classes.DivInsideMiddle}>
                <h1 id='taskText'>Write this in English</h1>
                <p>{props.questionObject.questionText}</p>
                {displayQuestionType()}
            </div>
        </div>
    )

}

export default Question;