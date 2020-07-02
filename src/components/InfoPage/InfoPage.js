import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const InfoPage = (props) => {    
    const exerciseName = props.location.state.exerciseName; // get excercise name (excercise number)
    const excercisePagePath = props.location.state.excercisePagePath; // get current exercise page path
    const questionsObj = props.location.state.questionsObj; // get the current exercise questions
    return (
        <div>
            <h3>{exerciseName}</h3>
            <Link to='/'>
                <p>Go to homepage</p>
            </Link>
            <Link to={{ pathname: `/${excercisePagePath}`, state: { questions: questionsObj } }}>
                <p>Go to exercise</p>
            </Link>
        </div>
    );
}

export default InfoPage;