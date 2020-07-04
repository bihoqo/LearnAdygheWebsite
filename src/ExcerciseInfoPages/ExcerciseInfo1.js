import React from 'react';
import './ExcerciseInfo.css'


export default () => {
    return (
        <div className='excerciseDiv'>
            <p>In Adyghe, personal pronouns are only expressed in first person, second person.</p>
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
        </div>
    );
}