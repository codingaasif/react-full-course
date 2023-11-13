// useRef in React
//handle DOM using useRef

import React, { useRef, useState } from "react";

function Hooks014(){
    const [show,setShow] = useState(false)
    let inputRef = useRef(null)
    function handleInput(){
        setShow(!show)
        console.log("Handle Function")
        if(show === true){
            inputRef.current.value = "1000"
            inputRef.current.focus();
            inputRef.current.style.display ="none"
        }else{
            // inputRef.current.value = "1000"
            // inputRef.current.focus();
            inputRef.current.style.display ="inline-block"
        }
    }
    return (
        <div className="App">
            <h1>useRef in React</h1>
            <input type="text" ref={inputRef} />
            <button onClick={handleInput}>Handle Input</button>
        </div>
    )
}


export default Hooks014;