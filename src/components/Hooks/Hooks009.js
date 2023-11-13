//Reuse Component with List

import React from "react";
import Hooks0009 from "./Hooks0009";


function Hooks009(){

    const users = [
        {
            name: "Asif", email: "asif@gmail.com", contact: 12345
        },
        {
            name: "Prity", email: "prity@gmail.com", contact: 98765
        },
        {
            name: "Rahul", email: "rahul@gmail.com", contact: 29812
        },
        {
            name: "Kamal", email: "kamal@gmail.com", contact: 76543
        }
    ]
    return(
        <div className="App">
            <h1>Reuse Component with List</h1>

            {
                users.map((item)=>
                <Hooks0009 data= {item}/>
                )
            }
        </div>
    )
}

export default Hooks009;