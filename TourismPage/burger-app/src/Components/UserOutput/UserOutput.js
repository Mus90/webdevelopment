import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div class="UserOutput">
            <p> {props.userName} is Some random Text</p>
            <p>Some more random Text</p>
        </div>

    );
};
export default userOutput;
