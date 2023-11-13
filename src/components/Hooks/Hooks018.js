//HOC (Higher Order Component)

//higher-order component is a function that takes a component as an argument and returns a new component that wraps the original component

import React, { useState } from "react";

function Hooks018(){
    return (
        <div className="App">
            <h1>Higher Order Component</h1>
            <HOCRed comp = {Counter}/>
            <HOCGreen comp = {Counter} />
            <HOCBlue comp = {Counter} />
        </div>
    )
}


function HOCRed(props){
    return (
        <div>
            <h2 style={{color: "red"}}>Red<props.comp/></h2>
        </div>
    )
}

function HOCGreen(props){
    return (
        <div>
            <h2 style={{color: "green"}}>Green<props.comp/></h2>
        </div>
    )
}

function HOCBlue(props){
    return (
        <div>
            <h2 style={{color: "blue"}}>Blue<props.comp/></h2>
        </div>
    )
}



function Counter(){
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={()=>setCount(count + 1)}> Update </button>
        </div>
    )
}

export default Hooks018;