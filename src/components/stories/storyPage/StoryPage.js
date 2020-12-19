
import React from 'react';
import './StoryPage.css';

const StoryPage = (props) => {

    console.log(props.location.state.storyJson);
    const paragraphs = props.location.state.storyJson.content.map((paragraph) => {
        return (
            <tr>
                <div class="grid-container">
                    <div class="grid-item">{paragraph.adyghe}</div>
                    <div class="grid-item">{paragraph.english}</div>
                </div>
            </tr>
        );
    });

    return (
        <div>
            <div id='storyTitle'>
                <h3>{props.location.state.storyJson.adygheTitle}</h3>
                <h4>{props.location.state.storyJson.englishTitle}</h4>
            </div>
            {paragraphs}
        </div>
    )
};

export default StoryPage