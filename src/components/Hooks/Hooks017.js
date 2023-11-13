//Uncontrolled Component
//controlled input field through javascript and useRef is called Uncontrolled component


import React, { useRef } from "react";

function Hooks017(){
    let inputRef = useRef(null)
    let inputRef2 = useRef(null)

    function controlledForm(e){
        e.preventDefault();
        console.log("input-1", inputRef.current.value)
        console.log("input-2", inputRef2.current.value)

        let input3 = document.getElementById('input-3').value
        console.log("input-3", input3);
    }
    return (
        <div className="App">
            <h1>Uncontrolled Component</h1>
            <form onSubmit={controlledForm}>
                <input type="text" ref={inputRef} />
                <br/><br/>
                <input type="text" ref={inputRef2} />
                <br/><br/>
                <input type="text" id="input-3" />
                <br/><br/>
                <button >Submit</button>
            </form>
        </div>
    )
}

export default Hooks017;