import React from "react";

const Character = (props) => {
    //4. use es6 arrow functions
    const style = {
        display: "inline-block",
        padding: "16px", 
        textAlign: "center",
        margin: "16px",
        boder: "2px solid black"
      }
      //4. I defined the inline styles here
    
    return (
        //4. referering to the above style constant
        <div 
        style={style}
        onClick={props.clicked}
        >
        {props.character}
        </div>
    );
}

export default Character;

//4. created a character component