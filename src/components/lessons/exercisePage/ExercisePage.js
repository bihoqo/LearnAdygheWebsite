import React, { Component } from 'react';
import Questionnaire from '../questionnaire/Questionnaire.js';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ExercisePage.css';

class ExercisePage extends Component {
    state = {
        currentQuestionIndexState: 0,
        showAnswersState: false
    };

    exerciseQuestions = this.props.location.state.questions; // get current exercise questions
    numberOfQuestions = this.exerciseQuestions.length;
    questionOrder = [...Array(this.numberOfQuestions).keys()];
    currentQuestionIndex = 0;
    currentLoadingBarPercentage = (this.currentQuestionIndex + 1) / this.numberOfQuestions * 100;

    showNextQuestion = (wasQuestionPassed) => {
        if (wasQuestionPassed) {
            this.currentQuestionIndex++;
            this.currentLoadingBarPercentage = (this.currentQuestionIndex + 1) / this.numberOfQuestions * 100;
        } else {
            // place failed question to last
            const failedQuesitonIndex = this.questionOrder[this.currentQuestionIndex];
            this.questionOrder.splice(this.currentQuestionIndex, 1);
            this.questionOrder.push(failedQuesitonIndex);
        }
        // Check if all questions were passed
        if (this.currentQuestionIndex == this.numberOfQuestions) {
            this.setState({
                showAnswersState: true
            })
        } else {
            this.setState({
                currentQuestionIndexState: this.questionOrder[this.currentQuestionIndex]
            })
        }
    }

    questionAnswers = () => {
        const answersDiv = this.exerciseQuestions.map((questionObj, index) => {
            let answerStyle = ['answerDiv'];
            if (index % 2 != 0) {
                answerStyle.push('answerLeft');
            } else {
                answerStyle.push('answerRight');
            }
            return (
                <div className={answerStyle.join(' ')}>
                    <h6>{index+1}. Question: {questionObj.questionText}</h6>
                    <p>Answer: {questionObj.correctAnswers}</p>
                </div>
            )
        });
        return (
            <div>
                {answersDiv}
                <Link to='/lessonsHome'>
                    <Button>Go back to excercises</Button>
                </Link>
            </div>
        );
    };

    render() {
        return (
            <div id='exerciseDiv'>
                <div id='questionnaireDiv' hidden={this.state.showAnswersState}>
                    <div id='headerDiv'>
                        <ProgressBar now={this.currentLoadingBarPercentage} />
                    </div>
                    <Questionnaire
                        questionObject={this.exerciseQuestions[this.state.currentQuestionIndexState]}
                        nextQuestionOnClickButton={this.showNextQuestion}>
                    </Questionnaire>
                </div>
                <div hidden={!this.state.showAnswersState}>
                    {this.questionAnswers()}
                </div>
            </div>
        );
    };
}

export default ExercisePage;