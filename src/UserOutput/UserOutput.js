import React from "react";
import './UserOutput.css';
import logo from '../logo.svg';
import '../Logo styles/App-logo.css';

const userOutput = (props) => {
    return (
        <div className= "UserOutput">
            <p>My name is {props.userName}</p>
            <p>I am 10 years old</p>
            <img src={logo} alt="logo" className="App-logo" />
        </div>
    );
}   

export default userOutput;