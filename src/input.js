import React from "react";

function Input (props){

    //      <input onChange={(test) => setInput2(test.target.value)}></input>
    return <input onChange={(value)=>props.l(value)}></input>
}
export default Input; 