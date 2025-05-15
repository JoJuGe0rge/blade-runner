import React from 'react';
import './Person.css';

const person = (props) => {
    return (
    <div className='Person'>       
        <p> {props.name} came back after {props.years} years..!</p>  
        <p onClick={props.rewinder}> {props.children} </p>
        <input type="text" onChange={props.changed} value={props.name}/>        
    </div>
    );
}

export default person;
