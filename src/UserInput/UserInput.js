import React from "react";

const userInput = (props) => {
const style = {
    backgroundColor: 'lightyellow',  
    alignItems: 'center',
    border: '1px solid blue',
};

    return (
        <div>
            <input type="text" onChange={props.onNameChange} value={props.oldVal} style={style}/>
        </div>
    );
}   

export default userInput;