//useMemo Hook

import React, { useState, useMemo } from "react";


function Hooks013(){
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(1)

    const Memorize = useMemo(function multicount(){
        console.log("multiCount")
        return count * 10
    },[count])

    // function multicount(){
    //     console.log("mutli count")
    //     return count * 10;
    // }

    return(
        <div className="App">
            <h1>useMemo Hook</h1>
            <h1>Count : {count}</h1>
            <h1>Item : {item}</h1>
            <h2>{Memorize}</h2>
            {/* <h2>{multicount()}</h2> */}
            <button onClick={()=> setCount(count + 1)}>Update Count</button>
            <br /> <br />
            <button onClick={()=> setItem(item * 5)}>Update Item</button>
        </div>
    )
}

export default Hooks013;