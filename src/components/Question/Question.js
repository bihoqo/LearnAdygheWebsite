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
            console.log(props.currentValue);
            const optionsToChoose = props.questionObject.answerOptions.map((optionValue) => {
                let buttonCssAttributes = [classes.buttonItem];
                if (props.currentValue === optionValue) {
                    buttonCssAttributes.push(classes.selectedButtonItem);
                }
                return <button
                className={buttonCssAttributes.join(' ')}
                onClick={props.answerInputClicked}
                value={optionValue}
                >{optionValue}</button>
            });
            return (
                <div className={classes.buttonContainer}>
                    {optionsToChoose}
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