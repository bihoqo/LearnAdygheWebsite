import React from 'react';
import './Lesson.css'

export default () => {
    return (
        <div className='excerciseDiv'>
            <p>This is second excercise.</p>
            <table>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                </tr>
                <tr>
                    <td>Jill</td>
                    <td>Smith</td>
                    <td>50</td>
                </tr>
            </table>
            <table>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                </tr>
                <tr>
                    <td>Jill 2</td>
                    <td>Smith 2</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>Jill 3</td>
                    <td>Smith 3</td>
                    <td>100</td>
                </tr>
            </table>
        </div>
    );
}