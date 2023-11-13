import React from "react";
import { useLocation } from "react-router-dom";

function Router0006(){
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <h1>Child useLocation</h1>
            <p>This is Child useLocation Here you want to learn useLocation Router Hooks</p>
        </div>
    )
}

export default Router0006;