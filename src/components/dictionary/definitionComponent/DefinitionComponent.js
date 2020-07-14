import React from 'react';

const DefinitionComponent = (props) => {
    const defObj = props.definitionObj;
    let counter = 1;
    let synonymsDiv = <div></div>;

    const highlightTextBetweenQuotes = (text) => {
        const split = text.split("'''");
        if (split.length === 3) {
            return <span>{split[0]}<strong>{split[1]}</strong>{split[2]}</span>
        }
        return <span>text</span>
    }

    const wordMeanings = defObj.definitions.map((def) => {
        const examples = def.examples.map((ex) => {
            return (
                <li>
                    <div className='sentence'>{highlightTextBetweenQuotes(ex.sentence)}</div>
                    <div className='trasnlation'>{highlightTextBetweenQuotes(ex.translation)}</div>
                </li>
            )
        });

        return (
            <div id='definitionDiv'>
                <p>{counter++}. {def.meaning}</p>
                <ul>
                    {examples}
                </ul>
            </div>
        )
    });

    if (defObj.synonyms != null) {
        const synonymsList = defObj.synonyms.map(sys => sys.word);
        const synonymsText = synonymsList.join('; ');
        synonymsDiv = (
            <div>
                <hr />
                <span><strong>Synonyms: </strong>{synonymsText}</span>
            </div>
        )
    }

    return (
        <div>
            {wordMeanings}
            {synonymsDiv}
        </div>
    );
}

export default DefinitionComponent;