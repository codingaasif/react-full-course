import React, { useState } from "react";


function User008(){
    const [logedIn, setLogedIn] = useState(false)

    if(logedIn){
        return(
            <div className="App">
                <h1> Welcome Asif </h1>
            </div>
        )
    }else if(!logedIn){
        return(
            <div className="App">
                <h1>Welcome again</h1>
            </div>
        )
    }else{
        return(
            <div className="App">
                <h1> Welcome Guest 2</h1>
            </div>
        )
    }
    
}


export default User008;