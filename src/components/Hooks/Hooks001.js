import React from "react";
import { useState } from "react";


function Hooks001(){
    const [data, setData] = useState("Asif")
    return(
        <div className="App">
            <h1>Hooks</h1>
            <h1>{data}</h1>
            <button onClick={()=> setData("Prity")}>Update Name</button>
        </div>
    )
}

export default Hooks001;