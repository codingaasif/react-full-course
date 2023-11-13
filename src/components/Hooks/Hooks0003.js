    // Hooks003
    
import React, { useEffect } from "react";

function Hooks0003(props){

    useEffect(()=>{
        console.log("UseEffect 0003")
    }, [props.count])

    return(
        <div className="App">
            <h1>useEffect in Special Condition</h1>
            <h1>Count Props: {props.count}</h1>
            <h1>Data Props: {props.data}</h1>
            
        </div>
    )
}


export default Hooks0003;