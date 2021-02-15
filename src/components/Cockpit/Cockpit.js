import React from 'react';

const cockpit = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <button
                onClick={props.clicked}>Toggle persons
            </button>
        </div>
    );
};

export default cockpit;