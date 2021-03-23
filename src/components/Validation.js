import React from "react";

const validation = (props) => {
    // 3. first setup the varaible using let,
    // to display the message
    //3. also use es6 arrow functions
    let validationMessage = "Text long enough";

    // Now setup the if statement giving us 
    // the alternative message
    if (props.inputLength <=5) {
        validationMessage = "Text too short";
    }

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    );
}

export default validation;

// 2. setting up the new component which will
// receive the text length as a prop
