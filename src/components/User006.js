import React from "react";
// import { useState } from "react";




function User006(){
    const[status, setStatus] = React.useState(false)
    return(
        <div className="App">
            <h1>Show And Hide</h1>
        {
            status? <h1> Hello World ! </h1> : null
        }
            <button onClick={()=> setStatus(true)}>Show</button>
            <br />
            <button onClick={()=> setStatus(false)}>Hide</button>
            <br />
            <button onClick={()=> setStatus(!status)}>Toggle</button>
        </div>
    )
}


export default User006;