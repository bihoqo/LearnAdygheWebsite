import React, { Component } from 'react';
import Questionnaire from '../Questionnaire/Questionnaire.js';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './ExercisePage.css';

class ExercisePage extends Component {
    state = {
        currentQuestionIndexState: 0
    };

    exerciseQuestions = this.props.location.state.questions; // get current exercise questions
    questionOrder = [...Array(this.exerciseQuestions.length).keys()];
    currentQuestionIndex = 0;
    currentLoadingBarPercentage = (this.currentQuestionIndex + 1) / this.exerciseQuestions.length * 100;

    showNextQuestion = (wasQuestionPassed) => {
        if (wasQuestionPassed) {
            this.currentQuestionIndex++;
            this.currentLoadingBarPercentage = (this.currentQuestionIndex + 1) / this.exerciseQuestions.length * 100;
        } else {
            // place failed question to last
            const failedQuesitonIndex = this.questionOrder[this.currentQuestionIndex];
            this.questionOrder.splice(this.currentQuestionIndex, 1);
            this.questionOrder.push(failedQuesitonIndex);
        }
        this.setState({
            currentQuestionIndexState: this.questionOrder[this.currentQuestionIndex]
        })
    }

    render() {
        return (
            <div id='exerciseDiv'>
                <div id='headerDiv'>
                    <div id='myProgress'>
                        <ProgressBar now={this.currentLoadingBarPercentage} />
                    </div>
                </div>
                <Questionnaire
                    questionObject={this.exerciseQuestions[this.state.currentQuestionIndexState]}
                    nextQuestionOnClickButton={this.showNextQuestion}>
                </Questionnaire>
            </div>
        );
    };
}

export default ExercisePage;