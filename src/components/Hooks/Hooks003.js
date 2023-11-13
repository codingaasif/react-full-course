import React, { useEffect, useState } from "react";
import Hooks0003 from "./Hooks0003";


function Hooks003(){
    const [data, setData] = useState(0)
    const [count, setCount] = useState(100)

    useEffect(()=>{
        console.log("UseEffect data")
    },[data])

    useEffect(()=>{
    console.log("UseEffect count")
},[count])

    return(
        <div className="App">
            <h1>useEffect in Special Condition</h1>
            <Hooks0003 count= {count} data= {data}/>
            <h1>Count : {count}</h1>
            <h1>Data : {data}</h1>
            <button onClick={()=> setCount(count+1)}>Update Counter</button>
            <br/> <br/>
            <button onClick={()=> setData(data+1)}>Update Data</button>
        </div>
    )
}


export default Hooks003;