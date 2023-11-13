import React from "react";
import { useParams } from "react-router-dom";


function Router0002(){
    const params = useParams();
    const {name} = params;
    console.log(name)
    return (
        <div>
            <h1>This is {name}'s Page</h1>
        </div>
    )
}

export default Router0002;