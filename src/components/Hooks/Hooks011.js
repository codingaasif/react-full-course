//Lifting state up means send data child to parent Component

//parent Component


import React from "react";
import Hooks0011 from "./Hooks0011";


function Hooks011(){

    let data = "Asif"

    return (
        <div className="App">
            <h1>Lifting state up</h1>
            <Hooks0011 name= {data}/>
        </div>
    )
}

export default Hooks011;