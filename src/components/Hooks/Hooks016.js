//Controlled Component
// controlled input field through state in React is called controlled component


import React, { useState } from "react";

function Hooks016(){
    const [val, setVal] = useState("000")
    return(
        <div className="App">
            <h1>Controlled Component</h1>
            <input type="text" onChange={(e)=>setVal(e.target.value)}  value={val}/>
            <h3>Vlaue : {val} </h3>
            <button>Button</button>
        </div>
    )
}

export default Hooks016;