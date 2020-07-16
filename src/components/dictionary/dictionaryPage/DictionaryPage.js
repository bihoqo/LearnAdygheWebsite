import React, { useState } from 'react';
import { definitions } from '../../../consts/DictionaryPack.js';
import DefinitionComponent from './../definitionComponent/DefinitionComponent.js';
import { Typeahead } from 'react-bootstrap-typeahead';
import './DictionaryPage.css';

const DictionaryPage = () => {
    const [searchedWordObj, setSearchedWordObj] = useState({});
    const [autocompletes, setAutocompletes] = useState([]);
    let results;

    const allWords = definitions.map(def => def.word);

    const searchForWord = (value) => {
        // const value = document.querySelector('#searchInput').value;
        const index = definitions.findIndex((def) => {
            return (def.word === value[0]) ? true : false;
        });
        setSearchedWordObj(definitions[index]);
    };

    function isEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    if (!isEmpty(searchedWordObj)) {
        results = (
            <div id='searchResultsId'>
                <div>
                    <h1>{searchedWordObj.word}<span id='ipa'> [{searchedWordObj.ipa}]</span><span> ({searchedWordObj.type})</span></h1>
                </div>
                <hr />
                <DefinitionComponent definitionObj={searchedWordObj} />
            </div>
        )
    }

    const showAutocomplete = (value) => {
        if (value.length > 0) {
            setAutocompletes(allWords.filter((word) => word.startsWith(value)));
        }
    }

    return (
        <div id='dictionaryDiv'>
            <h1>Dictionary</h1>
            <div id="searchInputDiv">
                <Typeahead
                    id="searchInput"
                    onInputChange={value => showAutocomplete(value)}
                    onChange={value => searchForWord(value)}
                    options={autocompletes}
                    placeholder="Choose a word..."
                />
            </div>
            {results}
        </div>
    );
}

export default DictionaryPage;