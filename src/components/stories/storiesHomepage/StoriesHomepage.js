
import React from 'react';
import { Table } from 'react-bootstrap';
import { SosrukoAndTotarash } from '../../../stories/SosrukoAndTotarash.js';
import { SosrukoAndTheGiant } from '../../../stories/SosrukoAndTheGiant.js';
import { TheBirthOfSosruko } from '../../../stories/TheBirthOfSosruko.js';
import { useHistory } from "react-router-dom";
import './StoriesHomepage.css';

const StoriesHomepage = () => {
    let history = useHistory();

    const stories = [
        TheBirthOfSosruko,
        SosrukoAndTheGiant,
        SosrukoAndTotarash
    ];

    const handleClick = (json) => {
        history.push({
            pathname: '/story',
            state: { storyJson: json }
        })
    }

    const RowWithLink = (props) => {
        return (
            <tr>
                <th onClick={() => handleClick(props.storyJson)}>{props.index}</th>
                <th onClick={() => handleClick(props.storyJson)}>{props.storyJson.adygheTitle}</th>
                <th onClick={() => handleClick(props.storyJson)}>{props.storyJson.englishTitle}</th>
                <th onClick={() => handleClick(props.storyJson)}>{props.storyJson.level}</th>
            </tr>
        )
    }

    const rowForStoriesWithLink = stories.map((story, index) => {
        return (
            <RowWithLink index={index} storyJson={story} />
        )
    });

    return (
        <div id='storyHomepageTable'>
            <Table hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Circassian Title</th>
                        <th>English Title</th>
                        <th>Level</th>
                    </tr>
                </thead>
                <tbody>
                    {rowForStoriesWithLink}
                </tbody>
            </Table>
        </div>
    )
};

export default StoriesHomepage
