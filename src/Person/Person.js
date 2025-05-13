import React from 'react';

const person = (props) => {
    return (
    <div>
        <p> {props.name} came back after {props.years} years..!</p>  
        <p onClick={props.rewinder}> {props.children} </p>        
    </div>
    );
}

export default person;
