//Lifting state up means send data child to parent Component

//parent Component
//data receive from child


import React from "react";
import Hooks0012 from "./Hooks0012";


function Hooks012(){
    
    function parent(data){
        console.log(data)

        alert(`Hello Child ${data.name}`)
     }

    return (
        <div className="App">
            <h1>Lifting state up</h1>
            <Hooks0012 alert= {parent}/>
        </div>
    )
}

export default Hooks012;