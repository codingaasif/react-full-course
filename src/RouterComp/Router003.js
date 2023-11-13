//useSearchParams Router Hook

import React from "react";
import Router0003 from "./Router0003";
import { useSearchParams } from "react-router-dom";

function Router003(){
    const [searchParams, setSearchParams] = useSearchParams();
    // console.warn(searchParams.get('age'))
    // console.log(searchParams.get('city'))

    // const age = searchParams.get('age')
    // const city = searchParams.get('city')

    return(
        <div className="App">
            <h1>Filter Page</h1>
            <Router0003 />
    
            {/* <h3>Age is : {age}</h3>
            <h3>City is : {city}</h3>*/}

            <input type="text" onChange={(e)=> setSearchParams({text : e.target.value, age: 20})} placeholder="Set Text in Query Params" />
            <button onClick={()=> setSearchParams({age: 30})}>Set Age in Query Params</button>
           
           
        </div>
    )
}

export default Router003;


// lecture 54