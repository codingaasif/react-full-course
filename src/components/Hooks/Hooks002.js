import React, { useEffect, useState } from "react";

function Hooks002(){
    const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log("useEffect")
    })

    return(
        <div className="App">
            <h1>useEffect in React </h1>
            <h1> {count} </h1>
            <button onClick={()=>setCount(count+1)}>Update Counter</button>
        </div>
    )
}


export default Hooks002;