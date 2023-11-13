import React from "react";
import './Component.css'



let data = "Asif"
function User_Click(){
    function apple(){
        data = "Noor"
        alert (data)
    }

    return (
        <div>
            <div className="App">
                <h1>{data}</h1>
                <button className="Text1" onClick={apple}> Click Me </button>
                <br/>
                <button className="Text1" onClick={()=> alert("Arrow Function")}> Arrow </button>
            </div>
        </div>
    )
}








export default User_Click;