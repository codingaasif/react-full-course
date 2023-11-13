//forwardRef in React

import React, { useRef } from "react";
import Hooks0015 from "./Hooks0015";

function Hooks015(){

    let inputRef = useRef(null)
    function updateInput(){
        console.log("update input")
        inputRef.current.value = "1000"
        inputRef.current.style.color = "red"
        inputRef.current.focus();
    }

    return (
        <div className="App">
            <h1>forwardRef in React</h1>
            <Hooks0015 ref = {inputRef}/>
            <br/>
            <button onClick={updateInput}>Update InputBOx</button>
        </div>
    )
}

export default Hooks015;