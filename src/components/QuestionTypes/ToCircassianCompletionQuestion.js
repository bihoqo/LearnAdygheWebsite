import React, { useState } from 'react';
import classes from './ToCircassianCompletionQuestion.module.css';

const ToCircassianCompletionQuestion = (props) => {
    const [selectedOptionsState, setSelectedOptionsState] = useState([]);
    let idGenerator = 0;

    // a function that adds selected options to list
    const addOptionToSelectedOptionsList = (newOptionObj) => {
        const selectedOptions = [...selectedOptionsState];
        selectedOptions.push({ id: newOptionObj.id, value: newOptionObj.value });
        setSelectedOptionsState(selectedOptions);
        activeChangeAnswerValueEvent(selectedOptions);
    }

    // a function that adds selected options to list
    const removeOptionFromSelectedOptionsList = (optionObj) => {
        const selectedOptions = [...selectedOptionsState];
        let index = selectedOptions.indexOf(optionObj);
        if (index > -1) {
            selectedOptions.splice(index, 1);
            setSelectedOptionsState(selectedOptions);
        }
        activeChangeAnswerValueEvent(selectedOptions);
    }
    
    // a funciton that returns the new inserted answer
    const activeChangeAnswerValueEvent = (newAnswersAsObjs) => {
        const newAnswersAsStrList = newAnswersAsObjs.map((optionValue) => {
            return optionValue.value;
        });
        props.onAnswerChange(newAnswersAsStrList.join(' '));
    }

    // add id to each option and convert options string list to object list
    const selectableOptionsObject = props.selectableOptionsList.map((optionItem) => {
        return { id: idGenerator++, value: optionItem }
    });

    // take all selectable options and using filter remove already selected options
    const filteredSelectableOptionsObjects = selectableOptionsObject.filter((optionObj) => {
        let selectedObjectsIds = [];
        selectedOptionsState.forEach((o) => selectedObjectsIds.push(o.id));
        return !selectedObjectsIds.includes(optionObj.id);
    });

    // make each selectable option into a button
    const selectableOptionsButtons = filteredSelectableOptionsObjects.map((optionObj) => {
        return <button
            className={classes.selectableButtonItem}
            onClick={() => addOptionToSelectedOptionsList(optionObj)}
            value={optionObj.value}
        >{optionObj.value}</button>
    });

    // make each selected option into a button
    const selectedOptionsButtons = selectedOptionsState.map((optionObj) => {
        return <button
            className={classes.selectedButtonItem}
            onClick={() => removeOptionFromSelectedOptionsList(optionObj)}
            value={optionObj.value}
        >{optionObj.value}</button>
    });

    return (
        <div>
            <div className={classes.x}>
                {selectedOptionsButtons}
            </div>
            <hr/>
            <div className={classes.selectableOptionsGripContainer}>
                {selectableOptionsButtons}
            </div>
        </div>
    )
}

export default ToCircassianCompletionQuestion;