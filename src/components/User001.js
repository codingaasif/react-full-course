import React from "react";
import { useState } from "react";

function User001() {
    const [data, setData] = useState('Asif');
    // let data = "Asif";

    function updateData(){
        // data = "Noor"
        // alert(data)

        setData("Noor");
    }
        console.log(data)

    return(
        <div className="App">
            <h1> {data} </h1>
            <button onClick={updateData}>Update Data</button>
        </div>
    )
}




export default User001;